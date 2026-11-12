# ContexQ Website (revised)

Marketing + product site for ContexQ, built with Next.js (App Router). Every page is now
rendered by React: the standalone HTML pages that used to be embedded through iframes were
converted into React views (`src/views/`). Their styling and animations are unchanged.

---

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19, **TypeScript** 5
- **Styling:** Tailwind CSS v4 for the site shell; each page view keeps its own CSS (scoped)
- **3D:** three.js + @react-three/fiber + @react-three/drei (homepage coin)
- **Animation:** framer-motion (homepage), the pages' own CSS/JS animations (views)
- **Deploy:** Netlify (`@netlify/plugin-nextjs`); optional Azure standalone build (`BUILD_TARGET=azure`)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

---

## How the site is put together

```
src/
├── app/                      # Routes. Most page.tsx files just render a view + <Footer/>
├── components/               # Site shell: Header, Footer, homepage 3D scene, popups
├── views/                    # ⭐ Page content, one folder per page
│   ├── <view-id>/
│   │   ├── View.tsx          # the page markup (JSX)
│   │   ├── styles.css        # the page's own CSS, scoped to .v-<view-id>
│   │   └── behavior.js       # the page's own scripts (animations, tabs, canvases…)
│   ├── _shared/eco/          # scripts/data shared by the Ecosystem views
│   └── _runtime/             # ViewShell + the environment the behavior scripts run in
├── data/                     # JSON content (coin slices, team, FAQ…)
└── middleware.ts             # mobile redirect to /mobile-home.html
```

### Route → view

| Route | View |
|---|---|
| `/Platform/analytics` · `entity` · `knowledge-graph` · `scores` · `actions` | `platform-*` |
| `/solutions/aml` · `kyc` · `fraud` · `risk` · `customer-intelligence` · `supply-chain-intelligence` | `solution-*` |
| `/Industries/finance` · `ecommerce` · `insurance` · `mfg` · `public-sector` · `telco` | `industry-*` |
| `/about`, `/careers`, `/contact` | `about`, `careers`, `contact` |

Renamed to match their content (old URLs redirect permanently, see `next.config.ts`):
`/Industries/goods` → `/Industries/ecommerce`, `/Industries/health` → `/Industries/insurance`,
`/company` → `/about`, `/Platform/cleansing` → `/Platform/analytics`, `/Platform/network` → `/Platform/knowledge-graph`.
| `/Ecosystem/blogs`, `/Ecosystem/blogs/[slug]` | `eco-insights`, `eco-blog-article` |
| `/Ecosystem/press-releases`, `/Ecosystem/press-releases/[slug]` | `eco-press`, `eco-press-article` |
| `/Ecosystem/awards`, `/Ecosystem/awards/[slug]` | `eco-awards`, `eco-award` (17 award pages) |
| `/Ecosystem/affiliations` | `eco-affiliations` |

`/`, `/Ecosystem/faq` and the legal pages were already React components and are unchanged.

### How a view works

- **Markup** – `View.tsx` is a server component, so pages are pre-rendered to static HTML
  (good for SEO; no iframe, no client-side height measuring).
- **Styles** – `styles.css` is the page's original CSS. Selectors are prefixed with the view's
  class (`.v-<id>`), `html`/`body` selectors target the view's wrappers (`.cq-html`/`.cq-body`)
  and `@keyframes` names are prefixed, so pages can never affect each other or the site shell.
  The top of each file holds a small isolation layer that keeps the site's global Tailwind base
  styles out of the view. Edit page styles there as normal CSS.
- **Behaviour** – `behavior.js` contains the page's original scripts. `ViewShell` runs it after
  the page mounts with a `window`/`document`/timers environment confined to the view
  (`_runtime/env.ts`), and cleans up every listener, timer, observer and global when you
  navigate away. Links written for the old HTML files (e.g. `awards/x.html`) are mapped to the
  real routes (`_runtime/routes.ts`) and navigate client-side.
- **Fonts / CDN libraries** each page used (Google Fonts, three.js, GSAP, Turnstile) are listed
  in `_runtime/manifest.json` and loaded by `ViewShell`.

### Pages restyled to the telecom design

