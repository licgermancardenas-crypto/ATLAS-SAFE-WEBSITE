import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src="/logo.png" alt="" width={28} height={28} className="nav-mark" />
        ATLAS SAFE
      </div>
      <div className="footer-links">
        <a href="#services">Servicios</a>
        <a href="#sentinel">ATLAS SENTINEL</a>
        <a href="#incidents">Incidentes</a>
        <a href="#clients">Clientes</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="footer-copy">© 2026 ATLAS SAFE — ATLAS CORP · Buenos Aires, Argentina</div>
    </footer>
  );
}
