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

export default function Privacidad() {
  return (
    <LegalLayout title="Política de Privacidad">
      <h2>1. INFORMACIÓN AL USUARIO</h2>
      <p>HUGO, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril (GDPR) y la L.O. 3/2018 de 5 de diciembre (LOPDGDD), trataremos sus datos tal y como reflejamos en la presente Política de Privacidad.</p>
      
      <h2>2. FINALIDAD DEL TRATAMIENTO</h2>
      <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
      <ul>
        <li>Responder a sus consultas a través de los formularios de contacto o WhatsApp.</li>
        <li>Prestación de los servicios contratados.</li>
        <li>Envío de comunicaciones comerciales si ha dado su consentimiento.</li>
      </ul>

      <h2>3. DERECHOS DEL INTERESADO</h2>
      <p>Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos. Los interesados tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión.</p>
    </LegalLayout>
  );
}
