'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'nl', label: 'NL' },
];

interface NavbarProps {
  t: {
    nav: { solutions: string; expertises: string; portfolio: string; contact: string; cta: string };
  };
  lang: string;
}

export default function Navbar({ t, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLangLabel = LANGUAGES.find(l => l.code === lang)?.label || 'FR';

  return (
    <nav
      className={cn(
        'navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'scrolled' : ''
      )}
      style={{ background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'blur(0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight font-stencil">
            Pulse<span className="text-accent-cyan"> ia</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm text-white hover:text-accent-cyan transition-colors">{t.nav.solutions}</a>
          <a href="#expertises" className="text-sm text-white hover:text-accent-cyan transition-colors">{t.nav.expertises}</a>
          <a href="#portfolio" className="text-sm text-white hover:text-accent-cyan transition-colors">{t.nav.portfolio}</a>
          <a href="#contact" className="text-sm text-white hover:text-accent-cyan transition-colors">{t.nav.contact}</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            {t.nav.cta}
          </a>

          {/* Language Switcher Inline */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm text-white hover:text-accent-cyan transition-colors px-2 py-1 rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
              </svg>
              {currentLangLabel}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 py-2 bg-dark-card border border-dark-border rounded-lg shadow-xl min-w-[80px]">
                {LANGUAGES.filter(l => l.code !== lang).map(l => (
                  <Link
                    key={l.code}
                    href={`/${l.code}`}
                    className="block px-4 py-2 text-sm text-white hover:text-accent-cyan hover:bg-white/5 transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-btn"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-dark-border">
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#solutions" className="text-lg text-white hover:text-accent-cyan transition-colors" onClick={() => setMobileOpen(false)}>{t.nav.solutions}</a>
            <a href="#expertises" className="text-lg text-white hover:text-accent-cyan transition-colors" onClick={() => setMobileOpen(false)}>{t.nav.expertises}</a>
            <a href="#portfolio" className="text-lg text-white hover:text-accent-cyan transition-colors" onClick={() => setMobileOpen(false)}>{t.nav.portfolio}</a>
            <a href="#contact" className="text-lg text-white hover:text-accent-cyan transition-colors" onClick={() => setMobileOpen(false)}>{t.nav.contact}</a>
            <a href="#contact" className="px-4 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-white text-center font-semibold" onClick={() => setMobileOpen(false)}>
              {t.nav.cta}
            </a>
            {/* Mobile Language Switcher */}
            <div className="flex gap-4 pt-2 border-t border-white/10">
              {LANGUAGES.map(l => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  className={`text-sm ${lang === l.code ? 'text-accent-cyan' : 'text-white/60 hover:text-white'} transition-colors`}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}