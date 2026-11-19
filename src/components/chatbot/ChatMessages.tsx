import React, { useRef, useEffect } from 'react';
import { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { SuggestedQuestions } from './SuggestedQuestions';
import { TypingIndicator } from './TypingIndicator';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  onSelectQuestion: (question: string) => void;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading, onSelectQuestion }) => {
  const streamRef = useRef<HTMLDivElement>(null);

  // keep the newest message in view; scrolling to the very bottom also shows the bottom
  // padding, so the floating "Book a meeting" button never covers the last message
  useEffect(() => {
    const el = streamRef.current;
    // the welcome screen stays at its top; only a conversation follows the newest message
    if (el && messages.length > 0) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div ref={streamRef} className="cqc-stream contexq-scrollbar" aria-live="polite">
      {messages.length === 0 ? (
        <SuggestedQuestions onSelectQuestion={onSelectQuestion} />
      ) : (
        <>
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
        </>
      )}
    </div>
  );
};
