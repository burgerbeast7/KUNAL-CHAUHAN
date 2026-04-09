"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { USER_INFO } from "@/lib/data";
import InstagramPreview from "@/components/ui/InstagramPreview";

import { useState, useEffect } from "react";

export default function Footer() {
  const [profile, setProfile] = useState(USER_INFO);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const json = await res.json();
        if (json.success && json.data) {
          setProfile(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-20 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 inline-block relative"
        >
          <div className="text-3xl md:text-4xl font-black font-orbitron gradient-text relative z-10">
            {profile.name.toUpperCase()}
          </div>
          <div className="absolute -inset-4 bg-white/5 blur-[30px] rounded-full animate-pulse" />
        </motion.div>

        <p className="text-white/30 mb-10 max-w-lg mx-auto leading-relaxed text-sm">
          Crafting digital experiences at the intersection of complex code and futuristic design. 
          Dedicated to pushing the boundaries of what&apos;s possible in the cloud.
        </p>

        <div className="flex justify-center space-x-5 mb-10">
            { [
              { Icon: FaGithub, href: profile.github, label: "GitHub" },
              { Icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { Icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }, i) => (
              <motion.a 
                key={i}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-white/25 transition-all duration-300 flex items-center justify-center"
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <InstagramPreview />
          </div>

        <div className="text-[10px] uppercase tracking-widest text-white/15 mb-8 border-t border-white/5 pt-8 font-orbitron">
          © {new Date().getFullYear()} {profile.name} | SYSTEM_READY_V2.0
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/10 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="text-white/60" size={20} />
        </motion.button>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
}
