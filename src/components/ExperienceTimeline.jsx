import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#0b0b0d] border-b border-[#1c1c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
            TRACK RECORD
          </span>
          
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            Career <span className="font-instrument italic text-pink-orange-gradient font-normal">journey</span>
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-sans">
            Professional track record as AIML Engineer at Virtual Employee, combined with defense research project internship at DRDO ASL Hyderabad and specialized AI/ML degree background.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-transparent sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Badge */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#141417] border border-pink-500/50 flex items-center justify-center text-pink-400 shadow-xl z-10">
                  {item.type === 'Full-Time' ? <Briefcase className="w-4 h-4 text-pink-400" /> : item.type === 'Internship' ? <Shield className="w-4 h-4 text-pink-400" /> : <GraduationCap className="w-4 h-4 text-purple-400" />}
                </div>

                {/* Card Container */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 bg-[#121216] border border-[#27272a] hover:border-pink-500/40 p-6 sm:p-8 rounded-3xl transition-colors shadow-2xl space-y-4">
                  
                  {/* Badge & Period */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase bg-[#1c1c21] text-pink-400 border border-pink-500/30">
                      {item.type}
                    </span>
                    <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {item.role}
                    </h3>
                    <div className="text-pink-400 font-mono text-xs mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="space-y-2 pt-3 border-t border-[#27272a]">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <span className="text-pink-400 font-bold text-sm leading-none flex-shrink-0 mt-0.5">+</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
