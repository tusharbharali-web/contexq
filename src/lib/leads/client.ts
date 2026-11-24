'use client';

import { acceptedCategory } from 'vanilla-cookieconsent';
import { CONSENT } from '../tracking/config';
import { getAttribution } from '../tracking/attribution';
import { getGaClientId, track } from '../tracking/track';
import type { LeadPayload, LeadResult } from './types';

/**
 * Sends a lead from any form to /api/leads. Attribution (how the visitor arrived, pages
 * viewed) and the GA client ID are attached only if the visitor accepted analytics cookies.
 */
export async function submitLead(lead: Omit<LeadPayload, 'attribution' | 'gaClientId' | 'page'>): Promise<LeadResult> {
  let analytics = false;
  try {
    analytics = acceptedCategory(CONSENT.analytics);
  } catch {
    analytics = false;
  }

  const payload: LeadPayload = {
    ...lead,
    page: window.location.pathname,
    ...(analytics ? { attribution: getAttribution(), gaClientId: getGaClientId() } : {}),
  };

  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as LeadResult | null;
    if (res.ok && data?.ok) {
      track('generate_lead', { lead_type: lead.type });
      return data;
    }
    return { ok: false, error: data?.error || 'We could not send your request right now. Please email inquiry@contexq.com.' };
  } catch {
    return { ok: false, error: 'We could not send your request right now. Please check your connection or email inquiry@contexq.com.' };
  }
}
