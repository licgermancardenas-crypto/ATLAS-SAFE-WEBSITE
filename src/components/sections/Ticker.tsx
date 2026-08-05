const items = [
  { tag: "ALERTA", text: "CVE-2025-0318 · Apache crítico — parchear en 24hs" },
  { tag: "INCIDENTE", text: "Ransomware detectado en sector salud · Argentina Q1 2026" },
  { tag: "REGULACIÓN", text: "BCRA Com. A 7724 — nuevo plazo de cumplimiento Junio 2026" },
  { tag: "INTELIGENCIA", text: "Campaña APT41 activa contra organismos estatales LATAM" },
  { tag: "ESTADÍSTICA", text: "1,200M intentos de intrusión en Argentina — 13× vs 2022" },
  { tag: "ALERTA", text: "Credenciales gubernamentales AR circulando en dark web" },
  { tag: "INCIDENTE", text: "RENAPER — 65M de registros comprometidos · 2024" },
  { tag: "REGULACIÓN", text: "PCI DSS v4.0 obligatorio para procesadores de tarjetas" },
];

export function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-inner" aria-hidden="true">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="tag">{item.tag}</span> {item.text}
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {items.map((item, i) => (
          <li key={i}>
            {item.tag}: {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
