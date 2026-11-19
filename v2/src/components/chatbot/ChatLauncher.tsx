'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Sparkles } from 'lucide-react';

interface ChatLauncherProps {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
}

export const ChatLauncher: React.FC<ChatLauncherProps> = ({
  isOpen,
  onClick,
  unreadCount = 1
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show welcoming tooltip after 600ms if closed
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
      className="select-none"
    >
      {/* Floating Greeting Tooltip Callout */}
      {!isOpen && showTooltip && (
        <div 
          onClick={onClick}
          style={{
            backgroundColor: '#06111F',
            border: '1px solid rgba(50, 140, 255, 0.4)',
            boxShadow: '0 8px 30px rgba(6, 17, 31, 0.4)',
            cursor: 'pointer'
          }}
          className="hidden sm:flex items-center gap-2.5 py-2 px-3.5 rounded-2xl text-white transition-all transform hover:-translate-y-0.5 animate-in fade-in slide-in-from-right-3 duration-300 relative"
        >
          <div className="w-6 h-6 rounded-lg bg-[#328CFF]/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#328CFF]" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Need help? Chat with ContexQ AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </p>
            <p className="text-[10px] text-[#687B91]">
              Ask about Supply Chain, Mule Detection & Risk
            </p>
          </div>
          {/* Subtle triangle pointer pointing to the button */}
          <div 
            style={{
              position: 'absolute',
              right: '-4px',
              top: '50%',
              transform: 'translateY(-50%) rotate(-45deg)',
              width: '8px',
              height: '8px',
              backgroundColor: '#06111F',
              borderRight: '1px solid rgba(50, 140, 255, 0.4)',
              borderBottom: '1px solid rgba(50, 140, 255, 0.4)'
            }}
          />
        </div>
      )}

      {/* Floating Circular Blue Button */}
      <button
        onClick={onClick}
        aria-label={isOpen ? 'Close ContexQ Intelligence Assistant' : 'Open ContexQ Intelligence Assistant'}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '9999px',
          backgroundColor: '#328CFF',
          boxShadow: '0 8px 24px -4px rgba(50, 140, 255, 0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
          position: 'relative'
        }}
        className="hover:bg-[#2574E0] active:scale-95 transition-all duration-200"
      >
        {/* Pulsing ring around button */}
        {!isOpen && (
          <span 
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              backgroundColor: '#328CFF',
              opacity: 0.35,
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Animated Icon: MessageSquare to X */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <span
            className={`absolute transition-all duration-200 transform ${
              isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
            }`}
          >
            <MessageSquare className="w-6 h-6 text-white stroke-[2.2]" />
          </span>
          <span
            className={`absolute transition-all duration-200 transform ${
              isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'
            }`}
          >
            <X className="w-6 h-6 text-white stroke-[2.2]" />
          </span>
        </div>

        {/* Unread notification indicator */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#328CFF] opacity-75"></span>
            <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-white text-[#328CFF] font-bold text-[10px] shadow-sm border border-[#328CFF]/30">
              {unreadCount}
            </span>
          </span>
        )}
      </button>
    </div>
  );
};
