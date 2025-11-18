"use client";

import styles from "./compare.module.css";

export default function ComparePage() {
  const paperA = {
    title: "Quantum Entanglement Optimization in NISQ Devices",
    summary:
      "Explores methods to optimize entanglement generation in noisy intermediate-scale quantum devices...",
    keyFindings: [
      "Entanglement increases with circuit depth until noise dominates",
      "Hybrid variational circuits outperform pure quantum circuits",
      "Error-mitigation layer improves measurement fidelity",
    ],
  };

  const paperB = {
    title: "Optimizing Quantum Circuits for Low-Noise QPUs",
    summary:
      "Analyzes circuit optimization and noise-aware compilation techniques on superconducting qubit processors...",
    keyFindings: [
      "Noise-aware transpilation reduces decoherence",
      "Hybrid classical-quantum models reduce error",
      "Gate-level pruning improves circuit efficiency",
    ],
  };

  const similarities = [
    "Both use hybrid quantum-classical optimization",
    "Both evaluate noise-aware quantum techniques",
    "Both include simulation + hardware experiments",
  ];

  const differences = [
    "A focuses on entanglement; B on circuit compilation",
    "A targets NISQ devices; B targets low-noise QPUs",
    "A explores variational circuits; B optimizes transpilation",
  ];

  return (
    <div className={styles.wrapper}>
      {/* LEFT PANEL */}
      <div className={styles.paperPanel}>
        <div className={styles.paperCard}>
          <h2>{paperA.title}</h2>
          <h3>Summary</h3>
          <p>{paperA.summary}</p>

          <h3>Key Findings</h3>
          <ul>
            {paperA.keyFindings.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CENTER COLUMN */}
      <div className={styles.centerColumn}>
        <div className={styles.centerCard}>
          <h3>Similarities</h3>
          <ul className={styles.similarList}>
            {similarities.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <div className={styles.separator}></div>

          <h3>Differences</h3>
          <ul className={styles.diffList}>
            {differences.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.paperPanel}>
        <div className={styles.paperCard}>
          <h2>{paperB.title}</h2>
          <h3>Summary</h3>
          <p>{paperB.summary}</p>

          <h3>Key Findings</h3>
          <ul>
            {paperB.keyFindings.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
