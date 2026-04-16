"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { USER_INFO } from "@/lib/data";
import { ArrowDown, Download, Code2, Server, Database, Cloud, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import InstagramPreview from "@/components/ui/InstagramPreview";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
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
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <motion.div 
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden">
              <Image
                src={profile.profileImage || "/images/profile-headshot.jpeg"}
                alt={profile.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          <motion.span 
            className="text-glow-cyan font-orbitron text-sm md:text-base tracking-[0.2em] uppercase mb-4 block"
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            Software Engineer | Full Stack Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-4"
            {...fadeUp}
            transition={{ delay: 0.3 }}
          >
            <span className="block mb-2">I am</span>
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-6 font-sora leading-relaxed"
            {...fadeUp}
            transition={{ delay: 0.4 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div 
            className="h-12 md:h-12 text-lg sm:text-xl md:text-3xl font-orbitron text-white/80 mb-10"
            {...fadeUp}
            transition={{ delay: 0.5 }}
          >
            <span className="mr-2">&gt; </span>
            <Typewriter
              words={[
                "Full-Stack Software Engineer",
                "Django Expert",
                "React Specialist",
                "AWS Solutions Builder"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
            {...fadeUp}
            transition={{ delay: 0.6 }}
          >
            {/* View Projects Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border group w-full sm:w-80 md:w-auto"
            >
              <span className="bg-background/80 block px-6 sm:px-10 py-4 w-full rounded-[15px] group-hover:bg-transparent transition-all duration-300 font-bold tracking-wider text-center">
                VIEW PROJECTS
              </span>
            </motion.a>

            {/* Resume Download Button */}
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-1 items-center justify-center space-x-3 w-full sm:w-80 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="font-bold tracking-wider text-sm whitespace-nowrap">DOWNLOAD RESUME</span>
            </motion.a>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 w-full sm:w-auto mt-2 md:mt-0">
              {[
                { icon: FaGithub, href: profile.github, label: "GitHub" },
                { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
              <InstagramPreview />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Tech Icons - Reduced animation complexity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { Icon: Code2, x: "10%", y: "20%", delay: 0 },
            { Icon: Server, x: "85%", y: "15%", delay: 1.5 },
            { Icon: Database, x: "15%", y: "70%", delay: 3 },
            { Icon: Cloud, x: "80%", y: "75%", delay: 4.5 },
            { Icon: Cpu, x: "50%", y: "10%", delay: 6 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut"
              }}
              style={{ left: item.x, top: item.y }}
              className="absolute"
            >
              <item.Icon className="text-white/30" size={36} strokeWidth={1} />
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">Scroll</span>
          <ArrowDown className="text-white/60" size={20} />
        </motion.div>
      </div>

      {/* Subtle B&W Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/3 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
