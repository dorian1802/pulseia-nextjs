'use client';

import { useState } from 'react';

interface FAQProps {
  t: {
    faq: {
      title: string;
      subtitle: string;
      questions: { q: string; a: string }[];
    };
  };
}

export default function FAQ({ t }: FAQProps) {
  const { faq } = t;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="scroll-mt-20 py-24 md:py-32 relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wider uppercase mb-6">
            FAQ
          </span>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently <span className="gradient-text">asked questions</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400">
            Everything you need to know about our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faq.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal faq-item rounded-2xl border border-dark-border bg-dark-card/50 overflow-hidden`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="faq-question w-full text-left px-8 py-6 flex items-center justify-between font-semibold text-lg hover:text-accent-cyan transition-colors group"
                >
                  <span>{item.q}</span>
                  <div className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent-cyan transition-colors flex-shrink-0 ml-4">
                    <svg
                      className={`faq-icon w-4 h-4 text-accent-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`faq-answer px-8 overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0 pb-0'}`}
                >
                  <p className="text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
