/**
 * Short page name for chatbot sources: drops the hero tagline from a page title,
 * e.g. "Fraud and mule detection - Stop the fraud network..." -> "Fraud and mule detection".
 */
const BY_URL: Record<string, string> = {
  '/': 'Home',
  '/Ecosystem/faq': 'FAQ',
  '/about': 'About ContexQ',
  '/careers': 'Careers',
  '/contact': 'Contact',
  '/solutions/customer-intelligence': 'Customer intelligence',
};

export function pageName(title: string, url?: string): string {
  const path = (url || '').split(/[?#]/)[0].replace(/\/+$/, '') || (url ? '/' : '');
  if (path && BY_URL[path]) return BY_URL[path];
  return title.split(/\s+[|]\s+|\s+[-–—]\s+/)[0].trim() || title;
}
