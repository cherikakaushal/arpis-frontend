"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiHomeSmile2Line,
  RiHistoryLine,
  RiBook2Line,
} from "react-icons/ri";
import {
  FiUploadCloud,
  FiGlobe,
  FiX,
  FiLayers,
  FiGitBranch,
  FiCpu,
  FiTerminal,
  FiBookmark,
} from "react-icons/fi";

import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", icon: RiHomeSmile2Line },
  { href: "/upload", label: "Upload", icon: FiUploadCloud },
  { href: "/fetch", label: "Paste URL", icon: FiGlobe },
  { href: "/history", label: "History", icon: RiHistoryLine },
];

const toolItems = [
  { href: "/compare", label: "Compare Papers", icon: FiLayers },
  { href: "/graph", label: "Citation Graph", icon: FiGitBranch },
  { href: "/pdf-heatmap", label: "PDF Heatmap", icon: FiCpu },
  { href: "/workspace", label: "Workspace", icon: FiBookmark },
  { href: "/terminal", label: "Terminal", icon: FiTerminal },
  { href: "/research-chat", label: "Research Chat", icon: RiBook2Line },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  // Mobile breakpoint detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 800);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Listen for navbar hamburger event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("arpis-open-menu", handler);
    return () => window.removeEventListener("arpis-open-menu", handler);
  }, []);

  // Sidebar closed on mobile
  if (isMobile && !open) return null;

  return (
   <aside
  className="arpis-sidebar w3-animate-left"
  style={{
    position: isMobile ? "fixed" : "sticky",
    top: 0,
    left: 0,
    height: "100vh",
    width: isMobile ? "260px" : "100%",
    zIndex: 60,
    background: "var(--arp-bg-alt)",
    borderRight: "1px solid var(--arp-border-subtle)",
    padding: "22px 18px",
    boxShadow: isMobile ? "4px 0 20px rgba(0,0,0,0.35)" : "none",
    overflowY: "auto",     // 🟢 Fix vertical scroll
    overflowX: "hidden",   // 🟢 Prevent sideways scroll
  }}
>

      {/* MOBILE CLOSE BUTTON */}
      {isMobile && (
        <div
          style={{
            textAlign: "right",
            marginBottom: "10px",
          }}
        >
          <FiX
            size={26}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {/* LOGO BLOCK */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        {/* ORB */}
        <div
          style={{
            position: "relative",
            width: "52px",
            height: "52px",
            flexShrink: 0,
          }}
        >
          {/* inner particle */}
          <div
            className="arpis-orb-core"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "white",
              opacity: 0.85,
              filter: "blur(1px)",
              animation: "arpis-pulse 2.6s ease-in-out infinite",
              zIndex: 3,
            }}
          ></div>

          {/* glowing orb */}
          <div
            className="arpis-orb-glow"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #66faff, #00d0ff 40%, #0077ff 70%, #001a33)",
              animation:
                "arpis-breathe 3s ease-in-out infinite, arpis-rotate 20s linear infinite",
              position: "absolute",
              inset: 0,
              zIndex: 2,
            }}
          ></div>

          {/* halo */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              boxShadow: "0 0 28px rgba(0,255,255,0.8)",
              filter: "blur(2px)",
              zIndex: 1,
            }}
          ></div>
        </div>

        {!isMobile && (
          <div style={{ lineHeight: "1.1" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              ARPIS
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                opacity: 0.65,
                letterSpacing: "0.12em",
              }}
            >
              RESEARCH
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION LABEL */}
      <div
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          opacity: 0.5,
          marginBottom: "12px",
          letterSpacing: "0.07em",
        }}
      >
        Navigation
      </div>

      {/* MAIN NAV LINKS */}
      <nav>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && setOpen(false)}
              className="arpis-nav-link"
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: 1,
                gap: "14px",
                padding: "12px 14px",
                borderRadius: "12px",
                marginBottom: "8px",
                background: isActive
                  ? "rgba(36, 227, 255, 0.18)"
                  : "transparent",
                color: isActive
                  ? "var(--arp-accent)"
                  : "var(--arp-text-main)",
                fontWeight: isActive ? 600 : 480,
                transition: "0.2s",
                cursor: "pointer",
              }}
            >
              <Icon size={21} />
              {!isMobile && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* TOOLS LABEL */}
      <div
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          opacity: 0.5,
          marginTop: "26px",
          marginBottom: "12px",
          letterSpacing: "0.07em",
        }}
      >
        Tools
      </div>

      {/* TOOL LINKS */}
      <nav>
        {toolItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "12px 14px",
                borderRadius: "12px",
                marginBottom: "8px",
                background: active
                  ? "rgba(36, 227, 255, 0.18)"
                  : "transparent",
                color: active
                  ? "var(--arp-accent)"
                  : "var(--arp-text-main)",
                fontWeight: active ? 600 : 480,
                transition: "0.2s",
                cursor: "pointer",
              }}
              className="arpis-nav-link"
            >
              <Icon size={21} />
              {!isMobile && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
