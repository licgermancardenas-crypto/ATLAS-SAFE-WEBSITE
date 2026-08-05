import { SectionHeading } from "../SectionHeading";

const stats = [
  {
    value: "USD 10.5 T",
    label: "Pérdidas globales 2025",
    source: "Cybersecurity Ventures",
  },
  {
    value: "USD 4.88 M",
    label: "Costo promedio de un data breach",
    source: "IBM Cost of a Breach 2024",
  },
  {
    value: "277 días",
    label: "Tiempo promedio en detectar un incidente",
    source: "IBM / Mandiant",
  },
  {
    value: "60 %",
    label: "PyMEs que cierran tras un ataque grave",
    source: "US National Cyber Security Alliance",
  },
];

const vectores = [
  {
    title: "Ransomware-as-a-Service",
    desc: "Kits comprados en dark web · cifran y exigen rescate · 30 % de ataques 2025",
  },
  {
    title: "Phishing dirigido (spear-phishing)",
    desc: "Email de aspecto legítimo a ejecutivos · 91 % de breaches comienzan así",
  },
  {
    title: "Credenciales filtradas",
    desc: "Contraseñas reusadas o filtradas en GitHub · activos para abuso por meses",
  },
  {
    title: "Explotación de APIs y zero-days",
    desc: "Aplicaciones web sin auditar · APIs públicas con autenticación débil",
  },
  {
    title: "Insider threat / negligencia",
    desc: "Empleados con accesos excesivos · USB infectados · errores de config",
  },
  {
    title: "Ataques a la cadena de suministro",
    desc: "Proveedores comprometidos abren la puerta · efecto SolarWinds",
  },
];

export function Problema() {
  return (
    <section className="border-t border-border-subtle bg-background-elevated/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="02 · El problema"
          title="El cibercrimen cuesta más que cualquier guerra."
          description="Si el cibercrimen fuera una economía, sería la tercera del mundo después de EEUU y China. Lo que se pierde por ataques digitales hoy supera todo el comercio ilegal de drogas y armas combinado. Ningún sector está a salvo."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border-t-2 border-accent bg-background-elevated px-5 py-6"
            >
              <p className="text-2xl font-semibold font-mono">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
              <p className="mt-3 text-xs text-muted/60">{stat.source}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs font-medium tracking-wide text-accent uppercase">
          Vectores de ataque más comunes — 2025
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {vectores.map((v) => (
            <div
              key={v.title}
              className="flex gap-3 rounded-xl border border-border-subtle px-5 py-4"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="font-medium">{v.title}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
