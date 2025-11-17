// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import "../styles/theme.css";

import { Inter } from "next/font/google";
import ParticleField from "@/components/layout/ParticleField";
import AppShell from "@/components/layout/AppShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// ---------- METADATA (with favicon) ----------
export const metadata: Metadata = {
  title: "ARPIS — AI Research Paper Intelligence System",
  description:
    "ARPIS is a futuristic AI-powered system for analyzing and summarizing research papers with scientific precision.",
  icons: {
    icon: "/favicon.png", // ensure you place favicon.png in /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<head>
  <link
    rel="stylesheet"
    href="https://www.w3schools.com/w3css/4/w3.css"
  />

  {/* FORCE NEW FAVICON */}
  <link rel="shortcut icon" href="/favicon.ico?v=10" />
  <link rel="icon" type="image/png" href="/favicon.png?v=10" />
  <link rel="apple-touch-icon" href="/favicon.png?v=10" />
</head>


      <body className={inter.className}>
        {/* PARTICLE BACKGROUND */}
        <ParticleField />

        {/* APP SHELL (Sidebar + Navbar + Content) */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
