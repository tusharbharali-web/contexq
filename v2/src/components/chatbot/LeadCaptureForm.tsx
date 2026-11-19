'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, User, Mail, Building2, MessageSquare, ShieldCheck } from 'lucide-react';
import { LeadFormData, LeadFormErrors } from '../../types/chat';

interface LeadCaptureFormProps {
  onClose: () => void;
  onSubmitSuccess?: (data: LeadFormData) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  onClose,
  onSubmitSuccess
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    topic: ''
  });

  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: LeadFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.businessEmail.trim())) {
        newErrors.businessEmail = 'Please provide a valid work email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 30,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px'
      }}
      className="animate-in fade-in slide-in-from-bottom-3 duration-250"
    >
      {/* Form Header */}
      <div 
        style={{
          height: '62px',
          padding: '0 16px',
          borderBottom: '1px solid #E2E8F0',
          backgroundColor: '#F5F8FC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '16px 16px 0 0',
          flexShrink: 0
        }}
      >
        <div>
          <h3 className="text-xs font-bold text-[#06111F] m-0 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#328CFF]" />
            <span>Connect with ContexQ Team</span>
          </h3>
          <p className="text-[10px] text-[#687B91] m-0">
            Request an enterprise consultation or product demo
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Enquiry Form"
          className="p-1.5 rounded-lg text-[#687B91] hover:text-[#06111F] hover:bg-slate-200/60 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 contexq-scrollbar">
        {isSubmitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3.5">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-sm animate-in zoom-in-95">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-bold text-[#06111F] m-0">
              Enquiry Recorded
            </h4>
            <p className="text-xs text-[#06111F]/80 leading-relaxed max-w-xs m-0">
              Thank you for your interest in ContexQ. Your enquiry has been recorded in this demonstration. Our team would be able to follow up once the backend integration is enabled.
            </p>
            <div className="p-2.5 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0] text-[11px] text-[#687B91] font-mono text-left w-full space-y-1">
              <div>Name: <span className="text-[#06111F] font-semibold">{formData.fullName}</span></div>
              <div>Email: <span className="text-[#06111F] font-semibold">{formData.businessEmail}</span></div>
            </div>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl bg-[#328CFF] hover:bg-[#2574E0] active:scale-95 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
            >
              Return to Chat
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="font-semibold text-[#06111F] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#328CFF]" />
                <span>Full Name <span className="text-rose-500">*</span></span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full px-3 py-2 rounded-xl border bg-[#F5F8FC] focus:bg-white text-xs text-[#06111F] placeholder-[#687B91] focus:outline-none transition-all ${
                  errors.fullName
                    ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                    : 'border-[#E2E8F0] focus:border-[#328CFF]'
                }`}
              />
              {errors.fullName && (
                <span className="text-[10px] text-rose-500 block">{errors.fullName}</span>
              )}
            </div>

            {/* Business Email */}
            <div className="space-y-1">
              <label className="font-semibold text-[#06111F] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#328CFF]" />
                <span>Business Email <span className="text-rose-500">*</span></span>
              </label>
              <input
                type="email"
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                placeholder="jane.doe@enterprise.com"
                className={`w-full px-3 py-2 rounded-xl border bg-[#F5F8FC] focus:bg-white text-xs text-[#06111F] placeholder-[#687B91] focus:outline-none transition-all ${
                  errors.businessEmail
                    ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                    : 'border-[#E2E8F0] focus:border-[#328CFF]'
                }`}
              />
              {errors.businessEmail && (
                <span className="text-[10px] text-rose-500 block">{errors.businessEmail}</span>
              )}
            </div>

            {/* Company Name */}
            <div className="space-y-1">
              <label className="font-semibold text-[#06111F] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#687B91]" />
                <span>Company Name <span className="text-[#687B91] text-[10px] font-normal">(Optional)</span></span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Organization or Institution"
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] focus:bg-white text-xs text-[#06111F] placeholder-[#687B91] focus:outline-none focus:border-[#328CFF] transition-all"
              />
            </div>

            {/* Topic / Discussion */}
            <div className="space-y-1">
              <label className="font-semibold text-[#06111F] flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#687B91]" />
                <span>What would you like to discuss? <span className="text-[#687B91] text-[10px] font-normal">(Optional)</span></span>
              </label>
              <textarea
                rows={3}
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="Tell us about your requirements (e.g. Supply Chain visibility, Money Mule Detection, KYC/AML entity resolution)..."
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] focus:bg-white text-xs text-[#06111F] placeholder-[#687B91] focus:outline-none focus:border-[#328CFF] transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                style={{ cursor: 'pointer' }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#328CFF] hover:bg-[#2574E0] active:scale-[0.99] text-white font-semibold text-xs shadow-launcher transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
