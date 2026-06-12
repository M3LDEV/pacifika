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
  title: "PACIFIKA — Solutions SaaS pour les entreprises du Pacifique",
  description:
    "PACIFIKA développe des logiciels SaaS simples, modernes et connectés pour accompagner les entreprises du Pacifique dans leur gestion quotidienne.",
  keywords: [
    "PACIFIKA",
    "SaaS Pacifique",
    "logiciel gestion Nouvelle-Calédonie",
    "MEKANO",
    "gestion atelier automobile",
    "logiciels entreprises Pacifique",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "PACIFIKA — Solutions SaaS pour les entreprises du Pacifique",
    description:
      "PACIFIKA développe des logiciels SaaS simples, modernes et connectés pour accompagner les entreprises du Pacifique dans leur gestion quotidienne.",
    siteName: "PACIFIKA",
  },
  twitter: {
    card: "summary",
    title: "PACIFIKA — Solutions SaaS pour les entreprises du Pacifique",
    description:
      "PACIFIKA développe des logiciels SaaS simples, modernes et connectés pour accompagner les entreprises du Pacifique dans leur gestion quotidienne.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
