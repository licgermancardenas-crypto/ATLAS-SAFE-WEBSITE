import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <Logo />
        <p className="tracking-wide">
          PROTECCIÓN · INTELIGENCIA · DOMINIO
        </p>
        <p>ATLAS SAFE · división ciberseguridad de ATLAS CORP · 2026</p>
      </div>
    </footer>
  );
}
