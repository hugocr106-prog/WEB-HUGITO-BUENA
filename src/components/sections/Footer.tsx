"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-[15vw] px-[4rem] text-center">
      <h2 className="text-[clamp(3rem,10vw,8rem)] mb-16 font-bold leading-tight">
        TRABAJEMOS<br />JUNTOS.
      </h2>
      <div className="flex justify-center mb-12">
        <img src="/logo.png" alt="HUGO Logo" className="w-20 h-20 object-contain opacity-50 hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
        <a 
          href="https://wa.me/34638221131" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform"
        >
          WhatsApp
        </a>
        <a 
          href="mailto:hugocr106@gmail.com" 
          className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all"
        >
          Email
        </a>
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
