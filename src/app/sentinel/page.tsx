import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Reveal } from "@/components/Reveal";
import { SentinelPanel } from "@/components/SentinelPanel";

export const metadata: Metadata = {
  title: { absolute: "ATLAS SENTINEL — Inteligencia anti-corrupción | ATLAS SAFE" },
  description:
    "ATLAS SENTINEL cruza datos estatales argentinos —AFIP, contratos públicos, registros societarios, padrones— con grafos de relaciones e IA para detectar corrupción y lavado de activos antes de que se cristalicen en causas penales.",
  openGraph: {
    title: "ATLAS SENTINEL — Inteligencia anti-corrupción",
    description:
      "Inteligencia patrimonial de fuentes abiertas para organismos de control, fiscalías y periodismo de investigación.",
  },
};

const capabilities = [
  {
    n: "01",
    title: "Grafo de relaciones",
    desc: "Personas, sociedades, domicilios, teléfonos y wallets en un solo grafo. Los vínculos que no aparecen en ningún registro individual aparecen en la intersección.",
  },
  {
    n: "02",
    title: "Detección de empresas fantasma",
    desc: "Sociedades sin empleados declarados, domicilio fiscal inexistente, constitución reciente y adjudicaciones desproporcionadas. El patrón clásico, detectado en horas.",
  },
  {
    n: "03",
    title: "Análisis patrimonial de PEP",
    desc: "Variación patrimonial de personas políticamente expuestas contra ingresos declarados, con seguimiento del entorno familiar y societario.",
  },
  {
    n: "04",
    title: "Trazabilidad cripto",
    desc: "Rastreo on-chain de wallets vinculadas a entidades bajo análisis, con reporte admisible en sede judicial.",
  },
  {
    n: "05",
    title: "Alertas priorizadas",
    desc: "Scoring de riesgo por hallazgo, no listados infinitos. Crítico, alto y medio, con el sustento documental adjunto a cada alerta.",
  },
  {
    n: "06",
    title: "Síntesis con IA",
    desc: "Resumen narrativo de cada caso con la cadena de evidencia enlazada, para que el analista lea conclusiones y no planillas.",
  },
];

const sources = [
  { name: "AFIP / ARCA", detail: "Situación fiscal, empleados declarados, deuda" },
  { name: "COMPR.AR / contrataciones", detail: "Licitaciones, adjudicaciones, proveedores" },
  { name: "IGJ y registros societarios", detail: "Composición accionaria, directorios, cambios" },
  { name: "Boletín Oficial", detail: "Designaciones, sanciones, actos administrativos" },
  { name: "Padrones públicos", detail: "Domicilios, identidades, vínculos declarados" },
  { name: "Declaraciones juradas", detail: "Patrimonio de funcionarios, variación interanual" },
  { name: "Blockchain pública", detail: "Flujos de criptoactivos, exchanges, mixers" },
  { name: "Fuentes abiertas y dark web", detail: "Menciones, filtraciones, foros de cibercrimen" },
];

const pipeline = [
  { step: "Ingesta", desc: "Conectores a fuentes públicas y a los sistemas habilitados del organismo." },
  { step: "Normalización", desc: "Entidades resueltas y deduplicadas: un CUIT, una persona, un domicilio." },
  { step: "Grafo", desc: "Vínculos materializados entre entidades, con peso y evidencia por arista." },
  { step: "Scoring", desc: "Modelos de riesgo por tipología: fantasma, sobreprecio, testaferro, lavado." },
  { step: "Alerta", desc: "Hallazgo priorizado con sustento documental y trazabilidad completa." },
];

const audiences = [
  "Oficina Anticorrupción",
  "SIGEN",
  "Fiscalías federales",
  "CRIACO",
  "Poder Judicial",
  "Tribunales de Cuentas",
  "Unidades de Información Financiera",
  "Periodismo de investigación",
];

