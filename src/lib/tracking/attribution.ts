'use client';

/**
 * First-touch attribution: where a visitor came from and what they looked at, attached to
 * any lead they submit. Stored in the visitor's own browser only, and only after they accept
 * analytics cookies (see CookieConsentManager). Cleared when consent is withdrawn.
 */
const KEY = 'cq_attr';
const MAX_PAGES = 15;

export interface Attribution {
  landingPage?: string;
  referrer?: string;
  utm?: Record<string, string>;
  firstSeen?: string;
  pages?: string[];
}

function read(): Attribution {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}') as Attribution;
  } catch {
    return {};
  }
}

function write(a: Attribution) {
  try {
    localStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    /* storage blocked: attribution is optional */
  }
}

/** Records the current page. Captures landing page, referrer and UTM tags on the first visit. */
export function recordPageView() {
  const a = read();
  const path = window.location.pathname + window.location.search;
  if (!a.landingPage) {
    a.landingPage = path;
    a.firstSeen = new Date().toISOString();
    const ref = document.referrer;
    if (ref && !ref.startsWith(window.location.origin)) a.referrer = ref;
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      const v = params.get(k);
      if (v) utm[k] = v.slice(0, 100);
    }
    if (Object.keys(utm).length) a.utm = utm;
  }
  const pages = (a.pages || []).filter((p) => p !== window.location.pathname);
  pages.push(window.location.pathname);
  a.pages = pages.slice(-MAX_PAGES);
  write(a);
}

export function getAttribution(): Attribution {
  return read();
}

export function clearAttribution() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
