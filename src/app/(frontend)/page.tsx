"use client";

import { useEffect, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="relative bg-black min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-0"
      >
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>

        <Navbar />
        <div className="content-wrapper">
          <Hero />
        </div>
        {/* Scroll Progress Indicator */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-px z-[60] origin-left bg-white" 
          style={{ scaleX }} 
        />
      </motion.div>
    </main>
  );
}
