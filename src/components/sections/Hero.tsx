import Link from "next/link";
import { Mark } from "../Logo";

const stats = [
  { value: "USD 10.5 T", label: "Costo global del cibercrimen 2025" },
  { value: "+72 %", label: "Ataques en LATAM último año" },
  { value: "USD 4.88 M", label: "Costo promedio de un breach" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,224,138,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted uppercase">
          <span className="h-px w-8 bg-accent" />
          ATLAS CORP · División Ciberseguridad
        </div>

        <div className="mt-8 flex items-start gap-6">
          <Mark className="hidden sm:block h-14 w-14 shrink-0 text-accent mt-2" />
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
            La defensa cibernética que su empresa{" "}
            <span className="text-accent">todavía no contrató.</span>
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
          Pentest · SOC 24/7 · Cumplimiento · Respuesta a Incidentes.
          Seguridad ofensiva y defensiva para empresas que no pueden
          permitirse un incidente.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#contacto"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Agendar diagnóstico sin costo
          </Link>
          <Link
            href="#servicios"
            className="rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver servicios
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border-subtle bg-background-elevated px-6 py-5"
            >
              <p className="text-2xl font-semibold text-accent font-mono">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
