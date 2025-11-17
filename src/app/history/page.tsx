"use client";

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Link from "next/link";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("arpis_history") || "[]");
    setHistory(saved);
  }, []);

  function deleteItem(index: number) {
    const updated = [...history];
    updated.splice(index, 1);
    setHistory(updated);
    localStorage.setItem("arpis_history", JSON.stringify(updated));
  }

  if (history.length === 0) {
    return (
      <div className="w3-center" style={{ paddingTop: "40px" }}>
        <p style={{ color: "var(--arpis-text-muted)", fontSize: "1.1rem" }}>
          No previous analyses found.
        </p>
      </div>
    );
  }

  return (
    <div className="w3-animate-opacity" style={{ display: "grid", gap: "20px" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "5px" }}>History</h1>

      {history.map((item, index) => (
        <div
          key={index}
          className="arpis-glass-card"
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderLeft: "3px solid var(--arpis-purple)",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "6px" }}>{item.title}</h3>
            <p style={{ opacity: 0.75, marginBottom: "4px" }}>
              {item.summary.slice(0, 120)}...
            </p>
            <div style={{ fontSize: "0.8rem", color: "var(--arpis-text-muted)" }}>
              {new Date(item.date).toLocaleString()}
            </div>

            <Link
              href="/results"
              className="w3-button w3-round-large"
              style={{
                marginTop: "12px",
                background: "var(--arpis-cyan)",
                color: "#000",
                padding: "6px 14px",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Open Details →
            </Link>
          </div>

          <FiTrash2
            onClick={() => deleteItem(index)}
            style={{
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "var(--arpis-text-muted)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
