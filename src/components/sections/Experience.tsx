"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [expList, setExpList] = useState(EXPERIENCES);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const res = await fetch("/api/experience");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setExpList(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    };
    fetchExp();
  }, []);

  return (
    <section id="experience" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-6 text-center"
        >
          CAREER <span className="gradient-text">TIMELINE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm font-orbitron tracking-widest uppercase mb-20 text-center"
        >
          Professional journey & contributions
        </motion.p>
        
        <div className="relative">
          {/* Vertical Line - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full" />
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
          
          <div className="space-y-16 md:space-y-24">
            {expList.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start md:items-center justify-between w-full mb-12 md:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10" />
                {/* Mobile dot */}
                <div className="md:hidden absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10 top-10" />
                
                <div className={`w-full md:w-[45%] ml-12 md:ml-0 glass-card p-6 md:p-10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase size={80} />
                  </div>

                  <div className="flex items-start md:items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex-shrink-0 mt-1 md:mt-0">
                      <Briefcase size={22} className="text-white/80" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-orbitron font-bold group-hover:text-white transition-colors">{exp.role}</h4>
                      <p className="text-white/60 font-medium tracking-wide text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-white/40 mb-5 font-orbitron">
                    <Calendar size={12} className="mr-2 flex-shrink-0" />
                    {exp.period}
                  </div>

                  <p className="text-white/60 mb-5 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start text-sm text-white/50">
                        <CheckCircle2 size={14} className="text-white/30 mr-2.5 mt-0.5 flex-shrink-0" />
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
