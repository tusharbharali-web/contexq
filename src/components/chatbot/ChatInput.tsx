'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, CalendarDays, Users } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onOpenLeadForm: () => void;
  placeholder?: string;
  onBookMeeting: () => void;
  awaitingMeetingEmail?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, onOpenLeadForm, placeholder, onBookMeeting, awaitingMeetingEmail = false }) => {
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

      <div className="cqc-composer-foot">
        <button type="button" className="cqc-foot-btn" onClick={onOpenLeadForm}>
          <Users aria-hidden="true" />
          Talk to our team
        </button>
        <button type="button" className="cqc-foot-btn" onClick={onBookMeeting} disabled={awaitingMeetingEmail}>
          <CalendarDays aria-hidden="true" />
          {awaitingMeetingEmail ? 'Waiting for email' : 'Book a meeting'}
        </button>
      </div>
    </div>
  );
};
