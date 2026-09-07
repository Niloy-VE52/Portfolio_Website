import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Github, Linkedin, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Full-Stack AI Project', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0b0b0d] border-b border-[#1c1c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
            INITIATE CONVERSATION
          </span>
          
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            Let's <span className="font-instrument italic text-pink-orange-gradient font-normal">connect</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans">
            Open to AI engineering roles, LLM/RAG architecture consultation, and computer vision deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121216] border border-[#27272a] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl text-white font-normal">
                Direct Contact
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Feel free to copy email or connect via social platforms below.
              </p>

              {/* Copy Email Button */}
              <div className="p-4 rounded-2xl bg-[#18181c] border border-[#27272a] space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Primary Email</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-pink-300 truncate">{personalInfo.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#27272a] hover:bg-[#3f3f46] text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#18181c] border border-[#27272a] hover:border-pink-500/40 text-slate-200 text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-pink-400" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-slate-500">Explore →</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#18181c] border border-[#27272a] hover:border-pink-500/40 text-slate-200 text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-pink-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-500">Connect →</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121216] border border-[#27272a] rounded-3xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-white font-normal">Message Transmitted!</h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto font-sans">
                    Thank you for reaching out, {formState.name}. I will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: 'Full-Stack AI Project', message: '' }); }}
                    className="px-6 py-2.5 rounded-full bg-[#27272a] text-xs font-mono text-pink-300 hover:bg-[#3f3f46]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-[#18181c] border border-[#27272a] rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#18181c] border border-[#27272a] rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Focus Area</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#18181c] border border-[#27272a] rounded-2xl px-4 py-3 text-xs text-white focus:outline-none focus:border-pink-500 font-sans"
                    >
                      <option value="Computer Vision System">Computer Vision & Face Recognition System</option>
                      <option value="RAG & LLM Application">RAG Pipeline & Vector DB Application</option>
                      <option value="Full-Stack AI Project">Full-Stack AI Project Consultation</option>
                      <option value="Job Opportunity">Hiring / Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project requirements or position details..."
                      className="w-full bg-[#18181c] border border-[#27272a] rounded-2xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#27272a] hover:bg-pink-600 border border-[#3f3f46] hover:border-pink-500 text-white font-semibold text-xs transition-all shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-pink-400 group-hover:text-white" />
                    <span>Send Message to Niloy</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
