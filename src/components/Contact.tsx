'use client';

import { useState } from 'react';

interface ContactProps {
  t: {
    contact: {
      title: string;
      headline: string;
      subtitle: string;
      offices: string;
      location: string;
      email_label: string;
      email: string;
      phone_label: string;
      name_label: string;
      name_placeholder: string;
      email_field_label: string;
      email_placeholder: string;
      company_label: string;
      company_placeholder: string;
      project_label: string;
      project_placeholder: string;
      project_1: string;
      project_2: string;
      project_3: string;
      project_4: string;
      project_5: string;
      message_label: string;
      message_placeholder: string;
      submit: string;
      response_time: string;
    };
  };
}

export default function Contact({ t }: ContactProps) {
  const { contact: c } = t;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Text */}
          <div>
            <span className="reveal inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wider uppercase mb-6">
              📬 Contact Us
            </span>
            <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">transform</span> your business?
            </h2>
            <p className="reveal reveal-delay-2 text-slate-400 mb-10">
              Let's discuss your project and discover how AI can automate your growth.
            </p>

            <div className="reveal reveal-delay-3 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1">{c.offices}</p>
                  <p className="text-slate-400 text-sm">{c.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1">{c.email_label}</p>
                  <a href={`mailto:${c.email}`} className="text-accent-cyan text-sm hover:underline">{c.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1">{c.phone_label}</p>
                  <a href="tel:+3200000000" className="text-slate-400 text-sm hover:text-white transition-colors">+32 0 00 00 00 00</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="rounded-2xl border border-dark-border bg-dark-card/50 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent-cyan/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{c.response_time}</h3>
                <p className="text-slate-400">We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-dark-border bg-dark-card/50 p-6 md:p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">{c.name_label}</label>
                    <input
                      type="text"
                      required
                      placeholder={c.name_placeholder}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-accent-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">{c.email_field_label}</label>
                    <input
                      type="email"
                      required
                      placeholder={c.email_placeholder}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-accent-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">{c.company_label}</label>
                    <input
                      type="text"
                      placeholder={c.company_placeholder}
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-accent-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">{c.project_label}</label>
                    <select
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent-cyan focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0f]">{c.project_placeholder}</option>
                      <option value="smart-site" className="bg-[#0a0a0f]">{c.project_1}</option>
                      <option value="ai-automation" className="bg-[#0a0a0f]">{c.project_2}</option>
                      <option value="chatbot" className="bg-[#0a0a0f]">{c.project_3}</option>
                      <option value="neural-intranet" className="bg-[#0a0a0f]">{c.project_4}</option>
                      <option value="other" className="bg-[#0a0a0f]">{c.project_5}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">{c.message_label}</label>
                  <textarea
                    rows={4}
                    placeholder={c.message_placeholder}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">{c.phone_label} <span className="text-white/40">(optionnel)</span></label>
                  <input
                    type="tel"
                    placeholder="+32 0 00 00 00 00"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-accent-cyan focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold text-lg hover:opacity-90 transition-all duration-300 glow-cyan hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {c.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
