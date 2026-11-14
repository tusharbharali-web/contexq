"use client";

// The coin's Team overlay: founder and advisor cards, each opening a profile dialog.
// Converted from team.html. Data lives in src/data/team.ts; styles in ./team-overlay.css
// (everything scoped under .cq-team / .cq-team-dialog).

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TEAM, COMPANY_LOGOS, type TeamMember } from "@/data/team";
import "./team-overlay.css";

const FONT_HREF = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";

let preloaded = false;
/**
 * Fetch everything the overlay shows (font + photos) ahead of time. Called when the
 * Team slice is clicked, ~4s before the cards appear, so they render complete
 * instead of loading in while they fade in. Safe to call more than once.
 */
export function preloadTeamAssets() {
  if (preloaded || typeof document === "undefined") return;
  preloaded = true;
  if (!document.querySelector(`link[href="${FONT_HREF}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    link.onload = () => {
      // pull the font files now, not when the text first paints
      for (const w of [400, 500, 600, 700, 800]) document.fonts.load(`${w} 16px "Plus Jakarta Sans"`).catch(() => {});
    };
    document.head.appendChild(link);
  }
  for (const src of [...TEAM.map((p) => p.photo), ...Object.values(COMPANY_LOGOS)]) {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.decode?.().catch(() => {});
  }
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

function initials(p: TeamMember) {
  const words = p.popupName.split(/\s+/).filter((w) => w && !/\.$/.test(w));
  if (!words.length) return "";
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}

const sentenceCase = (s: string) => {
  const t = (s || "").toLowerCase();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

/** Portrait with an initials fallback if the photo fails to load. */
function Portrait({ p }: { p: TeamMember }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="initials" role="img" aria-label={p.photoAlt}>
        {initials(p)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={p.photo}
      alt={p.photoAlt}
      decoding="async"
      style={{ objectPosition: p.photoPosition || "center top" }}
      onError={() => setFailed(true)}
    />
  );
}

function Card({ p, onOpen }: { p: TeamMember; onOpen: (p: TeamMember, opener: HTMLElement) => void }) {
  const seeRef = useRef<HTMLButtonElement>(null);
  return (
    <article
      className={`card tint-${p.group}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) return;
        if (seeRef.current) onOpen(p, seeRef.current);
      }}
    >
      <div className="card-media">
        <Portrait p={p} />
      </div>
      <div className="card-info">
        <h3 className="card-name">{p.displayName}</h3>
        <p className="card-position">{p.position}</p>
        {p.oneLiner && <p className="card-oneliner">{p.oneLiner}</p>}
      </div>
      <div className="card-bottom">
        <div className="card-actions">
          {p.linkedinUrl && (
            <a
              className="li-link"
              href={p.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.popupName} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          )}
          <button
            ref={seeRef}
            type="button"
            className="see-btn"
            aria-haspopup="dialog"
            aria-label={`See profile of ${p.popupName}`}
            onClick={(e) => {
              e.stopPropagation();
              onOpen(p, e.currentTarget);
            }}
          >
            See profile →
          </button>
        </div>
      </div>
    </article>
  );
}

/**
 * `asPage`: rendered as the /team page (phones open Team as its own page): in the page
 * flow, no entrance animation, no scroll lock, no Escape-to-close.
 */
export function TeamOverlay({ onClose, asPage = false }: { onClose?: () => void; asPage?: boolean }) {
  const [person, setPerson] = useState<TeamMember | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Normally done on the Team click already; covers any other way of opening it.
  useEffect(() => preloadTeamAssets(), []);

  // Lock page scroll while the overlay is open; Escape closes the overlay
  // (the dialog handles its own Escape first).
  useEffect(() => {
    if (asPage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !dialogRef.current?.open) onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, asPage]);

  // Show the dialog once its content has rendered.
  useEffect(() => {
    const d = dialogRef.current;
    if (person && d && !d.open) {
      d.scrollTop = 0;
      d.showModal();
    }
  }, [person]);

  const openDialog = (p: TeamMember, opener: HTMLElement) => {
    openerRef.current = opener;
    setPerson(p);
  };

  if (!asPage && typeof document === "undefined") return null;

  const group = (key: TeamMember["group"], label: string) => (
    <section className="group" aria-labelledby={`${key}-h`}>
      <div className="group-head">
        <h2 className="group-pill" id={`${key}-h`}>
          {label}
        </h2>
      </div>
      <div className="cards">
        {TEAM.filter((p) => p.group === key).map((p) => (
          <Card key={p.slug} p={p} onOpen={openDialog} />
        ))}
      </div>
    </section>
  );

  const view = (
    <div className={asPage ? "cq-team cq-team--page" : "cq-team"} role="region" aria-label="Team">
      <div className="container">
        <div className="page-title">
          <h1>Team</h1>
          <p className="intro">The founders and advisors behind ContexQ.</p>
        </div>
        {group("founders", "FOUNDERS")}
        {group("advisors", "ADVISORS")}
      </div>

      <dialog
        ref={dialogRef}
        className="cq-team-dialog"
        aria-labelledby="cq-team-dlg-name"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        onClose={() => {
          setPerson(null);
          const o = openerRef.current;
          if (o && document.contains(o)) o.focus();
        }}
      >
        {person && (
          <div className="dlg-inner">
            <button type="button" className="dlg-close" aria-label="Close profile" onClick={() => dialogRef.current?.close()}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <div className="dlg-left">
              <div className={`portrait-lg tint-${person.group}`}>
                <Portrait key={person.slug} p={person} />
              </div>
              <h2 id="cq-team-dlg-name" className="dlg-name">
                {person.popupName}
              </h2>
              <p className="dlg-role">{person.role}</p>
              <p className="dlg-cred">{person.credentialLine}</p>
            </div>
            <div className="dlg-right">
              <p className="dlg-bio">{person.bio}</p>
              {person.chips?.length > 0 && (
                <div className="dlg-chips">
                  <p className="caption">{sentenceCase(person.chipsLabel)}</p>
                  <ul className="chips">
                    {person.chips.map((c) => (
                      <li key={c} className="chip">
                        <span className="chip-logo" aria-hidden="true" data-company={c}>
                          {COMPANY_LOGOS[c] && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={COMPANY_LOGOS[c]} alt="" decoding="async" />
                          )}
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {person.linkedinUrl && (
                <a className="dlg-link" href={person.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${person.popupName} on LinkedIn`}>
                  <LinkedInIcon />
                  <span>View on LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
  return asPage ? view : createPortal(view, document.body);
}
