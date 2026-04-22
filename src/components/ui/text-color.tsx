"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TextColorProps {
  text?: string;
  className?: string;
}

export const TextColor = ({ text = "DEFINIR DISEÑAR DESARROLLAR", className = "" }: TextColorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a color-filling reveal effect
  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`w-full py-40 bg-black flex flex-col items-center justify-center gap-10 overflow-hidden ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        
        return (
          <div key={i} className="relative">
            {/* Background text (Ghost) */}
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white/5 opacity-20">
              {word}
            </h2>
            
            {/* Animated Highlight text */}
            <motion.h2 
              style={{
                clipPath: useTransform(
                  scrollYProgress,
                  [start, end],
                  ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
                ),
              }}
              className="absolute inset-0 text-6xl md:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-neutral-400"
            >
              {word}
            </motion.h2>
          </div>
        );
      })}
    </div>
  );
};
