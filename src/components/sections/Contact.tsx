"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationDot, FaInstagram } from "react-icons/fa6";
import { USER_INFO } from "@/lib/data";
import InstagramPreview from "@/components/ui/InstagramPreview";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:${USER_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-6 text-center"
        >
          ESTABLISH <span className="gradient-text">UPLINK</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm font-orbitron tracking-widest uppercase mb-20 text-center"
        >
          Let's build something extraordinary together
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="glass-card p-8 md:p-10 hover:border-white/15 transition-all duration-300">
              <h3 className="text-xl font-orbitron font-bold mb-8">CONTACT DETAILS</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${USER_INFO.email}`} className="flex items-center space-x-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <FaEnvelope className="text-white/70" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1 block font-orbitron">Email Protocol</span>
                    <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors text-white/70">{USER_INFO.email}</span>
                  </div>
                </a>

                <a href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <FaLinkedin className="text-white/70" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1 block font-orbitron">Network Matrix</span>
                    <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors text-white/70">LinkedIn Profile</span>
                  </div>
                </a>

                <a href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <FaGithub className="text-white/70" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1 block font-orbitron">Code Repository</span>
                    <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors text-white/70">GitHub Profile</span>
                  </div>
                </a>

                <a href={USER_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <FaInstagram className="text-white/70" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1 block font-orbitron">Visual Matrix</span>
                    <span className="text-sm md:text-base font-medium group-hover:text-white transition-colors text-white/70">Instagram Profile</span>
                  </div>
                </a>

                <div className="flex items-center space-x-5 group">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex-shrink-0">
                    <FaLocationDot className="text-white/70" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1 block font-orbitron">Geolocation</span>
                    <span className="text-sm md:text-base font-medium text-white/70">{USER_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { Icon: FaGithub, href: USER_INFO.github, label: "GitHub" },
                { Icon: FaLinkedin, href: USER_INFO.linkedin, label: "LinkedIn" },
                { Icon: FaEnvelope, href: `mailto:${USER_INFO.email}`, label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a 
                  key={i}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -5 }}
                  className="p-3.5 bg-white/5 border border-white/10 rounded-full hover:border-white/25 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
              <InstagramPreview />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-7 hover:border-white/15 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 ml-3 font-orbitron">Codename</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 ml-3 font-orbitron">Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 ml-3 font-orbitron">Communication Packet</label>
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-border h-14 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-background/80 group-hover:bg-transparent transition-all duration-300 flex items-center justify-center font-bold tracking-[0.2em] font-orbitron text-sm">
                  {submitted ? "TRANSMISSION_SENT ✓" : (
                    <>INITIATE_SEND <Send size={16} className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
