'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '../../data/suggestedQuestions';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

/** Welcome screen: greeting, then a "Popular topics" button that reveals the topic list. */
export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelectQuestion }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cqc-welcome">
      <h3>Welcome to ContexQ</h3>
      <p>How may I help you?</p>

      <button
        type="button"
        className={`cqc-topics-toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="cqc-topics-list"
        onClick={() => setOpen((v) => !v)}
      >
        Popular topics
        <ChevronDown aria-hidden="true" />
      </button>

      {open && (
        <div className="cqc-topics" id="cqc-topics-list">
          {SUGGESTED_QUESTIONS.map((item) => (
            <button type="button" key={item.id} className="cqc-topic" onClick={() => onSelectQuestion(item.question)}>
              <span>
                <span className="cqc-topic-text">{item.question}</span>
                <span className="cqc-topic-area">{item.badge}</span>
              </span>
              <ChevronRight aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
