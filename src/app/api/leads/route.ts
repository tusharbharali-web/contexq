import { NextResponse } from 'next/server';
import { clientIp, enrichLead } from '../../../lib/leads/enrich';
import { deliverLead, deliveryConfigured, leadRecord } from '../../../lib/leads/deliver';
import type { LeadPayload, LeadResult, LeadType } from '../../../lib/leads/types';

/**
 * POST /api/leads: every lead form on the site (contact page, chatbot callback, meeting
 * request, "Talk to our team") sends here. The server checks the input, verifies the
 * Turnstile token for the contact form, enriches the lead and delivers it.
 * All keys (IPinfo, Turnstile secret, FormSubmit ID, sheet URL) stay on the server.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TYPES: LeadType[] = ['contact', 'callback', 'meeting', 'team'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isPhone = (v: string) => /^\+?[\d\s()-]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15;

const RATE_LIMIT = 5; // leads per visitor per window
const RATE_WINDOW_MS = 10 * 60_000;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

const fail = (error: string, status = 400) => NextResponse.json<LeadResult>({ ok: false, error }, { status });

const clip = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined) || undefined;

async function verifyTurnstile(token: string | undefined, ip: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    console.warn('[leads] TURNSTILE_SECRET_KEY is not set: the contact form spam check is skipped.');
    return true;
  }
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token, ...(ip ? { remoteip: ip } : {}) });
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body, signal: AbortSignal.timeout(5000) });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (rateLimited(ip || 'unknown')) return fail('Too many requests. Please try again in a few minutes.', 429);

  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return fail('Invalid request.');
  }

  const type = raw.type as LeadType;
  if (!TYPES.includes(type)) return fail('Invalid request.');

  // Honeypot: pretend success so bots learn nothing.
  if (typeof raw.website === 'string' && raw.website.trim()) return NextResponse.json<LeadResult>({ ok: true });

  const lead: LeadPayload = {
    type,
    name: clip(raw.name, 120),
    email: clip(raw.email, 160)?.toLowerCase(),
    phone: clip(raw.phone, 30),
    company: clip(raw.company, 160),
    country: clip(raw.country, 80),
    interest: clip(raw.interest, 160),
    message: clip(raw.message, 3000),
    page: clip(raw.page, 300),
    gaClientId: clip(raw.gaClientId, 60),
    conversation: Array.isArray(raw.conversation)
      ? (raw.conversation as { role?: unknown; content?: unknown }[])
          .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
          .slice(-12)
          .map((m) => ({ role: m.role as 'user' | 'assistant', content: (m.content as string).slice(0, 1000) }))
      : undefined,
  };

  const attr = (raw.attribution ?? {}) as Record<string, unknown>;
  lead.attribution = {
    landingPage: clip(attr.landingPage, 300),
    referrer: clip(attr.referrer, 300),
    firstSeen: clip(attr.firstSeen, 40),
    utm:
      attr.utm && typeof attr.utm === 'object'
        ? Object.fromEntries(
            Object.entries(attr.utm as Record<string, unknown>)
              .filter(([k, v]) => /^utm_[a-z]+$/.test(k) && typeof v === 'string')
              .map(([k, v]) => [k, (v as string).slice(0, 100)])
          )
        : undefined,
    pages: Array.isArray(attr.pages) ? (attr.pages as unknown[]).filter((p): p is string => typeof p === 'string').slice(-15).map((p) => p.slice(0, 200)) : undefined,
  };

  // Validation
  if (lead.email && !EMAIL.test(lead.email)) return fail('Please enter a valid email address.');
  if (lead.phone && !isPhone(lead.phone)) return fail('Please enter a valid phone number, including the country code.');
  if (!lead.email && !lead.phone) return fail('Please give an email address or phone number.');
  if ((type === 'contact' || type === 'team') && (!lead.name || !lead.email)) return fail('Please enter your name and email address.');
  if (type === 'callback' && (!lead.name || !lead.phone)) return fail('Please enter your name and phone number.');

  if (type === 'contact' && !(await verifyTurnstile(clip(raw.turnstileToken, 2048), ip))) {
    return fail('The security check failed. Please complete it again and resubmit.');
  }

  if (!deliveryConfigured()) {
    console.error('[leads] No delivery channel set. Add LEADS_FORMSUBMIT_ID and/or LEADS_SHEET_WEBHOOK_URL.');
    return fail('We could not send your request right now. Please email inquiry@contexq.com.', 503);
  }

  const reference = `CQ-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const enrichment = await enrichLead(req, lead.email);
  const origin = new URL(req.url).origin;
  const delivered = await deliverLead(leadRecord(lead, enrichment, reference), origin);
  if (!delivered) return fail('We could not send your request right now. Please email inquiry@contexq.com.', 502);

  return NextResponse.json<LeadResult>({ ok: true, reference });
}
