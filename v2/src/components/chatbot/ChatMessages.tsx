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

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  onSelectQuestion
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 contexq-scrollbar bg-[#F5F8FC]">
      {messages.length === 0 ? (
        <SuggestedQuestions onSelectQuestion={onSelectQuestion} />
      ) : (
        <div className="space-y-1">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}

          {isLoading && <TypingIndicator />}

          <div ref={scrollRef} className="h-1" />
        </div>
      )}
    </div>
  );
};

