import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // This project lives inside another repo folder that has its own lockfile;
  // pin the root so Next/Turbopack resolve files from this folder only.
  turbopack: { root: path.resolve(__dirname) },
  outputFileTracingRoot: path.resolve(__dirname),
  // `output: "standalone"` is needed for Azure but breaks Netlify/Vercel's Next.js runtime.
  // Set BUILD_TARGET=azure in the Azure workflow to keep that build mode.
  ...(process.env.BUILD_TARGET === "azure" ? { output: "standalone" as const } : {}),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://cdn.tailwindcss.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com; connect-src 'self' blob: https://raw.githubusercontent.com https://formsubmit.co https:; worker-src 'self' blob:; frame-src 'self' https://formsubmit.co https://wa.me https://www.linkedin.com https://www.youtube.com https://m.facebook.com https://challenges.cloudflare.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co;",
          },
        ],
      },
      // Static media (3D models, textures, images, fonts): let browsers reuse them
      // instead of re-checking every file on every visit (Next's default is max-age=0).
      // File names are not content-hashed, so keep the window modest: 1 day fresh,
      // then served from cache for up to 7 more days while revalidating in the background.
      ...["/assets/:path*", "/views/:path*", "/eco-skin/assets/:path*"].map((source) => ({
        source,
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      })),
    ];
  },
};

export default nextConfig;
