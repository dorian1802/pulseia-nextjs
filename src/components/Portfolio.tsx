'use client';

interface PortfolioProps {
  t: {
    portfolio: {
      title: string;
      subtitle: string;
      highlight: string;
      desc: string;
      cta_question: string;
      cta_link: string;
      projects: { name: string; desc: string; url: string; tags: { label: string; color: string }[] }[];
    };
  };
}

const tagColorMap: Record<string, { bg: string; text: string }> = {
  red: { bg: 'bg-red-500/10', text: 'text-red-400' },
  cyan: { bg: 'bg-accent-cyan/10', text: 'text-accent-cyan' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
  violet: { bg: 'bg-accent-violet/10', text: 'text-accent-violet' },
};

export default function Portfolio({ t }: PortfolioProps) {
  const { portfolio: p } = t;

  return (
    <section id="portfolio" className="scroll-mt-20 py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wider uppercase mb-6">
            🎯 Portfolio
          </span>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {p.subtitle} <span className="gradient-text">{p.highlight}</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 max-w-2xl mx-auto">
            {p.desc}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {p.projects.map((project, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative rounded-2xl overflow-hidden bg-dark-card border border-dark-border card-hover`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '280px' }}>
                <img
                  src={`/media/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}-desktop.png`}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag, j) => {
                    const colors = tagColorMap[tag.color] || tagColorMap.cyan;
                    return (
                      <span
                        key={j}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan hover:gap-3 transition-all text-sm font-medium"
                >
                  <span>View project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Portfolio */}
        <div className="reveal text-center mt-16">
          <p className="text-slate-400 mb-6">{p.cta_question}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-semibold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
          >
            {p.cta_link}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
