'use client';

import { useState } from 'react';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import faqData from "@/data/faq-data.json";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  sectionTitle: string;
  items: FAQItem[];
}

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 last:mb-0 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between hover:bg-cyan-500/5 transition-colors duration-200 active:scale-[0.99]"
        style={{
          animation: `fadeInUp 600ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
          animationDelay: `${index * 40}ms`,
          opacity: 0,
        }}
      >
        <h3 className="text-left text-base md:text-lg font-semibold text-white pr-4 flex-1">
          {question}
        </h3>
        <div
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{
            transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            className="w-5 h-5 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms ease-out',
        }}
      >
        <div className="px-6 pb-5 pt-4 bg-white/[0.03] border-t border-cyan-500/10">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQSection({ section, sectionIndex }: { section: FAQSection; sectionIndex: number }) {
  return (
    <section
      className="mb-12"
      style={{
        animation: `fadeInUp 600ms cubic-bezier(0.23, 1, 0.32, 1) forwards`,
        animationDelay: `${sectionIndex * 100}ms`,
        opacity: 0,
      }}
    >
      <div className="mb-6">
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {section.sectionTitle}
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
        </div>
      </div>

      <div>
        {section.items.map((item, itemIndex) => (
          <AccordionItem
            key={itemIndex}
            question={item.question}
            answer={item.answer}
            index={itemIndex}
          />
        ))}
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <div className="bg-[#0d1526] min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <Header />

      {/* Page Title Section */}
      <section className="w-full pt-20 pb-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Questions & Answers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about ContexQ's platform, features, and implementation.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {faqData.faqs.map((section, sectionIndex) => (
            <FAQSection
              key={sectionIndex}
              section={section}
              sectionIndex={sectionIndex}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
