import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Full-Stack AI', 'Data Analytics', 'RAG & AI Search'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#0b0b0d] border-b border-[#1c1c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
            CASE STUDIES
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            Curated <span className="font-instrument italic text-pink-orange-gradient font-normal">work</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${selectedCategory === cat
                    ? 'bg-[#27272a] text-white border border-pink-500/40 shadow-md font-semibold'
                    : 'bg-[#141417] text-slate-400 border border-[#27272a] hover:text-white hover:border-slate-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vertically Scrollable Project List */}
        <div
          className="overflow-y-auto pr-2"
          style={{ maxHeight: '75vh', scrollbarWidth: 'thin', scrollbarColor: '#3f3f46 transparent' }}
        >
          <div className="space-y-20 py-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left: Glowing Preview Card */}
                <div className="lg:col-span-6">
                  <div className="rounded-3xl p-6 bg-gradient-to-br from-pink-500/20 via-purple-600/10 to-orange-500/15 border border-pink-500/35 relative overflow-hidden shadow-2xl group hover:border-pink-500/60 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <h3 className="font-sans font-semibold text-base sm:text-lg text-white leading-snug">
                        {project.summary}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-pink-500 text-white flex items-center justify-center flex-shrink-0 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#0f0f12] border border-[#27272a] p-4 shadow-2xl">
                      <div className="flex items-center justify-between border-b border-[#27272a] pb-3 mb-4 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-pink-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-slate-300 truncate">{project.id}.ai</span>
                        </div>
                        <span className="text-pink-400 font-semibold">{project.category}</span>
                      </div>
                      <div className="bg-[#15151a] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 border border-white/5">
                        <div className="text-pink-400 font-semibold">{'// System Highlights'}</div>
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="text-[11px] text-slate-300 flex items-start gap-2">
                            <span className="text-pink-400 font-bold flex-shrink-0">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                        <div className="pt-2 text-[10px] text-slate-500 flex justify-between">
                          <span>STATUS: PRODUCTION-READY</span>
                          <span>ACCURACY: 95%+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="lg:col-span-6 space-y-4 lg:pl-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-pink-500 inline-block flex-shrink-0" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-sans">
                        <span className="text-pink-400 font-bold text-sm leading-none flex-shrink-0 mt-0.5">+</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#161619] border border-[#27272a] text-slate-300 text-[10px] font-mono font-semibold uppercase tracking-wider hover:border-pink-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#27272a] hover:bg-pink-600 text-white text-xs font-semibold border border-[#3f3f46] hover:border-pink-500 shadow-md transition-all group"
                  >
                    <span>View System Specs &amp; Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {activeModalProject && (
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      )}
    </section>
  );
}
