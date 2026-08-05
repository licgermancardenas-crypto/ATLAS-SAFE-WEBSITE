import { SectionHeading } from "../SectionHeading";

const pasos = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Reunión inicial sin costo. Identificamos activos críticos y superficie de ataque.",
  },
  {
    n: "02",
    title: "Autorización",
    desc: "NDA + Carta de Autorización legal de pentest (Ley 26.388). Sin esto no operamos.",
  },
  {
    n: "03",
    title: "Ejecución",
    desc: "Pentest o despliegue SOC con metodología OWASP + MITRE ATT&CK. Comunicación diaria.",
  },
  {
    n: "04",
    title: "Reporte",
    desc: "Documento ejecutivo (board-ready) + reporte técnico paso a paso para su equipo IT.",
  },
  {
    n: "05",
    title: "Remediación",
    desc: "Plan priorizado por criticidad (CVSS) + acompañamiento del equipo en correcciones.",
  },
  {
    n: "06",
    title: "Verificación",
    desc: "Retest sin costo dentro de 30 días para validar que cada hallazgo fue corregido.",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="border-t border-border-subtle bg-background-elevated/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="04 · Cómo trabajamos"
          title="Proceso medible. Reportes accionables."
          description="No vendemos un PDF con vulnerabilidades. Vendemos un plan de remediación priorizado por riesgo real para su negocio. Cada engagement sigue el mismo proceso documentado."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
          {pasos.map((paso) => (
            <div key={paso.n} className="bg-background-elevated px-6 py-6">
              <p className="font-mono text-2xl font-semibold text-accent">
                {paso.n}
              </p>
              <p className="mt-2 font-medium">{paso.title}</p>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                {paso.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
