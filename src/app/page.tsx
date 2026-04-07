"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black min-h-screen text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="relative z-0">
            <CustomCursor />

            <Navbar />
            <div className="content-wrapper">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Contact />
              <Footer />
            </div>
            {/* Scroll Progress Indicator */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-px z-[60] origin-left bg-white" 
              style={{ scaleX }} 
            />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
