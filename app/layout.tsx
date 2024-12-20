import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuração de fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadados do site
export const metadata: Metadata = {
  title: "RescueEnergy",
  description: "Explorando soluções sustentáveis com RescueEnergy e Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ícone do site */}
        <link rel="icon" href="/img/ImgRescueEnergy.jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100`}
      >
        {/* Conteúdo principal */}
        {children}
      </body>
    </html>
  );
}
