'use client';

import Link from 'next/link';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FAQ_SECTIONS } from './faq-data';
import './faq.css';

const NODES = ['Customer records', 'Business systems', 'External signals', 'Hidden relationships', 'Risk intelligence', 'Growth opportunity'];
const RINGS = [88, 69, 54, 43];
const MAIL =
  'mailto:inquiry@contexq.com?subject=' +
  encodeURIComponent('Question from the ContexQ FAQ') +
  '&body=' +
  encodeURIComponent("Hi ContexQ team,\n\nI was reading your FAQ and would like to discuss how ContexQ could help us.\n\nName:\nCompany:\nRole:\nMy question:\n\nThanks,");

function HeroVisual() {
  const visRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<{ w: number; h: number; lines: string[] } | null>(null);

  useEffect(() => {
    const vis = visRef.current;
    if (!vis) return;
    const draw = () => {
      const W = vis.clientWidth, H = vis.clientHeight;
      if (!W || !H) return;
      const s = Math.min(W / 480, H / 360), cx = W / 2, cy = H / 2;
      const lines = [...vis.querySelectorAll<HTMLElement>('.v-node')].map((n) => {
        const x = n.offsetLeft, y = n.offsetTop, w = n.offsetWidth, h = n.offsetHeight;
        const left = x + w / 2 < cx;
        const ax = left ? x + w : x, ay = y + h / 2;
        const dx = ax - cx, dy = ay - cy, d = Math.hypot(dx, dy) || 1, r0 = RINGS[1] * s;
        return `M${cx + (dx / d) * r0} ${cy + (dy / d) * r0} L${ax} ${ay}`;
      });
      setGeo({ w: W, h: H, lines });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(vis);
    document.fonts?.ready.then(draw);
    return () => ro.disconnect();
  }, []);

  const s = geo ? Math.min(geo.w / 480, geo.h / 360) : 1;
  const cx = geo ? geo.w / 2 : 240, cy = geo ? geo.h / 2 : 180;
  return (
    <div aria-hidden="true" className="visual hero-art" ref={visRef}>
      <svg viewBox={`0 0 ${geo?.w ?? 480} ${geo?.h ?? 360}`} preserveAspectRatio="none" role="presentation">
        <g>{geo?.lines.map((d, i) => <path key={i} className="v-line highlight" d={d} pathLength={1} />)}</g>
        {['circle c1', 'circle c2', 'circle c3', 'origin'].map((c, i) => (
          <circle key={c} className={c} cx={cx} cy={cy} r={RINGS[i] * s} />
        ))}
      </svg>
      <div className="v-title">
        <img alt="ContexQ" className="hero-logo" src="/assets/icons/logo_low.png" width={96} height={24} />
      </div>
      {NODES.map((n, i) => <div key={n} className={`v-node n${i + 1}`}>{n}</div>)}
    </div>
  );
}

export default function FaqView() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>('');
  const [showTop, setShowTop] = useState(false);
  const [nav, setNav] = useState({ prev: false, next: true });
  const searchRef = useRef<HTMLInputElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);

  const terms = useMemo(() => query.toLocaleLowerCase().trim().split(/\s+/u).filter(Boolean), [query]);
  const searching = terms.length > 0;
  const visible = useMemo(() => {
    const out: Record<string, Set<string>> = {};
    for (const sec of FAQ_SECTIONS) {
      out[sec.id] = new Set(
        sec.items
          .filter((it) => {
            const hay = `${it.q} ${it.a} ${sec.title} ${sec.group}`.toLocaleLowerCase();
            return terms.every((t) => hay.includes(t));
          })
          .map((it) => it.id),
      );
    }
    return out;
  }, [terms]);
  const matched = Object.values(visible).reduce((n, v) => n + v.size, 0);

  // Active topic while scrolling.
  useEffect(() => {
    if (searching) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        const found = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (found.length) setActive(found[0].target.id);
      },
      { rootMargin: '-140px 0px -58% 0px', threshold: 0 },
    );
    document.querySelectorAll('.cqfaq .faq-section').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [searching]);

  // Keep the active topic chip in view inside the scroller.
  useEffect(() => {
    const sc = scrollerRef.current;
    const el = sc?.querySelector<HTMLElement>(`[data-target="${active}"]`);
    if (!sc || !el) return;
    const l = el.offsetLeft - sc.offsetLeft, r = l + el.offsetWidth;
    if (l < sc.scrollLeft || r > sc.scrollLeft + sc.clientWidth) sc.scrollTo({ left: l - 24, behavior: 'smooth' });
  }, [active]);

  // Back to top, scroller chevrons, "/" and Escape shortcuts, deep links.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    const sc = scrollerRef.current;
    const upd = () => {
      if (!sc) return;
      const max = sc.scrollWidth - sc.clientWidth;
      setNav({ prev: sc.scrollLeft > 2, next: max > 2 && sc.scrollLeft < max - 2 });
    };
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement | null)?.tagName ?? '';
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(tag) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('');
        searchRef.current?.blur();
      }
    };
    const openHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const t = id && document.getElementById(id);
      if (t instanceof HTMLDetailsElement) {
        t.open = true;
        t.scrollIntoView({ block: 'start' });
      }
    };
    onScroll();
    upd();
    openHash();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', upd);
    window.addEventListener('hashchange', openHash);
    document.addEventListener('keydown', onKey);
    sc?.addEventListener('scroll', upd, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', upd);
      window.removeEventListener('hashchange', openHash);
      document.removeEventListener('keydown', onKey);
      sc?.removeEventListener('scroll', upd);
    };
  }, []);

  const step = (d: number) => {
    const sc = scrollerRef.current;
    if (sc) sc.scrollBy({ left: d * Math.max(160, sc.clientWidth * 0.7), behavior: 'smooth' });
  };
  const jump = useCallback((id: string) => {
    setQuery('');
    setActive(id);
    lockRef.current = true;
    setTimeout(() => { lockRef.current = false; }, 900);
  }, []);

  // Results sit below the hero, so typing alone changes nothing on screen: Enter, the
  // keyboard's Search key or "View results" scrolls to them (and closes the phone keyboard).
  const showResults = useCallback(() => {
    if (!terms.length) return;
    searchRef.current?.blur();
    const zone = document.querySelector<HTMLElement>('.cqfaq .faq-zone');
    if (!zone) return;
    const hdr = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-height')) || 76;
    const bar = document.querySelector<HTMLElement>('.cqfaq .topic-nav')?.offsetHeight ?? 0;
    window.scrollTo({ top: zone.getBoundingClientRect().top + window.scrollY - hdr - bar + 1, behavior: 'smooth' });
  }, [terms]);

  let lastGroup = '';
  return (
    <div className="cqfaq">
      <section aria-labelledby="hero-heading" className="hero">
        <div className="wrap inner">
          <div className="hero-copy">
            <h1 id="hero-heading">Questions answered. Connections made clear.</h1>
            <p className="hero-desc">
              Explore how ContexQ works, where it fits and what connected intelligence can mean for your business. Find answers by topic, solution or industry.
            </p>
            <form
              className="search-wrap"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                showResults();
              }}
            >
              <svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" viewBox="0 0 24 24" width="20">
                <circle cx="10.8" cy="10.8" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>
              <label className="sr-only" htmlFor="faq-search">Search all frequently asked questions</label>
              <input
                ref={searchRef}
                aria-controls="faq-sections"
                autoComplete="off"
                id="faq-search"
                placeholder="Search questions, e.g. supplier risk, KYC, telecom"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {searching && (
                <button className="search-clear" type="button" onClick={() => { setQuery(''); searchRef.current?.focus(); }}>
                  Clear
                </button>
              )}
            </form>
            {searching && (
              <p className="search-status" aria-live="polite">
                {matched === 0 ? 'No matching questions found.' : `${matched} matching ${matched === 1 ? 'answer' : 'answers'}.`}{' '}
                {matched > 0 && (
                  <button type="button" onClick={showResults}>
                    View results ↓
                  </button>
                )}
              </p>
            )}
          </div>
          <HeroVisual />
        </div>
      </section>

      <nav aria-label="Jump to FAQ section" className="topic-nav">
        <div className="wrap bar">
          <span className="bar-label">Jump to</span>
          <button aria-label="Scroll sections left" className="nav-chevron" hidden={!nav.prev} type="button" onClick={() => step(-1)}>‹</button>
          <div className={`nav-scroller${nav.prev ? ' fade-l' : ''}${nav.next ? ' fade-r' : ''}`} ref={scrollerRef}>
            {FAQ_SECTIONS.map((sec, i) => (
              <Fragment key={sec.id}>
                {i > 0 && FAQ_SECTIONS[i - 1].group !== sec.group && <span aria-hidden="true" className="nav-separator" />}
                <a
                  className={`nav-link${active === sec.id ? ' active' : ''}`}
                  aria-current={active === sec.id ? 'location' : undefined}
                  data-target={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => jump(sec.id)}
                >
                  {sec.nav}
                </a>
              </Fragment>
            ))}
          </div>
          <button aria-label="Scroll sections right" className="nav-chevron" hidden={!nav.next} type="button" onClick={() => step(1)}>›</button>
        </div>
      </nav>

      <main id="main">
        <section className="faq-contents" hidden={searching}>
          <div className="wrap">
            <div className="contents-head">
              <h2>Explore the answers that matter to you.</h2>
              <p>Choose an area below or use the topic bar to jump directly to a solution or industry.</p>
            </div>
            <div className="quick-grid">
              {[
                ['platform', 'The platform', 'Entity resolution, connected intelligence, data and integration.'],
                ['supply-chain', 'Business use cases', 'Supply chain, KYC, AML, fraud, customer intelligence and risk.'],
                ['banking', 'Your industry', 'Banking, manufacturing, e-commerce, insurance, telecom and government.'],
              ].map(([id, h, p]) => (
                <a key={id} className="quick-card" href={`#${id}`} onClick={() => jump(id)}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="faq-zone">
          <div className="wrap" id="faq-sections">
            {FAQ_SECTIONS.map((sec) => {
              const vis = visible[sec.id];
              if (!vis.size) return null;
              const showGroup = !searching && sec.group !== lastGroup;
              lastGroup = sec.group;
              return (
                <Fragment key={sec.id}>
                  {showGroup && <div className="group-label">{sec.group}</div>}
                  <section aria-labelledby={`heading-${sec.id}`} className="faq-section" id={sec.id}>
                    <div className="section-intro">
                      <h2 id={`heading-${sec.id}`}>{sec.title}</h2>
                      <p>{sec.intro}</p>
                      <Link prefetch={false} className="learn-more" href={sec.link.href}>{sec.link.label}</Link>
                    </div>
                    <div className="faq-list">
                      {sec.items.filter((it) => vis.has(it.id)).map((it) => (
                        <details key={`${it.id}${searching && matched <= 6 ? '-open' : ''}`} className="faq-item" id={it.id} open={searching && matched <= 6 ? true : undefined}>
                          <summary>{it.q}</summary>
                          <div className="faq-answer"><p>{it.a}</p></div>
                        </details>
                      ))}
                    </div>
                  </section>
                </Fragment>
              );
            })}
            {matched === 0 && (
              <div className="no-results">
                <div className="icon" aria-hidden="true">⌕</div>
                <h3>No matching questions found.</h3>
                <p>Try a broader term or choose a topic from the navigation.</p>
                <button type="button" onClick={() => { setQuery(''); searchRef.current?.focus(); }}>Show all questions</button>
              </div>
            )}
          </div>
        </div>
      </main>

      <section className="action-panel">
        <div className="wrap action-inner">
          <div className="action-copy">
            <h2>See what ContexQ could reveal.</h2>
            <p>Bring a specific risk, operational challenge or growth opportunity. We can discuss where connected intelligence may help.</p>
          </div>
          <div className="acts">
            <Link prefetch={false} className="cq-cta" href="/contact">Talk to the team</Link>
            <p className="cq-mail-line">
              {'or mail us at '}
              <a href={MAIL}>inquiry@contexq.com</a>
            </p>
          </div>
        </div>
      </section>

      <button
        aria-label="Back to top"
        className={`top-btn${showTop ? ' show' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}
      >
        ↑ Back to top
      </button>
    </div>
  );
}
