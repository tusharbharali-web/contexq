/** Shared between the browser (lead forms) and the /api/leads route. */
export type LeadType = 'contact' | 'callback' | 'meeting' | 'team';

export interface LeadAttribution {
  landingPage?: string;
  referrer?: string;
  utm?: Record<string, string>;
  firstSeen?: string;
  pages?: string[];
}

export interface LeadPayload {
  type: LeadType;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  interest?: string;
  message?: string;
  /** Recent chatbot messages, so the team sees what the visitor asked. */
  conversation?: { role: 'user' | 'assistant'; content: string }[];
  /** Page the form was sent from. */
  page?: string;
  attribution?: LeadAttribution;
  gaClientId?: string;
  /** Cloudflare Turnstile token (contact page form). */
  turnstileToken?: string;
  /** Honeypot field: real visitors never fill it. */
  website?: string;
}

export interface LeadResult {
  ok: boolean;
  reference?: string;
  error?: string;
}
