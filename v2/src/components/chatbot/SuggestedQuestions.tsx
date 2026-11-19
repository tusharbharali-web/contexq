import React from 'react';
import { 
  Bot, 
  ChevronRight, 
  Building2, 
  Boxes, 
  ShieldCheck, 
  Cpu,
  Sparkles
} from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '../../data/suggestedQuestions';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  onSelectQuestion
}) => {
  const getCardIcon = (iconType: string) => {
    switch (iconType) {
      case 'Boxes':
        return <Boxes style={{ width: '15px', height: '15px', color: '#328CFF' }} />;
      case 'Shield':
        return <ShieldCheck style={{ width: '15px', height: '15px', color: '#10B981' }} />;
      case 'Cpu':
        return <Cpu style={{ width: '15px', height: '15px', color: '#6366F1' }} />;
      default:
        return <Building2 style={{ width: '15px', height: '15px', color: '#328CFF' }} />;
    }
  };

  return (
    <div style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Date Separator */}
      <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
        <span 
          style={{
            backgroundColor: '#E2E8F0',
            border: '1px solid #CBD5E1',
            color: '#475569',
            padding: '2px 10px',
            borderRadius: '9999px',
            fontSize: '10px',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.05em'
          }}
        >
          TODAY
        </span>
      </div>

      {/* Greeting Card */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #CBD5E1',
          borderRadius: '14px',
          boxShadow: '0 2px 8px rgba(6, 17, 31, 0.06)',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        {/* Top Accent Gradient Bar */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #328CFF, #10B981)'
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div 
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              backgroundColor: '#EBF3FF',
              border: '1px solid rgba(50, 140, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Bot style={{ width: '18px', height: '18px', color: '#328CFF' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#06111F', margin: 0 }}>
              Hello! Welcome to ContexQ.
            </h3>
            <span style={{ fontSize: '10px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#687B91', display: 'block', marginTop: '2px' }}>
              Enterprise AI Assistant
            </span>
          </div>
        </div>

        <p style={{ fontSize: '12px', color: '#334155', lineHeight: '1.5', margin: 0 }}>
          I'm your AI assistant. I can help you understand our solutions, capabilities and how we support organisations with risk intelligence.
        </p>
      </div>

      {/* Suggested Questions Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <p style={{ fontSize: '10.5px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles style={{ width: '12px', height: '12px', color: '#328CFF' }} />
            <span>Suggested Questions</span>
          </p>
          <span style={{ fontSize: '10px', color: '#687B91', fontFamily: 'monospace' }}>1-click prompt</span>
        </div>

        {/* 4 Clickable Question Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {SUGGESTED_QUESTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectQuestion(item.question)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '12px',
                padding: '12px 14px',
                boxShadow: '0 1px 4px rgba(6, 17, 31, 0.04)',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease'
              }}
              className="hover:border-[#328CFF] hover:bg-[#F8FAFC] group active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#328CFF]/25"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingRight: '8px' }}>
                <div 
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    backgroundColor: '#F5F8FC',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                  className="group-hover:bg-[#EBF3FF] group-hover:border-[#328CFF]/30 transition-colors"
                >
                  {getCardIcon(item.iconType)}
                </div>
                <div>
                  <span style={{ fontSize: '9px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.05em', color: '#328CFF', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#06111F', lineHeight: '1.35', display: 'block' }} className="group-hover:text-[#328CFF] transition-colors">
                    {item.question}
                  </span>
                </div>
              </div>

              <ChevronRight style={{ width: '16px', height: '16px', color: '#687B91', flexShrink: 0 }} className="group-hover:text-[#328CFF] group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
