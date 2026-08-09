import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Catalog } from "@/components/servicios/Catalog";
import { practiceCount, serviceCount } from "@/data/services";

export const metadata: Metadata = {
  title: "Catálogo de servicios",
  description:
    "Los 59 servicios de ATLAS SAFE en 13 prácticas: seguridad ofensiva, detección y monitoreo, compliance BCRA y PCI-DSS, respuesta a incidentes, cloud, AppSec, inteligencia, OT/IoT, IA, Web3, Zero Trust, gobierno y servicios gestionados.",
  openGraph: {
    title: "Catálogo de servicios — ATLAS SAFE",
    description: `${serviceCount} servicios en ${practiceCount} prácticas, de la seguridad ofensiva al cumplimiento regulatorio.`,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHead
        label="Servicios"
        title={
          <>
            El catálogo
            <br />
            <em>completo.</em>
          </>
        }
        lede={
          <>
            Todo lo que hacemos, sin subcontratar. Cada servicio tiene alcance, entregables y
            metodología definidos; el precio se cotiza según superficie, criticidad y plazo.
          </>
        }
        stats={[
          { value: String(serviceCount), label: "Servicios" },
          { value: String(practiceCount), label: "Prácticas" },
          { value: "24/7", label: "Cobertura SOC" },
          { value: "2-4 h", label: "SLA de respuesta" },
        ]}
      />

      <section className="section catalog-section">
        <div className="inner">
          <Catalog />
        </div>
      </section>

      <section className="section page-cta">
        <div className="inner page-cta-inner">
          <div>
            <div className="s-label">Siguiente paso</div>
            <h2 className="s-title">
              ¿No sabés por dónde
              <br />
              <em>empezar?</em>
            </h2>
          </div>
          <div className="page-cta-side">
            <p>
              El diagnóstico inicial mapea tu superficie de ataque expuesta y prioriza qué atacar
              primero. De ahí sale el plan, no al revés.
            </p>
            <div className="hero-cta-group">
              <Link href="/#contact" className="cta-primary">
                Solicitar diagnóstico <span aria-hidden="true">→</span>
              </Link>
              <Link href="/sentinel" className="cta-secondary">
                Conocer ATLAS SENTINEL
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
