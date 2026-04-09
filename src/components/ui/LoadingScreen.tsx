"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Supercharged: reaches 100% in ~500ms (25 steps × 20ms)
        return prev + 4;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center p-6"
    >
      {/* Terminal-style header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xs font-orbitron tracking-[0.3em] text-white/30 uppercase mb-8"
      >
        [ SYSTEM BOOT SEQUENCE ]
      </motion.div>

      {/* Progress bar */}
      <div className="w-full max-w-md h-10 relative overflow-hidden glass-card p-1">
        <motion.div
          className="h-full bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-neon rounded-[inherit]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
        <div className="absolute inset-0 flex items-center justify-center mix-blend-difference font-orbitron font-bold text-sm tracking-[0.5em]">
          {progress}%
        </div>
      </div>
      
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="mt-6 text-glow-cyan font-orbitron text-xs tracking-[0.3em] uppercase"
      >
        Initializing Systems...
      </motion.div>
    </motion.div>
  );
}
