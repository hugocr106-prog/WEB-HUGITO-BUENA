'use client';

import React from 'react';
import ScrollExpandProject from '@/components/ui/scroll-expansion-hero';

const projects = [
  {
    title: "CHRIS MARTIN",
    category: "Web Design / Urban DJ Tenerife",
    description: "Una plataforma digital disruptiva para uno de los referentes de la música urbana en Canarias. Enfoque en booking para eventos y producción de reggaetón.",
    mediaSrc: "/assets/projects/chris-martin-bg-real.jpg",
    bgImageSrc: "/assets/projects/chris-martin-real.jpg",
  },
  {
    title: "CONDA",
    category: "Branding / Fashion Retail",
    description: "Identidad visual y estrategia de marca para una de las tiendas de moda más icónicas. Minimalismo aplicado al retail de lujo.",
    mediaSrc: "/assets/projects/conda-media-v3.png",
    bgImageSrc: "/assets/projects/conda-bg-new.png",
  },
  {
    title: "SOL & SAL",
    category: "Web Design / Surf Club Gran Canaria",
    description: "Una experiencia digital inmersiva para una escuela de surf boutique. Enfoque en reservas rápidas y una estética que captura las vibras del Atlántico.",
    mediaSrc: "/assets/projects/sol-sal-media.png",
    bgImageSrc: "/assets/projects/sol-sal-bg.png",
  },
  {
    title: "MOJO MODERNO",
    category: "Branding / Gourmet Sauce",
    description: "Identidad visual para una marca que reinventa el sabor canario. Un equilibrio perfecto entre tradición canaria y diseño minimalista contemporáneo.",
    mediaSrc: "/assets/projects/mojo-media.png",
    bgImageSrc: "/assets/projects/mojo-bg.png",
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-black">
      {/* Section Header */}
      <div className="bg-black text-white px-6 md:px-16 pt-32 pb-10 relative z-20">
        <div className="mx-auto max-w-7xl">
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 block">Portafolio</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">PROYECTOS<br/>DESTACADOS</h2>
        </div>
      </div>

      {/* Project List */}
      <div className="relative">
        {projects.map((project, index) => (
          <ScrollExpandProject 
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
