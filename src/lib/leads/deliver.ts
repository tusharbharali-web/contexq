import 'server-only';
import type { LeadPayload } from './types';
import type { Enrichment } from './enrich';

/**
 * Sends a lead to the team. Two free channels, used when configured:
 *  1. Email via FormSubmit (LEADS_FORMSUBMIT_ID): the service the contact form already used.
 *  2. Google Sheet row via an Apps Script web app (LEADS_SHEET_WEBHOOK_URL), optional.
 * The lead counts as delivered if at least one channel accepts it.
 */

const TYPE_LABEL: Record<LeadPayload['type'], string> = {
  contact: 'Contact form',
  callback: 'Chatbot: callback request',
  meeting: 'Chatbot: meeting request',
  team: 'Chatbot: talk to our team',
};

/** One flat, readable record used for both the email and the sheet. */
export function leadRecord(lead: LeadPayload, e: Enrichment, reference: string): Record<string, string> {
  const a = lead.attribution || {};
  const utm = a.utm ? Object.entries(a.utm).map(([k, v]) => `${k.replace('utm_', '')}=${v}`).join(', ') : '';
  const location = [e.city, e.region, e.country].filter(Boolean).join(', ');
  const network = e.network ? `${e.network}${e.networkDomain ? ` (${e.networkDomain})` : ''}` : '';
  const transcript = (lead.conversation || [])
    .map((m) => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.content}`)
    .join('\n');

  const record: Record<string, string> = {
    Reference: reference,
    'Lead type': TYPE_LABEL[lead.type],
    'Submitted (Singapore time)': new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' }),
    Name: lead.name || '',
    Email: lead.email || '',
    Phone: lead.phone || '',
    'Company (given)': lead.company || '',
    'Country (given)': lead.country || '',
    Interest: lead.interest || '',
    Message: lead.message || '',
    'Detected location': location,
    'Detected network or company': network,
    'Email domain': e.emailDomain ? `${e.emailDomain}${e.businessEmail === false ? ' (personal email)' : ''}` : '',
    'Sent from page': lead.page || '',
    'Landing page': a.landingPage || '',
    'Came from': a.referrer || (a.landingPage ? 'Direct or unknown' : ''),
    Campaign: utm,
    'Pages viewed': (a.pages || []).join(' > '),
    'First visit': a.firstSeen || '',
    Device: e.device || '',
    'GA client ID': lead.gaClientId || '',
    'Chat transcript': transcript,
  };
  // Drop empty fields so the email stays short.
  return Object.fromEntries(Object.entries(record).filter(([, v]) => v !== ''));
}

async function sendEmail(record: Record<string, string>, origin: string): Promise<boolean> {
  const id = process.env.LEADS_FORMSUBMIT_ID?.trim();
  if (!id) return false;
  const cc = process.env.LEADS_CC_EMAILS?.trim();
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(id)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: origin, Referer: `${origin}/` },
      body: JSON.stringify({
        _subject: `New ContexQ lead: ${record['Lead type']}${record['Company (given)'] ? ` from ${record['Company (given)']}` : ''} (${record.Reference})`,
        _template: 'table',
        _captcha: 'false',
        ...(cc ? { _cc: cc } : {}),
        ...(record.Email ? { _replyto: record.Email } : {}),
        ...record,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    const ok = res.ok && String(data.success) === 'true';
    if (!ok) console.error('[leads] FormSubmit did not accept the lead:', res.status, data.message);
    return ok;
  } catch (err) {
    console.error('[leads] FormSubmit request failed:', err instanceof Error ? err.message : err);
    return false;
  }
}

async function sendToSheet(record: Record<string, string>): Promise<boolean> {
  const url = process.env.LEADS_SHEET_WEBHOOK_URL?.trim();
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // Apps Script web apps accept plain text bodies without CORS preflight
      body: JSON.stringify({ secret: process.env.LEADS_SHEET_SECRET || '', record }),
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
    });
    const text = (await res.text()).trim();
    const ok = res.ok && text === 'ok';
    if (!ok) console.error('[leads] Google Sheet webhook did not accept the lead:', res.status, text.slice(0, 80));
    return ok;
  } catch (err) {
    console.error('[leads] Google Sheet request failed:', err instanceof Error ? err.message : err);
    return false;
  }
}

export function deliveryConfigured() {
  return Boolean(process.env.LEADS_FORMSUBMIT_ID?.trim() || process.env.LEADS_SHEET_WEBHOOK_URL?.trim());
}

export async function deliverLead(record: Record<string, string>, origin: string): Promise<boolean> {
  const [email, sheet] = await Promise.all([sendEmail(record, origin), sendToSheet(record)]);
  return email || sheet;
}
