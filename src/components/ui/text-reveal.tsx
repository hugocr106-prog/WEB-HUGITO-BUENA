"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[300vh]", className)}>
      <div
        className={
          "sticky top-0 flex h-screen w-full items-start pt-32 md:items-center justify-start bg-transparent px-6 md:px-16"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-2xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-black/10 max-w-4xl text-left"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // Map the ranges to finish slightly earlier (at 0.9) to guarantee reveal
            const adjustedStart = start * 0.8;
            const adjustedEnd = end * 0.8;
            return (
              <Word key={i} progress={scrollYProgress} range={[adjustedStart, adjustedEnd]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
