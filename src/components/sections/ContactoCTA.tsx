import { Mark } from "../Logo";

export function ContactoCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-border-subtle">
      <div
        className="absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,224,138,0.4) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <Mark className="mx-auto h-14 w-14 text-accent" />

        <p className="mt-8 text-xs font-medium tracking-wide text-accent uppercase">
          El próximo paso
        </p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
          Auditemos su superficie de ataque en 30 días.
        </h2>
        <p className="mt-4 text-muted">
          Diagnóstico inicial sin costo · Propuesta en 48 horas hábiles
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:lic.germancardenas@gmail.com?subject=Diagn%C3%B3stico%20ATLAS%20SAFE"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-soft transition-colors"
          >
            Agendar diagnóstico
          </a>
          <a
            href="mailto:lic.germancardenas@gmail.com?subject=Solicitud%20de%20propuesta%20ATLAS%20SAFE"
            className="rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-foreground hover:border-accent/60 transition-colors"
          >
            Solicitar propuesta
          </a>
        </div>

        <div className="mt-16 text-sm text-muted">
          <p className="font-medium text-foreground">
            German Cárdenas · ATLAS SAFE
          </p>
          <p className="mt-1">
            <a
              href="mailto:lic.germancardenas@gmail.com"
              className="hover:text-accent transition-colors"
            >
              lic.germancardenas@gmail.com
            </a>
          </p>
          <p className="mt-1">Buenos Aires, Argentina</p>
        </div>
      </div>
    </section>
  );
}
