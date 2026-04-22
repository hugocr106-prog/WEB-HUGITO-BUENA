'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MagneticWrapper } from '@/components/ui/MagneticWrapper';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  category?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const ScrollExpandProject = ({
  mediaSrc,
  bgImageSrc,
  title,
  category,
  description,
  children,
  className,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const textXLeft = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);
  const textXRight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  
  // Media dimensions
  const width = useTransform(scrollYProgress, [0, 0.8], ["400px", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.8], ["350px", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0.7, 0.8], ["2rem", "0rem"]);

  const router = useRouter();
  const slug = title?.toLowerCase().replace(/\s+/g, '-');

  const titleWords = title ? title.split(' ') : ['', ''];
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <div ref={containerRef} className={cn("relative h-[300vh]", className)}>
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center cursor-pointer"
        onClick={() => router.push(`/proyectos/${slug}`)}
      >
        
        {/* Background Image (fades out as media expands) */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: bgOpacity }}
        >
          <Image
            src={bgImageSrc}
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>

        {/* Central Expanding Media */}
        <motion.div
          className="relative z-10 overflow-hidden shadow-2xl"
          style={{
            width,
            height,
            borderRadius,
            scale,
          }}
        >
          <Image
            src={mediaSrc}
            alt={title || "Project Media"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Scrolling Titles (Moving outwards) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none mix-blend-difference text-white">
          <div className="flex flex-col items-center">
             <motion.h2 
                className="text-7xl md:text-[12vw] font-black uppercase tracking-tighter leading-none"
                style={{ x: textXLeft }}
             >
                {firstWord}
             </motion.h2>
             <motion.h2 
                className="text-7xl md:text-[12vw] font-black uppercase tracking-tighter leading-none"
                style={{ x: textXRight }}
             >
                {restOfTitle}
             </motion.h2>
          </div>
          
          <motion.div 
            className="mt-8 flex flex-col items-center"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          >
             <span className="text-sm font-bold uppercase tracking-[0.3em] mb-2">{category}</span>
             <span className="text-xs uppercase opacity-50">Pulse para ver más</span>
          </motion.div>
        </div>

        {/* Project Description (Reveals at the very end of expansion) */}
        <motion.div 
            key={`${title}-description-layer`}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center p-8 md:p-20 text-white bg-black/90 backdrop-blur-3xl"
            style={{ 
                opacity: useTransform(scrollYProgress, [0.85, 0.98], [0, 1]),
                pointerEvents: useTransform(scrollYProgress, [0, 0.9], ["none", "auto"]) as any
            }}
        >
            <div className="max-w-4xl text-center">
                <motion.span 
                  className="text-sm font-bold uppercase tracking-[0.5em] text-neutral-500 mb-8 block"
                >
                  {category}
                </motion.span>
                <h2 className="text-6xl md:text-[8vw] font-black mb-10 tracking-tighter uppercase leading-[0.85]">{title}</h2>
                <div className="flex justify-center mb-12">
                    <div className="w-24 h-px bg-white/20" />
                </div>
                <p className="text-2xl md:text-4xl text-neutral-200 leading-tight font-medium mb-16 max-w-3xl mx-auto">
                    {description}
                </p>
                <div className="flex justify-center">
                    <MagneticWrapper>
                        <div 
                          onClick={() => router.push(`/proyectos/${slug}`)}
                          className="px-16 py-6 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full shadow-2xl cursor-pointer hover:bg-neutral-200 transition-colors"
                        >
                            Ver Estudio —→
                        </div>
                    </MagneticWrapper>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollExpandProject;
