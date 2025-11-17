"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--arp-main-bg)",       // FIXED — now theme controlled
        transition: "background 0.3s ease",
      }}
    >
      {/* SIDEBAR */}
      <div style={{ width: "250px", flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* MAIN PANEL */}
      <div style={{ flex: 1 }}>
        <Navbar />
        <div
          style={{
            padding: "32px",
            minHeight: "calc(100vh - 64px)",
            background: "transparent",          // FIXED — NO DARK OVERLAY
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

