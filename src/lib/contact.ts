export const INQUIRY_EMAIL = 'inquiry@contexq.com';

// Standard mailto: so the OS opens the viewer's default mail client
// (Outlook, Apple Mail, Gmail-as-default-handler, Thunderbird, etc.) —
// no assumption that everyone uses Gmail, no fullscreen takeover.
export const INQUIRY_MAIL_URL = `mailto:${INQUIRY_EMAIL}`;

export const mailLinkProps = {
  href: INQUIRY_MAIL_URL,
};
