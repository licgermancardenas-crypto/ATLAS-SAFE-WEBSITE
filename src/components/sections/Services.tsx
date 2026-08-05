import { Reveal } from "@/components/Reveal";

const services = [
  {
    n: "01",
    name: "Pentest & Red Team",
    desc: "Web, API, infraestructura, Active Directory y código fuente. Framework MITRE ATT&CK v14. Proof of Concept verificado de cada hallazgo. Retesting incluido a 30 días.",
  },
  {
    n: "02",
    name: "SOC as a Service",
    desc: "Monitoreo 24/7. SIEM Wazuh con reglas custom por sector. Detección y respuesta a incidentes. Dashboard ejecutivo mensual con métricas accionables.",
  },
  {
    n: "03",
    name: "Compliance BCRA / PCI-DSS",
    desc: "Gap analysis, plan de remediación y acompañamiento regulatorio. Gasto obligatorio bajo Com. A 6375/7724 del BCRA y PCI-DSS v4.0 para procesadores de tarjetas.",
  },
  {
    n: "04",
    name: "OSINT & Threat Intelligence",
    desc: "Superficie de ataque externa, dark web, filtraciones de credenciales y amenazas sectoriales. Integrado con el ecosistema de datos estatales ATLAS CORP.",
  },
  {
    n: "05",
    name: "Respuesta a Incidentes",
    desc: "Contención de ransomware, forensia digital con cadena de custodia certificada para sede judicial, recuperación de sistemas y análisis post-mortem.",
  },
  {
    n: "06",
    name: "AI Red Teaming",
    badge: "NUEVO",
    desc: "Seguridad de modelos LLM: prompt injection, jailbreaks, RAG poisoning, data leakage de modelos. El mercado que ningún competidor en Argentina atiende.",
  },
  {
    n: "07",
    name: "Ciberpatrullaje",
    badge: "GOV",
    desc: "Monitoreo preventivo de redes sociales, Telegram y Dark Web para fuerzas de seguridad. NLP en español rioplatense. Sin orden judicial para fuentes abiertas.",
  },
  {
    n: "08",
    name: "Cloud Security (CSPM)",
    badge: "NUEVO",
    desc: "Misconfiguraciones en AWS, Azure y GCP: buckets públicos, IAM sobreinventado, secrets expuestos. El 80% de las brechas cloud son configuración, no código.",
  },
  {
    n: "09",
    name: "Web3 & Smart Contracts",
    badge: "NUEVO",
    desc: "Auditoría de contratos inteligentes en Solidity y Rust. Reentrancy, access control failures, integer overflow. DeFi, NFT, exchanges y tokenización de activos.",
  },
];

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="inner">
        <Reveal className="services-top">
          <div>
            <div className="s-label">Servicios</div>
            <h2 className="s-title">Lo que hacemos.</h2>
          </div>
          <p>
            Portfolio completo desde el primer pentest hasta el monitoreo 24/7, la respuesta a
            incidentes y la inteligencia analítica avanzada. Todo desde un único proveedor.
          </p>
        </Reveal>
        <div className="svc-list">
          {services.map((s) => (
            <Reveal key={s.n} className="svc">
              <span className="svc-n">{s.n}</span>
              <div className="svc-body">
                <div className="svc-name">
                  {s.name}
                  {s.badge ? <span className="svc-new">{s.badge}</span> : null}
                </div>
                <div className="svc-desc">{s.desc}</div>
              </div>
              <div className="svc-price">Cotización a medida</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
