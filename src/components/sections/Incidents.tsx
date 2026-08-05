import { Reveal } from "@/components/Reveal";

const incidents = [
  {
    year: "2019",
    org: "Policía Federal Argentina",
    type: "La Gorra Leaks — datos internos y legajos de personal",
    cost: "Daño institucional",
    severity: "high",
  },
  {
    year: "2020",
    org: "Dir. Nac. de Migraciones",
    type: "Ransomware NetWalker — 1.8 GB de datos diplomáticos",
    cost: "USD 4M exigidos",
    severity: "crit",
  },
  {
    year: "2021",
    org: "RENAPER",
    type: "Filtración de 45 millones de DNIs argentinos",
    cost: "USD 2M+ impacto",
    severity: "crit",
  },
  {
    year: "2022",
    org: "Poder Judicial de Córdoba",
    type: "Ransomware — parálisis total de semanas",
    cost: "USD 1.5M – 3M",
    severity: "crit",
  },
  {
    year: "2023",
    org: "PAMI",
    type: "Rhysida — 831 GB · historias clínicas de jubilados",
    cost: "USD 3M – 5M",
    severity: "crit",
  },
  {
    year: "2024",
    org: "RENAPER (segunda vez)",
    type: "65 millones de registros + fotos de licencias de conducir",
    cost: "Impacto sistémico",
    severity: "crit",
  },
  {
    year: "2024",
    org: "Municipio de Morón",
    type: "Ransomware — red municipal paralizada",
    cost: "USD 400K – 800K",
    severity: "high",
  },
];

export function Incidents() {
  return (
    <section className="section incidents" id="incidents">
      <div className="inner">
        <div className="incidents-layout">
          <Reveal className="incidents-side">
            <div className="s-label">El registro</div>
            <h2 className="s-title">
              Un incidente
              <br />
              por año.
              <br />
              <em>Sin excepción.</em>
            </h2>
            <p>
              El patrón en Argentina es sistemático. Cada organización vulnerada creyó que no le
              iba a pasar. La pregunta no es si va a suceder — es cuándo y si estarás preparado.
            </p>
            <div className="roi-line" style={{ marginTop: 40 }}>
              <div>
                <div className="roi-n">USD 5M</div>
                <div className="roi-l">COSTO INCIDENTE PAMI</div>
              </div>
              <div>
                <div className="roi-n">USD 24K</div>
                <div className="roi-l">1 AÑO SOC PREVENTIVO</div>
              </div>
              <div>
                <div className="roi-n" style={{ color: "var(--accent)" }}>
                  125×
                </div>
                <div className="roi-l">ROI DE LA PREVENCIÓN</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <table className="inc-table">
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Organización afectada</th>
                  <th style={{ textAlign: "right" }}>Impacto estimado</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((inc) => (
                  <tr key={`${inc.year}-${inc.org}`}>
                    <td className="td-yr">{inc.year}</td>
                    <td>
                      <div className="td-org">{inc.org}</div>
                      <div className="td-type">{inc.type}</div>
                    </td>
                    <td className={`td-cost ${inc.severity}`}>{inc.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
