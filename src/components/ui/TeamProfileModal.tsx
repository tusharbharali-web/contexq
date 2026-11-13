'use client';

import { useEffect, useState } from 'react';

type Person = {
  name: string;
  role: string;
  short: string;
  description: string;
  photo?: string;
  linkedin?: string;
  initials: string;
  group?: string;
};

export default function TeamProfileModal() {
  const [person, setPerson] = useState<Person | null>(null);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const update = () => setIsNarrow(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e?.data?.type === 'open-profile' && e.data.person) {
        setPerson(e.data.person);
      }
      if (e?.data?.type === 'close-profile') setPerson(null);
    };
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) setPerson(detail);
    };
    window.addEventListener('message', onMessage);
    window.addEventListener('open-team-profile', onCustom);
    return () => {
      window.removeEventListener('message', onMessage);
      window.removeEventListener('open-team-profile', onCustom);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = person ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPerson(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [person]);

  if (!person) return null;

  return (
    <div
      data-team-profile-modal
      onClick={() => setPerson(null)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(3, 8, 20, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #0a2a5e 0%, #133a7a 100%)',
          color: '#fff',
          borderRadius: 18,
          maxWidth: 860,
          width: '100%',
          padding: isNarrow ? 24 : 40,
          position: 'relative',
          maxHeight: '90vh',
          overflow: 'auto',
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : '220px 1fr',
          gap: isNarrow ? 20 : 36,
          alignItems: 'start',
          boxShadow: '0 30px 80px rgba(0,0,0,.5)',
        }}
      >
        <button
          onClick={() => setPerson(null)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            padding: '6px 12px',
            background: 'none',
            border: 'none',
            color: '#cbd5e1',
            fontSize: 22,
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          ✕
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div
            style={{
              width: isNarrow ? 140 : 200,
              height: isNarrow ? 140 : 200,
              borderRadius: 16,
              marginBottom: 20,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0B1B2E, #1F6FEB)',
              display: 'grid',
              placeItems: 'center',
              fontSize: 48,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            {person.photo ? (
              <img
                src={person.photo}
                alt={person.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              person.initials
            )}
          </div>
          <p style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{person.name}</p>
          <p style={{ color: '#60a5fa', fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>{person.role}</p>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#60a5fa',
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
                margin: '0 0 14px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          )}
          <p style={{ color: '#dbeafe', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{person.short}</p>
        </div>

        <div>
          {!isNarrow && (
            <>
              <h3 style={{ fontSize: 28, color: '#fff', margin: '0 0 4px' }}>{person.name}</h3>
              <span style={{ display: 'block', color: '#60a5fa', fontWeight: 600, margin: '0 0 20px', fontSize: 16 }}>
                {person.role}
              </span>
            </>
          )}
          <p style={{ color: '#e0e7ff', margin: 0, lineHeight: 1.7, fontSize: isNarrow ? 14 : 15, whiteSpace: 'pre-line' }}>
            {person.description}
          </p>
        </div>
      </div>
    </div>
  );
}
