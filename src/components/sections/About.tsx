"use client";

import { motion } from "framer-motion";
import { USER_INFO, STATISTICS } from "@/lib/data";
import { User, Code, Server, Cloud } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-12 text-center">
          CORE <span className="gradient-text">PROFILE</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image placeholder with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20 p-2">
              <div className="absolute inset-0 bg-white/5 z-0" />
              <img 
                src="/images/profile-cinematic.jpeg" 
                alt={USER_INFO.name}
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Rotating border or element */}
            <div className="absolute inset-0 -m-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>

          {/* Description & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-orbitron text-glow-cyan mb-4 flex items-center">
                <User size={24} className="mr-2" /> MISSION_STATEMENT
              </h3>
              <p className="text-lg leading-relaxed text-white/70">
                {USER_INFO.about}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-glow-purple/40 transition-all duration-300 group"
                >
                  <div className="text-3xl font-black font-orbitron gradient-text group-hover:scale-110 transition-transform">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
