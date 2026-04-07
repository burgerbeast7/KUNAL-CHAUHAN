"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { USER_INFO } from "@/lib/data";
import { ArrowDown, Code2, Server, Database, Cloud, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 group">
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
            <img
              src="/images/profile-headshot.jpeg"
              alt="Kunal Chauhan"
              className="relative w-full h-full object-cover rounded-full border-2 border-white/20"
            />
          </div>

          <span className="text-glow-cyan font-orbitron text-sm md:text-base tracking-[0.2em] uppercase mb-4 block">
            Welcome to the future of development
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black font-orbitron mb-6">
            <span className="block mb-2">I am</span>
            <span className="gradient-text">{USER_INFO.name}</span>
          </h1>

          <div className="h-10 md:h-12 text-xl md:text-3xl font-orbitron text-white/80 mb-10">
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
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border group"
            >
              <span className="bg-background/80 block px-10 py-4 rounded-[15px] group-hover:bg-transparent transition-all duration-300 font-bold tracking-wider">
                VIEW PROJECTS
              </span>
            </motion.a>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: FaGithub, href: USER_INFO.github },
                { icon: FaLinkedin, href: USER_INFO.linkedin },
                { icon: FaEnvelope, href: `mailto:${USER_INFO.email}` }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#00F5FF" }}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-glow-cyan/50 transition-all duration-300"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { Icon: Code2, x: "10%", y: "20%", delay: 0 },
            { Icon: Server, x: "85%", y: "15%", delay: 1 },
            { Icon: Database, x: "15%", y: "70%", delay: 2 },
            { Icon: Cloud, x: "80%", y: "75%", delay: 3 },
            { Icon: Cpu, x: "50%", y: "10%", delay: 4 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: [0, -30, 0],
                rotate: [0, 360],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut"
              }}
              style={{ left: item.x, top: item.y }}
              className="absolute"
            >
              <item.Icon className="text-glow-cyan" size={40} strokeWidth={1} />
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
          <ArrowDown className="text-glow-cyan" size={20} />
        </motion.div>
      </div>

      {/* Subtle B&W Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/3 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
