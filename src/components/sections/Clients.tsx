import { Reveal } from "@/components/Reveal";

const sectors = [
  {
    name: "Fintechs & Bancos",
    why: "Obligación BCRA Com. A 6375/7724. Gasto regulatorio no discrecional. 78% sufrieron ataques en 2024.",
    ticket: "USD 8,000 – 25,000 / año",
  },
  {
    name: "Salud & Prepagas",
    why: "Post-PAMI y Medife 2024. Historias clínicas = dato más sensible. Ley 25.326 con multas crecientes.",
    ticket: "USD 3,000 – 8,000 / año",
    delay: 1 as const,
  },
  {
    name: "Municipios & Gobierno",
    why: "Post-Morón 2024. 135 municipios bonaerenses sin protección. Sinergia con red ATLAS ANALYTICS.",
    ticket: "USD 5,000 – 20,000 / año",
    delay: 2 as const,
  },
  {
    name: "Fuerzas de Seguridad",
    why: "PFA, GNA, PNA, PSA, Ejército, Poder Judicial. Ciberpatrullaje, OSINT operativo y forensia.",
    ticket: "USD 5,000 – 50,000 / mes",
    delay: 3 as const,
  },
  {
    name: "Estudios Jurídicos",
    why: "Datos de M&A, causas judiciales y clientes de alto perfil. Sin protección. Ciclo de venta corto.",
    ticket: "USD 2,000 – 5,000 / año",
  },
  {
    name: "Retail & E-commerce",
    why: "PCI-DSS v4.0 obligatorio para procesamiento de tarjetas. APIs expuestas. Datos de clientes.",
    ticket: "USD 4,000 – 12,000 / año",
    delay: 1 as const,
  },
  {
    name: "Agroindustria",
    why: "Post-AGD y Papel Prensa 2023. Alta exposición, baja cultura de seguridad. Exportaciones en riesgo.",
    ticket: "USD 3,000 – 10,000 / año",
    delay: 2 as const,
  },
  {
    name: "PyMEs Tecnológicas",
    why: "Desarrollo rápido sin security review. Repos con secrets expuestos. APIs sin autenticación robusta.",
    ticket: "USD 1,500 – 4,000 / año",
    delay: 3 as const,
  },
];

export function Clients() {
  return (
    <section className="section clients-section" id="clients">
      <div className="inner">
        <Reveal className="clients-head">
          <div>
            <div className="s-label">Clientes</div>
            <h2 className="s-title">
              Sectores con
              <br />
              necesidad real.
            </h2>
          </div>
          <p>
            Nos enfocamos en sectores con alta densidad regulatoria, datos sensibles y presupuesto
            de IT establecido. Dónde el costo del incidente supera ampliamente el costo de la
            prevención.
          </p>
        </Reveal>
        <div className="cg">
          {sectors.map((s) => (
            <Reveal key={s.name} delay={s.delay} className="cc">
              <div className="cc-nm">{s.name}</div>
              <div className="cc-wh">{s.why}</div>
              <div className="cc-tk">{s.ticket}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
