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

// META + FAVICON
export const metadata: Metadata = {
  title: "ARPIS — AI Research Paper Intelligence System",
  description:
    "ARPIS is a futuristic AI-powered system for analyzing and summarizing research papers with scientific precision.",

  icons: {
    icon: "/favicon.png?v=10",
    shortcut: "/favicon.png?v=10",
    apple: "/favicon.png?v=10",
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
        {/* W3CSS CDN */}
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />

        {/* FAVICON OVERRIDES (SSR SAFE) */}
        <link rel="icon" href="/favicon.png?v=10" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=10" />
        <link rel="apple-touch-icon" href="/favicon.png?v=10" />
      </head>

      <body
        className={`${inter.className} arpis-root`}
        suppressHydrationWarning={true}
      >
        {/* PARTICLE BACKGROUND (CLIENT-ONLY) */}
        <ParticleField />

        {/* FULL APP LAYOUT */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
