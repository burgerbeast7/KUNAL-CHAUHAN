"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { USER_INFO } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function InstagramPreview() {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  // Close on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".instagram-wrapper")) {
        setIsHovered(false);
      }
    };
    if (isHovered) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHovered]);

  return (
    <div 
      className="relative instagram-wrapper inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={USER_INFO.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        whileHover={{ y: -5 }}
        className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
      >
        <FaInstagram size={22} />
      </motion.a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-[100] w-64 md:w-72 pointer-events-auto"
          >
            {/* The Preview Card */}
            <div className="glass-card p-6 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Subtle Glowing Pulse in Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-5">
                  <div className="relative w-14 h-14 rounded-full p-[1.5px] bg-gradient-to-tr from-gray-400 via-white to-gray-600">
                      <div className="relative w-full h-full overflow-hidden">
                        <Image 
                          src="/images/profile-headshot.jpeg" 
                          alt="Profile" 
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-sm tracking-tight text-white">kunal.3.6.3.4</h4>
                    <p className="text-[10px] text-white/40 font-sora">Kunal Chauhan</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-center border-y border-white/10 py-3">
                  <div>
                    <div className="text-xs font-bold font-orbitron text-white">12</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-[0.1em]">Posts</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold font-orbitron text-white">842</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-[0.1em]">Followers</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold font-orbitron text-white">456</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-[0.1em]">Following</div>
                  </div>
                </div>

                <a 
                  href={USER_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-white text-black text-[10px] font-bold font-orbitron rounded-lg flex items-center justify-center transition-all hover:bg-gray-200 active:scale-[0.98]"
                >
                  VIEW INSTAGRAM <ExternalLink size={10} className="ml-2" />
                </a>
              </div>
              
              {/* Decorative light flare */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors" />
            </div>

            {/* Little Arrow Down */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0B0F1A] border-r border-b border-white/10 rotate-45 backdrop-blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
