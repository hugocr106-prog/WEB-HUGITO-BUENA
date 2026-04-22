"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/morphing-cursor";

export const Hero = () => {
  return (
    <section className="hero container-custom min-h-screen flex flex-col justify-center pt-24 relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-8 h-full">
        <div className="z-10">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(3rem,12vw,10rem)] leading-[0.8] font-bold flex flex-col items-start"
          >
            <MagneticText text="DISEÑO" hoverText="CREA" className="inline-flex" textClassName="text-[clamp(3rem,12vw,10rem)] leading-none" />
            <MagneticText text="WEB" hoverText="ELEVA" className="inline-flex" textClassName="text-[clamp(3rem,12vw,10rem)] leading-none" />
            <MagneticText text="& BRANDING" hoverText="DEFINE" className="inline-flex" textClassName="text-[clamp(3rem,12vw,10rem)] leading-none" />
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mt-8 text-[clamp(1rem,1.5vw,1.5rem)] max-w-lg uppercase text-muted-foreground"
          >
            (Estrategia digital y diseño para marcas con visión)
          </motion.p>
        </div>
        <div className="hero-image-box h-full flex items-end justify-center" />
      </div>
    </section>
  );
};
