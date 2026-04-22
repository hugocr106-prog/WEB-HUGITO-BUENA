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

export default function AvisoLegal() {
  return (
    <LegalLayout title="Aviso Legal">
      <h2>1. DATOS IDENTIFICATIVOS</h2>
      <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
      <p>El titular de esta web es HUGO (en adelante HUGO), con domicilio a estos efectos en [TU DIRECCIÓN], N.I.F.: [TU NIF] y correo electrónico de contacto: hugocr106@gmail.com.</p>
      
      <h2>2. USUARIOS</h2>
      <p>El acceso y/o uso de este portal de HUGO atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

      <h2>3. USO DEL PORTAL</h2>
      <p>www.hugo-web.com proporciona el acceso a multitud de informaciones, servicios o datos en Internet pertenecientes a HUGO o a sus licenciantes a los que el USUARIO pueda tener acceso. </p>
    </LegalLayout>
  );
}
