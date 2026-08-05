"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-foreground cursor-pointer transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-5 w-5"
        >
          {open ? (
            <path d="M6 6 L18 18 M18 6 L6 18" />
          ) : (
            <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto border-t border-border-subtle bg-background"
        >
          <nav className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-base text-foreground transition-colors hover:bg-background-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-accent px-4 py-3 text-center text-sm font-medium text-background transition-colors hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Agendar diagnóstico
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
