import type { MetadataRoute } from 'next';

const BASE_URL = 'https://contexq.com';

// IMPORTANT: paths use the CURRENT live casing (capital /Industries and /Ecosystem).
// These are the URLs that actually resolve today (see audit item C6). If/when the
// paths are lowercased, update this list to match, otherwise Google will crawl 404s.
//
// Dynamic routes ([slug], [id], individual blog posts) are intentionally excluded:
// the [slug] routes are not-found fallbacks, and blog posts currently load client-side
// (see audit H4), so they would render empty to a crawler. Add them once that is fixed.
const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1.0 },

  // Product
  { path: '/Platform/cleansing', priority: 0.9 },
  { path: '/Platform/entity', priority: 0.9 },
  { path: '/Platform/network', priority: 0.9 },
  { path: '/Platform/scores', priority: 0.9 },
  { path: '/Platform/actions', priority: 0.9 },

  // Solutions, primary commercial pages
  { path: '/solutions', priority: 0.8 },
  { path: '/solutions/aml', priority: 0.9 },
  { path: '/solutions/kyc', priority: 0.9 },
  { path: '/solutions/fraud', priority: 0.9 },
  { path: '/solutions/risk', priority: 0.9 },
  { path: '/solutions/customer-intelligence', priority: 0.9 },
  { path: '/solutions/supply-chain-intelligence', priority: 0.9 },

  // Industries, primary commercial pages
  { path: '/Industries', priority: 0.8 },
  { path: '/Industries/finance', priority: 0.9 },
  { path: '/Industries/mfg', priority: 0.9 },
  { path: '/Industries/goods', priority: 0.9 },
  { path: '/Industries/health', priority: 0.9 },
  { path: '/Industries/telco', priority: 0.9 },
  { path: '/Industries/public-sector', priority: 0.9 },

  // Company
  { path: '/company', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
  { path: '/careers', priority: 0.5 },

  // Ecosystem
  { path: '/Ecosystem/blogs', priority: 0.6 },
  { path: '/Ecosystem/press-releases', priority: 0.6 },
  { path: '/Ecosystem/faq', priority: 0.5 },

  // Legal
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-conditions', priority: 0.3 },
  { path: '/cookie-policy', priority: 0.3 },
];

// Generates /sitemap.xml at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
