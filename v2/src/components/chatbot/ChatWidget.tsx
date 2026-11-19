'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChatLauncher } from './ChatLauncher';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { LeadCaptureForm } from './LeadCaptureForm';
import { HumanHandover } from './HumanHandover';
import { useChat } from '../../hooks/useChat';

interface ChatWidgetProps {
  initialOpen?: boolean;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ initialOpen = false }) => {
  const {
    messages,
    isLoading,
    isOpen,
    isMinimized,
    showLeadForm,
    showHandover,
    unreadCount,
    toggleWidget,
    closeWidget,
    openWidget,
    toggleMinimize,
    toggleLeadForm,
    toggleHandover,
    resetConversation,
    sendMessage
  } = useChat();

  // If initialOpen changes to true from outside, open widget
  useEffect(() => {
    if (initialOpen && !isOpen) {
      openWidget();
    }
  }, [initialOpen, isOpen, openWidget]);

  // Check if last message requires handover
  const lastMessage = messages[messages.length - 1];
  const lastMessageNeedsHandover = lastMessage?.needsHumanHandover && !isLoading;

  return (
    <div className="contexq-chatbot-root">
      {/* Floating Circular Launcher Button */}
      <ChatLauncher
        isOpen={isOpen}
        onClick={toggleWidget}
        unreadCount={unreadCount}
      />

      {/* Floating Chat Panel with Framer Motion (Strict 400px x 620px fixed to bottom-right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '400px',
              maxWidth: 'calc(100vw - 32px)',
              height: isMinimized ? '68px' : '620px',
              maxHeight: 'calc(100vh - 48px)',
              backgroundColor: '#F5F8FC',
              color: '#06111F',
              borderRadius: isMinimized ? '16px 16px 0 0' : '16px',
              boxShadow: '0 20px 60px -10px rgba(6, 17, 31, 0.45), 0 4px 20px -2px rgba(6, 17, 31, 0.2)',
              border: '1px solid #CBD5E1',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
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
              <div 
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 0,
                  position: 'relative',
                  backgroundColor: '#F5F8FC',
                  color: '#06111F'
                }}
              >
                {/* Scrollable Messages Stream */}
                <ChatMessages
                  messages={messages}
                  isLoading={isLoading}
                  onSelectQuestion={sendMessage}
                />

                {/* Handover Prompt Component if triggered */}
                {(showHandover || lastMessageNeedsHandover) && (
                  <div style={{ padding: '0 12px', backgroundColor: '#F5F8FC' }}>
                    <HumanHandover
                      onClose={() => toggleHandover(false)}
                      onRequestHandover={() => {}}
                    />
                  </div>
                )}

                {/* Input Area */}
                <ChatInput
                  onSendMessage={sendMessage}
                  isLoading={isLoading}
                  onOpenLeadForm={() => toggleLeadForm(true)}
                />

                {/* Slide-over Lead Capture Form */}
                <AnimatePresence>
                  {showLeadForm && (
                    <motion.div
                      initial={{ opacity: 0, y: '100%' }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: '100%' }}
                      transition={{ duration: 0.24, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 30
                      }}
                    >
                      <LeadCaptureForm
                        onClose={() => toggleLeadForm(false)}
                        onSubmitSuccess={() => {}}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
