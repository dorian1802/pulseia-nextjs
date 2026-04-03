'use client';

interface HeroProps {
  t: {
    hero: {
      subtitle: string;
      line1: string;
      phrase1: string;
      phrase2: string;
      phrase3: string;
      phrase4: string;
      cta1: string;
      cta2: string;
    };
  };
  lang: string;
}

export default function Hero({ t, lang }: HeroProps) {
  const phrases = [
    t.hero.phrase1,
    t.hero.phrase2,
    t.hero.phrase3,
    t.hero.phrase4
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video 
        className="fixed inset-0 w-full" 
        style={{ height: '100vh', objectFit: 'cover' }} 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" style={{ zIndex: -1 }} />

      {/* Neural network background */}
      <div className="neural-bg" id="neural-bg">
        <div className="neural-node" style={{ top: '15%', left: '20%', animationDelay: '0s' }}></div>
        <div className="neural-node" style={{ top: '25%', left: '70%', animationDelay: '0.5s' }}></div>
        <div className="neural-node" style={{ top: '60%', left: '15%', animationDelay: '1s' }}></div>
        <div className="neural-node" style={{ top: '70%', left: '80%', animationDelay: '1.5s' }}></div>
        <div className="neural-node" style={{ top: '40%', left: '50%', animationDelay: '2s' }}></div>
        <div className="neural-node" style={{ top: '80%', left: '40%', animationDelay: '2.5s' }}></div>
        <div className="neural-node" style={{ top: '10%', left: '60%', animationDelay: '0.3s' }}></div>
        <div className="neural-node" style={{ top: '50%', left: '85%', animationDelay: '1.2s' }}></div>
        <div className="neural-node" style={{ top: '85%', left: '25%', animationDelay: '1.8s' }}></div>
        <div className="neural-node" style={{ top: '35%', left: '35%', animationDelay: '0.8s' }}></div>
        <div className="neural-line" style={{ top: '15%', left: '20%', width: '200px', transform: 'rotate(25deg)', animationDelay: '0s' }}></div>
        <div className="neural-line" style={{ top: '25%', left: '70%', width: '180px', transform: 'rotate(-15deg)', animationDelay: '1s' }}></div>
        <div className="neural-line" style={{ top: '60%', left: '15%', width: '220px', transform: 'rotate(45deg)', animationDelay: '2s' }}></div>
        <div className="neural-line" style={{ top: '70%', left: '80%', width: '150px', transform: 'rotate(-30deg)', animationDelay: '0.5s' }}></div>
        <div className="neural-line" style={{ top: '40%', left: '50%', width: '190px', transform: 'rotate(10deg)', animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wider uppercase mb-8">
            🚀 {t.hero.subtitle}
          </span>
        </div>

        <h1 className="reveal reveal-delay-1 leading-tight mb-8">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{t.hero.line1}</span>
          <span className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-stencil">
            <span id="typewriter" className="typewriter-text"></span>
          </span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {lang === 'fr'
            ? 'Découvrez comment l\'Intelligence Artificielle transforme votre site en un moteur de croissance autonome.'
            : 'Discover how Artificial Intelligence transforms your website into an autonomous growth engine.'}
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#solutions"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold text-base hover:opacity-90 transition-all duration-300 glow-cyan hover:scale-105"
          >
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent-violet/50 text-white font-semibold text-base hover:border-accent-violet hover:bg-accent-violet/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
            </svg>
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Typewriter script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const phrases = ${JSON.stringify(phrases)};
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typewriter = document.getElementById('typewriter');

            function type() {
              const currentPhrase = phrases[phraseIndex];
              const isLastPhrase = phraseIndex === phrases.length - 1;
              
              if (isDeleting) {
                typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
              } else {
                typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
              }

              let typeSpeed = isDeleting ? 50 : 100;

              if (!isDeleting && charIndex === currentPhrase.length) {
                if (isLastPhrase) {
                  document.querySelector('.animate-pulse')?.classList.remove('animate-pulse');
                  return;
                }
                typeSpeed = 2000;
                isDeleting = true;
              } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
              }

              setTimeout(type, typeSpeed);
            }
            
            document.addEventListener('DOMContentLoaded', type);
          `
        }}
      />
    </section>
  );
}
