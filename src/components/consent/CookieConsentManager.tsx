'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { CONSENT } from '../../lib/tracking/config';
import { loadClarity, loadGoogleAnalytics, loadLeadfeeder, revokeClarity, updateGoogleConsent } from '../../lib/tracking/loaders';
import { clearAttribution, recordPageView } from '../../lib/tracking/attribution';
import { track } from '../../lib/tracking/track';

/**
 * Cookie banner and preferences (CookieConsent v3, MIT licence), plus the tags it controls.
 * Nothing but strictly necessary storage is used until the visitor makes a choice.
 * Any element with the attribute data-cq-cookie-settings (e.g. the footer "Cookie settings"
 * link) reopens the preferences.
 */

const accepted = (category: string) => {
  try {
    return CookieConsent.acceptedCategory(category);
  } catch {
    return false;
  }
};

function applyConsent() {
  // Google Consent Mode v2 for GA4 and Google Tag Manager tags.
  updateGoogleConsent(accepted(CONSENT.analytics), accepted(CONSENT.marketing));
  if (accepted(CONSENT.analytics)) {
    loadGoogleAnalytics();
    loadClarity();
    recordPageView();
  }
  if (accepted(CONSENT.marketing)) loadLeadfeeder();
}

const cookieTable = {
  headers: { provider: 'Service', purpose: 'Purpose', expiry: 'Expires' },
};

function runConsent() {
  return CookieConsent.run({
    cookie: { name: 'cc_cookie', expiresAfterDays: 182, sameSite: 'Lax' },
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom left', equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: 'box', equalWeightButtons: true, flipButtons: false },
    },
    categories: {
      [CONSENT.necessary]: { enabled: true, readOnly: true },
      [CONSENT.analytics]: {
        autoClear: {
          cookies: [{ name: /^_ga/ }, { name: '_gid' }, { name: /^_cl(ck|sk)/ }, { name: 'CLID' }, { name: 'ANONCHK' }, { name: 'MUID' }, { name: 'SM' }],
        },
      },
      [CONSENT.marketing]: {
        autoClear: { cookies: [{ name: /^_lf/ }] },
      },
    },
    onConsent: () => applyConsent(),
    onChange: ({ changedCategories }) => {
      const withdrawn = changedCategories.filter((c) => !accepted(c));
      if (withdrawn.length) updateGoogleConsent(accepted(CONSENT.analytics), accepted(CONSENT.marketing));
      if (withdrawn.includes(CONSENT.analytics)) {
        revokeClarity();
        clearAttribution();
      }
      // Scripts that already ran cannot be unloaded, so reload to stop them completely.
      if (withdrawn.length) window.location.reload();
      else applyConsent();
    },
    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'Your privacy choices',
            description:
              'We use essential cookies to ensure our website functions properly. With your consent, we also use analytics cookies to understand how visitors interact with our website and marketing cookies to identify visiting organisations and improve our marketing efforts.' +
              '<br><br>You can update or withdraw your consent at any time through <a href="#" data-cq-cookie-settings>Cookie Settings</a>.' +
              '<br><br>For more information, please see our <a href="/privacy-policy">Privacy Policy</a> and <a href="/cookie-policy">Cookie Policy</a>.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage preferences',
          },
          preferencesModal: {
            title: 'Cookie settings',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save my choices',
            closeIconLabel: 'Close',
            sections: [
              {
                description:
                  'Choose which cookies ContexQ may use. Necessary cookies are always on. Your choice is kept for six months. More detail is in our <a href="/cookie-policy">Cookie Policy</a> and <a href="/privacy-policy">Privacy Policy</a>.',
              },
              {
                title: 'Necessary',
                description: 'Required for the site to work, for example to remember your cookie choice and to protect forms from spam.',
                linkedCategory: CONSENT.necessary,
                cookieTable: {
                  ...cookieTable,
                  body: [
                    { provider: 'ContexQ (cookie preferences)', purpose: 'Stores your cookie choices', expiry: '6 months' },
                    { provider: 'Cloudflare Turnstile', purpose: 'Protects the contact form from spam and bots', expiry: 'Session' },
                  ],
                },
              },
              {
                title: 'Analytics',
                description:
                  'Help us understand how visitors use the site, such as which pages are visited, how people arrive and where they click, so we can improve it. Information is collected in aggregate.',
                linkedCategory: CONSENT.analytics,
                cookieTable: {
                  ...cookieTable,
                  body: [
                    { provider: 'Google Analytics', purpose: 'Distinguishes visitors and sessions for site statistics', expiry: '2 years' },
                    { provider: 'Microsoft Clarity', purpose: 'Heatmaps and session recordings of how pages are used', expiry: 'Up to 1 year' },
                    { provider: 'ContexQ (visit history)', purpose: 'Remembers how you arrived and pages viewed, attached to an enquiry if you send one', expiry: 'Until cleared' },
                  ],
                },
              },
              {
                title: 'Marketing',
                description: 'Lets us recognise which organisations visit our site, based on the network you browse from. It does not identify you personally.',
                linkedCategory: CONSENT.marketing,
                cookieTable: {
                  ...cookieTable,
                  body: [{ provider: 'Leadfeeder', purpose: 'Identifies the organisation behind a company network visit', expiry: '2 years' }],
                },
              },
            ],
          },
        },
      },
    },
  });
}

/** Analytics events for contact links and calls to action, sent only with analytics consent. */
function onDocumentClick(e: MouseEvent) {
  // "Cookie settings" links/buttons anywhere on the site (works for content rendered after load)
  const settings = (e.target as HTMLElement | null)?.closest?.('[data-cq-cookie-settings]');
  if (settings) {
    e.preventDefault();
    CookieConsent.showPreferences();
    return;
  }
  const el = (e.target as HTMLElement | null)?.closest?.('a, button');
  if (!el) return;
  const label = (el.textContent || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  const href = el instanceof HTMLAnchorElement ? el.getAttribute('href') || '' : '';
  if (href.startsWith('mailto:')) track('email_click', { link_text: label });
  else if (href.startsWith('tel:')) track('phone_click', { link_text: label });
  else if (/wa\.me|whatsapp/i.test(href)) track('whatsapp_click', { link_text: label });
  else if (/linkedin\.com/i.test(href)) track('linkedin_click', { link_text: label });
  else if (/^\/contact(\b|$|\?|#)/.test(href) || /talk to (the|our) team|book a (walkthrough|meeting)|explore platform/i.test(label))
    track('cta_click', { link_text: label, link_url: href || undefined });
}

export default function CookieConsentManager() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('cq-consent');
    void runConsent();
    document.addEventListener('click', onDocumentClick, true);
    return () => document.removeEventListener('click', onDocumentClick, true);
  }, []);

  // Keep the visitor's page trail for lead attribution (analytics consent only).
  useEffect(() => {
    if (accepted(CONSENT.analytics)) recordPageView();
  }, [pathname]);

  return null;
}
