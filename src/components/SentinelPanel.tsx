"use client";

import { useEffect, useRef, useState } from "react";

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

    // Reduced motion: skip the count-up and land on the final number.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

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

export function SentinelPanel({ rows = feed.length }: { rows?: number }) {
  const { value: alerts, anchorRef: alertsRef } = useCountUp(23, 1000, 200);
  const { value: entities, anchorRef: entitiesRef } = useCountUp(1247, 1300, 300);
  const { value: contracts, anchorRef: contractsRef } = useCountUp(48391, 1500, 400);

  return (
    <div className="panel">
      <div className="panel-hd">
        <span className="panel-title">ATLAS SENTINEL · Panel de Alertas</span>
        <span className="panel-live">
          <span className="live-dot" />
          EN VIVO
        </span>
      </div>
      <div className="panel-kpi">
        <div className="pkpi" ref={alertsRef}>
          <div className="pkpi-v" style={{ color: "var(--accent)" }}>
            {alerts}
          </div>
          <div className="pkpi-l">ALERTAS HOY</div>
        </div>
        <div className="pkpi" ref={entitiesRef}>
          <div className="pkpi-v">{entities.toLocaleString("es-AR")}</div>
          <div className="pkpi-l">ENTIDADES</div>
        </div>
        <div className="pkpi" ref={contractsRef}>
          <div className="pkpi-v">{contracts.toLocaleString("es-AR")}</div>
          <div className="pkpi-l">CONTRATOS</div>
        </div>
      </div>
      <div>
        {feed.slice(0, rows).map((row) => (
          <div className="pfeed-row" key={row.text}>
            <span className={`psev ${row.sev}`}>{row.label}</span>
            <span className="ptext">{row.text}</span>
            <span className="pmeta">{row.time}</span>
          </div>
        ))}
      </div>
      <p className="panel-foot">
        Datos ilustrativos. El panel real se despliega sobre las fuentes habilitadas para cada
        organismo.
      </p>
    </div>
  );
}
