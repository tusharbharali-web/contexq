'use client';

import { acceptedCategory } from 'vanilla-cookieconsent';
import { CONSENT, TRACKING } from './config';

/**
 * Sends a Google Analytics 4 event. Does nothing unless the visitor accepted analytics
 * cookies and a GA4 ID is set. Never pass personal data (names, emails, phone numbers).
 */
export function track(event: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === 'undefined' || !TRACKING.gaId || !window.gtag) return;
  try {
    if (!acceptedCategory(CONSENT.analytics)) return;
  } catch {
    return;
  }
  window.gtag('event', event, { page_path: window.location.pathname, ...params });
}

/** The GA4 client ID from the _ga cookie, used to match a lead with its analytics session. */
export function getGaClientId(): string | undefined {
  const m = document.cookie.match(/(?:^|;\s*)_ga=GA\d\.\d\.(\d+\.\d+)/);
  return m?.[1];
}
