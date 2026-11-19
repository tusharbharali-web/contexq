'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LeadFormData, LeadFormErrors } from '../../types/chat';

interface LeadCaptureFormProps {
  onClose: () => void;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onClose, onSubmitSuccess }) => {
  const [formData, setFormData] = useState<LeadFormData>({ fullName: '', businessEmail: '', companyName: '', topic: '' });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const next: LeadFormErrors = {};
    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!formData.businessEmail.trim()) next.businessEmail = 'Please enter your business email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) next.businessEmail = 'Please enter a valid work email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
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
              Your enquiry has been recorded in this demonstration. Our team will be able to follow up once the
              backend integration is enabled.
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

            <button type="submit" className="cqc-btn is-block">Submit enquiry</button>
          </form>
        )}
      </div>
    </div>
  );
};
