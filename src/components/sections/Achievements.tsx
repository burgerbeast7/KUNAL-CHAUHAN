"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data";
import { Award, Zap, Star, Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-20 text-center">
          SYSTEM <span className="gradient-text">ACCOMPLISHMENTS</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateZ: i % 2 === 0 ? 1 : -1 }}
              className="glass-card p-10 hover:border-glow-neon/50 text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-glow-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mx-auto p-5 bg-background border border-white/5 rounded-2xl w-20 flex items-center justify-center mb-6 group-hover:bg-glow-neon/20 group-hover:border-glow-neon/30 transition-all duration-300">
                <ach.icon size={32} className="text-white group-hover:text-glow-neon transition-colors" />
              </div>
              
              <h4 className="text-xl font-orbitron font-bold mb-4 group-hover:text-glow-neon transition-colors">{ach.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
