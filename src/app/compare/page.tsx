"use client";

import { useState, useEffect } from "react";
import styles from "./compare.module.css";

export default function ComparePage() {
  // Mock Papers
  const paperA = {
    title: "Quantum Entanglement Optimization in NISQ Devices",
    summary: "This paper explores methods to optimize entanglement generation in noisy intermediate-scale quantum devices...",
    keyFindings: [
      "Entanglement increases with circuit depth until noise dominates",
      "Hybrid variational circuits outperform pure quantum circuits",
      "New error-mitigation layer improves measurement fidelity",
    ],
    methodology: "Quantum circuits simulated using Qiskit with noise models from IBMQ backend...",
  };

  const paperB = {
    title: "Optimizing Quantum Circuits for Low-Noise QPUs",
    summary: "This study analyzes circuit optimization and noise-aware compilation techniques on superconducting qubit processors...",
    keyFindings: [
      "Noise-aware transpilation reduces decoherence",
      "Hybrid classical-quantum training reduces error",
      "Gate-level pruning improves circuit efficiency",
    ],
    methodology: "Experiments conducted on superconducting qubit hardware with custom-built noise profiles...",
  };

  // Similarities + Differences
  const similarities = [
    "Both focus on hybrid quantum-classical optimization",
    "Both studied noise-aware techniques for improved stability",
    "Both used quantum simulation tools + real hardware tests",
  ];

  const differences = [
    "Paper A focuses on entanglement",
    "Paper B focuses on noise-aware circuit compilation",
    "Paper A uses NISQ optimization, B uses low-noise QPU tuning",
  ];

  return (
    <div className={styles.wrapper}>
      {/* LEFT PAPER */}
      <section className={styles.column}>
        <div className={styles.card}>
          <h2>{paperA.title}</h2>
          <h4>Summary</h4>
          <p>{paperA.summary}</p>
          <h4>Key Findings</h4>
          <ul>
            {paperA.keyFindings.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
          <h4>Methodology</h4>
          <p>{paperA.methodology}</p>
        </div>
      </section>

      {/* MIDDLE COLUMN */}
      <section className={styles.middle}>
        <div className={styles.card}>
          <h3>Similarities</h3>
          <ul>
            {similarities.map((s, i) => (
              <li key={i} className={styles.similar}>
                {s}
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: "30px" }}>Differences</h3>
          <ul>
            {differences.map((d, i) => (
              <li key={i} className={styles.diff}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RIGHT PAPER */}
      <section className={styles.column}>
        <div className={styles.card}>
          <h2>{paperB.title}</h2>
          <h4>Summary</h4>
          <p>{paperB.summary}</p>
          <h4>Key Findings</h4>
          <ul>
            {paperB.keyFindings.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
          <h4>Methodology</h4>
          <p>{paperB.methodology}</p>
        </div>
      </section>
    </div>
  );
}
