import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bot, ExternalLink, Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);

  const isUser = message.sender === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isUser) {
    return (
      <div className="flex justify-end my-3.5 animate-in fade-in duration-200">
        <div className="max-w-[85%] space-y-1">
          <div 
            style={{
              backgroundColor: '#EBF3FF',
              border: '1px solid rgba(50, 140, 255, 0.25)',
              color: '#06111F',
              borderRadius: '14px 14px 4px 14px',
              padding: '12px 14px',
              fontSize: '12.5px',
              lineHeight: 1.5,
              boxShadow: '0 1px 3px rgba(6, 17, 31, 0.04)'
            }}
          >
            <p className="whitespace-pre-wrap m-0 font-normal">{message.content}</p>
          </div>
          <div className="flex justify-end pr-1 text-[10px] text-[#687B91] font-mono">
            {message.timestamp}
          </div>
        </div>
      </div>
    );
  }

  // Assistant Message
  return (
    <div className="flex items-start gap-2.5 my-3.5 animate-in fade-in duration-200 group">
      {/* Small ContexQ AI Avatar */}
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

      {/* Message Body */}
      <div className="flex-1 max-w-[88%] space-y-1.5">
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '4px 14px 14px 14px',
            padding: '14px 16px',
            fontSize: '12.5px',
            color: '#06111F',
            lineHeight: 1.6,
            boxShadow: '0 2px 6px rgba(6, 17, 31, 0.04)'
          }}
          className="relative"
        >
          <div className="contexq-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>

          {/* Future Knowledge Base Source Attribution (Section 12) */}
          {message.sources && message.sources.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] space-y-1.5 text-[11px] text-[#687B91]">
              <span className="font-semibold text-[#06111F] block text-[10px] uppercase font-mono tracking-wider">
                Verified Sources:
              </span>
              <div className="space-y-1">
                {message.sources.map((src, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-1 p-1.5 rounded-lg bg-[#F5F8FC] border border-[#E2E8F0]">
                    <span>Based on <strong>{src.title}</strong></span>
                    {src.url && (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#328CFF] hover:underline flex items-center gap-0.5 text-[10px] font-mono font-medium"
                      >
                        <span>[View source]</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Message Actions Toolbar (Copy & Feedback) */}
        <div className="flex items-center justify-between px-1 text-[10px] text-[#687B91] font-mono">
          <div className="flex items-center gap-2">
            <span>ContexQ AI</span>
            <span>•</span>
            <span>{message.timestamp}</span>
          </div>

          <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 hover:text-[#06111F] transition-colors p-0.5 rounded cursor-pointer"
              title="Copy text"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-600 font-sans">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="font-sans">Copy</span>
                </>
              )}
            </button>

            <span>|</span>

            <button
              onClick={() => setFeedback(feedback === 'like' ? null : 'like')}
              className={`p-0.5 rounded hover:text-[#06111F] transition-colors cursor-pointer ${
                feedback === 'like' ? 'text-[#328CFF]' : ''
              }`}
              title="Helpful"
            >
              <ThumbsUp className="w-3 h-3" />
            </button>

            <button
              onClick={() => setFeedback(feedback === 'dislike' ? null : 'dislike')}
              className={`p-0.5 rounded hover:text-[#06111F] transition-colors cursor-pointer ${
                feedback === 'dislike' ? 'text-rose-500' : ''
              }`}
              title="Unhelpful"
            >
              <ThumbsDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
