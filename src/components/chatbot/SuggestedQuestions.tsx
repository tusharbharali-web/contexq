import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '../../data/suggestedQuestions';

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onSelectQuestion }) => (
  <div className="cqc-welcome">
    <h3>Welcome to ContexQ</h3>
    <p>
      Ask about our platform, our solutions or how we help organisations understand risk. You can also
      reach our team directly at any time.
    </p>

    <p className="cqc-section-label">Popular topics</p>
    <div className="cqc-topics">
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
  </div>
);
