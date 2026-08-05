import { SectionHeading } from "../SectionHeading";

const tiers = [
  {
    name: "Básico",
    segment: "PyME 10-50 empleados",
    recommended: false,
    rows: [
      ["Pentest web", "USD 1.500"],
      ["SOC mensual", "USD 500/m"],
      ["Retainer anual", "USD 6.000"],
      ["SLA", "72 h"],
      ["Reporte", "Básico"],
    ],
    footer: "Entrada al ecosistema",
  },
  {
    name: "Profesional",
    segment: "Empresa mediana 50-500",
    recommended: true,
    rows: [
      ["Pentest web", "USD 3.500"],
      ["SOC mensual", "USD 1.500/m"],
      ["Retainer anual", "USD 18.000"],
      ["SLA", "24 h"],
      ["Reporte", "Completo"],
    ],
    footer: "Tier más elegido",
  },
  {
    name: "Enterprise",
    segment: "Corporación 500+ / Banco",
    recommended: false,
    rows: [
      ["Pentest web", "USD 8.000+"],
      ["SOC mensual", "USD 4.000+/m"],
      ["Retainer anual", "USD 50.000+"],
      ["SLA", "4 h"],
      ["Reporte", "Board-ready"],
    ],
    footer: "Banca · Gobierno · Multi",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="05 · Pricing"
          title="Tres tiers. Sin sorpresas."
          description="Pricing transparente en USD. Retainers anuales con 15-20% de descuento sobre mensual."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border px-6 py-7 ${
                tier.recommended
                  ? "border-accent bg-background-elevated shadow-[0_0_40px_-12px_rgba(34,224,138,0.35)]"
                  : "border-border-subtle bg-background-elevated/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  Tier
                </p>
                {tier.recommended ? (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-background">
                    Recomendado
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-2xl font-semibold">{tier.name}</p>
              <p className="mt-1 text-sm text-muted">{tier.segment}</p>

              <div className="mt-6 flex-1 space-y-3 border-t border-border-subtle pt-6">
                {tier.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted">{label}</span>
                    <span className="font-mono font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-accent">
                {tier.footer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-background-elevated px-6 py-6">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            El ROI es obvio
          </p>
          <p className="mt-2 text-muted leading-relaxed">
            Un breach promedio cuesta USD 4.88 M. Un pentest anual cuesta USD
            3.500. El costo de prevenir es entre 10x y 100x menor que el
            costo de remediar.
          </p>
          <p className="mt-3 font-medium">
            Diagnóstico inicial sin costo. Propuesta firme en 48 horas
            hábiles.
          </p>
        </div>
      </div>
    </section>
  );
}
