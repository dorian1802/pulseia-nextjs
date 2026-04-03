'use client';

interface OfferProps {
  t: {
    offer: {
      title: string;
      headline: string;
      highlight: string;
      desc1: string;
      desc2: string;
      desc3: string;
      leads: string;
      delay: string;
      price: string;
      cta: string;
      note: string;
    };
  };
}

export default function Offer({ t }: OfferProps) {
  const { offer: o } = t;

  return (
    <section id="audit" className="scroll-mt-20 py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="reveal flex items-center justify-center gap-3 mb-6 visible">
          <div className="h-px w-12 bg-accent-cyan" />
          <span className="text-accent-cyan text-sm font-medium tracking-widest uppercase">Exclusive Offer</span>
          <div className="h-px w-12 bg-accent-cyan" />
        </div>

        {/* Main headline */}
        <h2 className="reveal reveal-delay-1 mb-8 visible">
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Get your
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">free audit</span>
          </span>
        </h2>

        {/* Subheadline */}
        <p className="reveal reveal-delay-2 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed visible">
          In 24h, receive a complete analysis of your digital presence with the 3 priority actions to double your leads.
        </p>

        {/* Stats row */}
        <div className="reveal reveal-delay-3 flex flex-wrap justify-center gap-12 mb-12 visible">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">+200%</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider mt-1">Potential leads</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">24h</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider mt-1">Delivery time</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white">100%</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider mt-1">Free</div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-4 visible">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            <span>Request my audit</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-slate-500 text-sm mt-4">No commitment. Free analysis in 24h.</p>
        </div>
      </div>
    </section>
  );
}
