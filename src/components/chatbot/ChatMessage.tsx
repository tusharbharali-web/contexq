import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Message } from '../../types/chat';
import { BrandMark } from './BrandMark';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);

  const handleCopy = () => {
    navigator.clipboard?.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (message.sender === 'user') {
    return (
      <div className="cqc-msg cqc-msg-user">
        <div className="cqc-bubble-user">{message.content}</div>
        <div className="cqc-meta cqc-meta-user">{message.timestamp}</div>
      </div>
    );
  }

  return (
    <div className="cqc-msg cqc-msg-bot">
      <div className="cqc-avatar">
        <BrandMark size={16} />
      </div>
      <div className="cqc-bot-col">
        <div className="cqc-bubble-bot">
          <div className="contexq-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
          </div>

          {message.sources && message.sources.length > 0 && (
            <div className="cqc-sources">
              <span className="cqc-sources-label">Sources</span>
              {message.sources.map((src, idx) => (
                <div key={idx}>
                  {src.url ? (
                    <a href={src.url} target="_blank" rel="noreferrer">{src.title}</a>
                  ) : (
                    src.title
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cqc-meta">
          <span>ContexQ</span>
          <span>{message.timestamp}</span>
          <div className="cqc-meta-tools">
            <button type="button" className="cqc-tool" onClick={handleCopy} aria-label={copied ? 'Copied' : 'Copy answer'} title={copied ? 'Copied' : 'Copy answer'}>
              {copied ? <Check /> : <Copy />}
            </button>
            <button
              type="button"
              className={`cqc-tool${feedback === 'like' ? ' is-on' : ''}`}
              onClick={() => setFeedback(feedback === 'like' ? null : 'like')}
              aria-label="Helpful"
              aria-pressed={feedback === 'like'}
              title="Helpful"
            >
              <ThumbsUp />
            </button>
            <button
              type="button"
              className={`cqc-tool${feedback === 'dislike' ? ' is-on' : ''}`}
              onClick={() => setFeedback(feedback === 'dislike' ? null : 'dislike')}
              aria-label="Not helpful"
              aria-pressed={feedback === 'dislike'}
              title="Not helpful"
            >
              <ThumbsDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
