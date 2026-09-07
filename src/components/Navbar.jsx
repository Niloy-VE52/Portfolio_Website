import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Cpu, Search, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#experience' },
    { name: 'Services', href: '#skills' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0d]/80 backdrop-blur-xl border-b border-[#1c1c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo (Matching Reference Top Left "Brand") */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 p-[1.5px] shadow-md shadow-pink-500/20">
            <div className="w-full h-full bg-[#0b0b0d] rounded-full flex items-center justify-center">
              <Cpu className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-serif text-2xl font-normal text-white tracking-tight">
            {personalInfo.name}<span className="text-pink-500">.</span>
          </span>
        </a>

        {/* Center: Navigation Links (Matching Reference Center Nav) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.name)}
              className={`text-xs font-sans font-medium transition-colors ${
                activeSection === item.name
                  ? 'text-pink-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Download CV Action Pill Button (Matching Reference Top Right Button) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-xs font-semibold shadow-lg shadow-pink-500/25 hover:scale-105 transition-all flex items-center gap-2 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-full bg-pink-500 text-white text-xs font-semibold"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#141417] border border-[#27272a] text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0e0e11] border-b border-[#1c1c21] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 font-sans">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-[#18181c] hover:text-pink-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold shadow-lg"
                >
                  Download CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
