'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ChatHistoryTurn, LeadFormData, LeadFormErrors } from '../../types/chat';
import { submitLead } from '../../lib/leads/client';

interface LeadCaptureFormProps {
  onClose: () => void;
  onSubmitSuccess?: (data: LeadFormData) => void;
  /** Recent chat messages, sent with the enquiry so the team has context. */
  conversation?: ChatHistoryTurn[];
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onClose, onSubmitSuccess, conversation }) => {
  const [formData, setFormData] = useState<LeadFormData>({ fullName: '', businessEmail: '', companyName: '', topic: '' });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [reference, setReference] = useState<string | undefined>();

  const validate = (): boolean => {
    const next: LeadFormErrors = {};
    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!formData.businessEmail.trim()) next.businessEmail = 'Please enter your business email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) next.businessEmail = 'Please enter a valid work email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);
    setSendError('');
    const result = await submitLead({
      type: 'team',
      name: formData.fullName.trim(),
      email: formData.businessEmail.trim(),
      company: formData.companyName.trim() || undefined,
      message: formData.topic.trim() || undefined,
      conversation,
    });
    setSending(false);
    if (!result.ok) {
      setSendError(result.error || 'We could not send your enquiry. Please try again.');
      return;
    }
    setReference(result.reference);
    setIsSubmitted(true);
    onSubmitSuccess?.(formData);
  };

  const set = (key: keyof LeadFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [key]: e.target.value });

  return (
    <div className="cqc-form">
      <div className="cqc-form-head">
        <div>
          <h3>Talk to our team</h3>
          <p>Request a consultation or a product demo.</p>
        </div>
        <button type="button" className="cqc-dismiss" onClick={onClose} aria-label="Close enquiry form">
          <X />
        </button>
      </div>

      <div className="cqc-form-body contexq-scrollbar">
        {isSubmitted ? (
          <div className="cqc-done">
            <h4>Thank you</h4>
            <p>
              Your enquiry has been sent. Our team will contact you at <strong>{formData.businessEmail}</strong> shortly.
              {reference ? ` Reference ${reference}.` : ''}
            </p>
            <div className="cqc-summary">
              <div>Name: <strong>{formData.fullName}</strong></div>
              <div>Email: <strong>{formData.businessEmail}</strong></div>
            </div>
            <button type="button" className="cqc-btn" onClick={onClose}>Back to chat</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="cqc-form-row">
              <label htmlFor="cqc-name">Full name</label>
              <input id="cqc-name" type="text" autoComplete="name" value={formData.fullName} onChange={set('fullName')}
                className={`cqc-input${errors.fullName ? ' has-error' : ''}`} aria-invalid={!!errors.fullName} />
              {errors.fullName && <span className="cqc-error">{errors.fullName}</span>}
            </div>

            <div className="cqc-form-row">
              <label htmlFor="cqc-email">Business email</label>
              <input id="cqc-email" type="email" autoComplete="email" value={formData.businessEmail} onChange={set('businessEmail')}
                className={`cqc-input${errors.businessEmail ? ' has-error' : ''}`} aria-invalid={!!errors.businessEmail} />
              {errors.businessEmail && <span className="cqc-error">{errors.businessEmail}</span>}
            </div>

            <div className="cqc-form-row">
              <label htmlFor="cqc-company">Company <span className="cqc-optional">(optional)</span></label>
              <input id="cqc-company" type="text" autoComplete="organization" value={formData.companyName} onChange={set('companyName')} className="cqc-input" />
            </div>

            <div className="cqc-form-row">
              <label htmlFor="cqc-topic">What would you like to discuss? <span className="cqc-optional">(optional)</span></label>
              <textarea id="cqc-topic" rows={3} value={formData.topic} onChange={set('topic')} className="cqc-input"
                placeholder="For example supply chain visibility, money mule detection or KYC and AML" />
            </div>

            {sendError && <p className="cqc-error" role="alert">{sendError}</p>}
            <button type="submit" className="cqc-btn is-block" disabled={sending}>{sending ? 'Sending' : 'Submit enquiry'}</button>
          </form>
        )}
      </div>
    </div>
  );
};
