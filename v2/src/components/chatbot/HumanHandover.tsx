'use client';

import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, X, Clock } from 'lucide-react';

interface HumanHandoverProps {
  onClose?: () => void;
  onRequestHandover?: () => void;
}

export const HumanHandover: React.FC<HumanHandoverProps> = ({
  onClose,
  onRequestHandover
}) => {
  const [requested, setRequested] = useState<boolean>(false);
  const [ticketId] = useState<string>(() => `CQ-${Math.floor(1000 + Math.random() * 9000)}`);

  const handleRequest = () => {
    setRequested(true);
    if (onRequestHandover) {
      onRequestHandover();
    }
  };

  return (
    <div 
      style={{
        padding: '14px',
        borderRadius: '14px',
        backgroundColor: '#EBF3FF',
        border: '1px solid rgba(50, 140, 255, 0.3)',
        margin: '8px 0',
        boxShadow: '0 1px 4px rgba(50, 140, 255, 0.08)'
      }}
      className="space-y-2.5 animate-in fade-in duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#328CFF] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#06111F] block">
              Speak with a ContexQ Specialist
            </span>
            <span className="text-[10px] text-[#687B91] font-mono">
              Live handover assistance
            </span>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-[#687B91] hover:text-[#06111F] p-1 rounded hover:bg-[#328CFF]/10 transition-colors cursor-pointer"
            aria-label="Dismiss Handover Option"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {requested ? (
        <div className="flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 animate-in zoom-in-95">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold block">
              Callback Request Logged ({ticketId})
            </span>
            <p className="text-[11px] text-emerald-700 m-0">
              A ContexQ risk intelligence architect will reach out to your team shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-[#06111F]/80 leading-relaxed m-0">
            Would you like to schedule a callback with our decision intelligence team?
          </p>
          <button
            onClick={handleRequest}
            style={{ cursor: 'pointer' }}
            className="w-full py-2 px-3 rounded-xl bg-[#328CFF] hover:bg-[#2574E0] active:scale-[0.99] text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Request a callback</span>
          </button>
        </div>
      )}
    </div>
  );
};
