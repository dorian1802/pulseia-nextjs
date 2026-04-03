'use client';

interface FooterProps {
  t: {
    footer: {
      tagline: string;
      legal: string;
      privacy: string;
      copyright: string;
    };
    nav: {
      solutions: string;
      expertises: string;
      portfolio: string;
      contact: string;
    };
  };
  lang: string;
  onLangChange: (lang: string) => void;
}

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'nl', label: 'NL' },
];

export default function Footer({ t, lang, onLangChange }: FooterProps) {
  const { footer: f, nav } = t;

  return (
    <footer className="bg-[#0a0a0f] py-12 border-t border-[#1e293b] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Big Shoulders Stencil', sans-serif", fontWeight: 800 }}>
                Pulse<span className="text-accent-cyan"> ia</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">{f.tagline}</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Smart Sites</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Autopilot Workflow</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Neural Intranet RAG</a></li>
            </ul>
          </div>

          {/* Agency */}
          <div>
            <h4 className="font-semibold mb-4">Agency</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#expertises" className="hover:text-white transition-colors">{nav.expertises}</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">{nav.portfolio}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{nav.contact}</a></li>
            </ul>
          </div>

          {/* Legal & Language */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLangChange(l.code)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    lang === l.code
                      ? 'text-accent-cyan bg-accent-cyan/10'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">{f.legal}</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">{f.privacy}</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1e293b] text-center">
          <p className="text-slate-500 text-sm">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
