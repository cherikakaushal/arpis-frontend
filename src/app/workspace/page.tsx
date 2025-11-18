"use client";

import { useEffect, useState } from "react";

type PaperCard = {
  id: string;
  title: string;
  field: string;
  year: string;
  tags: string[];
  favorite?: boolean;
};

const seed: PaperCard[] = [
  {
    id: "p1",
    title: "Neural Surrogates for Particle Detector Simulations",
    field: "AI / HEP",
    year: "2024",
    tags: ["simulation", "CERN", "ML"],
  },
  {
    id: "p2",
    title: "Graph Neural Networks for Jet Tagging",
    field: "HEP",
    year: "2021",
    tags: ["graphs", "collisions"],
  },
];

export default function WorkspacePage() {
  const [papers, setPapers] = useState<PaperCard[]>([]);

  useEffect(() => {
    setPapers(seed);
  }, []);

  const toggleFavorite = (id: string) => {
    setPapers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
    );
  };

  return (
    <div className="w3-padding-large w3-animate-opacity">
      <h2
        style={{
          fontSize: "1.6rem",
          fontWeight: 600,
          marginBottom: "4px",
        }}
      >
        ARPIS Workspace
      </h2>

      <p style={{ opacity: 0.7, marginBottom: "24px" }}>
        Organize your research universe — collections, favorites and notes
        (mocked for now).
      </p>

      <div className="w3-row-padding">
        {papers.map((p) => (
          <div key={p.id} className="w3-third w3-margin-bottom">
            <div
              className="arpis-card"
              style={{
                padding: "18px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {p.title}
              </div>

              <div style={{ opacity: 0.7, fontSize: "0.8rem" }}>
                {p.field} · {p.year}
              </div>

              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="w3-tag w3-round-large w3-small w3-margin-right"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                className="w3-button w3-round-large w3-small"
                onClick={() => toggleFavorite(p.id)}
              >
                {p.favorite ? "★ Favorited" : "☆ Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
