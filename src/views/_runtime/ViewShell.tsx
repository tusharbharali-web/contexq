"use client";

import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import manifest from "./manifest.json";
import { BEHAVIORS } from "./behaviors";
import { createViewEnv, type ViewEnv } from "./env";
import { absoluteAsset, resolveRoute } from "./routes";

type ViewInfo = {
  id: string;
  legacyUrl: string;
  fonts: string[];
  externals: string[];
  handlers: string[];
};
/** `window` viewed as a plain bag of globals (UMD libraries publish themselves there). */
const globals = () => window as unknown as Record<string, unknown>;

const VIEWS = new Map<string, ViewInfo>((manifest.views as ViewInfo[]).map((v) => [v.id, v]));

/* ---------------- third-party scripts (CDN, loaded once per session) --------------- */

// UMD builds that publish a global; we keep each build's own value so pages that
// depend on different three.js versions never see each other's copy.
const UMD_GLOBALS: Array<[RegExp, string]> = [
  [/three(\.min)?\.js|three@/, "THREE"],
  [/gsap/, "gsap"],
];
const loaded = new Map<string, Promise<unknown>>();
function loadExternal(src: string): Promise<unknown> {
  if (!loaded.has(src)) {
    loaded.set(
      src,
      new Promise((resolve, reject) => {
        const global = UMD_GLOBALS.find(([re]) => re.test(src))?.[1];
        const previous = global ? globals()[global] : undefined;
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.crossOrigin = "anonymous";
        s.onload = () => {
          const value = global ? globals()[global] : undefined;
          if (global && previous !== undefined) globals()[global] = previous;
          resolve(value);
        };
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      }),
    );
  }
  return loaded.get(src)!;
}

/* ------------------------------------ shell ------------------------------------ */

type Props = {
  viewId: string;
  className: string;
  bodyClassName: string;
  lang?: string;
  rootProps?: HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
  bodyProps?: HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
  /** Optional: some views (e.g. the customer pages) are built entirely by their script. */
  children?: ReactNode;
};

/**
 * Renders a converted page and runs its original behavior script.
 * `.cq-html` / `.cq-body` stand in for the page's own <html>/<body>; the page CSS is
 * scoped to them, and the script runs in a view-confined environment (see env.ts).
 */
