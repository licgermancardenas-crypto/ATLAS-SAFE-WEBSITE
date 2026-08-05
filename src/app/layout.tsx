import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ATLAS SAFE — La amenaza ya está adentro | Ciberseguridad e Inteligencia",
  description:
    "ATLAS SAFE detecta, contiene y elimina amenazas digitales antes de que se conviertan en incidentes. Pentest, SOC 24/7, ATLAS SENTINEL y respuesta a incidentes. Diagnóstico OSINT en 30 minutos.",
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
        <a href="#home" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