export default function SentinelPage() {
  return (
    <>
      <PageHead
        label="ATLAS SENTINEL"
        title={
          <>
            Inteligencia
            <br />
            <em>anti-corrupción.</em>
          </>
        }
        lede={
          <>
            Inteligencia patrimonial de fuentes abiertas para organismos de control. Cruza datos
            estatales argentinos con grafos de relaciones e IA para detectar corrupción y lavado de
            activos antes de que se cristalicen en causas penales.
          </>
        }
        stats={[
          { value: "8", label: "Familias de fuentes" },
          { value: "48.391", label: "Contratos indexados" },
          { value: "1.247", label: "Entidades bajo análisis" },
          { value: "< 24 h", label: "De dato a alerta" },
        ]}
      />

      <section className="section sentinel-what">
        <div className="inner">
          <Reveal className="sentinel-what-top">
            <div>
              <div className="s-label">La brecha que cubre</div>
              <h2 className="s-title">
                Los datos ya son públicos.
                <br />
                <em>Nadie los cruza.</em>
              </h2>
            </div>
            <div className="sentinel-what-copy">
              <p>
                Cada organismo tiene su sistema, su padrón y su planilla. La corrupción vive
                exactamente en el espacio entre esos sistemas: una sociedad constituida hace seis
                meses, con el domicilio de un familiar de un funcionario, adjudicada en una
                licitación que ese funcionario firmó.
              </p>
              <p>
                Ningún registro individual muestra eso. El cruce, sí. ATLAS SENTINEL es la capa que
                hace ese cruce de forma continua y con evidencia trazable.
              </p>
              <p>
                Donde el CRIACO tiene inteligencia criminal operacional,{" "}
                <strong>ATLAS SENTINEL tiene inteligencia patrimonial</strong> de fuentes abiertas.
                Son complementarios, no competidores.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sentinel-caps">
        <div className="inner">
          <Reveal>
            <div className="s-label">Capacidades</div>
            <h2 className="s-title">Qué detecta.</h2>
          </Reveal>
          <div className="caps-grid">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.n} delay={((i % 3) + 1) as 1 | 2 | 3} className="cap-card">
                <span className="cap-n">{cap.n}</span>
                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-desc">{cap.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sentinel-pipeline-section">
        <div className="inner">
          <Reveal className="pipeline-top">
            <div>
              <div className="s-label">Cómo funciona</div>
              <h2 className="s-title">
                Del dato crudo
                <br />
                <em>a la alerta.</em>
              </h2>
            </div>
            <p>
              Cinco etapas, todas auditables. Cada alerta conserva el enlace a los registros
              originales que la sustentan, porque una hipótesis sin evidencia no sirve en un
              expediente.
            </p>
          </Reveal>
          <ol className="pipeline">
            {pipeline.map((stage, i) => (
              <li className="pipeline-step" key={stage.step}>
                <span className="pipeline-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="pipeline-name">{stage.step}</span>
                <span className="pipeline-desc">{stage.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section sentinel-sources-section">
        <div className="inner">
          <Reveal className="sources-top">
            <div>
              <div className="s-label">Fuentes</div>
              <h2 className="s-title">Sobre qué corre.</h2>
            </div>
            <p>
              Fuentes abiertas y registros públicos, más los sistemas internos que cada organismo
              habilite. Sin interceptación de comunicaciones y sin datos obtenidos por fuera del
              marco legal.
            </p>
          </Reveal>
          <div className="sources-grid">
            {sources.map((source) => (
              <div className="source-cell" key={source.name}>
                <div className="source-name">{source.name}</div>
                <div className="source-detail">{source.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sentinel-demo">
        <div className="inner">
          <Reveal className="demo-top">
            <div className="s-label">El panel</div>
            <h2 className="s-title">Lo que ve el analista.</h2>
          </Reveal>
          <Reveal delay={1}>
            <SentinelPanel />
          </Reveal>
        </div>
      </section>

      <section className="section sentinel-audience">
        <div className="inner">
          <Reveal className="audience-top">
            <div>
              <div className="s-label">Para quién</div>
              <h2 className="s-title">
                Organismos que ya tienen
                <br />
                <em>el mandato.</em>
              </h2>
            </div>
            <p>
              SENTINEL no reemplaza la investigación: la acelera. Le da al analista el punto de
              partida y la evidencia ordenada para que el trabajo humano empiece donde importa.
            </p>
          </Reveal>
          <ul className="audience-list">
            {audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section page-cta">
        <div className="inner page-cta-inner">
          <div>
            <div className="s-label">Demo</div>
            <h2 className="s-title">
              Veinte minutos
              <br />
              <em>sobre datos reales.</em>
            </h2>
          </div>
          <div className="page-cta-side">
            <p>
              Preparamos una demo sobre un caso público de tu jurisdicción para que veas el
              recorrido completo: del registro suelto a la alerta con evidencia.
            </p>
            <div className="hero-cta-group">
              <Link href="/#contact" className="cta-primary">
                Solicitar demo <span aria-hidden="true">→</span>
              </Link>
              <Link href="/servicios#gobierno-y-defensa" className="cta-secondary">
                Servicios de gobierno
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
