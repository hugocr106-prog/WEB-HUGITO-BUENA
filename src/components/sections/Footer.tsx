"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-20 px-[4rem] text-center">
      <div className="flex justify-center mb-12">
        <MagneticWrapper>
          <Image 
            src="/logo.png" 
            alt="HUGO Logo" 
            width={160} 
            height={160} 
            className="w-40 h-40 object-contain opacity-50 hover:opacity-100 transition-opacity" 
          />
        </MagneticWrapper>
      </div>
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs uppercase tracking-widest">© 2026 HUGO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link href="/legal/aviso-legal" className="text-white/40 text-xs uppercase hover:text-white transition-colors">Aviso Legal</Link>
          <Link href="/legal/privacidad" className="text-white/40 text-xs uppercase hover:text-white transition-colors">Privacidad</Link>
          <Link href="/legal/cookies" className="text-white/40 text-xs uppercase hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};
