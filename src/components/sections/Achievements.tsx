"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-6 text-center"
        >
          SYSTEM <span className="gradient-text">ACCOMPLISHMENTS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm font-orbitron tracking-widest uppercase mb-20 text-center"
        >
          Certifications & milestones
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 md:p-10 hover:border-white/20 text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mx-auto p-4 bg-background border border-white/5 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/[0.06] group-hover:border-white/20 transition-all duration-300">
                <ach.icon size={28} className="text-white/60 group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-lg font-orbitron font-bold mb-3 group-hover:text-white transition-colors">{ach.title}</h4>
              <p className="text-white/50 leading-relaxed text-sm">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
