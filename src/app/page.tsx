import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuienesSomos } from "@/components/sections/QuienesSomos";
import { Problema } from "@/components/sections/Problema";
import { Servicios } from "@/components/sections/Servicios";
import { Proceso } from "@/components/sections/Proceso";
import { Pricing } from "@/components/sections/Pricing";
import { PorQueNosotros } from "@/components/sections/PorQueNosotros";
import { ContactoCTA } from "@/components/sections/ContactoCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <QuienesSomos />
        <Problema />
        <Servicios />
        <Proceso />
        <Pricing />
        <PorQueNosotros />
        <ContactoCTA />
      </main>
      <Footer />
    </>
  );
}
