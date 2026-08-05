"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

const feed = [
  { sev: "pc", label: "CRÍT", text: "Empresa fantasma en licitación activa municipio X", time: "3m" },
  { sev: "pc", label: "CRÍT", text: "Variación patrimonial no declarada — funcionario PEP", time: "11m" },
  { sev: "ph", label: "ALTO", text: "Red de 4 proveedores con mismo CUIT de contacto", time: "28m" },
  { sev: "ph", label: "ALTO", text: "Wallet cripto vinculada a persona políticamente expuesta", time: "45m" },
  { sev: "pm", label: "MED", text: "Proveedor con deuda AFIP y contrato vigente por $48M", time: "1h" },
  { sev: "pm", label: "MED", text: "Domicilio fiscal inexistente según RNPC", time: "2h" },
];

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

export function Sentinel() {
  const { value: pk1Value, anchorRef: pk1AnchorRef } = useCountUp(23, 1000, 200);
  const { value: pk2Value, anchorRef: pk2AnchorRef } = useCountUp(1247, 1300, 300);
  const { value: pk3Value, anchorRef: pk3AnchorRef } = useCountUp(48391, 1500, 400);

  return (
    <section className="section sentinel" id="sentinel">
      <div className="inner">
        <div className="sentinel-layout">
          <Reveal>
            <div className="s-chip">★ Producto estrella</div>
            <div className="s-label">ATLAS SENTINEL</div>
            <h2 className="s-title">
              Inteligencia
              <br />
              anti-corrupción.
            </h2>
            <div className="sentinel-body">
              <p>
                La única plataforma que cruza datos estatales argentinos —AFIP, padrones,
                contratos públicos, registros societarios— con grafos de relaciones e IA para
                detectar corrupción y lavado de activos antes de que se cristalicen en causas
                penales.
              </p>
              <p>
                Donde el CRIACO tiene inteligencia criminal operacional,{" "}
                <strong>ATLAS SENTINEL tiene inteligencia patrimonial</strong> de fuentes abiertas
                que el CRIACO no puede generar. Son complementarios, no competidores — y eso
                convierte a ATLAS SAFE en el proveedor natural del CRIACO.
              </p>
              <p>
                Clientes objetivo: Oficina Anticorrupción, SIGEN, fiscalías federales, CRIACO,
                Poder Judicial, periodismo de investigación.
              </p>
            </div>
            <a href="#contact" className="sentinel-link">
              Solicitar demo →
            </a>
          </Reveal>

          <Reveal delay={2} className="panel">
            <div className="panel-hd">
              <span className="panel-title">ATLAS SENTINEL · Panel de Alertas</span>
              <span className="panel-live">
                <span className="live-dot" />
                EN VIVO
              </span>
            </div>
            <div className="panel-kpi">
              <div className="pkpi" ref={pk1AnchorRef}>
                <div className="pkpi-v" style={{ color: "var(--accent)" }}>
                  {pk1Value}
                </div>
                <div className="pkpi-l">ALERTAS HOY</div>
              </div>
              <div className="pkpi" ref={pk2AnchorRef}>
                <div className="pkpi-v">{pk2Value}</div>
                <div className="pkpi-l">ENTIDADES</div>
              </div>
              <div className="pkpi" ref={pk3AnchorRef}>
                <div className="pkpi-v">{pk3Value}</div>
                <div className="pkpi-l">CONTRATOS</div>
              </div>
            </div>
            <div>
              {feed.map((row, i) => (
                <div className="pfeed-row" key={i}>
                  <span className={`psev ${row.sev}`}>{row.label}</span>
                  <span className="ptext">{row.text}</span>
                  <span className="pmeta">{row.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
