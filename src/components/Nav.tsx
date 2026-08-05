import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background hover:bg-accent-soft transition-colors"
        >
          Agendar diagnóstico
        </Link>
      </div>
    </header>
  );
}
