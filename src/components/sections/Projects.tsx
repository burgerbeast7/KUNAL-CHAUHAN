"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS as STATIC_PROJECTS } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const [projects, setProjects] = useState(STATIC_PROJECTS);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          setProjects(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-6 text-center"
        >
          FEATURED <span className="gradient-text">PROJECTS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm font-orbitron tracking-widest uppercase mb-20 text-center"
        >
          Selected works & engineering solutions
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="glass-card overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-56 md:h-72 overflow-hidden bg-white/[0.03]">
                  <Image 
                    src={project.image && (project.image.startsWith('http') || project.image.startsWith('/') || project.image.startsWith('data:')) ? project.image : "/images/profile-cinematic.jpeg"} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-background/80 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-orbitron font-bold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 flex-shrink-0 ml-3">
                      <motion.a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        whileHover={{ scale: 1.15 }}
                        className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                      {project.link !== "#" && (
                        <motion.a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          whileHover={{ scale: 1.15 }}
                          className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-white/50 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="inline-flex items-center text-white/40 hover:text-white font-orbitron font-bold tracking-widest text-xs transition-colors"
                    >
                      VIEW_SOURCE <FaGithub size={12} className="ml-2" />
                    </motion.a>
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 8 }}
                        className="inline-flex items-center text-white/40 hover:text-white font-orbitron font-bold tracking-widest text-xs transition-colors"
                      >
                        LIVE_DEMO <ExternalLink size={12} className="ml-2" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
