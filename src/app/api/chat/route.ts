import { NextResponse } from 'next/server';
import { generateAnswer, type HistoryTurn } from '../../../lib/rag/generator';

// Server-only route: the Groq key is read on the server from process.env and never reaches the browser.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Free-tier budget (Groq): short questions, only the last exchange, and a per-visitor
// limit so one person cannot use up the shared daily allowance.
const MAX_MESSAGE_CHARS = 400;
const MAX_HISTORY_TURNS = 2;
const MAX_HISTORY_CHARS = 600;
const RATE_LIMIT = 10; // messages per visitor per window
const RATE_WINDOW_MS = 60_000;

// Best-effort per-instance limiter. Serverless instances do not share memory, so this
// stops casual abuse; a shared store (e.g. Upstash) is needed for a hard global limit.
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

function reply(message: string, status: number, needsHumanHandover = false) {
  return NextResponse.json({ message, needsHumanHandover }, { status });
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown';
  if (rateLimited(ip)) {
    return reply('You are sending messages too quickly. Please wait a minute and try again.', 429);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return reply('Invalid request.', 400);
  }

  const { message, history } = (body ?? {}) as { message?: unknown; history?: unknown };
  if (typeof message !== 'string' || !message.trim()) {
    return reply('Please type a question.', 400);
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return reply(`Please keep your question under ${MAX_MESSAGE_CHARS} characters.`, 400);
  }

  const turns: HistoryTurn[] = Array.isArray(history)
    ? history
        .filter(
          (h): h is { role: 'user' | 'assistant'; content: string } =>
            !!h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string' && h.content.trim() !== ''
        )
        .slice(-MAX_HISTORY_TURNS)
        .map((h) => ({ role: h.role, content: h.content.slice(0, MAX_HISTORY_CHARS) }))
    : [];

  const answer = await generateAnswer(message.trim(), turns);
  return NextResponse.json(answer);
}
