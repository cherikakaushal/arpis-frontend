"use client";

import { useEffect, useState } from "react";
import AIQueryBox from "@/components/qa/AIQueryBox";

export default function ResultsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/mock-analyze")
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        // ---------- SAVE TO HISTORY ----------
        const saved = JSON.parse(localStorage.getItem("arpis_history") || "[]");

        saved.unshift({
          title: json.title,
          summary: json.two_line_summary,
          date: new Date().toISOString(),
        });

        localStorage.setItem("arpis_history", JSON.stringify(saved));
      });
  }, []);

  // --------------- LOADING STATE ---------------
  if (!data) {
    return (
      <div className="w3-center w3-animate-opacity" style={{ paddingTop: "50px" }}>
        <p style={{ fontSize: "1.2rem", color: "var(--arp-text-muted)" }}>
          Loading analysis results…
        </p>
      </div>
    );
  }

  // --------------- MAIN RESULTS UI ---------------
  return (
    <div className="w3-animate-opacity" style={{ display: "grid", gap: "24px" }}>
      
      {/* PAPER TITLE */}
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        {data.title}
      </h1>

      {/* AI SEARCH BOX */}
      <AIQueryBox paper={data} />
      {/* ACTION BUTTONS */}
<div style={{
  display: "flex",
  gap: "14px",
  marginTop: "4px",
  marginBottom: "18px"
}}>
  <a
    href="/compare"
    className="w3-button w3-round-large"
    style={{
      background: "var(--arp-accent)",
      color: "#000",
      padding: "10px 20px",
      fontWeight: 600
    }}
  >
    🔍 Compare Papers
  </a>

<a
  href="/graph"
  className="w3-button w3-round-large"
  style={{
    background: "var(--arp-purple)",
    color: "var(--arp-text-main)",   // theme-aware text color
    padding: "10px 20px",
    fontWeight: 600,
    border: "1px solid var(--arp-border-subtle)",
  }}
>
  🧠 Citation Graph
</a>

</div>


      {/* EXECUTIVE SUMMARY */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 className="arpis-section-title">Executive Summary</h3>
        <p style={{ opacity: 0.8 }}>{data.two_line_summary}</p>
      </div>

      {/* STRUCTURED OVERVIEW */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "15px" }}>Structured Overview</h3>
        <ul style={{ opacity: 0.85, lineHeight: "1.55rem", paddingLeft: "18px" }}>
          {data.ten_line_summary.map((line: string, i: number) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* KEY FINDINGS */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "15px" }}>Key Findings</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {data.key_findings.map((point: string, i: number) => (
            <div
              key={i}
              style={{
                padding: "16px",
                borderLeft: "3px solid var(--arp-accent)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                lineHeight: "1.4rem",
              }}
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* METHODOLOGY */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "10px" }}>Methodology</h3>
        <ul style={{ opacity: 0.85, paddingLeft: "18px" }}>
          {data.methodology.map((m: string, i: number) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* LIMITATIONS */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "10px" }}>Limitations</h3>
        <ul style={{ opacity: 0.85, paddingLeft: "18px" }}>
          {data.limitations.map((m: string, i: number) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* FUTURE SCOPE */}
      <div className="arpis-glass-card" style={{ padding: "22px" }}>
        <h3 style={{ marginBottom: "10px" }}>Future Scope</h3>
        <ul style={{ opacity: 0.85, paddingLeft: "18px" }}>
          {data.future_scope.map((m: string, i: number) => (
            <li key={i} style={{ marginBottom: "6px" }}>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* DOWNLOAD BUTTON */}
      <button
        className="w3-button w3-round-large"
        style={{
          marginTop: "20px",
          background: "var(--arp-accent)",
          color: "#000",
          padding: "12px 26px",
          fontWeight: 600,
          fontSize: "1rem",
          width: "fit-content",
        }}
        onClick={() => alert("PDF Export will be added after backend integration.")}
      >
        Download Full Report (PDF)
      </button>
    </div>
  );
}
