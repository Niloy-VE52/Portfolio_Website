import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1c1c21] bg-[#09090b] py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Branding */}
          <div className="flex items-center gap-3">
            <div>
              <div className="font-serif text-xl font-normal text-white">{personalInfo.name}</div>
              <div className="font-mono text-[11px] text-slate-500">AI & Machine Learning Engineer Portfolio</div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-pink-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-500">Built with React & Vite</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#18181c] border border-[#27272a] hover:border-pink-500/40 text-pink-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#1c1c21] text-center font-mono text-[10px] text-slate-600">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Engineering with taste.
        </div>
      </div>
    </footer>
  );
}
