import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, CheckCircle2, Shield, FileText, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const avatarStack = [
    '/avatars/niloy_photo.jpg',
    '/avatars/avatar1.jpg',
    '/avatars/avatar2.jpg',
    '/avatars/avatar3.jpg',
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#0b0b0d] border-b border-[#1c1c21] min-h-[90vh] flex items-center">
      
      {/* Background Ambient Stripe & Mesh Pattern */}
      <div className="absolute inset-0 bg-stripe-pattern pointer-events-none opacity-40" />

      {/* Far Left Margin Vertical Dots */}
      <div className="absolute left-6 sm:left-10 top-1/3 hidden lg:flex flex-col gap-4 z-20 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>

      {/* Far Right Margin Vertical Dots */}
      <div className="absolute right-6 sm:right-10 bottom-1/3 hidden lg:flex flex-col gap-4 z-20 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Portrait, Organic Backdrop Blob, & Floating Cards (Shifted to Left) */}
          <div className="lg:col-span-5 relative flex justify-center items-center order-2 lg:order-1">
            
            {/* Hand-drawn SVG Curved Doodle Arrow (Pointing toward text on right) */}
            <svg
              className="absolute -top-10 right-4 w-16 h-16 text-pink-400 opacity-80 z-20 pointer-events-none hidden sm:block transform scale-x-[-1]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M20,20 Q60,10 70,50 T30,80" />
              <path d="M25,65 L30,80 L45,75" />
            </svg>

            {/* Hand-drawn Spark Doodles */}
            <div className="absolute -top-6 left-8 text-orange-400 opacity-90 z-20 pointer-events-none hidden sm:block animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Main Portrait Frame with Backdrop Organic Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md mx-auto"
            >
              {/* Organic Background Blob */}
              <div className="absolute inset-0 -m-6 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-pink-500/35 via-rose-500/25 to-orange-500/40 blur-2xl opacity-80 animate-pulse pointer-events-none" />

              {/* High Quality User Photo Portrait */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-[#141417] aspect-[3/4]">
                <img
                  src="/avatars/niloy_photo.jpg"
                  alt="Niloy Das AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge 1 (Bottom Left of Portrait) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -left-4 sm:-left-8 z-30 bg-[#141417]/95 border border-[#27272a] rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-md hover:border-pink-500/40 transition-colors"
              >
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {avatarStack.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Avatar"
                      className="w-7 h-7 rounded-full border-2 border-[#141417] object-cover"
                    />
                  ))}
                </div>
                <div className="text-left font-sans">
                  <div className="text-[11px] font-bold text-white leading-tight">AIML Engineer</div>
                  <div className="text-[10px] font-mono text-pink-400">@ Virtual Employee</div>
                </div>
              </motion.div>


            </motion.div>

          </div>

          {/* RIGHT COLUMN: Greeting, Title, Subtitle, & Dual CTAs (Shifted to Right) */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141417] border border-[#27272a] text-slate-300 text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Briefcase className="w-3.5 h-3.5 text-pink-400" />
              <span>AIML Engineer @ Virtual Employee • Ex-DRDO Intern</span>
            </motion.div>

            {/* Greeting & Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="font-serif text-3xl sm:text-4xl text-slate-300 font-normal block">
                Hello, I'm
              </span>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.02]">
                {personalInfo.name}
                <br />
                <span className="font-instrument italic text-pink-orange-gradient font-normal">
                  AIML Engineer @ Virtual Employee
                </span>
              </h1>

              {/* Subtitle Text */}
              <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans leading-relaxed pt-2">
                AIML Engineer at Virtual Employee specializing in production Generative AI, RAG document intelligence, computer vision systems, and full-stack LLM architectures. Former DRDO summer project intern.
              </p>
            </motion.div>

            {/* Dual Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary Pill Button ("Get Started") */}
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold text-xs shadow-xl shadow-pink-500/25 hover:scale-105 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Play Button ("Watch Intro") */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#141417] hover:bg-[#1f1f24] border border-[#27272a] hover:border-pink-500/40 text-slate-200 text-xs font-semibold transition-all group active:scale-95"
              >
                <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Intro</span>
              </button>
            </motion.div>


          </div>

        </div>
      </div>
    </section>
  );
}
