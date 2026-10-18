import type { Metadata } from "next";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata: Metadata = {
  title: "Ganamos & GanamosVIP | Paneles Oficiales para Agentes y Cajeros",
  description:
    "Convertite en Agente Oficial de Ganamos y GanamosVIP. Te creamos tu panel propio en el acto con las mejores promos mayoristas. Atención 24/7 por WhatsApp y Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-amber-500 selection:text-slate-950">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
