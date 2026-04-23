"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const projectData: Record<string, { title: string; category: string; description: string; image: string; challenge: string; solution: string }> = {
  "chris-martin": {
    title: "Chris Martin",
    category: "Urban DJ & Producer",
    description: "Diseño y desarrollo de una plataforma digital inmersiva para Chris Martin, DJ referente de la música urbana y el reggaetón. El objetivo era centralizar su portfolio, sets y sistema de booking.",
    image: "/assets/projects/chris-martin-crs-logo.png",
    challenge: "El desafío principal era capturar la esencia vibrante de los eventos urbanos, ofreciendo una herramienta profesional que facilitara a los promotores la contratación directa.",
    solution: "Creamos una web con una estética 'street' premium, integrando reproductores de sus producciones propias y un diseño optimizado para móvil, pensando en su audiencia joven y activa."
  },
  "conda": {
    title: "Conda",
    category: "Branding / Retail",
    description: "Reinvención de la identidad visual para Conda, una tienda de moda con solera que buscaba atraer a un público más joven y sofisticado sin perder su esencia tradicional.",
    image: "/assets/projects/conda-media-v3.png",
    challenge: "Equilibrar el legado histórico de la marca con una estética contemporánea, minimalista y de lujo que pudiera competir en el mercado del retail actual.",
    solution: "Desarrollamos un nuevo sistema de logotipos, tipografías y paleta de colores. El resultado fue una marca que respira elegancia y modernidad, aplicada desde el packaging hasta la presencia digital."
  },
  "loco-polo": {
    title: "Loco Polo",
    category: "Diseño Web / E-commerce",
    description: "Creación de una plataforma digital vibrante y orientada a la conversión para Loco Polo, la marca de polos artesanales más divertida, destacando su colorido catálogo.",
    image: "/assets/projects/loco-polo-media.png",
    challenge: "El reto consistía en trasladar la frescura y la estética colorida de sus locales físicos al entorno digital, sin sacrificar la velocidad de carga ni la usabilidad móvil tan necesaria para su público joven.",
    solution: "Desarrollamos una interfaz de alto contraste sobre un fondo azul piscina refrescante, con un flujo de compra súper intuitivo y fotografías macro hiperrealistas que invitan a dar un bocado. Resultado: incremento notable en la conversión online."
  },
  "jeito": {
    title: "Jeito",
    category: "Branding / Cerveza Artesana",
    description: "Construcción de una identidad visual profunda y sobria para Jeito, una cerveza artesana 100% canaria que busca rendir homenaje a la tradición sin caer en los clichés visuales de siempre.",
    image: "/assets/projects/jeito-media.png",
    challenge: "Necesitaban diferenciarse radicalmente de las cervezas comerciales, comunicando un producto puro, potente y premium, apelando a la esencia de la tierra pero con un tono cosmopolita.",
    solution: "Apostamos por un logotipo puramente tipográfico, audaz y pesado. Para el packaging, utilizamos una combinación de texturas mate que evocan la piedra volcánica, transmitiendo carácter y artesanía desde el primer vistazo."
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const project = projectData[id];

  if (!project) return <div className="p-20">Proyecto no encontrado</div>;

  return (
    <main className="relative min-h-screen bg-black text-white">
      <CustomCursor />
      <Navbar />

      <section className="pt-40 pb-20 px-8 md:px-20">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold uppercase mb-12 hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={16} /> Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 block">{project.category}</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-6 leading-none">
              {project.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-2xl text-neutral-400 leading-relaxed mb-8">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] md:h-[85vh] w-full rounded-2xl overflow-hidden mb-32 bg-neutral-900/50 flex items-center justify-center p-4 md:p-8"
        >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-contain" 
              priority
            />
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-6xl mx-auto mb-40">
            <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6 font-mono">El Desafío</h2>
                <p className="text-2xl leading-relaxed text-neutral-300">
                    {project.challenge}
                </p>
            </div>
            <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6 font-mono">La Solución</h2>
                <p className="text-2xl leading-relaxed text-neutral-300">
                    {project.solution}
                </p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
