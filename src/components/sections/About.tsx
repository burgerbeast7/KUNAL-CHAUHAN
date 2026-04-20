"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { USER_INFO, STATISTICS } from "@/lib/data";
import { User, Music } from "lucide-react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-orbitron mb-12 text-center"
        >
          CORE <span className="gradient-text">PROFILE</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/20 p-2">
              <div className="absolute inset-0 bg-white/5 z-0" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src={profile.aboutImage || "/images/profile-cinematic.jpeg"} 
                  alt={profile.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Rotating border */}
            <div className="absolute inset-0 -m-4 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>

          {/* Description & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-7 md:p-8"
            >
              <h3 className="text-xl font-orbitron text-white mb-4 flex items-center">
                <User size={20} className="mr-2" /> MISSION_STATEMENT
              </h3>
              <p className="text-base leading-relaxed text-white/60">
                {profile.about}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-black font-orbitron gradient-text group-hover:scale-105 transition-transform">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/30 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Spotify Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-orbitron text-white/70 mb-4 flex items-center uppercase tracking-widest">
                <Music size={16} className="mr-2" /> Current Top Tracks
              </h3>
              <div className="space-y-3">
                {profile.spotifyTracks && profile.spotifyTracks.length > 0 ? (
                  profile.spotifyTracks.map((trackId: string, idx: number) => (
                    <iframe 
                      key={idx}
                      style={{ borderRadius: '12px' }} 
                      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} 
                      width="100%" 
                      height="80" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                    />
                  ))
                ) : (
                  <div className="text-white/40 text-sm text-center py-4">No top tracks selected yet. Add them in the Admin Panel!</div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
