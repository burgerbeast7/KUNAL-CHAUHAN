"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { USER_INFO } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-20 text-center">
          ESTABLISH <span className="gradient-text">UPLINK</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="glass-card p-10 hover:border-glow-cyan/50 transition-all duration-300">
              <h3 className="text-2xl font-orbitron font-bold mb-8">CONTACT DETAILS</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-glow-cyan/10 border border-glow-cyan/30 rounded-2xl group-hover:bg-glow-cyan/20 transition-all duration-300">
                    <FaEnvelope className="text-glow-cyan" size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Email Protocol</span>
                    <span className="text-lg font-medium group-hover:text-glow-cyan transition-colors">{USER_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-glow-purple/10 border border-glow-purple/30 rounded-2xl group-hover:bg-glow-purple/20 transition-all duration-300">
                    <FaLinkedin className="text-glow-purple" size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Network Matrix</span>
                    <span className="text-lg font-medium group-hover:text-glow-purple transition-colors">LinkedIn Profile</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-glow-neon/10 border border-glow-neon/30 rounded-2xl group-hover:bg-glow-neon/20 transition-all duration-300">
                    <FaLocationDot className="text-glow-neon" size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 mb-1 block">Geolocation</span>
                    <span className="text-lg font-medium group-hover:text-glow-neon transition-colors">Bengaluru, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              {[FaGithub, FaLinkedin, FaXTwitter, FaEnvelope].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#00F5FF" }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-glow-cyan/50 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-10 space-y-8 hover:border-glow-purple/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Codename</label>
                  <input 
                    type="text" 
                    placeholder="Subject Name"
                    className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Address</label>
                  <input 
                    type="email" 
                    placeholder="Return Hub"
                    className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-glow-purple focus:ring-1 focus:ring-glow-purple/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Communication Packet</label>
                <textarea 
                  rows={4}
                  placeholder="Insert transmission details..."
                  className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-glow-neon focus:ring-1 focus:ring-glow-neon/50 transition-all duration-300"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-border h-16 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-background/80 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center font-bold tracking-[0.3em] font-orbitron">
                  INITIATE_SEND <Send size={20} className="ml-4 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
