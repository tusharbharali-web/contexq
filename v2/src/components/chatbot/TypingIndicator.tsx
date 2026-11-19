import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-2.5 my-3 animate-in fade-in duration-200">
      {/* Small ContexQ AI avatar */}
      <div 
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '9px',
          backgroundColor: '#06111F',
          border: '1px solid rgba(50, 140, 255, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
          boxShadow: '0 2px 6px rgba(6, 17, 31, 0.2)'
        }}
      >
        <Bot className="w-4 h-4 text-[#328CFF]" />
      </div>

      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '4px 14px 14px 14px',
          padding: '12px 16px',
          boxShadow: '0 1px 4px rgba(6, 17, 31, 0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#328CFF] animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#328CFF] animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 rounded-full bg-[#328CFF] animate-bounce"></span>
        </div>

        <span className="text-[11px] font-medium text-[#687B91] flex items-center gap-1 font-mono pl-1">
          <Sparkles className="w-2.5 h-2.5 text-[#328CFF]" />
          <span>Formulating verified insight...</span>
        </span>
      </div>
    </div>
  );
};
