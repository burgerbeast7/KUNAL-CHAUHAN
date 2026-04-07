"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-md h-12 relative overflow-hidden glass-card p-1">
        <motion.div
          className="h-full bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-neon rounded-[inherit]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center mix-blend-difference font-orbitron font-bold text-lg tracking-[0.5em]">
          {progress}%
        </div>
      </div>
      
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 text-glow-cyan font-orbitron text-xs tracking-[0.3em] uppercase"
      >
        Initializing Systems...
      </motion.div>
    </motion.div>
  );
}
