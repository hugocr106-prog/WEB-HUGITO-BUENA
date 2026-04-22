"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 right-8 md:left-auto md:w-[400px] z-[200] bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-700">
      <h4 className="text-white font-bold mb-2">Cookies & Privacidad</h4>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Puedes leer más en nuestra{" "}
        <Link href="/legal/cookies" className="text-white underline hover:text-zinc-300">
          Política de Cookies
        </Link>.
      </p>
      <div className="flex gap-4">
        <button
          onClick={acceptCookies}
          className="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform text-sm"
        >
          Aceptar todas
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl hover:bg-zinc-700 transition-colors text-sm"
        >
          Configurar
        </button>
      </div>
    </div>
  );
};
