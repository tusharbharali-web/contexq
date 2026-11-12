'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MobileDetector() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('desktop') === '1') return;

    const ua = navigator.userAgent || '';
    const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isNarrow = window.innerWidth < 768;

    if (params.get('mobile') === '1' || isMobileUA || isNarrow) {
      window.location.replace('/mobile-home.html');
    }
  }, [pathname]);

  return null;
}
