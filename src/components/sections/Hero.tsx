"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/morphing-cursor";

export const Hero = () => {
  return (
    <section className="hero px-6 md:px-16 min-h-[80vh] md:min-h-screen flex flex-col justify-start md:justify-center pt-20 md:pt-32 relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-8 h-full">
        <div className="z-10">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-[10vw] lg:text-[11vw] leading-[0.8] font-bold flex flex-col items-start"
          >
            <MagneticText text="DISEÑO" hoverText="CREA" className="inline-flex" textClassName="text-5xl md:text-[10vw] lg:text-[11vw] leading-none" />
            <MagneticText text="WEB" hoverText="ELEVA" className="inline-flex" textClassName="text-5xl md:text-[10vw] lg:text-[11vw] leading-none" />
            <MagneticText text="& BRANDING" hoverText="DEFINE" className="inline-flex" textClassName="text-5xl md:text-[10vw] lg:text-[11vw] leading-none" />
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mt-8 text-sm md:text-lg max-w-lg uppercase text-muted-foreground"
          >
            (Estrategia digital y diseño para marcas con visión)
          </motion.p>
        </div>
        <div className="hero-image-box h-full flex items-end justify-center" />
      </div>
    </section>
  );
};
