'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The site uses `scroll-behavior: smooth` for in-page anchor links. Without this,
// the browser also animates the scroll restore on Back/Forward, so a returning
// page visibly scrolls into place. On Back/Forward to another page we switch smooth
// scrolling off until the restored page has settled, then hand it back.
export default function InstantHistoryScroll() {
  const pathname = usePathname();
  const current = useRef(pathname);
  useEffect(() => { current.current = pathname; }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onPop = () => {
      // Same page (an in-page #anchor link also fires popstate): keep smooth scrolling.
      if (window.location.pathname === current.current) return;
      root.style.scrollBehavior = 'auto';
      clearTimeout(timer);
      timer = setTimeout(() => { root.style.scrollBehavior = ''; }, 1500);
    };
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      clearTimeout(timer);
      root.style.scrollBehavior = '';
    };
  }, []);
  return null;
}
