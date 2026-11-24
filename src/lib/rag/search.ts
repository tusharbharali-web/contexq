import MiniSearch from 'minisearch';
import { KNOWLEDGE_CHUNKS, type KnowledgeChunk } from './knowledgeBase';
import { expandQuery } from './synonyms';

/**
 * Keyword search over the knowledge base sections (MiniSearch, free, runs in our own
 * server, uses no model tokens). Built once per server instance on first use (~50 ms).
 *  - matches in the page title and section heading count more than body text
 *  - small typos (fuzzy) and partial words (prefix) still match
 *  - site-specific synonyms are added to the query (synonyms.ts)
 */

export const TOP_K = 4; // sections sent to the model (together at most ~1,100 tokens)

/** Below this score the bot answers without calling the model (offers the team instead). */
export const MIN_SCORE = 6;

/**
 * Share of the visitor's own words that must be found in the knowledge base. Below it the
 * question is treated as off-topic (e.g. "weather in Paris tomorrow" only matches the
 * "Hello Tomorrow" award) and the model is not called.
 */
export const MIN_COVERAGE = 0.4;

const SYNONYM_WEIGHT = 0.35;
const OVERVIEW_WEIGHT = 0.6;

const STOP = new Set(
  'a an and are as at be but by can could do does did for from had has have how i if in into is it its me my of on or our please so that the their them then there these they this to us was we what when where which who why will with would you your tell about know more show give any some'.split(' ')
);

/** Light English stemmer so "flagged", "flags" and "flag" match each other. */
export function stem(word: string): string {
  let w = word;
  if (w.length <= 4) return w;
  if (w.endsWith('ies') && w.length > 5) return w.slice(0, -3) + 'y';
  for (const suf of ['ational', 'ization', 'isation', 'fulness', 'ments', 'ment', 'ingly', 'edly', 'ing', 'ed', 'ly', 'es', 's']) {
    if (w.endsWith(suf) && w.length - suf.length >= 4) {
      w = w.slice(0, -suf.length);
      break;
    }
  }
  return w;
}

const processTerm = (term: string) => {
  const t = term.toLowerCase();
  return t.length < 2 || STOP.has(t) ? null : stem(t);
};

let index: MiniSearch<KnowledgeChunk> | null = null;

function getIndex() {
  if (index) return index;
  index = new MiniSearch<KnowledgeChunk>({
    fields: ['title', 'section', 'text'],
    storeFields: ['section'],
    processTerm,
    searchOptions: {
      boost: { title: 2, section: 3, text: 1 },
      fuzzy: (term) => (term.length > 5 ? 0.2 : false),
      prefix: (term) => term.length > 3,
      combineWith: 'OR',
    },
  });
  index.addAll(KNOWLEDGE_CHUNKS);
  return index;
}

export interface SearchResult {
  hits: SearchHit[];
  /** Share (0-1) of the visitor's own words found in the knowledge base. */
  coverage: number;
}

export interface SearchHit {
  /** The section sent to the model: its best-matching piece plus neighbouring pieces. */
  chunk: KnowledgeChunk;
  score: number;
}

const BY_ID = new Map(KNOWLEDGE_CHUNKS.map((c) => [c.id, c]));
const BY_GROUP = new Map<string, KnowledgeChunk[]>();
for (const c of KNOWLEDGE_CHUNKS) {
  const list = BY_GROUP.get(c.group) || [];
  list.push(c);
  BY_GROUP.set(c.group, list);
}
for (const list of BY_GROUP.values()) list.sort((a, b) => a.part - b.part);

/** One section may send up to ~350 tokens; all sections together up to ~1,100 tokens. */
const SECTION_MAX_CHARS = 1400;
const CONTEXT_MAX_CHARS = 4400;
const MAX_SECTIONS_PER_PAGE = 2;

/** Best piece first, then its neighbours (next, previous, ...) while they fit. */
function sectionText(group: KnowledgeChunk[], best: KnowledgeChunk, room: number): string {
  const limit = Math.min(SECTION_MAX_CHARS, room);
  const chosen = new Set([best.part]);
  let size = best.text.length;
  for (let step = 1; step < group.length; step++) {
    for (const part of [best.part + step, best.part - step]) {
      const piece = group.find((g) => g.part === part);
      if (piece && size + piece.text.length <= limit) {
        chosen.add(part);
        size += piece.text.length;
      }
    }
  }
  return group
    .filter((g) => chosen.has(g.part))
    .map((g) => g.text)
    .join('\n');
}

/**
 * Finds the best sections for a question. Pieces are scored individually, then grouped by
 * heading section, so the model gets the whole relevant part of a page, not a fragment.
 * `previous` is the visitor's previous question, added for short follow-ups
 * ("tell me more", "who founded it?").
 */
export function searchKnowledge(question: string, previous?: string, k = TOP_K): SearchResult {
  const isFollowUp =
    !!previous && (question.split(/\s+/).length <= 6 || /\b(it|they|them|this|that|those|more|else|also)\b/i.test(question));
  const base = isFollowUp ? `${question} ${previous}` : question;
  // The visitor's own words count fully; synonym words count less.
  const ownTerms = new Set(base.split(/[^\p{L}\p{N}-]+/u).map((w) => processTerm(w)).filter(Boolean) as string[]);
  const query = `${base} ${expandQuery(base)}`.trim();

  const results = getIndex().search(query, {
    boostTerm: (term) => (ownTerms.has(term) ? 1 : SYNONYM_WEIGHT),
    // Each page's general summary ("Overview") is useful but should not outrank specific sections.
    boostDocument: (_id, _term, stored) => (stored?.section === 'Overview' ? OVERVIEW_WEIGHT : 1),
  });

  // Which of the visitor's own words were found anywhere (exact, typo or prefix match)?
  const matchedOwn = new Set<string>();
  for (const r of results.slice(0, 30)) for (const t of r.queryTerms) if (ownTerms.has(t)) matchedOwn.add(t);
  const coverage = ownTerms.size ? matchedOwn.size / ownTerms.size : 0;

  // Score each heading section: its best piece, plus a little for other matching pieces.
  const groups = new Map<string, { score: number; best: KnowledgeChunk }>();
  for (const r of results) {
    const chunk = BY_ID.get(String(r.id));
    if (!chunk) continue;
    const g = groups.get(chunk.group);
    if (!g) groups.set(chunk.group, { score: r.score, best: chunk });
    else g.score += r.score * 0.25;
  }

  const ranked = [...groups.values()].sort((a, b) => b.score - a.score);
  const hits: SearchHit[] = [];
  const perDoc = new Map<string, number>();
  let used = 0;
  for (const { score, best } of ranked) {
    // At most 2 sections from the same page, so one long page cannot crowd out the rest.
    const n = perDoc.get(best.doc) || 0;
    if (n >= MAX_SECTIONS_PER_PAGE) continue;
    const room = CONTEXT_MAX_CHARS - used;
    if (room < 300) break;
    const text = sectionText(BY_GROUP.get(best.group) || [best], best, room);
    perDoc.set(best.doc, n + 1);
    used += text.length;
    hits.push({ chunk: { ...best, text }, score });
    if (hits.length >= k) break;
  }
  return { hits, coverage };
}
