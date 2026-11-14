"use client";

import { useLayoutEffect } from "react";

/**
 * Homepage: a refresh always starts at the top, on the hub. Browsers otherwise restore the
 * old scroll position, so refreshing after "Explore Platform" (or any scroll) reopened the
 * page halfway down. Only reloads are affected; arriving with Back from another page still
 * returns to where you were.
 */
export default function ReloadToTop() {
  useLayoutEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type !== "reload") return;
    const prev = history.scrollRestoration;
    history.scrollRestoration = "manual";
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    toTop();
    // the browser can restore a little later (after load / layout), so repeat briefly
    const raf = requestAnimationFrame(toTop);
    const t1 = window.setTimeout(toTop, 120);
    const t2 = window.setTimeout(() => { toTop(); history.scrollRestoration = prev; }, 600);
    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); history.scrollRestoration = prev; };
  }, []);
  return null;
}
