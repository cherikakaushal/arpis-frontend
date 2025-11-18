"use client";

import { useState } from "react";
import styles from "./heatmap.module.css";

const sampleText = [
  { text: "Quantum entanglement is a key property for NISQ devices.", score: 0.92 },
  { text: "Noise reduces circuit fidelity over time.", score: 0.70 },
  { text: "Hybrid variational training stabilizes optimization.", score: 0.55 },
  { text: "Gate pruning can improve energy efficiency.", score: 0.38 },
  { text: "Future work explores multi-qubit error correction.", score: 0.18 },
];

export default function PDFHeatmapPage() {
  const [heatmap, setHeatmap] = useState(true);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const getColor = (score: number) => {
    if (score > 0.8) return "var(--arp-heat-high)";
    if (score > 0.5) return "var(--arp-heat-mid)";
    return "var(--arp-heat-low)";
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>PDF Heatmap (Mock)</h2>
      <p className={styles.subtitle}>
        ARPIS highlights the most important sentences detected by the model (mocked).
      </p>

      <div className={styles.toggleRow}>
        <button
          className={heatmap ? styles.toggleActive : styles.toggle}
          onClick={() => setHeatmap(true)}
        >
          Heatmap Mode
        </button>

        <button
          className={!heatmap ? styles.toggleActive : styles.toggle}
          onClick={() => setHeatmap(false)}
        >
          Normal Mode
        </button>
      </div>

      <div className={styles.viewer}>
        {/* Sidebar thumbnails */}
        <div className={styles.sidebar}>
          <div className={styles.thumb}>1</div>
          <div className={styles.thumb}>2</div>
          <div className={styles.thumb}>3</div>
        </div>

        {/* Main PDF mock viewer */}
        <div className={styles.pdfPane}>
          {sampleText.map((line, i) => (
            <div
              key={i}
              className={styles.line}
              style={{
                background: heatmap ? getColor(line.score) : "transparent",
              }}
              onMouseEnter={() =>
                setHoverText(
                  `ARPIS highlighted this because importance score = ${
                    line.score * 100
                  }% (mock)`
                )
              }
              onMouseLeave={() => setHoverText(null)}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {hoverText && <div className={styles.tooltip}>{hoverText}</div>}
      </div>
    </div>
  );
}
