"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-20">
          TECHNICAL <span className="gradient-text">SYSTEMS</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, i) => {
            const IconComponent = getIcon(skill.category);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ rotateY: 15, rotateX: -10, translateZ: 20 }}
                className="perspective-1000 group relative"
              >
                <div className="glass-card p-10 flex flex-col items-center justify-center space-y-4 hover:border-glow-cyan/50 hover:bg-glow-cyan/10 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-glow-cyan/10 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-[3]" />
                  
                  <div className="p-4 bg-background border border-white/5 rounded-2xl group-hover:bg-glow-cyan/20 group-hover:border-glow-cyan/30 transition-all duration-300 z-10">
                    <IconComponent size={32} className="text-white group-hover:text-glow-cyan transition-colors" />
                  </div>
                  
                  <h4 className="font-orbitron font-bold text-xl group-hover:text-glow-cyan transition-colors z-10">
                    {skill.name}
                  </h4>
                  
                  <span className="text-xs font-orbitron uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors z-10">
                    {skill.category}
                  </span>
                  
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-glow-cyan to-glow-purple"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
