'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChatLauncher } from './ChatLauncher';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { HumanHandover } from './HumanHandover';
import { track } from '../../lib/tracking/track';
import { useChat } from '../../hooks/useChat';

interface ChatWidgetProps {
  initialOpen?: boolean;
}

/**
 * Scroll lock: while the pointer (or a finger) is on the chat panel, scrolling moves
 * only the chat, never the page behind it. A wheel/touch step is let through only
 * when a scrollable box inside the panel can still move in that direction; anything
 * else (top/bottom reached, or nothing to scroll) is cancelled so it cannot spill
 * over to the webpage.
 */
function canScrollInside(target: EventTarget | null, panel: HTMLElement, dy: number): boolean {
  let el = target instanceof Element ? target : null;
  while (el && el !== panel) {
    if (el instanceof HTMLElement) {
      const oy = getComputedStyle(el).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
        if (dy < 0 && el.scrollTop > 0) return true;
        if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true;
      }
    }
    el = el.parentElement;
  }
  return false;
}

function useContainScroll(panelRef: React.RefObject<HTMLDivElement | null>, active: boolean) {
  useEffect(() => {
    const panel = panelRef.current;
    if (!active || !panel) return;
    let lastY = 0;
    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      if (!canScrollInside(e.target, panel, e.deltaY)) e.preventDefault();
    };
    const onTouchStart = (e: TouchEvent) => { lastY = e.touches[0]?.clientY ?? 0; };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? lastY;
      const dy = lastY - y; // finger up = content scrolls down
      lastY = y;
      e.stopPropagation();
      if (!canScrollInside(e.target, panel, dy) && e.cancelable) e.preventDefault();
    };
    panel.addEventListener('wheel', onWheel, { passive: false });
    panel.addEventListener('touchstart', onTouchStart, { passive: true });
    panel.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      panel.removeEventListener('wheel', onWheel);
      panel.removeEventListener('touchstart', onTouchStart);
      panel.removeEventListener('touchmove', onTouchMove);
    };
  }, [panelRef, active]);
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ initialOpen = false }) => {
  const {
    messages,
    isLoading,
    isOpen,
    isMinimized,
    showHandover,
    unreadCount,
    toggleWidget,
    closeWidget,
    openWidget,
    toggleMinimize,
    toggleHandover,
    resetConversation,
    sendMessage,
    awaitingMeetingEmail
  } = useChat();

  // Scrolling over the open panel stays inside the chat (see useContainScroll)
  const panelRef = useRef<HTMLDivElement>(null);
  useContainScroll(panelRef, isOpen);

  // If initialOpen changes to true from outside, open widget
  useEffect(() => {
    if (initialOpen && !isOpen) {
      openWidget();
    }
  }, [initialOpen, isOpen, openWidget]);

  // Analytics: count chat opens (sent only with analytics consent)
  useEffect(() => {
    if (isOpen) track('chat_open');
  }, [isOpen]);

  // Recent messages, attached to callback and enquiry requests so the team has context
  const conversation = messages.slice(-12).map((m) => ({ role: m.sender, content: m.content }));

  // Check if last message requires handover
  const lastMessage = messages[messages.length - 1];
  // ✕ hides the callback card until a newer reply asks for the team again.
  const [dismissedFor, setDismissedFor] = useState<string | null>(null);
  const lastMessageNeedsHandover = lastMessage?.needsHumanHandover && !isLoading && dismissedFor !== lastMessage.id;

  return (
    <div className="contexq-chatbot-root">
      {/* Floating Circular Launcher Button */}
      <ChatLauncher
        isOpen={isOpen}
        onClick={toggleWidget}
        unreadCount={unreadCount}
      />

      {/* Chat panel (size and look in styles/chatbot.css, .cqc-panel) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`cqc-panel${isMinimized ? ' is-minimized' : ''}`}
            role="dialog"
            aria-label="ContexQ Assistant"
          >
            {/* Header */}
            <ChatHeader
              onReset={resetConversation}
              onMinimize={toggleMinimize}
              onClose={closeWidget}
              isMinimized={isMinimized}
            />

            {/* When not minimized, display body and input */}
            {!isMinimized && (
              <div className="cqc-body">
                {/* Scrollable Messages Stream */}
                <ChatMessages
                  messages={messages}
                  isLoading={isLoading}
                  onSelectQuestion={sendMessage}
                />

                {/* Handover Prompt Component if triggered */}
                {(showHandover || lastMessageNeedsHandover) && (
                  <div className="cqc-handover-wrap">
                    <HumanHandover
                      onClose={() => {
                        toggleHandover(false);
                        if (lastMessage) setDismissedFor(lastMessage.id);
                      }}
                      conversation={conversation}
                    />
                  </div>
                )}

                {/* Input Area */}
                <ChatInput
                  onSendMessage={sendMessage}
                  isLoading={isLoading}
                  placeholder={awaitingMeetingEmail ? 'Enter your email address' : undefined}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
