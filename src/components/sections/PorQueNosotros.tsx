import { SectionHeading } from "../SectionHeading";

const razones = [
  {
    n: "01",
    title: "Ejecución técnica real",
    desc: "No tercerizamos a un junior. Cada pentest lo ejecuta un profesional con certificación OSCP o equivalente, con experiencia en banca y fintech argentina.",
  },
  {
    n: "02",
    title: "Reportes para directorio",
    desc: "Otros entregan un PDF de 200 páginas con CVEs. Nosotros entregamos un brief ejecutivo de 5 páginas más el detalle técnico. Su CFO entiende el riesgo en 10 minutos.",
  },
  {
    n: "03",
    title: "Integración con IA",
    desc: "Usamos modelos frontier para escalar la detección de vulnerabilidades. Lo que un equipo hace en una semana, nosotros lo hacemos en dos días.",
  },
  {
    n: "04",
    title: "Precio USD blindado",
    desc: "Pricing en dólares facturado al MEP. Sin sorpresas por inflación. Contratos anuales con descuento. Sin renegociación cada trimestre.",
  },
];

export function PorQueNosotros() {
  return (
    <section className="border-t border-border-subtle bg-background-elevated/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="06 · Por qué nosotros"
          title="Cuatro razones que sus competidores no tienen."
        />

        <div className="mt-10 rounded-2xl border border-accent/30 bg-background-elevated px-6 py-8">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            Inteligencia aplicada a la defensa
          </p>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-balance">
            Vemos lo que los integradores tradicionales no ven.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {razones.map((r) => (
            <div
              key={r.n}
              className="rounded-xl border border-border-subtle px-6 py-6"
            >
              <p className="font-mono text-2xl font-semibold text-accent">
                {r.n}
              </p>
              <p className="mt-2 font-medium">{r.title}</p>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
