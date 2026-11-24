/**
 * Public tracking IDs. These are NOT secrets: they appear in every visitor's browser by design.
 * Set them in .env.local (local) and in Netlify > Site configuration > Environment variables.
 * Leave a value empty and that tool simply does not load.
 */
export const TRACKING = {
  /** Google Analytics 4 Measurement ID, e.g. G-XXXXXXXXXX (GA4 > Admin > Data streams > Web). */
  gaId: (process.env.NEXT_PUBLIC_GA_ID || '').trim(),
  /** Microsoft Clarity project ID (Clarity > Settings > Overview > Project ID). */
  clarityId: (process.env.NEXT_PUBLIC_CLARITY_ID || '').trim(),
  /**
   * Leadfeeder tracker ID: the part after "lftracker_v1_" in the script Leadfeeder gives you
   * (Leadfeeder > Settings > Website tracker). A full script URL also works.
   */
  leadfeederId: (process.env.NEXT_PUBLIC_LEADFEEDER_ID || '').trim(),
};

/** Consent categories shown in the cookie banner. */
export const CONSENT = {
  necessary: 'necessary',
  analytics: 'analytics', // Google Analytics 4, Microsoft Clarity
  marketing: 'marketing', // Leadfeeder company identification
} as const;
