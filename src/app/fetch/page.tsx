"use client";

import { useState } from "react";

type MockAnalysis = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  field: string;
  arpisScore: number;
  keyFindings: string[];
  methodology: string;
  limitations: string;
  futureScope: string;
};

export default function FetchPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<MockAnalysis | null>(null);

  const handleAnalyze = () => {
    if (!url.trim()) return;

    setLoading(true);
    setAnalysis(null);

    setTimeout(() => {
      setAnalysis({
        title:
          "Self-Supervised Quantum Graph Transformers for Large-Scale Science",
        authors: "Doe et al.",
        venue: "NeurIPS (mock)",
        year: "2025",
        abstract:
          "We propose ARPIS-QGT, a self-supervised transformer architecture designed to model citation graphs and experimental logs at CERN scale...",
        field: "AI / ML",
        arpisScore: 0.93,
        keyFindings: [
          "Improves simulated benchmark accuracy by ~18% over baselines.",
          "Generalizes across scientific domains.",
          "Enables real-time citation exploration in ARPIS.",
        ],
        methodology:
          "Graph transformer with contrastive pre-training (mock).",
        limitations:
          "Evaluated only on synthetic subsets; lacks real CERN datasets.",
        futureScope:
          "Integrate with detector streams & multi-modal metadata (mock).",
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "1.6rem", marginBottom: "6px" }}>
        Paste Research URL
      </h2>

      <p style={{ opacity: 0.6, marginBottom: "22px" }}>
        Drop any Google Scholar / arXiv / PubMed / IEEE link. ARPIS will mock-fetch the
        metadata and generate a CERN-style analysis.
      </p>

      {/* INPUT ROW */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://arxiv.org/abs/XXXX.XXXXX"
          style={{
            flex: 1,
            padding: "14px 16px",
            borderRadius: "12px",
            background: "var(--arp-surface)",
            border: "1px solid var(--arp-border-subtle)",
            color: "var(--arp-text-main)",
            backdropFilter: "blur(14px)",
          }}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          style={{
            padding: "14px 20px",
            borderRadius: "12px",
            background: loading ? "gray" : "var(--arp-accent)",
            color: "#000",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          {loading ? "Analyzing…" : "Analyze URL with ARPIS"}
        </button>
      </div>

      {/* LOADING ANIMATION */}
      {loading && (
        <div
          style={{
            padding: "18px",
            background: "var(--arp-surface)",
            borderRadius: "14px",
            border: "1px solid var(--arp-border-subtle)",
            marginBottom: "20px",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              height: "6px",
              width: "100%",
              background:
                "linear-gradient(90deg, transparent, var(--arp-accent), transparent)",
              borderRadius: "6px",
              animation: "scan 1.1s infinite linear",
              marginBottom: "12px",
            }}
          ></div>

          <p style={{ opacity: 0.7 }}>Scanning metadata… extracting abstract…</p>
        </div>
      )}

      {/* RESULTS PANEL */}
      {analysis && (
        <div
          style={{
            padding: "24px",
            background: "var(--arp-surface)",
            borderRadius: "16px",
            border: "1px solid var(--arp-border-subtle)",
            marginTop: "10px",
            backdropFilter: "blur(16px)",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div style={{ fontSize: "0.8rem", color: "var(--arp-accent)" }}>
            Mock Analysis
          </div>

          <h3 style={{ margin: "6px 0 4px" }}>{analysis.title}</h3>

          <div style={{ opacity: 0.5, marginBottom: "14px" }}>
            {analysis.authors} · {analysis.venue} · {analysis.year}
          </div>

          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "8px",
              background: "var(--arp-bg-alt)",
              border: "1px solid var(--arp-border-subtle)",
              marginBottom: "10px",
              fontSize: "0.85rem",
            }}
          >
            Field: {analysis.field}
          </span>

          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "8px",
              background: "var(--arp-bg-alt)",
              border: "1px solid var(--arp-border-subtle)",
              marginLeft: "8px",
              fontSize: "0.85rem",
            }}
          >
            ARPIS Score: {(analysis.arpisScore * 100).toFixed(1)}%
          </span>

          <h4 style={{ marginTop: "16px", opacity: 0.7 }}>Abstract</h4>
          <p style={{ lineHeight: 1.5 }}>{analysis.abstract}</p>

          <h4 style={{ marginTop: "18px", opacity: 0.7 }}>Key Findings</h4>
          <ul style={{ paddingLeft: "20px" }}>
            {analysis.keyFindings.map((k) => (
              <li key={k} style={{ marginBottom: "6px" }}>
                {k}
              </li>
            ))}
          </ul>

          <h4 style={{ marginTop: "18px", opacity: 0.7 }}>Methodology</h4>
          <p>{analysis.methodology}</p>

          <h4 style={{ marginTop: "18px", opacity: 0.7 }}>Limitations</h4>
          <p>{analysis.limitations}</p>

          <h4 style={{ marginTop: "18px", opacity: 0.7 }}>Future Scope</h4>
          <p>{analysis.futureScope}</p>
        </div>
      )}
    </div>
  );
}
