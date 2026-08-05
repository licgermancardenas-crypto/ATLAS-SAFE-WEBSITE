import { SectionHeading } from "../SectionHeading";

const badges = [
  { value: "100 %", label: "Equipo dolarizado" },
  { value: "OSCP + CEH", label: "Certificaciones reales" },
  { value: "SLA 4 h", label: "Respuesta a incidentes tier Enterprise" },
  { value: "Argentina", label: "Sede Buenos Aires · operación LATAM" },
];

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="01 · Quiénes somos" title="Una firma técnica. Sin vueltas." />

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <p className="text-muted leading-relaxed">
            ATLAS SAFE es la firma de ciberseguridad enfocada en empresas que
            no pueden permitirse un incidente. Hacemos lo que los
            integradores tradicionales no hacen: romper sus sistemas — antes
            que un atacante lo haga.
          </p>
          <p className="text-muted leading-relaxed">
            Operamos en seguridad ofensiva (pentest, red team), seguridad
            defensiva (SOC 24/7, respuesta a incidentes) y cumplimiento
            regulatorio (BCRA, PCI-DSS, ISO 27001). Reportes accionables.
            Equipo argentino. Pricing dolarizado.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-background-elevated p-6">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            Equipo técnico ATLAS SAFE
          </p>
          <p className="mt-2 text-xl font-medium">
            Hackers éticos. Analistas SOC. Auditores.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="rounded-xl border border-border-subtle px-5 py-4"
            >
              <p className="text-lg font-semibold text-accent">
                {badge.value}
              </p>
              <p className="mt-1 text-sm text-muted">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
