'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, placeholder }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // grow with the text, up to 100px
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 100)}px`;
  }, [text]);

  const handleSubmit = () => {
    if (!text.trim() || isLoading) return;
    onSendMessage(text.trim());
    setText('');
  };

  const canSend = !!text.trim() && !isLoading;

  return (
    <div className="cqc-composer">
      <div className="cqc-field">
        <textarea
          ref={textareaRef}
          rows={1}
          maxLength={400}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder={placeholder ?? 'Type your question'}
          aria-label="Ask ContexQ a question"
          className="contexq-scrollbar"
        />
        <button type="button" className="cqc-send" onClick={handleSubmit} disabled={!canSend} aria-label="Send message" title="Send">
          <ArrowUp />
        </button>
      </div>

      {/* Next.js Link keeps the chat open while the page changes */}
      <p className="cqc-consent">
        By chatting, you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </div>
  );
};
