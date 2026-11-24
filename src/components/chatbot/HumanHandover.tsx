'use client';

import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import type { ChatHistoryTurn } from '../../types/chat';
import { submitLead } from '../../lib/leads/client';

interface HumanHandoverProps {
  onClose?: () => void;
  onRequestHandover?: (contact: { name: string; phone: string; email?: string }) => void;
  /** Recent chat messages, sent with the request so the team has context. */
  conversation?: ChatHistoryTurn[];
}

type Field = 'name' | 'phone' | 'email';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
// digits with optional +, spaces, brackets or hyphens; 7 to 15 digits in total
const isPhone = (v: string) => /^\+?[\d\s()-]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15;

/** Callback request: name and phone number are required, email is optional. */
export const HumanHandover: React.FC<HumanHandoverProps> = ({ onClose, onRequestHandover, conversation }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState<Partial<Record<Field | 'form', string>>>({});
  const [requested, setRequested] = useState<{ name: string; phone: string; reference?: string } | null>(null);
  const [sending, setSending] = useState(false);

  const set = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const found: typeof errors = {};
    if (!name) found.name = 'Please enter your name.';
    if (!isPhone(phone)) found.phone = 'Please enter a valid phone number, including the country code.';
    if (email && !isEmail(email)) found.email = 'Please enter a valid email address, or leave it empty.';
    setErrors(found);
    if (Object.keys(found).length || sending) return;

    setSending(true);
    const result = await submitLead({ type: 'callback', name, phone, ...(email ? { email } : {}), conversation });
    setSending(false);
    if (!result.ok) {
      setErrors({ form: result.error || 'We could not send your request. Please try again.' });
      return;
    }
    setRequested({ name, phone, reference: result.reference });
    onRequestHandover?.({ name, phone, ...(email ? { email } : {}) });
  };

  const input = (field: Field, label: string, props: React.InputHTMLAttributes<HTMLInputElement>, optional = false) => (
    <div className="cqc-form-row">
      <label htmlFor={`cqc-cb-${field}`}>
        {label} {optional && <span className="cqc-optional">(optional)</span>}
      </label>
      <input
        id={`cqc-cb-${field}`}
        value={form[field]}
        onChange={set(field)}
        className={`cqc-input${errors[field] ? ' has-error' : ''}`}
        aria-invalid={!!errors[field]}
        {...props}
      />
      {errors[field] && <span className="cqc-error">{errors[field]}</span>}
    </div>
  );

  return (
    <div className="cqc-card">
      <div className="cqc-card-head">
        <div>
          <h4>Speak with a ContexQ specialist</h4>
          {!requested && <p>Leave your details and our team will call you back.</p>}
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
              {requested.reference ? `Reference ${requested.reference}. ` : ''}Thank you, {requested.name}. Our team will call you on{' '}
              <strong>{requested.phone}</strong> shortly.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          {input('name', 'Name', { type: 'text', autoComplete: 'name', maxLength: 120 })}
          {input('phone', 'Phone number', {
            type: 'tel',
            inputMode: 'tel',
            autoComplete: 'tel',
            maxLength: 30,
          })}
          {input('email', 'Email', { type: 'email', inputMode: 'email', autoComplete: 'email', maxLength: 160 }, true)}
          {errors.form && <span className="cqc-error">{errors.form}</span>}

          <button type="submit" className="cqc-btn is-block" disabled={sending}>
            {sending ? 'Sending' : 'Request a callback'}
          </button>
        </form>
      )}
    </div>
  );
};