The Platform pages (`platform-*`), `industry-ecommerce` and `industry-public-sector` are maintained
by hand: each `styles.css` ends with a "Telecom design system" block (ContexQ tokens, IBM Plex
Sans type scale, 1200px content width, 840px hero) and the views have no eyebrows. Edit these
files directly; do not regenerate them from the old HTML.

### Common tasks

| I want to… | Edit |
|---|---|
| Change copy on a product page | `src/views/<id>/View.tsx` |
| Change a page's styling | `src/views/<id>/styles.css` |
| Change a page's animation/interaction | `src/views/<id>/behavior.js` |
| Change page title/description | `src/app/<route>/page.tsx` (`metadata`) |
| Add/edit a blog post or press release | `src/views/_shared/eco/blogs-data.js` / `press-releases-data.js` |
| Change the header / footer | `src/components/ui/Header.tsx` / `Footer.tsx` |
| Change the homepage coin | `src/data/coin-slices.json` + `src/components/three/*` |
| Change the mobile site | `public/mobile-content.html` (static) |
| Change a Customers page (Trading, Banks, Manufacturing, Government) | `content/customers/data/customers.js` (see its CONTENT_README) is the source; it is compiled into `src/views/customer-*/` (data + `render.js` inlined in each `behavior.js`). Until the HTML→view converter is added to this repo, make the same edit in the `customer-*/behavior.js` files |

---

## Homepage (3D coin) performance

- **Parallel loading:** every 3D asset is listed in `src/components/three/sceneAssets.ts` and is
  requested with the HTML (`<link rel="preload">` from `app/page.tsx`) and preloaded into the
  three.js loader cache in `CoinScene`, so nothing waits for anything else to finish first.
- **Reveal when renderable:** the loader stays up until the lighting, coin (icons + label font)
  and globe have each signalled they can render (`ReadySignal` in `CoinScene`); the wedge
  entrance is timed from that moment, so it always plays in full.
- **Off-main-thread image decoding:** textures use `useBitmapTexture` (fetch + createImageBitmap)
  instead of `<img>` decoding during GPU upload (~600 ms → ~200 ms of main-thread work).
- **Smaller files, same quality** (each checked against the originals):
  - Lighting: Ultra HDR / gain-map JPEG `studio.jpg` (198 KB, was a 1.6 MB `.hdr`).
  - Globe: `Globe.avif.glb` (0.33 MB, was 5.6 MB) — AVIF texture inside the GLB.
  - Slice icons: AVIF, 1024 px (426 KB total, was 2.9 MB).
  - 3D label fonts: Roboto subset to Latin (31 KB each, was 160 KB).
  - Material Symbols: self-hosted 28-icon subset (12 KB, was 1.1 MB); class `cq-symbols`.
- **Deferred:** the globe base-plate texture loads after the reveal (it is only visible after a
  click); the pie-overlay texture loads only if the overlay is ever shown.
- **No GPU stalls on interaction:** slice textures are configured once; wedges hide via
  `material.visible` instead of toggling `transmission` (no shader recompiles on popup).
- **Caching:** `/assets`, `/views`, `/eco-skin/assets` are served with
  `Cache-Control: public, max-age=86400, stale-while-revalidate=604800` (next.config.ts).
- **Site fonts** are self-hosted in `src/app/fonts` (next/font/local); only Geist is preloaded.

AVIF needs Safari 16+ / any current Chrome, Edge or Firefox.

---

## Mobile

Phones are redirected from `/` to the static mobile site (`public/mobile-home.html`, which
frames `mobile-content.html`). Add `?desktop=1` to stay on the desktop homepage.

---

## Deployment notes

- Netlify: `npm run build`, publish `.next`, `@netlify/plugin-nextjs` (see `netlify.toml`).
- `next.config.ts` pins `turbopack.root`/`outputFileTracingRoot` to this folder because the
  project currently sits inside another project folder with its own lockfile.
- The Content-Security-Policy keeps `'unsafe-eval'` (used for the pages' inline `on*` handlers) and
  `cdn.jsdelivr.net`/`cdnjs.cloudflare.com` (three.js, GSAP).
