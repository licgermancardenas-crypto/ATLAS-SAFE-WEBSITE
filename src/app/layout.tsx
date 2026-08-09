import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/data/site";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.slogan} | Ciberseguridad e Inteligencia`,
    template: `%s — ${site.name}`,
  },
  description:
    "ATLAS SAFE detecta, contiene y elimina amenazas digitales antes de que se conviertan en incidentes. Seguridad ofensiva, SOC 24/7, compliance regulatorio, respuesta a incidentes e inteligencia de amenazas.",
  applicationName: site.name,
  authors: [{ name: site.parent }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description:
      "Ciberseguridad e inteligencia de amenazas. 59 servicios en 13 prácticas, de la seguridad ofensiva al cumplimiento regulatorio.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.r { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <Nav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
