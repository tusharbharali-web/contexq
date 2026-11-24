// Answer accuracy test for the chatbot (USES GROQ FREE-TIER TOKENS: ~2,000 per question,
// ~120,000 for the full 60-question set, about 60% of one model's daily allowance).
// Sends each question in scripts/kb-tests.json to the running site's /api/chat, paced to
// stay under the free per-minute limit, and checks whether the answer is grounded in the
// expected page (cites it, or contains the key words of the expected text).
//
// Usage: start the site (npm run build && npm start), then:
//   npm run kb:eval-answers                 (all questions)
//   npm run kb:eval-answers -- --limit 10   (first 10 only)
//   BASE_URL=https://your-site npm run kb:eval-answers
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE_URL || "http://localhost:3000";
const PACE_MS = 21_000; // ~3 questions a minute (8,000 tokens/min free limit)
const limitArg = process.argv.indexOf("--limit");
const all = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/kb-tests.json"), "utf8"));
const tests = limitArg > -1 ? all.slice(0, Number(process.argv[limitArg + 1])) : all;
const docs = JSON.parse(fs.readFileSync(path.join(ROOT, "src/lib/rag/kb.generated.json"), "utf8")).docs;
const urlOf = Object.fromEntries(docs.map((d) => [d.id, d.url]));

const words = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 3);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let good = 0;
let busy = 0;
const rows = [];
console.log(`Answer test: ${tests.length} questions against ${BASE}/api/chat (about ${Math.ceil((tests.length * PACE_MS) / 60000)} min)\n`);

for (const [i, t] of tests.entries()) {
  const started = Date.now();
  let data;
  try {
    const res = await fetch(`${BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": `10.9.${i}.1` },
      body: JSON.stringify({ message: t.q, history: [] }),
    });
    data = await res.json();
  } catch (e) {
    data = { message: `ERROR ${e.message}` };
  }
  const answer = data.message || "";
  const cited = (data.sources || []).some((s) => s.url === urlOf[t.doc]);
  const keyWords = words(t.mustContain);
  const overlap = keyWords.length ? keyWords.filter((w) => answer.toLowerCase().includes(w)).length / keyWords.length : 0;
  const isBusy = /not able to provide the information at the moment/i.test(answer);
  const ok = !isBusy && (cited || overlap >= 0.5);
  if (ok) good++;
  if (isBusy) busy++;
  rows.push({ q: t.q, ok, cited, overlap: Math.round(overlap * 100), answer: answer.slice(0, 220).replace(/\s+/g, " ") });
  console.log(`${String(i + 1).padStart(2)}. ${ok ? "PASS" : isBusy ? "BUSY" : "FAIL"}  ${t.q}`);
  if (!ok) console.log(`      expected ${t.doc}: "${t.mustContain}"\n      got: ${answer.slice(0, 200).replace(/\s+/g, " ")}`);
  if (i < tests.length - 1) await sleep(Math.max(0, PACE_MS - (Date.now() - started)));
}

const scored = tests.length - busy;
console.log(`\nGrounded answers: ${good}/${scored} (${scored ? ((good / scored) * 100).toFixed(1) : 0}%)${busy ? `, ${busy} not answered because the free limit was reached` : ""}`);
fs.writeFileSync(path.join(ROOT, "scripts/kb-answers-report.json"), JSON.stringify(rows, null, 2));
console.log("Full report: scripts/kb-answers-report.json");
