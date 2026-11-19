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
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isOpen && showLabel && (
        <button type="button" className="cqc-launcher-label" onClick={onClick} tabIndex={-1}>
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
