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
  title: "Óculos | Orientação Académica com IA",
  description:
    "Plataforma inteligente de orientação académica baseada em IA que ajuda estudantes a escolher cursos, universidades e planos de estudo personalizados.",
  keywords: [
    "educação",
    "IA",
    "orientação vocacional",
    "universidade",
    "estudo",
    "carreira",
  ],
  authors: [{ name: "@CCS" }],
  creator: "@CCS",
  applicationName: "Óculos",
  openGraph: {
    title: "Óculos | IA para orientação académica",
    description:
      "Descobre o melhor caminho académico e profissional com inteligência artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
