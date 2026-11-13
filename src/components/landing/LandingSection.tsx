/*
 * LandingSection - Next.js 16 / React 19 port of "ContexQ-Landing-Page-Final-V1.html".
 *
 * Server Component: the source HTML has no behavioural <script> (only the Tailwind Play CDN
 * and its config), so no 'use client' subcomponent is needed. Hover effects are pure CSS.
 *
 * Tailwind v3 (Play CDN) -> v4 differences handled for pixel parity:
 *  1. `shadow-sm` was renamed in v4: v3 `shadow-sm` == v4 `shadow-xs`. Converted in markup.
 *  2. v4's default palette is OKLCH; v3 used hex. The default palette colours used here
 *     (slate-100/200/300/400, amber-50/200, blue-50) are pinned to their v3 hex values,
 *     scoped to this component via the [data-landing] wrapper in globals.css.
 *  3. v4 changed the default border colour from gray-200 to currentColor. A v3-compatible
 *     default is restored, scoped to [data-landing], in @layer base so utilities still win.
 *  4. v4's `space-y-*` puts the gap on margin-bottom instead of v3's margin-top, so a child's
 *     own `mb-2` no longer collapses with the 12px gap. "Your Existing Systems" uses `mb-3`
 *     (was `mb-2`) to reproduce v3's resulting 12px spacing.
 *  5. Default font-size line-heights are pinned to v3's rem values (scoped), because v4's
 *     unitless ratios change the inherited line-height of arbitrary sizes like text-[11px].
 *  6. Plugins `forms` and `container-queries` from the CDN URL are not needed: the markup
 *     contains no form controls and no @container utilities.
 *
 * Not reproduced (no Tailwind utility involved, noted for completeness):
 *  - `<html class="scroll-smooth">`: page-level, outside this component. Add `scroll-smooth`
 *    to <html> in layout.tsx if in-page anchor scrolling should animate.
 *  - v4 gates `hover:` / `group-hover:` behind `@media (hover: hover)`. Desktop rendering is
 *    identical; on touch-only devices hover styles no longer "stick" after tap (v3 did).
 *  - The commented-out <header> in the source HTML stays omitted, as it renders nothing.
 *
 * No CSS module was required: every utility in the source compiles under Tailwind v4.
 */

import Link from "next/link";
import { INQUIRY_EMAIL } from "@/lib/contact";

