import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATLAS SAFE — Pentest, SOC 24/7 y Cumplimiento | Ciberseguridad Argentina",
  description:
    "La defensa cibernética que su empresa todavía no contrató. Pentest, SOC 24/7, cumplimiento regulatorio (BCRA, PCI-DSS, ISO 27001) y respuesta a incidentes. Equipo argentino, pricing dolarizado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
