"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
      }
    };

    const handleMouseEnter = () => cursorRef.current?.classList.add("scale-[4]");
    const handleMouseLeave = () => cursorRef.current?.classList.remove("scale-[4]");

    window.addEventListener("mousemove", handleMouseMove);
    
    const interactables = document.querySelectorAll("a, button, .work-item, .service-row");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform"
    />
  );
};
