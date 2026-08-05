"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type Service = { n: string; name: string; desc: string };
type Practice = { title: string; badge?: "NUEVO" | "GOV"; services: Service[] };

const practices: Practice[] = [
  {
    title: "Seguridad Ofensiva",
    services: [
      {
        n: "01",
        name: "Pentest Web Application",
        desc: "Evaluación completa bajo OWASP Top 10: análisis manual y automatizado, explotación controlada de hallazgos, CVSS scoring y reporte ejecutivo + técnico. Retesting incluido a 30 días.",
      },
      {
        n: "02",
        name: "Pentest API (REST, GraphQL, gRPC)",
        desc: "Autenticación, autorización, rate limiting, injection, BOLA/BFLA y exposición de datos sensibles. Mapeado a OWASP API Security Top 10, con cobertura de GraphQL y gRPC.",
      },
      {
        n: "03",
        name: "Pentest Infraestructura / Network",
        desc: "Escaneo de puertos, servicios expuestos, vulnerabilidades de protocolos, segmentación de red y configuraciones inseguras. Redes internas y perimetrales.",
      },
      {
        n: "04",
        name: "Pentest Mobile (iOS + Android)",
        desc: "Apps nativas e híbridas bajo OWASP Mobile Top 10: análisis estático y dinámico, comunicaciones inseguras, almacenamiento de datos y reverse engineering de APK/IPA.",
      },
      {
        n: "05",
        name: "Active Directory / Azure AD Pentest",
        desc: "Kerberoasting, AS-REP roasting, pass-the-hash, DCSync y BloodHound graph analysis. La mayoría de los ransomwares pasan por un AD comprometido.",
      },
      {
        n: "06",
        name: "Source Code Review (SAST Manual)",
        desc: "Revisión manual de código: injection flaws, insecure deserialization, secrets hardcodeados y vulnerabilidades de lógica de negocio. Manual y automatizado, no solo scanners.",
      },
      {
        n: "07",
        name: "Phishing & Social Engineering Simulation",
        desc: "Campaña controlada con plantillas contextualizadas en español rioplatense. Métricas de click rate, credential harvesting y plan de capacitación según resultados.",
      },
      {
        n: "08",
        name: "Red Team Operations (Full APT Simulation)",
        desc: "Simulación de actor amenaza avanzado durante 30-60 días: acceso inicial, persistencia, movimiento lateral y exfiltración. Mapeado a MITRE ATT&CK.",
      },
    ],
  },
  {
    title: "Detección y Monitoreo",
    services: [
      {
        n: "09",
        name: "SOC as a Service 24/7",
        desc: "SIEM Wazuh/Elastic con reglas custom por sector, monitoreo continuo de logs y alertas, correlación de eventos y respuesta inicial a incidentes.",
      },
      {
        n: "10",
        name: "Threat Hunting Proactivo",
        desc: "Búsqueda activa de amenazas que evadieron controles existentes: hipótesis basadas en CTI y detección de persistencia silenciosa.",
      },
      {
        n: "11",
        name: "Vulnerability Management Continuo",
        desc: "Escaneo continuo de activos expuestos y red interna, priorización por riesgo real y tracking de SLAs de remediación.",
      },
      {
        n: "12",
        name: "Attack Surface Management (ASM)",
        desc: "Monitoreo continuo de subdominios, certificados expirados, tecnologías expuestas y credenciales filtradas. La vista del atacante, en tiempo real.",
      },
      {
        n: "13",
        name: "Dark Web & Brand Monitoring",
        desc: "Monitoreo de dark web, foros de cibercrimen y Telegram por menciones de marca, credenciales de empleados filtradas y datos de clientes expuestos.",
      },
    ],
  },
  {
    title: "Compliance Regulatorio",
    services: [
      {
        n: "14",
        name: "Compliance BCRA (Com. A 6375 / 7724)",
        desc: "Gap analysis contra las comunicaciones del BCRA, plan de remediación priorizado y acompañamiento hasta la auditoría regulatoria.",
      },
      {
        n: "15",
        name: "PCI-DSS v4.0 Assessment & Remediation",
        desc: "Gap analysis contra PCI-DSS v4.0, plan de remediación por SAQ/ROC y acompañamiento técnico para el assessment de un QSA.",
      },
      {
        n: "16",
        name: "ISO 27001 Implementation",
        desc: "Implementación completa del SGSI bajo ISO 27001:2022, desde el análisis de brechas hasta la auditoría de certificación.",
      },
      {
        n: "17",
        name: "Ley 25.326 Adecuación (Datos Personales)",
        desc: "Adecuación a la Ley de Protección de Datos Personales: registro ante AAIP, política de privacidad, DPIA y procedimiento de brechas.",
      },
    ],
  },
  {
    title: "Respuesta a Incidentes",
    services: [
      {
        n: "18",
        name: "IR Retainer (horas pre-pagas, SLA garantizado)",
        desc: "Disponibilidad de respuesta a incidentes con horas mensuales pre-pagas, SLA de 2-4 horas 24/7 y prioridad sobre clientes sin retainer.",
      },
      {
        n: "19",
        name: "Respuesta Activa a Ransomware",
        desc: "Contención inmediata: aislamiento de sistemas, identificación de variante, evaluación de descifrado y recuperación guiada.",
      },
      {
        n: "20",
        name: "Digital Forensics (cadena de custodia judicial)",
        desc: "Análisis forense con cadena de custodia certificada admisible en sede judicial: recuperación de datos borrados y peritajes informáticos.",
      },
      {
        n: "21",
        name: "Malware Analysis & Reverse Engineering",
        desc: "Desensamblado estático, análisis dinámico en sandbox, identificación de C2 y extracción de IoCs.",
      },
    ],
  },
  {
    title: "Cloud Security",
    badge: "NUEVO",
    services: [
      {
        n: "22",
        name: "Cloud Security Posture Management (CSPM)",
        desc: "Auditoría y monitoreo continuo en AWS, Azure y GCP: buckets públicos, IAM sobreinventado y secrets expuestos. La mayoría de las brechas cloud son configuración.",
      },
      {
        n: "23",
        name: "Container Security (Docker / Kubernetes)",
        desc: "Análisis de imágenes Docker, configuración de clusters, RBAC y network policies, integrado al pipeline CI/CD.",
      },
      {
        n: "24",
        name: "Cloud IAM Deep Review",
        desc: "Roles sobrepermisionados, credenciales sin uso y privilege escalation paths. Remediación con principio de mínimo privilegio.",
      },
      {
        n: "25",
        name: "DevSecOps Integration",
        desc: "SAST automatizado en CI/CD, detección de secrets en commits, dependency scanning y security gates en pull requests.",
      },
      {
        n: "26",
        name: "Secrets & Credential Detection en Repositorios",
        desc: "Escaneo de GitHub/GitLab/Bitbucket por credenciales expuestas, histórico completo de commits y protocolo de rotación inmediata.",
      },
    ],
  },
  {
    title: "Application Security",
    services: [
      {
        n: "27",
        name: "SAST Continuo",
        desc: "Análisis estático integrado en CI/CD con detección automática en cada commit y revisión manual de falsos positivos.",
      },
      {
        n: "28",
        name: "DAST Continuo",
        desc: "Testing dinámico continuo en staging/pre-producción, detección de vulnerabilidades en runtime que el SAST no ve.",
      },
      {
        n: "29",
        name: "SCA — Software Composition Analysis",
        desc: "Monitoreo continuo de dependencias de terceros: CVEs en librerías open source y riesgos de cadena de suministro.",
      },
      {
        n: "30",
        name: "Secure SDLC Consulting",
        desc: "Threat modeling, security requirements, secure design review y programa de security champions.",
      },
    ],
  },
  {
    title: "Servicios de Inteligencia",
    services: [
      {
        n: "31",
        name: "Executive / VIP Cyber Protection",
        desc: "Protección digital para perfiles de alta exposición: monitoreo de amenazas personales, auditoría de dispositivos y OPSEC training.",
      },
      {
        n: "32",
        name: "Cyber Threat Intelligence (CTI) Reports",
        desc: "Reportes mensuales por sector: vulnerabilidades críticas, actores de amenaza activos en LATAM e IoCs accionables.",
      },
      {
        n: "33",
        name: "M&A Cyber Due Diligence",
        desc: "Evaluación de postura de seguridad de una empresa target en un proceso de fusión o adquisición: deuda técnica y compliance gaps.",
      },
      {
        n: "34",
        name: "Cyber Insurance Support",
        desc: "Assessment previo a la contratación de un seguro cibernético y soporte técnico durante una reclamación.",
      },
    ],
  },
  {
    title: "Industrial & IoT Security",
    services: [
      {
        n: "35",
        name: "OT/ICS/SCADA Security Assessment",
        desc: "Segmentación IT/OT, sistemas legacy expuestos y vulnerabilidades en protocolos industriales (Modbus, DNP3, Profinet).",
      },
      {
        n: "36",
        name: "IoT Security Assessment",
        desc: "Cámaras, dispositivos médicos y sensores industriales: análisis de firmware, comunicaciones cifradas y mecanismos de actualización.",
      },
    ],
  },
  {
    title: "IA & Tecnología Emergente",
    badge: "NUEVO",
    services: [
      {
        n: "37",
        name: "AI Red Teaming (LLM Security)",
        desc: "Prompt injection, jailbreaks, data leakage, model inversion, RAG poisoning y agent hijacking. Metodología OWASP LLM Top 10.",
      },
      {
        n: "38",
        name: "AI Governance & Security Program",
        desc: "Framework de seguridad para adopción empresarial de IA: políticas de uso, clasificación de datos y auditoría de proveedores.",
      },
      {
        n: "39",
        name: "Deepfake Detection & Prevention",
        desc: "Detección forense de deepfakes de ejecutivos en video y audio, y protocolo de verificación out-of-band para transacciones.",
      },
      {
        n: "40",
        name: "LLM Data Leakage Assessment",
        desc: "Cuánta información sensible llega a APIs de IA externas, con políticas de uso y clasificación de qué puede procesarse fuera de la organización.",
      },
    ],
  },
  {
    title: "Web3 & Blockchain Security",
    badge: "NUEVO",
    services: [
      {
        n: "41",
        name: "Smart Contract Security Audit (Solidity)",
        desc: "Reentrancy, integer overflow/underflow, access control failures, front-running y oracle manipulation. Reporte con severidad y PoC.",
      },
      {
        n: "42",
        name: "Smart Contract Security Audit (Rust / Solana)",
        desc: "Arithmetic errors, account validation, signer checks y ownership checks para programas en el ecosistema Solana.",
      },
      {
        n: "43",
        name: "Blockchain Forensics & Crypto Tracing",
        desc: "Rastreo de flujos de criptomonedas vinculados a lavado de activos y fraude. Reporte admisible como prueba judicial.",
      },
      {
        n: "44",
        name: "DeFi Protocol Security Review",
        desc: "Tokenomics, mecanismos de liquidez, resistencia a flash loans y vulnerabilidades del modelo económico.",
      },
    ],
  },
  {
    title: "Zero Trust & Arquitectura",
    services: [
      {
        n: "45",
        name: "Zero Trust Architecture Assessment",
        desc: "Madurez del modelo de acceso contra NIST SP 800-207 en cinco pilares. Roadmap de implementación priorizado por riesgo.",
      },
      {
        n: "46",
        name: "Network Microsegmentation",
        desc: "Segmentación por workload y políticas de tráfico este-oeste para reducir el radio de explosión de un incidente.",
      },
      {
        n: "47",
        name: "Privileged Access Management (PAM)",
        desc: "Vault de credenciales, acceso just-in-time, grabación de sesiones y alertas de uso anómalo.",
      },
    ],
  },
  {
    title: "Gobierno y Defensa",
    badge: "GOV",
    services: [
      {
        n: "48",
        name: "Ciberpatrullaje para Fuerzas de Seguridad",
        desc: "Monitoreo preventivo de redes sociales abiertas, grupos públicos de Telegram y dark web. NLP en español rioplatense sobre fuentes abiertas.",
      },
      {
        n: "49",
        name: "OSINT Pre-operativo",
        desc: "Análisis OSINT de un objetivo previo a un operativo: red de contactos y señales relevantes en fuentes públicas, sin interceptación.",
      },
      {
        n: "50",
        name: "Forensia Digital para Sede Judicial",
        desc: "Análisis de dispositivos incautados, recuperación de mensajes borrados y dictamen pericial admisible ante la Justicia.",
      },
      {
        n: "51",
        name: "Inteligencia Electoral & Protección de Candidatos",
        desc: "Monitoreo de desinformación sobre el candidato, detección de deepfakes y OPSEC digital del entorno de campaña.",
      },
      {
        n: "52",
        name: "Auditoría de Sistemas de Alerta y Emergencia",
        desc: "Ciberseguridad para sistemas de monitoreo de emergencias, con módulos de IA para predicción de propagación de incendios y visión computacional sobre imágenes satelitales.",
      },
      {
        n: "53",
        name: "Inteligencia Criminal Aumentada",
        desc: "ATLAS SENTINEL potenciado para organismos de investigación criminal: análisis de blockchain, graph analytics sobre redes criminales y síntesis de inteligencia con IA.",
      },
    ],
  },
  {
    title: "Managed Services",
    services: [
      {
        n: "54",
        name: "Managed Detection & Response (MDR) completo",
        desc: "Servicio gestionado end-to-end: SIEM, EDR, threat hunting y respuesta a incidentes, sin que el cliente necesite equipo propio.",
      },
      {
        n: "55",
        name: "Managed SIEM (Wazuh/Elastic gestionado)",
        desc: "Despliegue, mantenimiento y operación del SIEM del cliente, con reglas custom y tuning continuo.",
      },
      {
        n: "56",
        name: "Managed Vulnerability Scanning",
        desc: "Escaneo semanal de vulnerabilidades, priorización automática y reporte mensual ejecutivo.",
      },
      {
        n: "57",
        name: "vCISO — Virtual CISO",
        desc: "Estrategia de seguridad, gestión de riesgos y relación con el directorio, sin el costo de un CISO full-time.",
      },
      {
        n: "58",
        name: "Managed Phishing Simulation & Training",
        desc: "Campañas de phishing simuladas mensuales, métricas de mejora y reporte de riesgo humano.",
      },
      {
        n: "59",
        name: "Security Awareness Training Platform",
        desc: "Capacitación en seguridad para empleados con módulos mensuales, gamificación y reporte de cumplimiento regulatorio.",
      },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      width="16"
      height="16"
      className="practice-chevron"
      style={{ transform: open ? "rotate(180deg)" : "none" }}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PracticeGroup({ practice, defaultOpen }: { practice: Practice; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = `practice-${practice.title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Reveal className="practice-group">
      <button
        type="button"
        className="practice-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <span className="practice-header-left">
          <span className="practice-title">{practice.title}</span>
          {practice.badge ? <span className="svc-new">{practice.badge}</span> : null}
          <span className="practice-count">{practice.services.length} servicios</span>
        </span>
        <ChevronIcon open={open} />
      </button>
      {open ? (
        <div id={bodyId} className="svc-list">
          {practice.services.map((s) => (
            <div className="svc" key={s.n}>
              <span className="svc-n">{s.n}</span>
              <div className="svc-body">
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
              </div>
              <div className="svc-price">Cotización a medida</div>
            </div>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="inner">
        <Reveal className="services-top">
          <div>
            <div className="s-label">Servicios</div>
            <h2 className="s-title">Trece prácticas. Un solo proveedor.</h2>
          </div>
          <p>
            De la seguridad ofensiva a la inteligencia de amenazas, pasando por cumplimiento
            regulatorio, cloud, IA y contextos de gobierno. Portfolio completo, sin subcontratar.
          </p>
        </Reveal>
        <div className="practice-list">
          {practices.map((p, i) => (
            <PracticeGroup key={p.title} practice={p} defaultOpen={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
