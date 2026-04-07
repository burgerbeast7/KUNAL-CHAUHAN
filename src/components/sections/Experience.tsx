"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-20 text-center">
          CAREER <span className="gradient-text">TIMELINE</span>
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full" />
          
          <div className="space-y-24">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10" />
                
                <div className={`w-full md:w-[45%] glass-card p-10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Briefcase size={80} />
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                      <Briefcase size={24} className="text-white/80" />
                    </div>
                    <div>
                      <h4 className="text-xl font-orbitron font-bold group-hover:text-white transition-colors">{exp.role}</h4>
                      <p className="text-white/60 font-medium tracking-wide">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-white/40 mb-6 font-orbitron">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start text-sm text-white/60">
                        <CheckCircle2 size={16} className="text-white/40 mr-3 mt-1 flex-shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Spacer for other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
