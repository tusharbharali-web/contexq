'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Users } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onOpenLeadForm: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
  onOpenLeadForm
}) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [text]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!text.trim() || isLoading) return;
    onSendMessage(text.trim());
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderRadius: '0 0 16px 16px',
        padding: '12px 14px',
        flexShrink: 0
      }}
      className="space-y-2"
    >
      {/* Input Form Box */}
      <div 
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F5F8FC',
          border: '1px solid #E2E8F0',
          borderRadius: '12px'
        }}
        className="focus-within:border-[#328CFF] focus-within:ring-2 focus-within:ring-[#328CFF]/20 focus-within:bg-white transition-all shadow-inner"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask ContexQ a question or select a topic..."
          aria-label="Ask ContexQ a question"
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            padding: '10px 42px 10px 14px',
            fontSize: '12.5px',
            color: '#06111F',
            outline: 'none',
            resize: 'none',
            maxHeight: '100px',
            lineHeight: 1.5
          }}
          className="placeholder-[#687B91] contexq-scrollbar"
        />

        <button
          onClick={handleSubmit}
          disabled={!text.trim() || isLoading}
          aria-label="Send Message"
          style={{
            position: 'absolute',
            right: '6px',
            width: '32px',
            height: '32px',
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: text.trim() && !isLoading ? 'pointer' : 'not-allowed',
            backgroundColor: text.trim() && !isLoading ? '#328CFF' : 'transparent',
            color: text.trim() && !isLoading ? '#FFFFFF' : '#A0AEC0',
            border: 'none',
            transition: 'all 0.15s ease'
          }}
          className={text.trim() && !isLoading ? 'hover:bg-[#2574E0] active:scale-95 shadow-sm' : ''}
        >
          {isLoading ? (
            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Bottom Option: "Talk to our team" & Disclaimers */}
      <div className="flex items-center justify-between px-1 text-[11px] text-[#687B91]">
        <button
          onClick={onOpenLeadForm}
          className="flex items-center gap-1.5 font-medium text-[#328CFF] hover:text-[#2574E0] transition-colors focus:outline-none cursor-pointer group"
        >
          <Users className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold underline underline-offset-2">Talk to our team</span>
        </button>

        <div className="flex items-center gap-1.5 text-[10px] text-[#687B91] font-mono">
          <span className="hidden sm:inline">Press</span>
          <kbd className="px-1 py-0.5 rounded bg-[#EDF2F7] border border-[#CBD5E1] text-[9px] text-[#475569]">Enter ↵</kbd>
        </div>
      </div>
    </div>
  );
};
