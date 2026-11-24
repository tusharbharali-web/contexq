// Checks the chatbot knowledge base against the live site source.
//   Errors (exit 1): missing front matter fields, a url that is not a real page.
//   Warnings: numbers, emails, phone numbers and links in the knowledge base that do not
//   appear anywhere in the site's source, i.e. facts the website does not state.
// Usage: npm run kb:check   (also runs before every build; warnings do not fail the build)
import fs from "node:fs";
import path from "node:path";
import { loadDocs, ROOT, REQUIRED } from "./kb-lib.mjs";

const SOURCE_DIRS = ["src/app", "src/views", "src/components", "src/data/team.ts", "src/data/coin-slices.json", "content/customers"];
const IGNORE = [/src\/lib\/rag/, /kb\.generated\.json$/, /\.(png|jpe?g|gif|webp|svg|glb|gltf|mp4|woff2?|ico)$/i];

function collect(p, out = []) {
  const abs = path.join(ROOT, p);
  if (!fs.existsSync(abs)) return out;
  const st = fs.statSync(abs);
  if (st.isDirectory()) {
    for (const e of fs.readdirSync(abs)) collect(path.join(p, e), out);
  } else if (!IGNORE.some((r) => r.test(p))) {
    out.push(fs.readFileSync(abs, "utf8"));
  }
  return out;
}

// Site text, with HTML entities and whitespace normalised so wording matches across JSX/strings.
const site = collect(SOURCE_DIRS[0])
  .concat(...SOURCE_DIRS.slice(1).map((d) => collect(d)))
  .join("\n")
  .replace(/&nbsp;| /g, " ")
  .replace(/&amp;/g, "&")
  .replace(/\\u2019|&rsquo;/g, "’");
const siteLower = site.toLowerCase();
const siteDigits = site.replace(/[\s,]/g, "");

// Real routes: static page folders, plus item pages whose slug appears in the site source.
function staticRoutes(dir = path.join(ROOT, "src/app"), base = "") {
  const routes = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name.startsWith("[") || e.name === "api") continue;
    const sub = path.join(dir, e.name);
    const route = `${base}/${e.name}`;
    if (fs.existsSync(path.join(sub, "page.tsx"))) routes.push(route);
    routes.push(...staticRoutes(sub, route));
  }
  return routes;
}
const routes = new Set(["/", ...staticRoutes()]);
const ITEM_ROUTE = /^\/Ecosystem\/(awards|blogs|press-releases)\/([a-z0-9-]+)$/;
function isRealUrl(url) {
  const clean = url.split(/[?#]/)[0];
  if (routes.has(clean)) return true;
  const m = clean.match(ITEM_ROUTE);
  return Boolean(m && site.includes(m[2]));
}

const docs = loadDocs();
let errors = 0;
let warnings = 0;
const err = (d, msg) => { errors++; console.log(`  ERROR  ${d.file}: ${msg}`); };
const warn = (d, msg) => { warnings++; console.log(`  warn   ${d.file}: ${msg}`); };

for (const d of docs) {
  if (!d.hasFrontMatter) err(d, "no front matter");
  for (const k of REQUIRED) if (!d.meta[k]) err(d, `missing "${k}"`);
  if (d.meta.url && !isRealUrl(d.meta.url)) err(d, `url ${d.meta.url} is not a page on the site`);

  const body = d.body;
  // Internal links written in the body must also be real pages.
  for (const [, link] of body.matchAll(/\]\((\/[^)\s]*)\)/g)) if (!isRealUrl(link)) warn(d, `link ${link} is not a page on the site`);
  for (const e of new Set(body.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g) || [])) if (!siteLower.includes(e.toLowerCase())) warn(d, `email ${e} not found on the site`);
  for (const u of new Set(body.match(/https?:\/\/[^\s)>\]]+/g) || [])) if (!site.includes(u.replace(/[.,;]+$/, ""))) warn(d, `link ${u} not found on the site`);
  // Numbers with 2+ digits, decimals, percentages and money: these are the facts most often invented.
  for (const n of new Set(body.match(/[$€£]?\d[\d,]*(?:\.\d+)?\s?%?/g) || [])) {
    const digits = n.replace(/[\s,$€£%]/g, "");
    if (digits.replace(".", "").length < 2) continue;
    if (!siteDigits.includes(digits)) warn(d, `figure "${n.trim()}" not found on the site`);
  }
}

// Every live page should be covered by at least one knowledge base file.
const covered = new Set(docs.map((d) => (d.meta.url || "").split(/[?#]/)[0]));
const SKIP = new Set(["/Platform", "/solutions", "/Industries"]); // redirects / placeholders
for (const r of routes) if (!SKIP.has(r) && !covered.has(r)) { warnings++; console.log(`  warn   page ${r} has no knowledge base file`); }

console.log(`[kb] Checked ${docs.length} files: ${errors} error(s), ${warnings} warning(s).`);
process.exit(errors ? 1 : 0);
