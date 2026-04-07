"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Globe, Layout, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-20 text-center">
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="glass-card overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-64 md:h-80 overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Floating Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-orbitron font-bold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-3">
                      <motion.a 
                        href={project.github} 
                        whileHover={{ scale: 1.2, color: "#FFFFFF" }}
                        className="p-2 bg-white/5 border border-white/10 rounded-full"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.link} 
                        whileHover={{ scale: 1.2, color: "#FFFFFF" }}
                        className="p-2 bg-white/5 border border-white/10 rounded-full"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <motion.a
                    href={project.link}
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center text-white/60 hover:text-white font-orbitron font-bold tracking-widest text-sm transition-colors"
                  >
                    EXPLORE_DETAIL <ExternalLink size={14} className="ml-2" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
