"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 180;
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = 1000;
    canvas.height = 1500;

    const currentFrame = (index: number) =>
      `/frames/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.png`;

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    const heroVideo = { frame: 0 };

    const render = () => {
      const frame = imagesRef.current[heroVideo.frame];
      if (frame && frame.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(frame, 0, 0);
      }
    };

    // Sequence animation
    gsap.to(heroVideo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-trigger",
        start: "top top",
        end: "bottom+=100% top",
        scrub: 0.5,
      },
      onUpdate: render,
    });

    // Fade out when entering dark sections
    gsap.to(canvas, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    imagesRef.current[0].onload = render;

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div id="hero-trigger" className="absolute top-0 left-0 w-full h-[100vh]" />
      <canvas ref={canvasRef} className="hero-img" />
    </>
  );
};
