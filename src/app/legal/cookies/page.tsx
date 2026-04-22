"use client";
import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <main className="bg-white text-black min-h-screen">
    <Navbar />
    <section className="pt-40 pb-20 px-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black mb-12 tracking-tighter uppercase">{title}</h1>
      <div className="prose prose-zinc prose-lg max-w-none">
        {children}
      </div>
    </section>
    <Footer />
  </main>
);

export default function CookiesPolicy() {
  return (
    <LegalLayout title="Política de Cookies">
      <p>Esta web utiliza cookies para mejorar la experiencia del usuario. A continuación encontrará información sobre qué son las cookies, qué tipo de cookies utiliza esta web y cómo desactivarlas en su navegador.</p>
      
      <h2>1. ¿QUÉ SON LAS COOKIES?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita cualquier página web. Su principal función es almacenar datos que podrán ser recuperados por la web que las ha emitido.</p>

      <h2>2. TIPOS DE COOKIES QUE UTILIZAMOS</h2>
      <ul>
        <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
        <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen los usuarios del servicio.</li>
      </ul>

      <h2>3. CÓMO GESTIONAR LAS COOKIES</h2>
      <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
    </LegalLayout>
  );
}
