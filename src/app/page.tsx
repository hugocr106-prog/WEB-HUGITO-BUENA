"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { InteractiveCanvas } from "@/components/sections/InteractiveCanvas";
import { TextRevealDemo } from "@/components/sections/text-reveal-demo";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import ImageReveal from "@/components/ui/image-reveal";
import { Projects } from "@/components/sections/Projects";
import { Skiper31 } from "@/components/ui/text-scroll-animation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <InteractiveCanvas />
      
      <Hero />
      
      <TextRevealDemo />

      {/* Services Section */}
      <section id="services" className="bg-black text-white px-[4rem] py-40 border-t border-white/5 relative z-20">
        <div className="container-custom">
          <div className="mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4 block">Capacidades</span>
            <h2 className="text-7xl font-black mb-12 tracking-tighter">MIS SERVICIOS</h2>
          </div>
          
          <ImageReveal />
        </div>
      </section>

      <Projects />

      <Skiper31 />

      <Footer />
    </main>
  );
}
