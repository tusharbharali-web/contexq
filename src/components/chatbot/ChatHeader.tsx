'use client';

import React from 'react';
import { RotateCcw, Minus, X, ChevronUp } from 'lucide-react';
import { BrandMark } from './BrandMark';

interface ChatHeaderProps {
  onReset: () => void;
  onMinimize: () => void;
  onClose: () => void;
  isMinimized?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onReset, onMinimize, onClose, isMinimized = false }) => (
  <header className="cqc-header">
    <div className="cqc-brand">
      <div className="cqc-brand-mark">
        <BrandMark size={22} />
      </div>
      <div>
        <h2 className="cqc-title">ContexQ Assistant</h2>
        <p className="cqc-subtitle">Ask about our platform</p>
      </div>
    </div>

    <div className="cqc-actions">
      <button type="button" className="cqc-icon-btn" onClick={onReset} aria-label="Start a new conversation" title="Start a new conversation">
        <RotateCcw />
      </button>
      <button type="button" className="cqc-icon-btn" onClick={onMinimize} aria-label={isMinimized ? 'Expand' : 'Minimise'} title={isMinimized ? 'Expand' : 'Minimise'}>
        {isMinimized ? <ChevronUp /> : <Minus />}
      </button>
      <button type="button" className="cqc-icon-btn is-close" onClick={onClose} aria-label="Close" title="Close">
        <X />
      </button>
    </div>
  </header>
);
