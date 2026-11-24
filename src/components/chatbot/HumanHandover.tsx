'use client';

import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import type { ChatHistoryTurn } from '../../types/chat';
import { submitLead } from '../../lib/leads/client';

interface HumanHandoverProps {
  onClose?: () => void;
  onRequestHandover?: (contact: { method: 'phone' | 'email'; value: string }) => void;
  /** Recent chat messages, sent with the request so the team has context. */
  conversation?: ChatHistoryTurn[];
}

type Method = 'phone' | 'email';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
// digits with optional +, spaces, brackets or hyphens; 7 to 15 digits in total
const isPhone = (v: string) => /^\+?[\d\s()-]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15;

/**
 * Callback request. The visitor picks how they want to be contacted (phone or email)
 * and gives that one detail; either is enough.
 */
export const HumanHandover: React.FC<HumanHandoverProps> = ({ onClose, onRequestHandover, conversation }) => {
  const [method, setMethod] = useState<Method>('phone');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [requested, setRequested] = useState<{ method: Method; value: string; reference?: string } | null>(null);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = (method === 'phone' ? phone : email).trim();
    if (method === 'phone' && !isPhone(value)) {
      setError('Please enter a valid mobile number, including the country code.');
      return;
    }
    if (method === 'email' && !isEmail(value)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    if (sending) return;
    setSending(true);
    const result = await submitLead({
      type: 'callback',
      ...(method === 'phone' ? { phone: value } : { email: value }),
      conversation,
    });
    setSending(false);
    if (!result.ok) {
      setError(result.error || 'We could not send your request. Please try again.');
      return;
    }
    setRequested({ method, value, reference: result.reference });
    onRequestHandover?.({ method, value });
  };

  return (
    <div className="cqc-card">
      <div className="cqc-card-head">
        <div>
          <h4>Speak with a ContexQ specialist</h4>
          {!requested && <p>Choose how you would like our team to reach you.</p>}
        </div>
        {onClose && (
          <button type="button" className="cqc-dismiss" onClick={onClose} aria-label="Dismiss">
            <X />
          </button>
        )}
      </div>

      {requested ? (
        <div className="cqc-confirm">
          <CheckCircle2 aria-hidden="true" />
          <div>
            <h4>Callback requested</h4>
            <p>
              {requested.reference ? `Reference ${requested.reference}. ` : ''}Our team will {requested.method === 'phone' ? 'call you on' : 'email you at'}{' '}
              <strong>{requested.value}</strong> shortly.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="cqc-segment" role="radiogroup" aria-label="Preferred contact method">
            {(['phone', 'email'] as Method[]).map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={method === m}
                className={`cqc-segment-btn${method === m ? ' is-on' : ''}`}
                onClick={() => {
                  setMethod(m);
                  setError('');
                }}
              >
                {m === 'phone' ? 'Phone call' : 'Email'}
              </button>
            ))}
          </div>

          {method === 'phone' ? (
            <>
              <label className="cqc-visually-hidden" htmlFor="cqc-cb-phone">Mobile number</label>
              <input
                id="cqc-cb-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Mobile number, e.g. +65 9123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`cqc-input${error ? ' has-error' : ''}`}
                aria-invalid={!!error}
              />
            </>
          ) : (
            <>
              <label className="cqc-visually-hidden" htmlFor="cqc-cb-email">Email address</label>
              <input
                id="cqc-cb-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`cqc-input${error ? ' has-error' : ''}`}
                aria-invalid={!!error}
              />
            </>
          )}
          {error && <span className="cqc-error">{error}</span>}

          <button type="submit" className="cqc-btn is-block" disabled={sending}>
            {sending ? 'Sending' : 'Request a callback'}
          </button>
        </form>
      )}
    </div>
  );
};
