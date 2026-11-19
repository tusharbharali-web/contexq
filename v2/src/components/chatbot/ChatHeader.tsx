'use client';

import React from 'react';
import { RotateCcw, Minus, X, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  onReset: () => void;
  onMinimize: () => void;
  onClose: () => void;
  isMinimized?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onReset,
  onMinimize,
  onClose,
  isMinimized = false
}) => {
  return (
    <header 
      style={{
        height: '68px',
        backgroundColor: '#06111F',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#FFFFFF',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderRadius: '16px 16px 0 0',
        userSelect: 'none',
        position: 'relative'
      }}
    >
      {/* Subtle top brand accent line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '16px',
          right: '16px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #328CFF, transparent)'
        }}
      />

      {/* Left: ContexQ Identity & Status */}
      <div className="flex items-center gap-3">
        {/* ContexQ Icon with blue accent */}
        <div 
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            backgroundColor: '#08182B',
            border: '1px solid rgba(50, 140, 255, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(50, 140, 255, 0.2)'
          }}
        >
          {/* Custom ContexQ Logo Icon */}
          <div className="relative flex items-center justify-center">
            <span className="text-white font-extrabold text-sm tracking-tight font-sans">Q</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] absolute -bottom-0.5 -right-0.5 shadow-sm"></span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold tracking-tight text-white m-0">
              ContexQ
            </h2>
            {/* Online Status Indicator */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(6, 17, 31, 0.8)',
                border: '1px solid rgba(52, 211, 153, 0.35)'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-semibold text-emerald-300 tracking-wider font-mono">
                ONLINE
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Sparkles className="w-2.5 h-2.5 text-[#328CFF]" />
            <p className="text-[10px] uppercase font-mono tracking-wider text-[#687B91] m-0 font-medium">
              Intelligence Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Right: Actions (Reset, Minimize, Close) */}
      <div className="flex items-center gap-1 text-[#687B91]">
        {/* New Conversation / Reset */}
        <button
          onClick={onReset}
          aria-label="New Conversation"
          title="Restart Conversation"
          style={{ cursor: 'pointer' }}
          className="p-1.5 rounded-lg hover:text-white hover:bg-[#08182B] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#328CFF]/40"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Minimize */}
        <button
          onClick={onMinimize}
          aria-label={isMinimized ? 'Expand' : 'Minimize'}
          title={isMinimized ? 'Expand' : 'Minimize'}
          style={{ cursor: 'pointer' }}
          className="p-1.5 rounded-lg hover:text-white hover:bg-[#08182B] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#328CFF]/40"
        >
          <Minus className="w-4 h-4" />
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          title="Close Chatbot"
          style={{ cursor: 'pointer' }}
          className="p-1.5 rounded-lg hover:text-white hover:bg-[#08182B] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#328CFF]/40"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
