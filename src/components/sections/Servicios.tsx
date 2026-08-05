import { SectionHeading } from "../SectionHeading";

const servicios = [
  {
    tag: "Pentest",
    title: "Seguridad Ofensiva",
    desc: "Web App, infraestructura, APIs, Active Directory. OWASP Top 10 + lógica de negocio. Reporte ejecutivo + técnico.",
    price: "USD 1.500 — 10.000 / proyecto",
  },
  {
    tag: "SOC 24/7",
    title: "Monitoreo Continuo",
    desc: "SIEM Wazuh, detección de anomalías, alertas en tiempo real, dashboard ejecutivo, on-call rotativo.",
    price: "USD 500 — 5.000 / mes",
  },
  {
    tag: "Cumplimiento",
    title: "BCRA · PCI · ISO 27001",
    desc: "Gap analysis, plan de remediación, documentación auditable. Acompañamos hasta la certificación.",
    price: "USD 800 — 2.500 / mes",
  },
  {
    tag: "Respuesta",
    title: "Incidentes y Forensia",
    desc: "Contención de ransomware, recuperación, forensia digital, post-mortem. Disponibilidad 24/7.",
    price: "USD 3.000 — 15.000 / caso",
  },
  {
    tag: "OSINT & Intel",
    title: "Inteligencia de Amenazas",
    desc: "Dark web, filtraciones, monitoreo de superficie de ataque, inteligencia sectorial mensual.",
    price: "USD 600 — 2.000 / mes",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="03 · Servicios"
          title="Cinco frentes. Una sola firma."
          description="ATLAS SAFE cubre el ciclo entero: evaluación, protección continua, cumplimiento regulatorio y respuesta cuando algo sale mal. Reportes ejecutivos en español, documentación técnica para su equipo de IT. Pricing en USD, facturación al MEP."
        />

        <div className="mt-12 space-y-4">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-background-elevated px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                <span className="inline-flex h-fit shrink-0 items-center rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                  {s.tag}
                </span>
                <div>
                  <p className="text-lg font-medium">{s.title}</p>
                  <p className="mt-1 max-w-xl text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              <p className="shrink-0 font-mono text-sm font-medium text-accent sm:text-right">
                {s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
