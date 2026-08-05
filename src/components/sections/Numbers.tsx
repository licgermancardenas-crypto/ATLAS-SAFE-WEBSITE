"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

function useCountUp(target: number, duration: number, delay = 0) {
  const [value, setValue] = useState(0);
  const triggered = useRef(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            window.setTimeout(() => {
              const start = performance.now();
              const step = (now: number) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                setValue(Math.round(target * eased));
                if (p < 1) requestAnimationFrame(step);
                else setValue(target);
              };
              requestAnimationFrame(step);
            }, delay);
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return { value, anchorRef };
}

export function Numbers() {
  const { value: n1Value, anchorRef: n1AnchorRef } = useCountUp(1200, 1600, 0);
  const { value: n2Value, anchorRef: n2AnchorRef } = useCountUp(37, 1200, 200);

  return (
    <section className="section numbers" id="impact">
      <div className="inner">
        <Reveal>
          <h2 className="s-label">El contexto</h2>
        </Reveal>
        <div className="numbers-grid" style={{ marginTop: 40 }}>
          <Reveal className="num-cell">
            <div className="num-val" ref={n1AnchorRef}>
              <span>{n1Value}</span>M<span style={{ color: "var(--cream)" }}>+</span>
            </div>
            <div className="num-label">
              INTENTOS DE HACKEO
              <br />
              EN ARGENTINA · 2023
              <br />— 13× VS AÑO ANTERIOR
            </div>
          </Reveal>
          <Reveal delay={2} className="num-cell">
            <div className="num-val" ref={n2AnchorRef}>
              <span>{n2Value}</span>%
            </div>
            <div className="num-label">
              DE EMPRESAS ARGENTINAS
              <br />
              SIN NINGUNA HERRAMIENTA
              <br />
              DE CIBERSEGURIDAD
            </div>
          </Reveal>
          <Reveal delay={3} className="num-cell">
            <div className="num-val">
              10<span style={{ fontSize: ".6em", color: "var(--accent)" }}>×</span>
            </div>
            <div className="num-label">
              ROI DE LA PREVENCIÓN
              <br />
              CADA USD 1 INVERTIDO
              <br />
              EVITA USD 10–100 EN INCIDENTE
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
