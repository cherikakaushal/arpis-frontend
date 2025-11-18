"use client";

import { useEffect, useState } from "react";

const lines = [
  "> arpis analyze collider_paper.pdf",
  "• loading PDF…",
  "• extracting abstract and sections…",
  "• building citation graph (1,942 nodes)…",
  "• generating 4,096-dim embeddings…",
  "• estimating novelty and gap score…",
  "DONE ✓  — ARPIS summary ready in 1.2s (mock)",
];

export default function TerminalPage() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount >= lines.length) return;

    const id = setTimeout(() => setVisibleCount((c) => c + 1), 700);
    return () => clearTimeout(id);
  }, [visibleCount]);

  return (
    <div className="w3-padding-large w3-animate-opacity">
      <h2
        style={{
          fontSize: "1.6rem",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        ARPIS Terminal
      </h2>

      <p style={{ opacity: 0.7, marginBottom: "18px" }}>
        Prototype of a command-line interface for high-energy research workflows.
      </p>

      {/* TERMINAL BLOCK */}
      <div
        className="arpis-terminal-block"
        style={{
          background: "rgba(0,0,0,0.6)",
          borderRadius: "14px",
          padding: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          fontFamily: "Consolas, monospace",
          fontSize: "0.95rem",
          color: "var(--arp-text-main)",
          boxShadow: "0 0 18px rgba(0,255,255,0.05)",
        }}
      >
        {lines.slice(0, visibleCount).map((l, i) => (
          <div
            key={i}
            style={{
              marginBottom: "6px",
              animation: "fadeIn 0.2s ease",
              whiteSpace: "pre-wrap",
            }}
          >
            {l}
          </div>
        ))}

        {/* blinking cursor */}
        {visibleCount < lines.length && (
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "18px",
              background: "var(--arp-accent)",
              marginTop: "6px",
              animation: "blink 0.8s infinite",
            }}
          />
        )}
      </div>
    </div>
  );
}
