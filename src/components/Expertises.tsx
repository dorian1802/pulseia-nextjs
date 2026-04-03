'use client';

import { type ReactElement } from 'react';

interface ExpertisesProps {
  t: {
    expertises: {
      title: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      creation_digitale: string;
      sites_web: string;
      sites_vitrine: string;
      ecommerce: string;
      landing_pages: string;
      strategie_visibilite: string;
      seo_premium: string;
      sea_publicite: string;
      strategie_digitale: string;
      reseaux_sociaux: string;
      community_management: string;
      campagnes_influence: string;
      contenu_viral: string;
      production_av: string;
      video_pro: string;
      photo_drone: string;
      post_production: string;
      intelligence_artificielle: string;
      agents_ia: string;
      site_autonome: string;
      integration_api: string;
      packs_strategiques: string;
      startup_prestige: string;
      growth_engine: string;
      market_leader: string;
    };
  };
}

export default function Expertises({ t }: ExpertisesProps) {
  const e = t.expertises;

  const pillars = [
    {
      title: e.creation_digitale,
      color: 'blue',
      items: [e.sites_web, e.sites_vitrine, e.ecommerce, e.landing_pages],
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      title: e.strategie_visibilite,
      color: 'green',
      items: [e.seo_premium, e.sea_publicite, e.strategie_digitale],
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-400',
    },
    {
      title: e.reseaux_sociaux,
      color: 'pink',
      items: [e.community_management, e.campagnes_influence, e.contenu_viral],
      bgColor: 'bg-pink-500/10',
      iconColor: 'text-pink-400',
    },
    {
      title: e.production_av,
      color: 'purple',
      items: [e.video_pro, e.photo_drone, e.post_production],
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      title: e.intelligence_artificielle,
      color: 'cyan',
      items: [e.agents_ia, e.site_autonome, e.integration_api],
      bgColor: 'bg-accent-cyan/10',
      iconColor: 'text-accent-cyan',
    },
    {
      title: e.packs_strategiques,
      color: 'violet',
      items: [e.startup_prestige, e.growth_engine, e.market_leader],
      bgColor: 'bg-accent-violet/10',
      iconColor: 'text-accent-violet',
    },
  ];

  const icons: Record<string, ReactElement> = {
    blue: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
      </svg>
    ),
    green: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"/>
      </svg>
    ),
    pink: (
      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
      </svg>
    ),
    purple: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
      </svg>
    ),
    cyan: (
      <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
      </svg>
    ),
    violet: (
      <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/>
      </svg>
    ),
  };

  return (
    <section id="expertises" className="scroll-mt-20 py-24 md:py-32 relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wider uppercase mb-6">
            💡 {e.subtitle1}
          </span>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {e.title} <span className="gradient-text">{e.subtitle2}</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 max-w-2xl mx-auto">
            {e.subtitle3}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} service-category rounded-2xl bg-dark-card border border-dark-border p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${pillar.bgColor} flex items-center justify-center`}>
                  {icons[pillar.color]}
                </div>
                <h4 className="font-semibold">{pillar.title}</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
