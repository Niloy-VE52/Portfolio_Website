import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, FileText } from 'lucide-react';
import { personalInfo, projects, experience } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#121216] border border-[#27272a] rounded-3xl shadow-2xl overflow-hidden my-6 text-slate-100 font-sans"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#18181c] border-b border-[#27272a] flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-pink-400" />
              <span className="font-serif text-xl text-white">Niloy Das — Resume</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#27272a] hover:bg-pink-600 text-xs font-mono text-white transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto font-sans bg-[#121216] text-slate-200">
            
            {/* Header / Bio */}
            <div className="border-b border-[#27272a] pb-6 space-y-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-normal text-white">{personalInfo.name}</h1>
                  <p className="text-pink-400 font-mono text-xs font-semibold mt-0.5">{personalInfo.title}</p>
                </div>
                <div className="text-xs font-mono space-y-1 text-slate-400 sm:text-right">
                  <div>Email: {personalInfo.email}</div>
                  <div>Location: {personalInfo.location}</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pt-2 leading-relaxed font-sans">
                AIML Engineer at Virtual Employee with hands-on experience building production AI systems, full-stack LLM applications, computer vision solutions, and private offline RAG architectures for DRDO defense research.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold border-b border-[#27272a] pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div><span className="font-bold text-white">Languages:</span> Python, R, SQL, C, Java, JavaScript, TypeScript</div>
                <div><span className="font-bold text-white">AI/ML Frameworks:</span> TensorFlow, PyTorch, Scikit-learn, LangChain, LlamaIndex, OpenCV, MediaPipe, YOLOv8</div>
                <div><span className="font-bold text-white">Vector DBs & LLMs:</span> Qdrant, FAISS, ChromaDB, RAG Pipelines, OpenAI API, Gemini API, Groq</div>
                <div><span className="font-bold text-white">Cloud & Web:</span> FastAPI, Flask, React, Tailwind CSS, Azure (Data Factory, Databricks), AWS, MySQL</div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold border-b border-[#27272a] pb-1">
                Professional Experience
              </h2>
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>{exp.role} — {exp.organization}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 italic">{exp.description}</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-0.5 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Major Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold border-b border-[#27272a] pb-1">
                Major Engineering Projects
              </h2>
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1.5 text-xs bg-[#18181c] p-4 rounded-2xl border border-[#27272a]">
                  <div className="flex justify-between font-bold text-white">
                    <span className="text-sm font-serif text-pink-300">{idx + 1}. {proj.title}</span>
                    <span className="font-mono text-slate-400">{proj.category}</span>
                  </div>
                  <p className="text-slate-300">{proj.description}</p>
                  <div className="text-[11px] font-mono text-slate-400"><span className="text-white font-bold">Tech Stack:</span> {proj.techStack.join(', ')}</div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5 pt-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2 border-t border-[#27272a] pt-4 text-xs">
              <h2 className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold">
                Education
              </h2>
              <div className="flex justify-between font-bold text-white">
                <span>B.Tech in Artificial Intelligence and Machine Learning</span>
                <span className="text-slate-400 font-mono">MCKV Institute of Engineering, Liluah – Howrah, WB</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
