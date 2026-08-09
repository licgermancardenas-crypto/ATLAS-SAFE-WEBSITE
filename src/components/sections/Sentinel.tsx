import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SentinelPanel } from "@/components/SentinelPanel";

export function Sentinel() {
  return (
    <section className="section sentinel" id="sentinel">
      <div className="inner">
        <div className="sentinel-layout">
          <Reveal>
            <div className="s-chip">★ Producto estrella</div>
            <div className="s-label">ATLAS SENTINEL</div>
            <h2 className="s-title">
              Inteligencia
              <br />
              <em>anti-corrupción.</em>
            </h2>
            <div className="sentinel-body">
              <p>
                La única plataforma que cruza datos estatales argentinos —AFIP, padrones,
                contratos públicos, registros societarios— con grafos de relaciones e IA para
                detectar corrupción y lavado de activos antes de que se cristalicen en causas
                penales.
              </p>
              <p>
                Donde el CRIACO tiene inteligencia criminal operacional,{" "}
                <strong>ATLAS SENTINEL tiene inteligencia patrimonial</strong> de fuentes abiertas
                que el CRIACO no puede generar. Son complementarios, no competidores — y eso
                convierte a ATLAS SAFE en el proveedor natural del CRIACO.
              </p>
            </div>
            <div className="sentinel-actions">
              <Link href="/sentinel" className="sentinel-link">
                Cómo funciona <span aria-hidden="true">→</span>
              </Link>
              <Link href="/#contact" className="cta-secondary">
                Solicitar demo
              </Link>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <SentinelPanel rows={4} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
