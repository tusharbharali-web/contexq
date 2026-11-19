import { useState, useCallback, useRef } from 'react';
import { Message, ChatService } from '../types/chat';
import { defaultChatService } from '../services/chatService';

function generateConversationId(): string {
  return `cq-session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

function getCurrentTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function useChat(chatService: ChatService = defaultChatService) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showLeadForm, setShowLeadForm] = useState<boolean>(false);
  const [showHandover, setShowHandover] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(1); // 1 initial prompt to attract attention
  const conversationIdRef = useRef<string>(generateConversationId());

  const openWidget = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
  }, []);

  const closeWidget = useCallback(() => {
    setIsOpen(false);
    setIsMinimized(false);
  }, []);

  const toggleWidget = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setUnreadCount(0);
        setIsMinimized(false);
      }
      return next;
    });
  }, []);

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const toggleLeadForm = useCallback((show?: boolean) => {
    setShowLeadForm((prev) => (show !== undefined ? show : !prev));
  }, []);

  const toggleHandover = useCallback((show?: boolean) => {
    setShowHandover((prev) => (show !== undefined ? show : !prev));
  }, []);

  const resetConversation = useCallback(() => {
    setMessages([]);
    setIsLoading(false);
    setShowLeadForm(false);
    setShowHandover(false);
    conversationIdRef.current = generateConversationId();
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        content: trimmed,
        timestamp: getCurrentTimestamp()
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await chatService.sendMessage(trimmed, conversationIdRef.current);

        const assistantMessage: Message = {
          id: `bot-${Date.now() + 1}`,
          sender: 'assistant',
          content: response.message,
          timestamp: getCurrentTimestamp(),
          sources: response.sources,
          needsHumanHandover: response.needsHumanHandover
        };

        setMessages((prev) => [...prev, assistantMessage]);

        // If closed, increment unread badge
        if (!isOpen) {
          setUnreadCount((prev) => prev + 1);
        }
      } catch (err) {
        console.error('Chat error:', err);
        const errorMessage: Message = {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          content: "We're experiencing difficulty connecting to our assistant. Please try again shortly or contact our team directly.",
          timestamp: getCurrentTimestamp()
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [chatService, isLoading, isOpen]
  );

  return {
    messages,
    isLoading,
    isOpen,
    isMinimized,
    showLeadForm,
    showHandover,
    unreadCount,
    conversationId: conversationIdRef.current,
    openWidget,
    closeWidget,
    toggleWidget,
    toggleMinimize,
    toggleLeadForm,
    toggleHandover,
    resetConversation,
    sendMessage
  };
}

