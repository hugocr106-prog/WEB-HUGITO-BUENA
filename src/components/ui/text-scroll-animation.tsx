"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};


const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block text-white", isSpace && "w-4")}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};


const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      alt=""
      className="h-16 w-16 shrink-0 object-contain will-change-transform invert"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  );
};


const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt=""
      className="h-16 w-16 shrink-0 object-contain will-change-transform invert"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
};

const Skiper31 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  
  const text = "¿EMPEZAMOS?";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  
  const techIcons = [
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gsap.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg",
    
  ];
  const iconCenterIndex = Math.floor(techIcons.length / 2);

  return (
    <div className="w-full bg-black">
        {/* Блок 1 — texto */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[120vh] items-center justify-center gap-[2vw] overflow-hidden bg-black p-[2vw]"
        >
          <div
            className="w-full max-w-4xl text-center text-5xl md:text-8xl font-black uppercase tracking-tighter text-white"
            style={{ perspective: "1000px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        
        {/* Блок 2 — Método */}
        <div
          ref={targetRef2}
          className="relative -mt-[20vh] md:-mt-[40vh] box-border flex h-[220vh] flex-col items-center justify-center bg-black"
        >
          <div className="w-full flex-col flex items-center justify-center p-6 md:p-[2vw] pb-40">
              <p className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold tracking-tighter uppercase text-white/30 mb-24">
                <Bracket className="h-10 opacity-30" />
                <span>MÉTODO</span>
                <Bracket className="h-10 scale-x-[-1] opacity-30" />
              </p>
              
              <div className="flex flex-col gap-12 items-center w-full">
                  {[
                      { word: "DEFINIR", desc: "Análisis y estrategia para encontrar la esencia de tu marca." },
                      { word: "PROYECTAR", desc: "Conceptualización visual que traduce valores en diseño único." },
                      { word: "DESARROLLAR", desc: "Ejecución técnica de alto rendimiento y lanzamiento digital." }
                  ].map((item, i) => {
                      // Cada palabra se revela en un tramo distinto del scroll para narrativa secuencial
                      const start = 0.05 + (i * 0.3);
                      const end = start + 0.3;
                      
                      const xOffset = useTransform(scrollYProgress2, [start, end], [20, 0]);
                      const opacity = useTransform(scrollYProgress2, [start - 0.1, start], [0.1, 1]);
                      const descOpacity = useTransform(scrollYProgress2, [start + 0.1, end], [0, 1]);
                      const maskProgress = useTransform(scrollYProgress2, [start, end], [0, 100]);
                      const maskStyle = useTransform(maskProgress, (p) => 
                        `linear-gradient(to right, white ${p}%, transparent ${p + 15}%)`
                      );

                      return (
                          <div key={i} className="relative flex flex-col items-center w-full">
                              <div className="relative">
                                  {/* Background Ghost Text */}
                                  <h2 className="text-[8.5vw] sm:text-4xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter text-white/5 leading-[0.8]">
                                      {item.word}
                                  </h2>
                                  
                                  {/* Animated Fluid Reveal Text */}
                                  <motion.h2 
                                      style={{
                                          x: xOffset,
                                          opacity: opacity,
                                          WebkitMaskImage: maskStyle,
                                          maskImage: maskStyle,
                                      }}
                                      className="absolute inset-0 text-[8.5vw] sm:text-4xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-teal-500 leading-[0.8] drop-shadow-[0_0_15px_rgba(94,234,212,0.3)] text-center whitespace-nowrap"
                                  >
                                      {item.word}
                                  </motion.h2>
                              </div>

                              {/* Description Line */}
                              <motion.p 
                                  style={{ opacity: descOpacity }}
                                  className="mt-6 text-neutral-300 text-base md:text-2xl font-medium tracking-tight max-w-2xl text-center px-4"
                              >
                                  {item.desc}
                              </motion.p>
                          </div>
                      );
                  })}
              </div>
          </div>
        </div>

        {/* Блок 3 — Contacto */}
        <div
          ref={targetRef3}
          className="relative -mt-[15vh] md:-mt-[40vh] box-border flex h-[120vh] flex-col items-center justify-center gap-[4vw] overflow-hidden bg-black p-6 md:p-[2vw]"
        >
          <p className="flex items-center justify-center gap-3 text-2xl md:text-5xl font-black tracking-tighter uppercase text-white">
            <Bracket className="h-12 text-white" />
            <span>CONTACTO</span>
            <Bracket className="h-12 scale-x-[-1] text-white" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            <a href="https://wa.me/34638221131" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <CharacterV2
                char="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/whatsapp.svg"
                index={0}
                centerIndex={0.5}
                scrollYProgress={scrollYProgress3}
              />
            </a>
            <a href="mailto:hugocr106@gmail.com" className="transition-transform hover:scale-110">
              <CharacterV2
                char="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/minutemailer.svg"
                index={1}
                centerIndex={0.5}
                scrollYProgress={scrollYProgress3}
              />
            </a>
          </div>
        </div>
    </div>
  );
};

export { CharacterV1, CharacterV2, CharacterV3, Skiper31 };

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};
