"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
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

  const isCurrent = (href: string) => !href.includes("#") && pathname === href;

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link
        href="/"
        className="nav-left"
        aria-label="ATLAS SAFE — inicio"
        onClick={() => setMenuOpen(false)}
      >
        <Image src="/logo.png" alt="" width={28} height={28} className="nav-mark" priority />
        <span className="nav-wordmark">ATLAS SAFE</span>
        <span className="nav-divider" />
        <span className="nav-corp">ATLAS CORP</span>
      </Link>

      <div className="nav-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isCurrent(link.href) ? "page" : undefined}
            className={isCurrent(link.href) ? "is-current" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="nav-right">
        <Link href="/#contact" className="nav-cta">
          Solicitar diagnóstico <span aria-hidden="true">→</span>
        </Link>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Solicitar diagnóstico <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
