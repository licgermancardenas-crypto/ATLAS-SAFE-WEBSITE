import { Reveal } from "@/components/Reveal";

const diffs = [
  {
    n: "01",
    name: "OSINT de datos estatales exclusivo",
    desc: "AFIP, padrones, licitaciones, registros societarios. Ningún competidor local cruza estas fuentes con la evaluación de seguridad.",
  },
  {
    n: "02",
    name: "IA generativa en detección de amenazas",
    desc: "Modelos LLM frontier integrados en el análisis. Lo que un equipo convencional hace en semanas, lo hacemos en horas.",
  },
  {
    n: "03",
    name: "Reportes que generan decisiones",
    desc: "Versión ejecutiva para el directorio y versión técnica para IT. El cliente sabe exactamente qué corregir, en qué orden y qué cuesta no hacerlo.",
  },
];

export function Manifesto() {
  return (
    <section className="section manifesto" id="about">
      <div className="inner">
        <div className="manifesto-layout">
          <Reveal className="manifesto-left">
            <div className="s-label">Por qué existimos</div>
            <p className="manifesto-lede">
              El mercado argentino de ciberseguridad tiene servicios técnicos. Lo que no tiene es
              inteligencia contextual.
            </p>
          </Reveal>
          <div className="manifesto-right">
            <Reveal delay={1} className="manifesto-block">
              <p>
                Ningún competidor local puede correlacionar una vulnerabilidad en tu sistema con
                datos del Estado argentino —AFIP, registros societarios, contratos públicos— para
                entender qué tan expuesto estás realmente. Ese cruce es el diferencial que
                construimos.
              </p>
            </Reveal>
            <Reveal delay={2} className="manifesto-block">
              <p>
                No vendemos herramientas ni reportes de cumplimiento.{" "}
                <strong>Entregamos certeza operativa.</strong> Cada engagement empieza con un
                diagnóstico OSINT gratuito: mostramos en 30 minutos lo que un adversario puede ver
                de tu organización desde internet, sin acceder a ninguno de tus sistemas.
              </p>
            </Reveal>
            <Reveal delay={3} className="manifesto-block">
              <p>
                Si hay hallazgos —y los hay en el 95% de los casos— los presentamos antes de
                firmar cualquier contrato. Primero mostramos. Después facturamos.
              </p>
            </Reveal>
            <Reveal delay={4} className="diff-list">
              {diffs.map((d) => (
                <div className="diff" key={d.n}>
                  <span className="diff-index">{d.n}</span>
                  <div>
                    <div className="diff-name">{d.name}</div>
                    <div className="diff-desc">{d.desc}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
