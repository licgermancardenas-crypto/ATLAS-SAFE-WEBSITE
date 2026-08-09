"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// The globe is WebGL and purely decorative: keep it out of the first payload
// so the hero headline (the LCP element) paints without waiting for it.
const Globe = dynamic(() => import("@/components/Globe").then((m) => m.Globe), {
  ssr: false,
});

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let x = 50;
    let y = 40;

    const paint = () => {
      frame = 0;
      spotlight.style.background = `radial-gradient(520px circle at ${x}% ${y}%, rgba(18,48,28,.7) 0%, transparent 65%)`;
    };

    // Coalesce pointer moves into one paint per frame.
    const onMove = (e: MouseEvent) => {
      x = (e.clientX / window.innerWidth) * 100;
      y = (e.clientY / window.innerHeight) * 100;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div id="spotlight" ref={spotlightRef} />
      <div className="hero-accent-line" />
      <Globe className="hero-globe" />
      <div className="hero-content">
        <p className="hero-pre">Ciberseguridad e Inteligencia de Amenazas</p>
        <h1 className="hero-title">
          La inteligencia
          <br />
          detrás de
          <br />
          <span className="italic">cada defensa.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">
            <strong>ATLAS SAFE</strong> detecta, contiene y elimina amenazas digitales antes de
            que se conviertan en incidentes. La única firma argentina que combina seguridad
            ofensiva con inteligencia de datos estatales propios.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="cta-primary">
              Solicitar diagnóstico <span aria-hidden="true">→</span>
            </a>
            <a href="#services" className="cta-secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-cue">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
