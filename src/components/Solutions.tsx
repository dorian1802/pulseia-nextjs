'use client';

import { useState } from 'react';

interface SolutionsProps {
  t: {
    powers: {
      title: string;
      what: string;
      brand: string;
      changes: string;
      p1_title: string;
      p1_desc: string;
      p2_title: string;
      p2_desc: string;
      smart_sites: string;
      chatbot: string;
      quotes: string;
      autopilot_workflow: string;
      p3_title: string;
      p3_desc: string;
      automation: string;
      onboarding: string;
      seo: string;
      neural_intranet: string;
      p4_title: string;
      p4_desc: string;
      private_ai: string;
      secure: string;
      rag: string;
    };
  };
}

export default function Solutions({ t }: SolutionsProps) {
  const s = t.powers;
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: s.smart_sites,
      mainTitle: s.p1_title,
      mainDesc: s.p1_desc,
      features: [s.chatbot, s.quotes, '24/7'],
      gradient: 'from-accent-cyan/10 to-transparent',
      border: 'hover:border-accent-cyan/50',
      icon: (
        <svg className="w-7 h-7 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: s.autopilot_workflow,
      mainTitle: s.p3_title,
      mainDesc: s.p3_desc,
      features: [s.automation, s.onboarding, s.seo],
      gradient: 'from-accent-violet/10 to-transparent',
      border: 'hover:border-accent-violet/50',
      icon: (
        <svg className="w-7 h-7 text-accent-violet" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 01-.11.592c-.09.245-.33.447-.576.583a1.07 1.07 0 01-.371.33c-.11.046-.22.076-.327.082l-1.305.787a1 1 0 00-.39.963v.25a1 1 0 001 1h.25c.551 0 1.077-.23 1.468-.668.196-.167.368-.36.504-.54a1 1 0 00.196-.627l-.753-1.354a1 1 0 00-.514-.626H9.42c-.55 0-1.02.23-1.11.58l-.548 1.102a1 1 0 01-.196.627z"></path>
        </svg>
      ),
    },
    {
      title: s.neural_intranet,
      mainTitle: s.p4_title,
      mainDesc: s.p4_desc,
      features: [s.private_ai, s.secure, s.rag],
      gradient: 'from-white/5 to-transparent',
      border: 'hover:border-white/30',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="scroll-mt-20 py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-accent-violet/30 text-accent-violet text-xs font-medium tracking-wider uppercase mb-6">
            ⚡ {s.what}
          </span>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What <span className="gradient-text">{s.brand}</span> {s.changes}
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 max-w-2xl mx-auto">
            {s.p2_title}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} pillar-card rounded-2xl p-8 card-hover visible`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`w-14 h-14 rounded-2xl ${i === 0 ? 'bg-accent-cyan/10' : i === 1 ? 'bg-accent-violet/10' : 'bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10'} flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{card.mainDesc}</p>
              <div className="flex flex-wrap gap-2">
                {card.features.map((f, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 rounded-full text-xs ${
                      i === 0 ? 'bg-accent-cyan/10 text-accent-cyan' :
                      i === 1 ? 'bg-accent-violet/10 text-accent-violet' :
                      'bg-white/5 text-white'
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
