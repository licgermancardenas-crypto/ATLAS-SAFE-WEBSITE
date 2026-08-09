export type NavLink = { href: string; label: string };

/**
 * Root-relative hrefs so the same links work from every route, not just "/".
 */
export const navLinks: NavLink[] = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sentinel", label: "ATLAS SENTINEL" },
  { href: "/#incidents", label: "Por qué ahora" },
  { href: "/#clients", label: "Clientes" },
  { href: "/#contact", label: "Contacto" },
];

export const footerLinks: NavLink[] = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sentinel", label: "ATLAS SENTINEL" },
  { href: "/#incidents", label: "Incidentes" },
  { href: "/#clients", label: "Clientes" },
  { href: "/#contact", label: "Contacto" },
];

export const site = {
  name: "ATLAS SAFE",
  parent: "ATLAS CORP",
  slogan: "La inteligencia detrás de cada defensa.",
  location: "Buenos Aires, Argentina",
  url: "https://atlassafe.com.ar",
} as const;