export default function ViewShell({ viewId, className, bodyClassName, lang, rootProps, bodyProps, children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const info = VIEWS.get(viewId);

  useEffect(() => {
    const root = rootRef.current;
    const body = bodyRef.current;
    if (!root || !body || !info) return;

    // React StrictMode (dev) mounts effects twice on the same DOM. Page scripts
    // mutate the DOM, so keep the first run alive instead of re-running them.
    const host = root as ViewHost;
    if (host.__cqEnv) {
      window.clearTimeout(host.__cqDisposeTimer);
      return scheduleDispose(host);
    }

    const navigate = (href: string, replace = false) => {
      const route = resolveRoute(href, info.legacyUrl);
      if (route) {
        if (replace) router.replace(route);
        else router.push(route);
      } else {
        window.location.assign(new URL(href, window.location.origin + info.legacyUrl).href);
      }
    };
    const view = createViewEnv({ root, body, legacyUrl: info.legacyUrl, navigate });
    host.__cqEnv = view;

    // Links: legacy hrefs (incl. ones built by scripts) → real routes, SPA navigation.
    const fixLink = (a: HTMLAnchorElement) => {
      const raw = a.getAttribute("href");
      if (!raw || raw.startsWith("#") || /^(mailto|tel|javascript):/i.test(raw)) return;
      const route = resolveRoute(raw, info.legacyUrl);
      if (route && route !== raw) a.setAttribute("href", route);
    };
    const fixImage = (img: HTMLImageElement) => {
      const raw = img.getAttribute("src");
      if (raw && !/^(data:|blob:|https?:|\/)/i.test(raw)) img.setAttribute("src", absoluteAsset(raw, info.legacyUrl));
    };
    const fixTree = (el: Element) => {
      if (el instanceof HTMLAnchorElement) fixLink(el);
      else if (el instanceof HTMLImageElement) fixImage(el);
      el.querySelectorAll?.("a[href]").forEach((a) => fixLink(a as HTMLAnchorElement));
      el.querySelectorAll?.("img[src]").forEach((i) => fixImage(i as HTMLImageElement));
    };
    const linkObserver = new MutationObserver((records) => {
      for (const r of records) {
        if (r.type === "attributes" && r.target instanceof Element) fixTree(r.target);
        r.addedNodes.forEach((n) => n instanceof Element && fixTree(n));
      }
    });
    linkObserver.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ["href", "src"] });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !root.contains(a) || a.hasAttribute("download")) return;
      const target = a.getAttribute("target");
      if (target && !["_self", "_top", "_parent"].includes(target)) return;
      const raw = a.getAttribute("href");
      if (!raw || raw.startsWith("#") || /^(mailto|tel|javascript):/i.test(raw)) return;
      const route = resolveRoute(raw, info.legacyUrl);
      if (!route) return;
      e.preventDefault();
      router.push(route);
    };
    root.addEventListener("click", onClick);

    // Inline on* attributes from the original markup (kept as data-cq-on*).
    const inlineEvents = new Set<string>();
    root.querySelectorAll("*").forEach((el) => {
      for (const a of Array.from(el.attributes)) if (a.name.startsWith("data-cq-on")) inlineEvents.add(a.name.slice(10));
    });
    const inlineHandlers: Array<[string, EventListener]> = [];
    inlineEvents.forEach((type) => {
      const handler: EventListener = (e) => {
        const el = (e.target as Element | null)?.closest?.(`[data-cq-on${type}]`);
        if (!el || !root.contains(el)) return;
        new Function("event", el.getAttribute(`data-cq-on${type}`) || "").call(el, e);
      };
      root.addEventListener(type, handler);
      inlineHandlers.push([type, handler]);
    });

    let cancelled = false;
    (async () => {
      try {
        for (const src of info.externals) {
          const value = await loadExternal(src);
          const global = UMD_GLOBALS.find(([re]) => re.test(src))?.[1];
          if (global && value !== undefined) globals()[global] = value;
        }
        if (cancelled) return;
        // Cloudflare Turnstile renders automatically only on its first load.
        const turnstile = globals().turnstile as { render: (el: HTMLElement) => void } | undefined;
        if (turnstile && info.externals.some((s) => s.includes("turnstile"))) {
          root.querySelectorAll<HTMLElement>(".cf-turnstile").forEach((el) => {
            if (!el.querySelector("iframe")) {
              try {
                turnstile.render(el);
              } catch {
                /* already rendered */
              }
            }
          });
        }
        const loader = BEHAVIORS[viewId];
        if (loader) {
          const mod = await loader();
          if (cancelled) return;
          const exported = mod.default(view.env) as Record<string, (...a: unknown[]) => unknown> | undefined;
          if (exported) view.exposeGlobals(exported);
        }
        view.fireReady();
      } catch (err) {
        console.error(`[view ${viewId}]`, err);
      }
    })();

    const cleanup = () => {
      cancelled = true;
      linkObserver.disconnect();
      root.removeEventListener("click", onClick);
      inlineHandlers.forEach(([t, h]) => root.removeEventListener(t, h));
      view.dispose();
      delete host.__cqEnv;
    };
    host.__cqCleanup = cleanup;
    return scheduleDispose(host);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewId]);

  return (
    <>
      {info?.fonts.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
      <div ref={rootRef} className={className} lang={lang} {...rootProps}>
        <div ref={bodyRef} className={bodyClassName} {...bodyProps}>
          {children}
        </div>
      </div>
    </>
  );
}

type ViewHost = HTMLDivElement & { __cqEnv?: ViewEnv; __cqDisposeTimer?: number; __cqCleanup?: () => void };

function scheduleDispose(host: ViewHost) {
  return () => {
    host.__cqDisposeTimer = window.setTimeout(() => host.__cqCleanup?.(), 0);
  };
}
