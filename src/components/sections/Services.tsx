import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { practiceCount, practices, serviceCount } from "@/data/services";

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="inner">
        <Reveal className="services-top">
          <div>
            <div className="s-label">Servicios</div>
            <h2 className="s-title">
              Trece prácticas.
              <br />
              <em>Un solo proveedor.</em>
            </h2>
          </div>
          <p>
            De la seguridad ofensiva a la inteligencia de amenazas, pasando por cumplimiento
            regulatorio, cloud, IA y contextos de gobierno. Portfolio completo, sin subcontratar.
          </p>
        </Reveal>

        <div className="practice-grid">
          {practices.map((practice, i) => (
            <Reveal key={practice.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <Link href={`/servicios#${practice.slug}`} className="practice-card">
                <span className="practice-card-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="practice-card-title">
                  {practice.title}
                  {practice.badge ? <span className="svc-new">{practice.badge}</span> : null}
                </span>
                <span className="practice-card-blurb">{practice.blurb}</span>
                <span className="practice-card-foot">
                  <span className="practice-count">{practice.services.length} servicios</span>
                  <span className="practice-card-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-foot">
          <p>
            <strong>{serviceCount} servicios</strong> distribuidos en {practiceCount} prácticas.
            Cada uno con alcance, entregables y metodología definidos.
          </p>
          <Link href="/servicios" className="cta-primary">
            Ver el catálogo completo <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
