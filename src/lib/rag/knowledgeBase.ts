import kb from './kb.generated.json';

/**
 * The chatbot knowledge base, packaged from knowledge-base/**\/*.md at build time by
 * scripts/build-kb.mjs: whole-page metadata (docs) and small labelled sections (chunks,
 * ~200 tokens each). Edit the markdown files, never the generated JSON.
 * (No 'server-only' import here so the offline search test script can load it too;
 * it is only imported by server code.)
 */
export interface KnowledgeDoc {
  id: string;
  title: string;
  url: string;
  category: string;
  status: string;
}

export interface KnowledgeChunk {
  id: string;
  /** Heading section this piece belongs to (pieces of one section share it). */
  group: string;
  /** Position of this piece within its section (0 = first). */
  part: number;
  doc: string;
  title: string;
  section: string;
  url: string;
  category: string;
  status: string;
  text: string;
}

const data = kb as { docs: KnowledgeDoc[]; chunks: KnowledgeChunk[] };

export const KNOWLEDGE_DOCS: KnowledgeDoc[] = data.docs;
export const KNOWLEDGE_CHUNKS: KnowledgeChunk[] = data.chunks;

const CHUNKS_BY_ID = new Map(KNOWLEDGE_CHUNKS.map((c) => [c.id, c]));
export const getChunk = (id: string) => CHUNKS_BY_ID.get(id);
