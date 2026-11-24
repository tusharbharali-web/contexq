// Packages knowledge-base/**/*.md into src/lib/rag/kb.generated.json for the chatbot.
// Runs automatically before `npm run dev` and `npm run build`.
//
// Free-tier design (Groq): the bot never sends the whole knowledge base. Each file is cut
// into small labelled sections (~200 tokens, max ~300) so only the few that match a
// question are sent to the model.
//   - split at every ## / ### heading (one FAQ answer, one award, one scenario per section)
//   - long sections are split at paragraph breaks, carrying one sentence of overlap
//   - tiny sections (< ~50 tokens) are merged into the next section of the same file
//   - every section is labelled "Page title > Heading" and carries its page url
import fs from "node:fs";
import { loadDocs, OUT_FILE } from "./kb-lib.mjs";

export const CHARS_PER_TOKEN = 4;
const TARGET_CHARS = 200 * CHARS_PER_TOKEN; // ~200 tokens
const MAX_CHARS = 300 * CHARS_PER_TOKEN; // ~300 tokens
const MIN_CHARS = 50 * CHARS_PER_TOKEN; // ~50 tokens

const clean = (s) =>
  s
    .replace(/\*\*(.*?)\*\*/g, "$1") // bold markers cost tokens and add nothing for search
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

/** Splits one markdown body into heading sections: { heading, text }. */
function headingSections(body) {
  const sections = [];
  let h2 = "";
  let current = { heading: "", lines: [] };
  const flush = () => {
    const text = clean(current.lines.join("\n"));
    if (text) sections.push({ heading: current.heading, text });
  };
  for (const line of body.split("\n")) {
    const m = line.match(/^(#{1,4})\s+(.*)$/);
    if (m) {
      flush();
      const level = m[1].length;
      const title = m[2].replace(/\*\*/g, "").trim();
      if (level === 1) current = { heading: "", lines: [] };
      else if (level === 2) {
        h2 = title;
        current = { heading: title, lines: [] };
      } else current = { heading: h2 ? `${h2} > ${title}` : title, lines: [] };
      continue;
    }
    current.lines.push(line);
  }
  flush();
  return sections;
}

const lastSentence = (s) => {
  const parts = s.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+/);
  const last = parts[parts.length - 1] || "";
  return last.length < 200 ? last : "";
};

/** Cuts a long section at paragraph (or list-item) breaks into ~TARGET_CHARS pieces. */
function splitLong(text) {
  if (text.length <= MAX_CHARS) return [text];
  const blocks = text.split(/\n\n+|\n(?=[-*] |\d+\. )/).map((b) => b.trim()).filter(Boolean);
  const pieces = [];
  let buf = "";
  for (const block of blocks) {
    // Markdown tables are cut into row groups, each repeating the header row.
    if (/^\|/.test(block) && block.length > MAX_CHARS) {
      if (buf) pieces.push(buf);
      buf = "";
      const rows = block.split("\n");
      const head = rows.slice(0, 2).join("\n");
      let group = [];
      for (const row of rows.slice(2)) {
        if (group.length && head.length + group.join("\n").length + row.length > TARGET_CHARS) {
          pieces.push(`${head}\n${group.join("\n")}`);
          group = [];
        }
        group.push(row);
      }
      if (group.length) pieces.push(`${head}\n${group.join("\n")}`);
      continue;
    }
    // A single very long block is cut at sentence breaks.
    const units = block.length > MAX_CHARS ? block.split(/(?<=[.!?])\s+/) : [block];
    for (const unit of units) {
      if (buf && buf.length + unit.length + 2 > TARGET_CHARS) {
        pieces.push(buf);
        const overlap = lastSentence(buf);
        buf = overlap ? `${overlap}\n${unit}` : unit;
      } else {
        buf = buf ? `${buf}\n${unit}` : unit;
      }
    }
  }
  if (buf) pieces.push(buf);
  return pieces;
}

const docs = loadDocs().map((d) => ({
  id: d.id,
  title: d.meta.title || d.id,
  url: d.meta.url || "/",
  category: d.meta.category || "General",
  status: d.meta.status || "live",
}));

const loaded = loadDocs();
const chunks = [];
let groupCount = 0;
for (const [i, d] of loaded.entries()) {
  const doc = docs[i];
  // Merge tiny sections into the next one of the same file.
  const merged = [];
  let carry = null;
  for (const s of headingSections(d.body)) {
    const sec = carry
      ? {
          heading: carry.heading || s.heading,
          // keep the next heading visible inside the merged text
          text: `${carry.text}\n\n${s.heading && s.heading !== carry.heading ? `${s.heading.split(" > ").pop()}:\n` : ""}${s.text}`,
        }
      : s;
    if (sec.text.length < MIN_CHARS) carry = sec;
    else {
      merged.push(sec);
      carry = null;
    }
  }
  if (carry) {
    if (merged.length) merged[merged.length - 1].text += `\n\n${carry.text}`;
    else merged.push(carry);
  }

  for (const s of merged) {
    // All pieces of one heading section share a group, so search can send them together.
    const group = `g${++groupCount}`;
    for (const [part, piece] of splitLong(s.text).entries()) {
      chunks.push({
        id: `s${chunks.length + 1}`,
        group,
        part,
        doc: doc.id,
        title: doc.title,
        section: s.heading || "Overview",
        url: doc.url,
        category: doc.category,
        status: doc.status,
        text: piece,
      });
    }
  }
}

if (chunks.length === 0) {
  console.error("[kb] No sections found in knowledge-base/. The chatbot would have nothing to answer from.");
  process.exit(1);
}

fs.writeFileSync(OUT_FILE, JSON.stringify({ builtAt: new Date().toISOString(), docs, chunks }));
const tokens = chunks.map((c) => Math.ceil((c.title.length + c.section.length + c.text.length) / CHARS_PER_TOKEN));
const avg = Math.round(tokens.reduce((a, b) => a + b, 0) / tokens.length);
console.log(
  `[kb] Packaged ${docs.length} documents as ${chunks.length} sections (avg ~${avg} tokens, max ~${Math.max(...tokens)}) -> src/lib/rag/kb.generated.json`
);
