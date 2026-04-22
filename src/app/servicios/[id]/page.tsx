"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const serviceData: Record<string, { title: string; description: string; items: string[] }> = {
  "diseno-web": {
    title: "Diseño Web",
    description: "Creamos experiencias digitales de alto rendimiento que no solo se ven increíbles, sino que están optimizadas para convertir. Fusionamos estética premium con tecnología de vanguardia (como Next.js y GSAP) para que tu marca destaque en el ruido digital.",
    items: ["Estrategia UX/UI", "Desarrollo High-Performance", "Animaciones Premium", "Optimización SEO"]
  },
  "branding": {
    title: "Branding",
    description: "La identidad de tu marca es más que un logo. Es cómo el mundo te percibe. Desarrollamos sistemas visuales completos, estratégicos y disruptivos que conectan emocionalmente con tu audiencia objetiva.",
    items: ["Estrategia de Marca", "Diseño de Logotipo", "Sistemas Visuales", "Directrices de Marca"]
  },
  "direccion-arte": {
    title: "Dirección de Arte",
    description: "Supervisamos la visión creativa total de tu proyecto. Desde la curatoría de fotografía hasta la narrativa visual, aseguramos que cada píxel y cada imagen cuenten la historia correcta.",
    items: ["Narrativa Visual", "Producción Creativa", "Curatoría de Estilo", "Diseño Editorial"]
  }
};

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const service = serviceData[id];

  if (!service) return <div className="p-20">Servicio no encontrado</div>;

  return (
    <main className="relative min-h-screen bg-white">
      <CustomCursor />
      <Navbar />

      <section className="pt-40 pb-20 px-8 md:px-20">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold uppercase mb-12 hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={16} /> Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-6">
              {service.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-2xl text-neutral-600 leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-sm text-neutral-400">Lo que hacemos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.items.map((item, i) => (
                  <div key={i} className="p-4 border border-neutral-200 rounded-lg font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
