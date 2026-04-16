"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Code2, Server, Cloud, Database, Cpu, Terminal, Smartphone } from "lucide-react";

const getIcon = (category: string) => {
  switch (category) {
    case "Frontend": return Code2;
    case "Backend": return Server;
    case "Cloud": return Cloud;
    case "Database": return Database;
    case "DevOps": return Cpu;
    case "Tools": return Terminal;
    case "Mobile": return Smartphone;
    default: return Terminal;
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [skillsList, setSkillsList] = useState(SKILLS);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setSkillsList(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const categories = ["All", ...Array.from(new Set(skillsList.map(s => s.category)))];

  const filteredSkills = activeFilter === "All" 
    ? skillsList 
    : skillsList.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-6"
        >
          TECHNICAL <span className="gradient-text">SYSTEMS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm font-orbitron tracking-widest uppercase mb-12"
        >
          Core technologies powering my development stack
        </motion.p>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-orbitron tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-white/10 border-white/30 text-white"
                  : "bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const IconComponent = getIcon(skill.category);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="glass-card p-5 md:p-8 flex flex-col items-center justify-center space-y-3 md:space-y-4 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 transition-all duration-500 group-hover:scale-[3]" />
                    
                    <div className="p-3 md:p-4 bg-background border border-white/5 rounded-2xl group-hover:bg-white/[0.06] group-hover:border-white/20 transition-all duration-300 z-10">
                      <IconComponent size={24} className="text-white/70 group-hover:text-white transition-colors md:w-7 md:h-7" />
                    </div>
                    
                    <h4 className="font-orbitron font-bold text-lg group-hover:text-white transition-colors z-10">
                      {skill.name}
                    </h4>
                    
                    <span className="text-[10px] font-orbitron uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors z-10">
                      {skill.category}
                    </span>
                    
                    <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden z-10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-white/60 to-white/30 rounded-full"
                      />
                    </div>
                    <span className="text-[10px] font-orbitron text-white/30 z-10">{skill.level}%</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
