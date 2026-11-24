'use client';

import { TRACKING } from './config';

/* Third-party tags. Each loads only after the visitor has accepted its consent category. */

type Gtag = (...args: unknown[]) => void;
type Clarity = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clarity?: Clarity;
    ldfdr?: unknown;
  }
}

function addScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** gtag stub + Google Consent Mode v2 defaults (everything denied until the visitor chooses). */
function ensureGtag(): Gtag {
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag.js expects the real `arguments` object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500,
    });
  }
  return window.gtag;
}

/**
 * Sends the visitor's current choices to Google Consent Mode v2 (used by GA4 and by every
 * Google tag inside Google Tag Manager): Analytics -> analytics_storage,
 * Marketing -> ad_storage / ad_user_data / ad_personalization.
 * Also pushes a "cookie_consent_update" event so non-Google tags in GTM can be triggered
 * only after consent (use it as their trigger, checking analytics_consent / marketing_consent).
 */
export function updateGoogleConsent(analytics: boolean, marketing = false) {
  if (!TRACKING.gaId && !TRACKING.gtmId) return;
  const ads = marketing ? 'granted' : 'denied';
  ensureGtag()('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
  window.dataLayer?.push({
    event: 'cookie_consent_update',
    analytics_consent: analytics ? 'granted' : 'denied',
    marketing_consent: ads,
  });
}

/** Google Analytics 4. Page views on in-site navigation are sent by GA4's enhanced measurement (browser history events). */
export function loadGoogleAnalytics() {
  if (!TRACKING.gaId || document.getElementById('cq-ga')) return;
  const gtag = ensureGtag();
  gtag('js', new Date());
  gtag('config', TRACKING.gaId, { anonymize_ip: true });
  addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TRACKING.gaId)}`, 'cq-ga');
}

/** Microsoft Clarity (heatmaps and session recordings), with its consent v2 signal. */
export function loadClarity() {
  if (!TRACKING.clarityId) return;
  if (!window.clarity) {
    // Clarity's queue stub: calls made before the script loads are replayed by it.
    const stub: Clarity = (...args: unknown[]) => {
      (stub.q = stub.q || []).push(args);
    };
    window.clarity = stub;
    addScript(`https://www.clarity.ms/tag/${encodeURIComponent(TRACKING.clarityId)}`, 'cq-clarity');
  }
  window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
}

/** Clears Clarity's cookies and stops tracking when analytics consent is withdrawn. */
export function revokeClarity() {
  if (window.clarity) window.clarity('consent', false);
}

/** Leadfeeder company identification. Accepts the tracker ID or the full script URL. */
export function loadLeadfeeder() {
  const id = TRACKING.leadfeederId;
  if (!id) return;
  const src = /^https:\/\//.test(id) ? id : `https://sc.lfeeder.com/lftracker_v1_${encodeURIComponent(id)}.js`;
  addScript(src, 'cq-leadfeeder');
}
