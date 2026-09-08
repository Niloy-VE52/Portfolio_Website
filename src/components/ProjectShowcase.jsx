import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full-Stack AI', 'Computer Vision', 'RAG & AI Search', 'Voice AI & Automation'];

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
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
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
                {/* Left: Glowing Preview Card (Image + Direct Redirect Link) */}
                <div className="lg:col-span-6">
                  <div className="rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-pink-500/15 via-purple-600/10 to-orange-500/10 border border-pink-500/30 relative overflow-hidden shadow-2xl group hover:border-pink-500/60 transition-all">
                    {/* Real Project Thumbnail in Window Frame */}
                    <div className="rounded-2xl bg-[#0e0e12] border border-[#27272a] overflow-hidden shadow-2xl group/thumb relative">
                      {/* Browser Window Bar */}
                      <div className="flex items-center justify-between px-4 py-3 bg-[#141418] border-b border-[#27272a] text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-slate-300 font-mono text-[11px] truncate ml-1">
                            {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `${project.id}.app`}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="hidden sm:inline-block text-[10px] font-mono font-semibold text-pink-400 px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20">
                            {project.category}
                          </span>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-mono font-semibold shadow-md shadow-pink-600/30 hover:shadow-pink-500/50 transition-all"
                              title="Open Live App"
                            >
                              <span>Open Live</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Thumbnail Image Container */}
                      <a
                        href={project.liveUrl || '#'}
                        target={project.liveUrl ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="block relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#070709] cursor-pointer"
                      >
                        {project.thumbnail ? (
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/thumb:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                            No Preview Available
                          </div>
                        )}

                        {/* Subtle Hover Action Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-pink-600/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg">
                            <span>Open Live Project</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveModalProject(project);
                            }}
                            className="text-xs font-mono text-slate-200 hover:text-white bg-[#1a1a22]/90 hover:bg-pink-600 border border-[#3f3f46] px-3.5 py-1.5 rounded-full shadow-md transition-colors"
                          >
                            View Specs
                          </button>
                        </div>
                      </a>
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
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#161619] border border-[#27272a] text-slate-300 text-[10px] font-mono font-semibold uppercase tracking-wider hover:border-pink-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold shadow-lg shadow-pink-600/25 hover:shadow-pink-500/40 transition-all group"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#27272a] hover:bg-[#383840] text-white text-xs font-semibold border border-[#3f3f46] hover:border-pink-500/60 shadow-md transition-all group"
                    >
                      <span>System Specs &amp; Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
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
