'use client';

import React, { useEffect, useState } from 'react';
import { BrandMark } from './BrandMark';

interface ChatLauncherProps {
  isOpen: boolean;
  onClick: () => void;
  /** kept for API compatibility with useChat; no badge is shown */
  unreadCount?: number;
}

export const ChatLauncher: React.FC<ChatLauncherProps> = ({ isOpen, onClick }) => {
  // "Chat with ContexQ" appears shortly after the page loads, stays 5 seconds, then fades away.
  const [label, setLabel] = useState<'hidden' | 'shown' | 'leaving'>('hidden');

  useEffect(() => {
    const timers = [
      setTimeout(() => setLabel('shown'), 800),
      setTimeout(() => setLabel('leaving'), 5800),
      setTimeout(() => setLabel('hidden'), 6200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {!isOpen && label !== 'hidden' && (
        <button
          type="button"
          className={`cqc-launcher-label${label === 'leaving' ? ' is-leaving' : ''}`}
          onClick={onClick}
          tabIndex={-1}
        >
          Chat with ContexQ
        </button>
      )}
      {!isOpen && (
        <button
          type="button"
          className="cqc-launcher"
          onClick={onClick}
          aria-label="Open ContexQ Intelligence Assistant"
        >
          <BrandMark size={28} />
        </button>
      )}
    </>
  );
};
