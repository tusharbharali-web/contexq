import type { MetadataRoute } from 'next';

// Generates /robots.txt at build time.
// Marketing pages are fully open to crawlers (that's the point of the site).
// The disallows below keep non-content URLs out of search results.
//
// NOTE (temporary): the *-preview.html and mobile-*.html files are draft/stub
// pages sitting in public/. The proper fix is to DELETE them from public/ (a clean
// site has no publicly-exposed drafts), these rules just keep them out of Google
// in the meantime. robots.txt does NOT block direct access; it only affects search.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/awards-preview.html',
        '/contact-preview.html',
        '/customers-preview.html',
        '/partners-preview.html',
        '/team-preview.html',
        '/mobile-home.html',
        '/mobile-content.html',
      ],
    },
    sitemap: 'https://contexq.com/sitemap.xml',
    host: 'https://contexq.com',
  };
}
