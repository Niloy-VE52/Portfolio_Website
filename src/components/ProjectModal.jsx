import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Sparkles, GitBranch, ExternalLink } from 'lucide-react';
import LeadGenDiagram from './LeadGenDiagram';
import PlantDiseaseDiagram from './PlantDiseaseDiagram';
import AttendanceDiagram from './AttendanceDiagram';
import NestQuestDiagram from './NestQuestDiagram';
import VFSDiagram from './VFSDiagram';
import DograhOutreachDiagram from './DograhOutreachDiagram';

// Map of diagramComponent string → actual component
const DIAGRAM_MAP = {
  LeadGenDiagram,
  PlantDiseaseDiagram,
  AttendanceDiagram,
  NestQuestDiagram,
  VFSDiagram,
  DograhOutreachDiagram,
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const DiagramComponent = project.diagramComponent
    ? DIAGRAM_MAP[project.diagramComponent] || null
    : null;

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
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-white text-xs font-semibold border border-pink-500/40 hover:border-pink-500 transition-all"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#27272a] hover:bg-pink-600 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4" />
                Project Overview
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

            {/* Workflow Diagram (only if project has one) */}
            {DiagramComponent && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                  <GitBranch className="w-4 h-4" />
                  Pipeline Architecture
                </h4>
                <div className="rounded-2xl overflow-hidden border border-[#27272a]">
                  <DiagramComponent />
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-1.5 font-semibold">
                <Cpu className="w-4 h-4" />
                Technologies &amp; Tools
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

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold shadow-lg shadow-pink-600/30 hover:shadow-pink-500/50 transition-all group"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-white text-xs font-semibold border border-[#3f3f46] transition-all ml-auto"
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
