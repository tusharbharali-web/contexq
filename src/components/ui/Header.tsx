'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import coinData from "@/data/coin-slices.json";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePlatform, setMobilePlatform] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Hide the header "Get Started" CTA whenever an embedded page's CTA is in view.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e?.data?.type === 'cta-visible') setCtaVisible(!!e.data.visible);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);
  // Reset when route changes
  useEffect(() => {
    setCtaVisible(false);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Check for mobile parameter immediately without waiting for mount
  const isMobile = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('mobile') === '1';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Publish the header's live height as --site-header-height so page content can
  // start below the fixed header (its height changes when the nav wraps).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    // Measure the bar only (first child), not the open mobile menu, so opening the menu
    // never moves page content.
    const bar = (el.firstElementChild as HTMLElement | null) ?? el;
    const publish = () => document.documentElement.style.setProperty('--site-header-height', `${bar.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(bar);
    return () => ro.disconnect();
  }, [isMobile, pathname]);

  // Mobile menu: full-screen overlay. While open the page behind can't scroll; it closes
  // on navigation (effect above), on Escape and when the window grows to the desktop nav.
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => { if (mq.matches) setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [mobileOpen]);

  // Get Platform, Solutions and Industries data from JSON
  const platformData = coinData.slices.find((slice: any) => slice.title === "Platform");
  const platformButtons = platformData?.buttons || [];

  const solutionsData = coinData.slices.find((slice: any) => slice.title === "Solutions");
  const solutionsButtons = solutionsData?.buttons || [];

  const industriesData = coinData.slices.find((slice: any) => slice.title === "Industries");
  const industriesButtons = industriesData?.buttons || [];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Dispatch custom event to reset 3D scene
      window.dispatchEvent(new CustomEvent('reset3dScene'));
    }
  };

  // Show back button on mobile subpages
  if (isMobile && pathname !== '/') {
    const handleBack = () => {
      window.history.back();
    };

    return (
      <header ref={headerRef} suppressHydrationWarning className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050F1C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors cursor-pointer bg-none border-none p-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </header>
    );
  }

  return (
    <header
      ref={headerRef}
      suppressHydrationWarning
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        pathname === '/' && !scrolled && !mobileOpen
          ? 'bg-transparent'
          : 'backdrop-blur-md bg-[#050F1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={handleLogoClick}>
          <img
            src="/assets/icons/logo_low.png"
            alt="ContexQ Logo"
            className="h-11 w-auto block"
            width={44}
            height={44}
          />
        </Link>

        {/* Mobile/tablet hamburger - visible below lg (the full nav needs ~1000px) */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation - middle links hidden on homepage hero (pie provides them); CTA + logo always visible */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* The center links fade out on homepage hero; the Get Started CTA stays visible */}
          <div
            className="flex items-center gap-6 xl:gap-8 transition-all duration-500"
            style={{
              opacity: pathname === '/' && !scrolled ? 0 : 1,
              pointerEvents: pathname === '/' && !scrolled ? 'none' : 'auto',
              transform: pathname === '/' && !scrolled ? 'translateY(-10px)' : 'translateY(0)',
            }}
          >
          <Link
            href="/"
            className="text-base text-white hover:text-white transition-colors relative group"
            onClick={handleLogoClick}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>
          {/* Platform Dropdown */}
          <div className="relative group">
            <button
              className="text-base text-white hover:text-white transition-colors relative flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              Platform
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
            <div className="absolute left-0 mt-0 w-64 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 bg-[#081A2E] border border-white/10">
              {platformButtons.map((button: any) => (
                <Link
                  key={button.slug}
                  href={`/Platform/${button.slug}`}
                  className="block px-4 py-2 transition-colors text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              className="text-base text-white hover:text-white transition-colors relative flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
            <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 bg-[#081A2E] border border-white/10">
              {solutionsButtons.map((button: any) => (
                <Link
                  key={button.slug}
                  href={`/solutions/${button.slug}`}
                  className="block px-4 py-2 transition-colors text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative group">
            <button
              className="text-base text-white hover:text-white transition-colors relative flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
            <div className="absolute left-0 mt-0 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 bg-[#081A2E] border border-white/10">
              {industriesButtons.map((button: any) => (
                <Link
                  key={button.slug}
                  href={`/Industries/${button.slug}`}
                  className="block px-4 py-2 transition-colors text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            className="text-base text-white hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/careers"
            className="text-base text-white hover:text-white transition-colors relative group"
          >
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>

          </div>
          {/* CTA Button - always visible so user always has an action */}
          <div
            className="ml-4 pl-4 border-l border-white/10 transition-opacity duration-300"
            style={{
              opacity: ctaVisible ? 0 : 1,
              pointerEvents: ctaVisible ? 'none' : 'auto',
            }}
            aria-hidden={ctaVisible}
          >
            <Link href="/contact" className="inline-block whitespace-nowrap px-6 py-2 rounded-lg bg-[#2F86FF] hover:bg-[#5BA0FF] active:bg-[#1F6FEB] text-white font-medium text-base hover:shadow-lg hover:shadow-[#2F86FF]/40 transition-all duration-300 hover:scale-105">
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 bg-[#050F1C] border-t border-white/10 overflow-y-auto overscroll-contain"
          style={{ top: 'var(--site-header-height, 76px)', height: 'calc(100dvh - var(--site-header-height, 76px))', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            <Link href="/" className="py-3 text-white text-base border-b border-white/5">Home</Link>

            <button
              onClick={() => setMobilePlatform((v) => !v)}
              className="flex justify-between items-center py-3 text-white text-base border-b border-white/5"
            >
              Platform
              <svg className={`w-4 h-4 transition-transform ${mobilePlatform ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobilePlatform && (
              <div className="pl-4 pb-2 border-b border-white/5 flex flex-col">
                {platformButtons.map((button: any) => (
                  <Link key={button.slug} href={`/Platform/${button.slug}`} className="py-2 text-sm text-gray-300">
                    {button.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileSolutions((v) => !v)}
              className="flex justify-between items-center py-3 text-white text-base border-b border-white/5"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileSolutions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileSolutions && (
              <div className="pl-4 pb-2 border-b border-white/5 flex flex-col">
                {solutionsButtons.map((button: any) => (
                  <Link key={button.slug} href={`/solutions/${button.slug}`} className="py-2 text-sm text-gray-300">
                    {button.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileIndustries((v) => !v)}
              className="flex justify-between items-center py-3 text-white text-base border-b border-white/5"
            >
              Industries
              <svg className={`w-4 h-4 transition-transform ${mobileIndustries ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileIndustries && (
              <div className="pl-4 pb-2 border-b border-white/5 flex flex-col">
                {industriesButtons.map((button: any) => (
                  <Link key={button.slug} href={`/Industries/${button.slug}`} className="py-2 text-sm text-gray-300">
                    {button.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" className="py-3 text-white text-base border-b border-white/5">About</Link>
            <Link href="/careers" className="py-3 text-white text-base border-b border-white/5">Careers</Link>

            <Link href="/contact" className="mt-4 inline-block px-6 py-3 rounded-lg bg-[#2F86FF] hover:bg-[#5BA0FF] active:bg-[#1F6FEB] text-white font-medium text-base text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}