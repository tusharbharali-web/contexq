// Search accuracy test for the chatbot (free: no model calls).
// For each question in scripts/kb-tests.json, checks whether a section containing the
// expected text is among the TOP_K sections the bot would send to the model.
// Usage: npm run kb:eval            (add --verbose to list every miss in detail)
import { createJiti } from "jiti";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url);
const { searchKnowledge, TOP_K, MIN_SCORE, MIN_COVERAGE } = await jiti.import(path.join(ROOT, "src/lib/rag/search.ts"));
const { answerWithoutModel } = await jiti.import(path.join(ROOT, "src/lib/rag/intents.ts"));
const tests = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/kb-tests.json"), "utf8"));
const verbose = process.argv.includes("--verbose");
const K = Number(process.env.K) || TOP_K;

const norm = (s) => s.replace(/\*\*/g, "").replace(/\s+/g, " ").toLowerCase();
let hits = 0;
let docHits = 0;
let belowThreshold = 0;
let available = 0;
let intentHandled = 0;
const weak = [];
// "Answer available": most key words of the expected fact appear in the sections sent.
const keyWords = (s) => norm(s).replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 3);
const misses = [];

for (const t of tests) {
  const { hits: results, coverage } = searchKnowledge(t.q, undefined, K);
  if (answerWithoutModel(t.q)) intentHandled++;
  const want = norm(t.mustContain);
  const found = results.some((r) => norm(r.chunk.text).includes(want) || norm(`${r.chunk.section} ${r.chunk.text}`).includes(want));
  const docFound = results.some((r) => r.chunk.doc === t.doc);
  if (found) hits++;
  const sent = norm(results.map((r) => `${r.chunk.section} ${r.chunk.text}`).join(" "));
  const kw = keyWords(t.mustContain);
  const avail = found || (kw.length > 0 && kw.filter((w) => sent.includes(w)).length / kw.length >= 0.7);
  if (avail) available++;
  if (docFound) docHits++;
  if (!results.length || results[0].score < MIN_SCORE || coverage < MIN_COVERAGE) {
    belowThreshold++;
    weak.push(`${t.q} (coverage ${Math.round(coverage * 100)}%)`);
  }
  if (!found) misses.push({ t, results });
}

const pct = (n) => `${((n / tests.length) * 100).toFixed(1)}%`;
console.log(`Search test: ${tests.length} questions, top ${K} sections each`);
console.log(`  Exact section found:  ${hits}/${tests.length} (${pct(hits)})`);
console.log(`  Answer available:     ${available}/${tests.length} (${pct(available)})  <- key words of the expected fact are in what the bot receives`);
console.log(`  Right page found:     ${docHits}/${tests.length} (${pct(docHits)})`);
console.log(`  Treated as off-topic (team offered, no model call): ${belowThreshold}${weak.length ? `  -> ${weak.join('; ')}` : ''}`);
console.log(`  Answered by a fixed reply instead (greeting/meeting/pricing etc.): ${intentHandled}`);
if (misses.length) {
  console.log(`\nMisses:`);
  for (const { t, results } of misses) {
    console.log(`  - "${t.q}"  (want ${t.doc}: "${t.mustContain}")`);
    if (verbose) for (const r of results) console.log(`      ${r.score.toFixed(1)}  ${r.chunk.doc} | ${r.chunk.section}`);
  }
}
