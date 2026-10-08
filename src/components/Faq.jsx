// src/components/Faq.jsx
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq({ content, onOpenBooking }) {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(0); // first item opened by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--surface-alt)]/50 border-b border-[var(--border-color)]/60 scroll-mt-12">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            <HelpCircle className="w-4 h-4" />
            <span>{faq.eyebrow}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)]">
            {faq.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-muted)]">
            {faq.subheading}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading text-lg sm:text-xl font-medium text-[var(--ink)] hover:text-[var(--primary)] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[var(--surface-alt)] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[var(--primary-light)] text-[var(--primary)]" : "text-[var(--ink-muted)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed border-t border-gray-100/80">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Callout */}
        <div className="text-center mt-12 pt-4">
          <p className="text-sm text-[var(--ink-muted)]">
            Have a question not listed here?{" "}
            <button
              onClick={onOpenBooking}
              className="text-[var(--primary)] font-bold hover:underline"
            >
              Ask Dr. Reynolds directly during your free consultation.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
