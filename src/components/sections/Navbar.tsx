"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsScrolled(scrollY > 50);
      setIsDark(scrollY > windowHeight * 1.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full px-[4rem] py-8 flex justify-between items-center z-[1000] transition-all duration-300",
        isScrolled && !isDark && "bg-white/80 backdrop-blur-md text-black shadow-sm py-4",
        isScrolled && isDark && "bg-black/80 backdrop-blur-md text-white shadow-lg py-4",
        !isScrolled && "bg-transparent text-black"
      )}
    >
      <Link href="/" className="relative w-12 h-12">
        <img 
          src="/logo.png" 
          alt="HUGO Logo" 
          className={cn(
            "w-full h-full object-contain transition-all duration-300",
            !isDark && isScrolled && "invert"
          )}
        />
      </Link>
      <div className="relative group/menu flex items-center gap-8 h-12">
        {/* Navigation Links (Visible on hover) */}
        <div className="flex gap-8 opacity-0 group-hover/menu:opacity-100 translate-x-10 group-hover/menu:translate-x-0 transition-all duration-500 pointer-events-none group-hover/menu:pointer-events-auto">
          <Link href="/#services" className="text-sm font-bold uppercase tracking-widest hover:opacity-50">Servicios</Link>
          <Link href="/#projects" className="text-sm font-bold uppercase tracking-widest hover:opacity-50">Proyectos</Link>
          <Link href="/#footer" className="text-sm font-bold uppercase tracking-widest hover:opacity-50">Contacto</Link>
        </div>

        {/* Menu Icon (The Ray) */}
        <div className="flex flex-col gap-1 items-end cursor-pointer group-hover/menu:scale-110 transition-transform">
          <span className="block w-8 h-[2px] bg-current"></span>
          <span className="block w-5 h-[2px] bg-current transition-all group-hover/menu:w-8"></span>
        </div>
      </div>
    </nav>
  );
};
