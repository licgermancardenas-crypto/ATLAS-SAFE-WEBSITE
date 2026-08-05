"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      spotlight.style.background = `radial-gradient(520px circle at ${x}% ${y}%, rgba(18,48,28,.7) 0%, transparent 65%)`;
    };
    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div id="spotlight" ref={spotlightRef} />
      <div className="hero-accent-line" />
      <div className="hero-content">
        <div className="hero-pre">Ciberseguridad e Inteligencia de Amenazas</div>
        <h1 className="hero-title">
          La amenaza
          <br />
          ya está
          <br />
          <span className="italic">adentro.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">
            <strong>ATLAS SAFE</strong> detecta, contiene y elimina amenazas digitales antes de
            que se conviertan en incidentes. La única firma argentina que combina seguridad
            ofensiva con inteligencia de datos estatales propios.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="cta-primary">
              Solicitar diagnóstico →
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
