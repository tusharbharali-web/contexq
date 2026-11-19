import React from 'react';
import { BrandMark } from './BrandMark';

export const TypingIndicator: React.FC = () => (
  <div className="cqc-msg cqc-msg-bot" role="status" aria-label="ContexQ is replying">
    <div className="cqc-avatar">
      <BrandMark size={16} />
    </div>
    <div className="cqc-bubble-bot cqc-typing" style={{ padding: '14px' }}>
      <span />
      <span />
      <span />
    </div>
  </div>
);
