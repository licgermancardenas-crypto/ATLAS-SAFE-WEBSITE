"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#sentinel", label: "ATLAS SENTINEL" },
  { href: "#incidents", label: "Por qué ahora" },
  { href: "#clients", label: "Clientes" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-left">
        <div className="nav-mark" aria-hidden="true">
          ▲
        </div>
        <span className="nav-wordmark">ATLAS SAFE</span>
        <div className="nav-divider" />
        <span className="nav-corp">ATLAS CORP</span>
      </div>

      <div className="nav-center">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <a href="#contact" className="nav-cta">
          Solicitar diagnóstico →
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
            {menuOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Solicitar diagnóstico →
          </a>
        </div>
      ) : null}
    </nav>
  );
}
