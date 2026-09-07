import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#121216] border border-[#27272a] rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="px-6 py-5 bg-[#18181c] border-b border-[#27272a] flex items-center justify-between text-white relative">
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-semibold tracking-wider uppercase border border-pink-500/30">
                {project.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#27272a] hover:bg-pink-600 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
            
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4" />
                Project Overview & Architecture
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Key Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#18181c] border border-[#27272a]">
                    <span className="text-pink-400 font-bold text-sm leading-none flex-shrink-0 mt-0.5">+</span>
                    <span className="text-slate-300 text-xs font-normal">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                <Cpu className="w-4 h-4" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-[#18181c] border border-[#27272a] text-slate-300 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-[#27272a] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#27272a] hover:bg-pink-600 text-white text-xs font-semibold border border-[#3f3f46] hover:border-pink-500 transition-all"
              >
                Close Technical View
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
