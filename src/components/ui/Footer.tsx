"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { USER_INFO } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-block relative"
        >
          <div className="text-4xl font-black font-orbitron gradient-text relative z-10">
            KUNAL.CHAUHAN
          </div>
          <div className="absolute -inset-4 bg-glow-cyan/10 blur-[30px] rounded-full animate-pulse" />
        </motion.div>

        <p className="text-white/40 mb-12 max-w-lg mx-auto leading-relaxed">
          Crafting digital experiences at the intersection of complex code and futuristic design. 
          Dedicated to pushing the boundaries of what's possible in the cloud.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          {[FaGithub, FaLinkedin, FaXTwitter, FaEnvelope].map((Icon, i) => (
            <motion.a 
              key={i}
              href="#"
              whileHover={{ y: -5, color: "#00F5FF", scale: 1.2 }}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-glow-cyan/50 transition-all duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="text-xs uppercase tracking-widest text-white/20 mb-8 border-t border-white/5 pt-8">
          © 2026 Kunal Chauhan | SYSTEM_READY_V2.0
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)" }}
          className="p-4 bg-glow-cyan/10 border border-glow-cyan/30 rounded-2xl transition-all duration-300"
        >
          <ChevronUp className="text-glow-cyan" size={24} />
        </motion.button>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </footer>
  );
}
