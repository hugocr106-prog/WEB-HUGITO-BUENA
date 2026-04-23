"use client";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function TextRevealDemo() {
  return (
    <section className="relative bg-white pt-16 pb-32 md:py-32 z-10">
      <div className="mx-auto px-6 md:px-16">
        <TextRevealByWord 
          text="Diseño estratégico que genera confianza inmediata. Elevo tu presencia digital para que tu marca no solo impresione, sino que convenza." 
        />
      </div>
    </section>
  );
}
