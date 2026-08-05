"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const sectorOptions = [
  "Fintech / Banco",
  "Salud / Prepaga",
  "Municipio / Gobierno",
  "Fuerza de Seguridad",
  "Poder Judicial",
  "Retail / E-commerce",
  "Estudio Jurídico",
  "Agroindustria",
  "Tecnología",
  "Otro",
];

const serviceOptions = [
  "Diagnóstico OSINT",
  "Pentest / Red Team",
  "SOC as a Service",
  "Compliance BCRA / PCI",
  "Respuesta a incidente activo",
  "ATLAS SENTINEL",
  "Ciberpatrullaje",
  "AI Red Teaming",
  "Otro",
];

const CONTACT_EMAIL = "contacto@atlassafe.com.ar";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
      <path d="M12 21s7-6.1 7-11.6A7 7 0 0 0 5 9.4C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.4" r="2.4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5 12 13l7.5-6.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
      <rect x="5.5" y="10.5" width="13" height="9" rx="1.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </svg>
  );
}

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "");
    const empresa = String(data.get("empresa") || "");
    const email = String(data.get("email") || "");
    const sector = String(data.get("sector") || "");
    const servicio = String(data.get("servicio") || "");
    const contexto = String(data.get("contexto") || "");

    setStatus("sending");

    const body = [
      `Nombre: ${nombre}`,
      empresa ? `Empresa: ${empresa}` : null,
      `Email: ${email}`,
      sector ? `Sector: ${sector}` : null,
      servicio ? `Servicio: ${servicio}` : null,
      contexto ? `Contexto: ${contexto}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Solicitud de diagnóstico — " + nombre,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    }, 900);
  };

  return (
    <section className="section contact" id="contact">
      <div className="inner">
        <div className="contact-layout">
          <Reveal>
            <div className="s-label">Empezá hoy</div>
            <h2
              className="s-title"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(38px,4.5vw,60px)",
                fontWeight: 300,
                lineHeight: 1.06,
                letterSpacing: "-.02em",
              }}
            >
              Tu exposición
              <br />
              en 30 minutos.
              <br />
              <em>A medida.</em>
            </h2>
            <p className="contact-desc">
              Analizamos tu superficie de ataque con datos públicos y te mostramos hallazgos
              reales en 30 minutos. Sin acceso a tus sistemas.
            </p>
            <div className="contact-points">
              <div className="cp-row">
                <div className="cp-icon">
                  <PinIcon />
                </div>
                Buenos Aires, CABA — República Argentina
              </div>
              <div className="cp-row">
                <div className="cp-icon">
                  <MailIcon />
                </div>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
              <div className="cp-row">
                <div className="cp-icon">
                  <ClockIcon />
                </div>
                Respuesta en menos de 4 horas en días hábiles
              </div>
              <div className="cp-row">
                <div className="cp-icon">
                  <LockIcon />
                </div>
                Toda comunicación cubierta por NDA desde el primer contacto
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className="cform" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-group">
                  <label className="cf-label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    className="cf-input"
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                <div className="cf-group">
                  <label className="cf-label" htmlFor="empresa">
                    Empresa
                  </label>
                  <input
                    className="cf-input"
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Organización"
                  />
                </div>
              </div>
              <div className="cf-group">
                <label className="cf-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="cf-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@empresa.com"
                  required
                />
              </div>
              <div className="cf-row">
                <div className="cf-group">
                  <label className="cf-label" htmlFor="sector">
                    Sector
                  </label>
                  <select className="cf-select cf-input" id="sector" name="sector" defaultValue="">
                    <option value="">Seleccioná</option>
                    {sectorOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="cf-group">
                  <label className="cf-label" htmlFor="servicio">
                    Servicio
                  </label>
                  <select className="cf-select cf-input" id="servicio" name="servicio" defaultValue="">
                    <option value="">Qué necesitás</option>
                    {serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="cf-group">
                <label className="cf-label" htmlFor="contexto">
                  Contexto (opcional)
                </label>
                <textarea
                  className="cf-textarea"
                  id="contexto"
                  name="contexto"
                  placeholder="Contanos brevemente tu situación actual..."
                />
              </div>
              <button type="submit" className="cf-submit" disabled={status !== "idle"}>
                {status === "idle" && "Solicitar diagnóstico →"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "✓ Recibido — te contactamos en menos de 4 horas"}
              </button>
              <p className="cf-note">Sin spam · Sin compromisos · Todo bajo NDA</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
