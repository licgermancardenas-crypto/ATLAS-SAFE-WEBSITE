import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { Numbers } from "@/components/sections/Numbers";
import { Incidents } from "@/components/sections/Incidents";
import { Sentinel } from "@/components/sections/Sentinel";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Manifesto />
      <Services />
      <Numbers />
      <Incidents />
      <Sentinel />
      <Clients />
      <Contact />
    </>
  );
}
