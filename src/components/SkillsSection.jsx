import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-[#0b0b0d] border-b border-[#1c1c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
            TECHNICAL MATRIX
          </span>
          
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            Skills & <span className="font-instrument italic text-pink-orange-gradient font-normal">expertise</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans">
            Hands-on proficiency across modern AI/ML frameworks, computer vision pipelines, vector storage, and full-stack cloud deployment.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121216] border border-[#27272a] hover:border-pink-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors group shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#27272a]">
                  <div className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-normal group-hover:text-pink-300 transition-colors">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-pink-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#1c1c21] rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-1.5 border-t border-[#27272a]">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Verified in Enterprise Production & DRDO Internship</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
