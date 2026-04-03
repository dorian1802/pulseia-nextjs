'use client';

interface ProcessProps {
  t: {
    process: {
      title: string;
      subtitle: string;
      work: string;
      desc: string;
      phase1_title: string;
      phase1_desc: string;
      phase2_title: string;
      phase2_desc: string;
      phase3_title: string;
      phase3_desc: string;
      phase4_title: string;
      phase4_desc: string;
    };
  };
}

export default function Process({ t }: ProcessProps) {
  const { process: p } = t;

  const phases = [
    {
      number: '01',
      title: p.phase1_title,
      desc: p.phase1_desc,
      bgColor: 'rgba(0, 163, 255, 0.1)',
      borderColor: 'rgba(0, 163, 255, 0.3)',
      textColor: '#00A3FF',
      lineGradient: 'linear-gradient(to right, rgba(0, 163, 255, 0.6), transparent)',
      delay: 1,
    },
    {
      number: '02',
      title: p.phase2_title,
      desc: p.phase2_desc,
      bgColor: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      textColor: '#a855f7',
      lineGradient: 'linear-gradient(to right, rgba(168, 85, 247, 0.6), transparent)',
      delay: 2,
    },
    {
      number: '03',
      title: p.phase3_title,
      desc: p.phase3_desc,
      bgColor: 'rgba(34, 197, 94, 0.1)',
      borderColor: 'rgba(34, 197, 94, 0.3)',
      textColor: '#22c55e',
      lineGradient: 'linear-gradient(to right, rgba(34, 197, 94, 0.6), transparent)',
      delay: 3,
    },
    {
      number: '04',
      title: p.phase4_title,
      desc: p.phase4_desc,
      bgColor: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'rgba(168, 85, 247, 0.3)',
      textColor: '#a855f7',
      lineGradient: 'linear-gradient(to right, rgba(168, 85, 247, 0.6), transparent)',
      delay: 4,
    },
  ];

  return (
    <section id="processus" className="scroll-mt-20 py-24 md:py-32 relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">
            🔄 Our Process
          </span>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 max-w-2xl mx-auto">
            A proven 4-phase process to transform your vision into digital reality.
          </p>
        </div>

        {/* Process grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${phase.delay} text-center relative`}
            >
              {/* Number box */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                style={{
                  backgroundColor: phase.bgColor,
                  border: `1px solid ${phase.borderColor}`,
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: phase.textColor }}
                >
                  {phase.number}
                </span>
              </div>

              {/* Connecting line (not on last item) */}
              {i < 3 && (
                <div
                  className="hidden md:block absolute top-8 left-[60%] w-full h-0.5"
                  style={{ background: phase.lineGradient }}
                />
              )}

              {/* Content */}
              <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
              <p className="text-slate-400 text-sm">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
