"use client";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function TextRevealDemo() {
  return (
    <section className="relative bg-white py-32 z-10">
      <div className="container-custom mx-auto">
        <TextRevealByWord 
          text="Diseño estratégico que genera confianza inmediata. Elevo tu presencia digital para que tu marca no solo impresione, sino que convenza." 
        />
      </div>
    </section>
  );
}
