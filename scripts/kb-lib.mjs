// Shared helpers for the chatbot knowledge base scripts (build-kb, check-kb).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const KB_DIR = path.join(ROOT, "knowledge-base");
export const OUT_FILE = path.join(ROOT, "src/lib/rag/kb.generated.json");
export const REQUIRED = ["title", "url", "category", "status", "source", "updated"];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith(".md") ? [p] : [];
  });
}

/** Parses the simple `key: value` front matter used by every knowledge base file. */
export function parseDoc(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const rel = path.relative(KB_DIR, file).split(path.sep).join("/");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  if (m) {
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
  return {
    id: rel.replace(/\.md$/, ""),
    file: rel,
    hasFrontMatter: Boolean(m),
    meta,
    body: (m ? m[2] : raw).trim(),
  };
}

export function loadDocs() {
  if (!fs.existsSync(KB_DIR)) return [];
  return walk(KB_DIR)
    .sort((a, b) => a.localeCompare(b))
    .map(parseDoc);
}