export default function LandingSection() {
  return (
    <div
      data-landing=""
      className="dark bg-surface text-text-on-dark font-body-md text-body-md antialiased selection:bg-status-blue selection:text-white"
    >
      {/* Inline SVG defs container from the source HTML, rendered once */}
      <svg
        className="inline-defs-container"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      />
      {/* 2. SECTION 1: HERO (Dark Navy Surface) */}
      {/* 3. SECTION 2: WHAT CONTEXQ IS (Crisp Light Band Surface) */}
      <section className="bg-surface-white text-text-on-light py-16 md:py-24 border-b border-border-light-subtle">
        <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-light font-semibold tracking-tight mb-4">One connected view across your organisation.</h2>
            <h3 className="font-headline-sm text-headline-sm text-text-muted-on-light font-medium mb-5">
              The same person, scattered across systems. Brought together into one picture.
            </h3>
            <p className="font-body-lg text-body-lg text-text-muted-on-light leading-relaxed">
              Customer information is often split across KYC, documents, transactions, and contact systems, each holding only part of the story. ContexQ connects these sources and brings them together into a single, resolved view of each customer, so your teams work from the full picture.
            </p>
          </div>
          {/* Before & After Static Topology Diagram */}
          <div className="w-full">
            <div className="grid grid-cols-1 items-stretch bg-light-band p-6 md:p-10 rounded-2xl border border-border-light-subtle lg:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span className="font-label-caps text-label-caps text-text-muted-on-light uppercase tracking-wider font-semibold">Fragmented across systems</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-text-muted-on-light border border-border-light-subtle">Unlinked</span>
                </div>
                <div className="flex-1 bg-surface-white/80 rounded-xl p-5 border border-border-light-subtle relative flex flex-col justify-between gap-3 overflow-hidden">
                  <div className="p-3 rounded-lg bg-light-band border border-border-light-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-semibold text-text-on-light flex items-center gap-1.5">
                        <span className="cq-symbols text-[16px] text-text-muted-on-light">badge</span>
                        KYC system
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-text-muted-on-light">Pending check</span>
                    </div>
                    <div className="text-xs text-text-muted-on-light flex items-center justify-between">
                      <span className="">
                        Name:{" "}
                        <strong className="text-text-on-light font-medium">J. Smith</strong>
                      </span>
                      <span className="text-[11px] text-text-muted-on-light">Verification queue</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center py-0.5 text-text-muted-on-light/60 gap-1.5">
                    <span className="border-t border-dashed border-slate-300 w-12" />
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">?</span>
                    <span className="border-t border-dashed border-slate-300 w-12" />
                  </div>
                  <div className="p-3 rounded-lg bg-light-band border border-border-light-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-semibold text-text-on-light flex items-center gap-1.5">
                        <span className="cq-symbols text-[16px] text-text-muted-on-light">description</span>
                        Documents
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-text-muted-on-light">On file</span>
                    </div>
                    <div className="text-xs text-text-muted-on-light flex items-center justify-between">
                      <span className="">
                        Name:{" "}
                        <strong className="text-text-on-light font-medium">John Smith</strong>
                      </span>
                      <span className="text-[11px] text-text-muted-on-light">Passport, proof of address</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center py-0.5 text-text-muted-on-light/60 gap-1.5">
                    <span className="border-t border-dashed border-slate-300 w-12" />
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">?</span>
                    <span className="border-t border-dashed border-slate-300 w-12" />
                  </div>
                  <div className="p-3 rounded-lg bg-light-band border border-border-light-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-semibold text-text-on-light flex items-center gap-1.5">
                        <span className="cq-symbols text-[16px] text-text-muted-on-light">account_balance</span>
                        Core banking
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-text-muted-on-light">Active ledger</span>
                    </div>
                    <div className="text-xs text-text-muted-on-light flex items-center justify-between">
                      <span className="">
                        Name:{" "}
                        <strong className="text-text-on-light font-medium">Smith, John A.</strong>
                      </span>
                      <span className="text-[11px] text-text-muted-on-light">{"Account & counterparties"}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center py-0.5 text-text-muted-on-light/60 gap-1.5">
                    <span className="border-t border-dashed border-slate-300 w-12" />
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">?</span>
                    <span className="border-t border-dashed border-slate-300 w-12" />
                  </div>
                  <div className="p-3 rounded-lg bg-light-band border border-border-light-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-semibold text-text-on-light flex items-center gap-1.5">
                        <span className="cq-symbols text-[16px] text-text-muted-on-light">contacts</span>
                        CRM
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-text-muted-on-light">Client profile</span>
                    </div>
                    <div className="text-xs text-text-muted-on-light flex items-center justify-between">
                      <span className="">
                        Name:{" "}
                        <strong className="text-text-on-light font-medium">John Smith</strong>
                      </span>
                      <span className="text-[11px] text-text-muted-on-light">{"Contact & relationship notes"}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center py-0.5 text-text-muted-on-light/60 gap-1.5">
                    <span className="border-t border-dashed border-slate-300 w-12" />
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">?</span>
                    <span className="border-t border-dashed border-slate-300 w-12" />
                  </div>
                  <div className="p-3 rounded-lg bg-light-band border border-border-light-subtle">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-label-md font-semibold text-text-on-light flex items-center gap-1.5">
                        <span className="cq-symbols text-[16px] text-status-amber">flag</span>
                        Screening
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-amber-50 text-status-amber border border-amber-200/60">Watchlist scan</span>
                    </div>
                    <div className="text-xs text-text-muted-on-light flex items-center justify-between">
                      <span className="">
                        Name:{" "}
                        <strong className="text-text-on-light font-medium">J. A. Smith</strong>
                      </span>
                      <span className="text-[11px] text-text-muted-on-light">Flag review pending</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-status-blue animate-pulse" />
                    <span className="font-label-caps text-label-caps text-status-blue uppercase tracking-wider font-semibold">Connected into one resolved view</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-status-blue border border-status-blue/20">Single Picture</span>
                </div>
                <div className="flex-1 bg-surface-white rounded-xl p-5 md:p-6 border border-status-blue/30 shadow-xs relative flex flex-col md:flex-row items-center gap-5 justify-between">
                  <div className="flex flex-col items-center w-full py-2">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 w-full">
                      <div className="inline-flex items-center gap-2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-status-blue/20 text-xs font-medium text-text-on-light">
                        <span className="flex items-center gap-1.5">
                          <span className="cq-symbols text-[14px] text-status-blue">badge</span>
                          KYC
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-status-blue" />
                      </div>
                      <div className="inline-flex items-center gap-2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-status-blue/20 text-xs font-medium text-text-on-light">
                        <span className="flex items-center gap-1.5">
                          <span className="cq-symbols text-[14px] text-status-blue">description</span>
                          Docs
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-status-blue" />
                      </div>
                      <div className="inline-flex items-center gap-2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-status-blue/20 text-xs font-medium text-text-on-light">
                        <span className="flex items-center gap-1.5">
                          <span className="cq-symbols text-[14px] text-status-blue">account_balance</span>
                          Banking
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-status-blue" />
                      </div>
                      <div className="inline-flex items-center gap-2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-status-blue/20 text-xs font-medium text-text-on-light">
                        <span className="flex items-center gap-1.5">
                          <span className="cq-symbols text-[14px] text-status-blue">contacts</span>
                          CRM
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-status-blue" />
                      </div>
                      <div className="inline-flex items-center gap-2 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-blue-50/60 border border-status-blue/20 text-xs font-medium text-text-on-light">
                        <span className="flex items-center gap-1.5">
                          <span className="cq-symbols text-[14px] text-status-blue">flag</span>
                          Screening
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-status-blue" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full my-2">
                      <div className="w-px h-5 border-l-2 border-dashed border-status-blue/40" />
                      <span className="cq-symbols text-[16px] text-status-blue -my-1">arrow_downward</span>
                      <div className="w-20 h-20 rounded-full bg-status-blue flex flex-col items-center justify-center text-white shadow-lg shadow-status-blue/30 my-2 border-2 border-white/30">
                        <span className="cq-symbols text-[24px]">hub</span>
                        <span className="text-[11px] font-bold tracking-tight uppercase mt-0.5">ContexQ</span>
                      </div>
                      <div className="w-px h-5 border-l-2 border-dashed border-status-blue/40" />
                      <span className="cq-symbols text-[16px] text-status-blue -my-1">arrow_downward</span>
                    </div>
                    <div className="w-full max-w-md bg-surface-white rounded-2xl p-5 border border-border-light-subtle shadow-xs flex flex-col">
                      <div className="flex items-center justify-between pb-3.5 border-b border-border-light-subtle">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-status-blue/10 border border-status-blue/30 flex items-center justify-center text-status-blue shrink-0">
                            <span className="cq-symbols text-[20px]">person</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <h4 className="font-headline-sm text-headline-sm font-semibold text-text-on-light leading-snug whitespace-nowrap">John A. Smith</h4>
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-status-blue border border-status-blue/20 whitespace-nowrap">
                                <span className="w-1.0 h-1.0 rounded-full bg-status-blue" />
                                Resolved entity
                              </span>
                            </div>
                            <p className="text-xs text-text-muted-on-light mt-0.5">
                              Master entity ID:{" "}
                              <span className="font-medium text-text-on-light">#CTX-8902-JAS</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="divide-y divide-border-light-subtle py-1">
                        <div className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="cq-symbols text-[16px] text-text-muted-on-light">verified_user</span>
                            <span className="text-text-muted-on-light font-medium">Identity</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-on-light font-medium">Verified individual</span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-text-muted-on-light border border-border-light-subtle">KYC</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="cq-symbols text-[16px] text-text-muted-on-light">assignment</span>
                            <span className="text-text-muted-on-light font-medium">Documents</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-on-light font-medium">Passport verified</span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-text-muted-on-light border border-border-light-subtle">Docs</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="cq-symbols text-[16px] text-text-muted-on-light">account_tree</span>
                            <span className="text-text-muted-on-light font-medium">Accounts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-on-light font-medium">{"Primary checking & linked"}</span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-text-muted-on-light border border-border-light-subtle">Banking</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="cq-symbols text-[16px] text-text-muted-on-light">contacts</span>
                            <span className="text-text-muted-on-light font-medium">Contact</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-on-light font-medium">{"Unified phone & address"}</span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-text-muted-on-light border border-border-light-subtle">CRM</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2 text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="cq-symbols text-[16px] text-status-blue">shield</span>
                            <span className="text-text-muted-on-light font-medium">Risk flags</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-on-light font-medium">No active sanctions</span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-status-blue border border-status-blue/20">Screening</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-text-muted-on-light text-center mt-4">Illustrative example</p>
          </div>
        </div>
      </section>
      {/* 4. SECTION 3: THE CHALLENGE (Soft Slate Surface) */}
      <section className="bg-navy-900 text-text-on-dark py-14 md:py-20 border-b border-border-dark-subtle">
        <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          <div className="max-w-2xl mb-10 md:mb-12">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-dark font-semibold tracking-tight mb-3">Why connections get missed.</h2>
            <p className="font-body-lg text-body-lg text-text-muted-on-dark">
              The risks and opportunities that matter most are often several steps away.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card-dark rounded-2xl p-8 border border-border-dark-subtle shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-text-on-dark mb-6">
                  <span className="cq-symbols text-[24px]" data-icon="storage">storage</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-3 text-text-on-dark">System Teams</h3>
                <p className="font-body-md text-body-md text-text-muted-on-dark leading-relaxed">Data lives in silos, so no one sees the full picture.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-card-dark rounded-2xl p-8 border border-border-dark-subtle shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-text-on-dark mb-6">
                  <span className="cq-symbols text-[24px]" data-icon="link_off">link_off</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-3 text-text-on-dark">Hidden Proximity</h3>
                <p className="font-body-md text-body-md text-text-muted-on-dark leading-relaxed">Risk hides beyond your direct relationships.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-card-dark rounded-2xl p-8 border border-border-dark-subtle shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-text-on-dark mb-6">
                  <span className="cq-symbols text-[24px]" data-icon="search">search</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-3 text-text-on-dark">Investigation Burden</h3>
                <p className="font-body-md text-body-md text-text-muted-on-dark leading-relaxed">Finding alternatives or tracing links takes manual effort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. SECTION 4: WHAT CONTEXQ DOES (Pure White Background) */}
      <section className="bg-surface-white text-text-on-light py-16 md:py-24 border-b border-border-light-subtle" id="solutions">
        <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          <div className="max-w-2xl mb-10 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-light font-semibold tracking-tight mb-3">Solutions built on one connected foundation.</h2>
            <p className="font-body-lg text-body-lg text-text-muted-on-light">Intelligence for the decisions that matter.</p>
          </div>
          {/* 6-card grid (3x2 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { href: "/solutions/supply-chain-intelligence", icon: "account_tree", title: "Supply Chain Intelligence", desc: "See beyond direct suppliers and identify alternatives when you need them." },
              { href: "/solutions/kyc", icon: "badge", title: "KYC", desc: "Build a clearer understanding of who you are doing business with." },
              { href: "/solutions/fraud", icon: "shield", title: "Fraud", desc: "Spot suspicious patterns by connecting related activity." },
              { href: "/solutions/customer-intelligence", icon: "groups", title: "Customer Intelligence", desc: "Bring together a connected view of each customer relationship." },
              { href: "/solutions/risk", icon: "warning", title: "Risk Management", desc: "Understand where exposure builds up across your network." },
              { href: "/solutions/aml", icon: "manage_search", title: "Financial Crime Intelligence (AML)", desc: "Trace hidden links to support investigations and compliance." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="p-8 rounded-2xl border border-border-light-subtle hover:border-status-blue/40 transition-all duration-200 flex flex-col justify-between group bg-surface-white">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-status-blue/10 flex items-center justify-center text-status-blue mb-6">
                    <span className="cq-symbols text-[24px]" data-icon={s.icon}>{s.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold mb-2 text-text-on-light">{s.title}</h3>
                  <p className="font-body-md text-body-md text-text-muted-on-light mb-6 leading-relaxed">{s.desc}</p>
                </div>
                <span className="inline-flex items-center text-status-blue font-label-lg text-label-lg group-hover:translate-x-1 transition-transform duration-150">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 6. SECTION 5: INDUSTRIES (Soft Background) */}
      <section className="bg-navy-900 text-text-on-dark py-16 md:py-24 border-b border-border-dark-subtle" id="industries">
        <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-dark font-semibold tracking-tight mb-3">Built for organisations where connections matter.</h2>
            <p className="font-body-lg text-body-lg text-text-muted-on-dark">
              Wherever relationships drive risk or opportunity, context makes the difference.
            </p>
          </div>
          {/* Top Featured Large Card: Financial Services */}
          <Link href="/Industries/finance" className="block relative bg-card-dark rounded-2xl p-8 md:p-10 border-2 border-white/20 mb-8 shadow-xs overflow-hidden hover:border-status-blue/60 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <div className="w-12 h-12 rounded-xl bg-status-blue/10 flex items-center justify-center text-status-blue mb-4">
                  <span className="cq-symbols text-[24px]" data-icon="account_balance">account_balance</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-dark font-semibold mb-3">Financial Services</h3>
                <p className="font-body-lg text-body-lg text-text-muted-on-dark leading-relaxed">
                  Connect counterparties, suppliers, and customers into one risk picture.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <div className="w-36 h-28 bg-navy-800 rounded-xl border border-border-dark-subtle flex items-center justify-center p-3">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="40" fill="#141E2E" r="8" stroke="#328CFF" strokeWidth="1.5" />
                    <circle cx="60" cy="20" fill="#328CFF" r="9" />
                    <circle cx="60" cy="60" fill="#141E2E" r="7" stroke="#9DB0C8" strokeWidth="1.5" />
                    <circle cx="100" cy="40" fill="#141E2E" r="8" stroke="#328CFF" strokeWidth="1.5" />
                    <line stroke="#328CFF" strokeWidth="1.5" x1="28" x2="51" y1="40" y2="24" />
                    <line stroke="#9DB0C8" strokeWidth="1" x1="28" x2="53" y1="40" y2="58" />
                    <line stroke="#328CFF" strokeWidth="1.5" x1="69" x2="92" y1="23" y2="38" />
                    <line stroke="#9DB0C8" strokeWidth="1" x1="67" x2="92" y1="59" y2="42" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          {/* Below: Row of 5 smaller equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { href: "/Industries/mfg", icon: "precision_manufacturing", title: "Manufacturing", desc: "Understand supplier networks and dependencies." },
              { href: "/Industries/ecommerce", icon: "storefront", title: "E-commerce", desc: "Connect customers, sellers, and activity to reduce abuse." },
              { href: "/Industries/insurance", icon: "policy", title: "Insurance", desc: "Link policies, claims, and entities for better assessment." },
              { href: "/Industries/telco", icon: "cell_tower", title: "Telecom", desc: "Make sense of complex customer and network relationships." },
              { href: "/Industries/public-sector", icon: "account_balance", title: "Public Sector", desc: "Bring clarity to complex, interconnected data." },
            ].map((i) => (
              <Link key={i.href} href={i.href} className="bg-card-dark p-6 rounded-xl border border-border-dark-subtle hover:border-status-blue/60 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-text-on-dark mb-4">
                    <span className="cq-symbols text-[20px]" data-icon={i.icon}>{i.icon}</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm font-semibold mb-2 text-text-on-dark">{i.title}</h4>
                  <p className="font-body-sm text-body-sm text-text-muted-on-dark">{i.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* 7. SECTION 6: HOW IT HELPS YOUR BUSINESS (White Surface) */}
      <section className="bg-surface-white text-text-on-light py-16 md:py-24 border-b border-border-light-subtle relative overflow-hidden" id="benefits">
        {/* Subtle ambient abstract network-graph SVG backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
          <svg className="w-full h-full max-w-[1240px]" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <line stroke="#328CFF" strokeDasharray="4 4" strokeWidth="1.5" x1="200" x2="600" y1="220" y2="220" />
            <line stroke="#328CFF" strokeDasharray="4 4" strokeWidth="1.5" x1="600" x2="1000" y1="220" y2="220" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="200" x2="350" y1="220" y2="120" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="600" x2="750" y1="220" y2="100" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="1000" x2="1120" y1="220" y2="140" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="200" x2="120" y1="220" y2="320" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="600" x2="600" y1="220" y2="340" />
            <line stroke="#9DB0C8" strokeWidth="1" x1="1000" x2="920" y1="220" y2="330" />
            <circle cx="200" cy="220" fill="#328CFF" r="6" />
            <circle cx="600" cy="220" fill="#328CFF" r="6" />
            <circle cx="1000" cy="220" fill="#328CFF" r="6" />
            <circle cx="350" cy="120" fill="#9DB0C8" r="4" />
            <circle cx="750" cy="100" fill="#9DB0C8" r="4" />
            <circle cx="1120" cy="140" fill="#9DB0C8" r="4" />
            <circle cx="120" cy="320" fill="#9DB0C8" r="4" />
            <circle cx="600" cy="340" fill="#9DB0C8" r="4" />
            <circle cx="920" cy="330" fill="#9DB0C8" r="4" />
          </svg>
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-light font-semibold tracking-tight mb-3">Clearer visibility. Better decisions.</h2>
            <p className="font-body-lg text-body-lg text-text-muted-on-light">Designed to help teams work with context, not guesswork.</p>
          </div>
          <div className="relative mb-12">
            <div className="hidden md:block absolute top-[92px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-status-blue/30 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
              <div className="flex flex-col h-full">
                <div className="flex-1 bg-surface-white rounded-2xl border border-slate-200/80 shadow-xs p-8 flex flex-col justify-between relative transition-all duration-200 hover:border-status-blue/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-status-blue/10 flex items-center justify-center text-status-blue">
                      <span className="cq-symbols text-[26px]">hub</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-status-blue border border-status-blue/20">Step 1</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-on-light mb-2">Connect</h3>
                    <p className="font-body-md text-body-md text-text-muted-on-light leading-relaxed">
                      Link scattered internal and external records into cohesive entity graphs.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-5 rounded-xl bg-light-band border border-border-light-subtle flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-status-blue/10 flex items-center justify-center text-status-blue shrink-0 mt-0.5">
                    <span className="cq-symbols text-[14px]">visibility</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold text-text-on-light">See hidden relationships</h4>
                    <p className="font-body-sm text-body-sm text-text-muted-on-light mt-0.5 leading-snug">Find connections that were previously hard to spot.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex-1 bg-surface-white rounded-2xl border border-slate-200/80 shadow-xs p-8 flex flex-col justify-between relative transition-all duration-200 hover:border-status-blue/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-status-blue/10 flex items-center justify-center text-status-blue">
                      <span className="cq-symbols text-[26px]">insights</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-status-blue border border-status-blue/20">Step 2</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-on-light mb-2">Understand</h3>
                    <p className="font-body-md text-body-md text-text-muted-on-light leading-relaxed">
                      Surface indirect exposures, clusters of behaviour and multi-tier dependencies.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-5 rounded-xl bg-light-band border border-border-light-subtle flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-status-blue/10 flex items-center justify-center text-status-blue shrink-0 mt-0.5">
                    <span className="cq-symbols text-[14px]">manage_search</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold text-text-on-light">Investigate with full context</h4>
                    <p className="font-body-sm text-body-sm text-text-muted-on-light mt-0.5 leading-snug">Work from connected information in one place.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex-1 bg-surface-white rounded-2xl border border-slate-200/80 shadow-xs p-8 flex flex-col justify-between relative transition-all duration-200 hover:border-status-blue/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-status-blue/10 flex items-center justify-center text-status-blue">
                      <span className="cq-symbols text-[26px]">verified</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-status-blue border border-status-blue/20">Step 3</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-on-light mb-2">Act</h3>
                    <p className="font-body-md text-body-md text-text-muted-on-light leading-relaxed">
                      Support compliance reviews and risk mitigation with clear, traceable context.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-5 rounded-xl bg-light-band border border-border-light-subtle flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-status-blue/10 flex items-center justify-center text-status-blue shrink-0 mt-0.5">
                    <span className="cq-symbols text-[14px]">task_alt</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg font-bold text-text-on-light">Decide with confidence</h4>
                    <p className="font-body-sm text-body-sm text-text-muted-on-light mt-0.5 leading-snug">Make better-informed decisions with fuller context.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-light-band border border-border-light-subtle shadow-xs">
              <span className="w-6 h-6 rounded-full bg-status-blue/10 flex items-center justify-center text-status-blue shrink-0">
                <span className="cq-symbols text-[16px]">bolt</span>
              </span>
              <span className="font-body-md text-body-md text-text-on-light font-medium">Less manual effort spent piecing data together.</span>
            </div>
          </div>
        </div>
      </section>
      {/* 8. SECTION 7: HOW IT FITS IN (Soft Surface with Architecture Flow Diagram) */}
      <section className="bg-navy-900 text-text-on-dark py-14 md:py-20 border-b border-border-dark-subtle" id="architecture">
        <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-on-dark font-semibold tracking-tight mb-3">Works alongside what you already have.</h2>
            <h3 className="font-headline-sm text-headline-sm text-text-muted-on-dark font-medium mb-4">Add context to your existing systems.</h3>
            <p className="font-body-lg text-body-lg text-text-muted-on-dark leading-relaxed">
              ContexQ is designed to complement your current tools rather than replace them, bringing together information you already hold and adding the connections between it.
            </p>
          </div>
          {/* Architecture Flow Diagram in Dark Mode */}
          <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-border-dark-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Source Blocks (Existing Systems) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="font-label-caps text-label-caps text-text-muted-on-dark uppercase tracking-wider block mb-3">Your Existing Systems</span>
                <div className="p-3.5 rounded-lg bg-surface-container border border-border-dark-subtle flex items-center justify-between">
                  <span className="font-label-lg text-label-lg font-medium text-text-on-dark">Core Banking / ERP</span>
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container border border-border-dark-subtle flex items-center justify-between">
                  <span className="font-label-lg text-label-lg font-medium text-text-on-dark">{"CRM & Client Records"}</span>
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                </div>
                <div className="p-3.5 rounded-lg bg-surface-container border border-border-dark-subtle flex items-center justify-between">
                  <span className="font-label-lg text-label-lg font-medium text-text-on-dark">{"External Watchlists & Registries"}</span>
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                </div>
              </div>
              {/* Connector Vector */}
              <div className="lg:col-span-1 flex justify-center text-status-blue">
                {/* one arrow: points right beside the boxes, turned to point down when they stack */}
                <span className="cq-symbols text-[28px] rotate-90 lg:rotate-0" data-icon="arrow_forward">arrow_forward</span>
              </div>
              {/* ContexQ Intelligence Engine Node */}
              <div className="lg:col-span-3 bg-navy-900 text-white p-6 rounded-xl border border-status-blue/40 text-center shadow-lg relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-status-blue/20 mx-auto mb-3 flex items-center justify-center text-status-blue">
                  <span className="cq-symbols text-[22px]" data-icon="hub">hub</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold mb-1 text-white">ContexQ Engine</h4>
                <p className="font-body-sm text-body-sm text-text-muted-on-dark">{"Entity Resolution & Graph Correlation"}</p>
              </div>
              {/* Connector Vector */}
              <div className="lg:col-span-1 flex justify-center text-status-blue">
                {/* one arrow: points right beside the boxes, turned to point down when they stack */}
                <span className="cq-symbols text-[28px] rotate-90 lg:rotate-0" data-icon="arrow_forward">arrow_forward</span>
              </div>
              {/* Actionable Connected View (Insights) */}
              <div className="lg:col-span-3 p-6 rounded-xl bg-surface-container border border-border-dark-subtle text-center">
                <div className="w-10 h-10 rounded-full bg-status-blue/20 mx-auto mb-3 flex items-center justify-center text-status-blue">
                  <span className="cq-symbols text-[22px]" data-icon="visibility">visibility</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-semibold mb-1 text-text-on-dark">Insights</h4>
                <p className="font-body-sm text-body-sm text-text-muted-on-dark">Actionable connected view for operational clarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9. SECTION 8: CLOSING CALL TO ACTION (Light band) */}
      <section className="relative overflow-hidden bg-surface-white text-text-on-light py-16 md:py-32 border-b border-border-light-subtle" id="contact">
        <div className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold tracking-tight mb-4 max-w-3xl text-text-on-light">{"See what's connected in your world."}</h2>
            <p className="font-headline-sm text-headline-sm text-text-muted-on-light max-w-2xl">
              {"Talk to our team about how ContexQ could work for your organisation. Whether you're looking at supplier risk, customer due diligence, or financial crime, we'd be glad to hear what you're working on."}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <div className="flex flex-col items-center gap-4">
              <Link className="inline-flex items-center justify-center h-[52px] px-8 rounded-lg bg-status-blue hover:bg-accent-hover active:bg-accent-pressed transition-all duration-150 text-white font-label-lg text-label-lg font-semibold shadow-lg shadow-status-blue/20 cq-cta" href="/contact">Talk to the team</Link>
              <p className="font-body-sm text-body-sm text-text-muted-on-light">
                or mail us at{" "}
                <a href={"mailto:inquiry@contexq.com?subject=General%20enquiry&body=Hi%20ContexQ%20team%2C%0A%0AI%27d%20like%20to%20learn%20how%20ContexQ%20could%20help%20our%20organisation.%0A%0AName%3A%0ACompany%3A%0ARole%3A%0AWhat%20we%27re%20looking%20to%20solve%3A%0A%0AThanks%2C"} className="text-status-blue underline hover:text-accent-hover transition-colors">{INQUIRY_EMAIL}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 10. FOOTER (Shared Component Exact Anchors) */}
    </div>
  );
}
