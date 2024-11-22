import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importação e configuração das fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Adicionado para melhorar o carregamento de fontes
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Adicionado para consistência
});

// Definição dos metadados do site
export const metadata: Metadata = {
  title: "RescueEnergy - Energia Sustentável",
  description: "Transformando movimento em energia sustentável.",
};

// Layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadados para SEO e fontes */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
