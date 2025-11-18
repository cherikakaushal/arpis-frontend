"use client";

import { useEffect, useState } from "react";
import "./workspace.css";

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
  {
    id: "p3",
    title: "Transformer-based Calorimeter Reconstruction",
    field: "AI / Physics",
    year: "2023",
    tags: ["transformers", "reconstruction"],
  },
];

type Tab = "all" | "favorites" | "collections" | "experiments" | "notes";

export default function WorkspacePage() {
  const [papers, setPapers] = useState<PaperCard[]>([]);
  const [tab, setTab] = useState<Tab>("all");

  useEffect(() => {
    setPapers(seed);
  }, []);

  const toggleFavorite = (id: string) => {
    setPapers(prev =>
      prev.map(p =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  };

  // FILTER LOGIC
  const filteredPapers = (() => {
    switch (tab) {
      case "favorites":
        return papers.filter(p => p.favorite);
      case "collections":
        return [...papers].sort((a, b) =>
          a.field.localeCompare(b.field)
        );
      default:
        return papers;
    }
  })();

  return (
    <div className="workspace-container">

      {/* SIDEBAR */}
      <aside className="workspace-sidebar">
        <h3 className="sidebar-title">Workspace</h3>

        <ul className="workspace-nav">
          <li className={tab === "all" ? "active" : ""} onClick={() => setTab("all")}>📄 All Papers</li>
          <li className={tab === "favorites" ? "active" : ""} onClick={() => setTab("favorites")}>⭐ Favorites</li>
          <li className={tab === "collections" ? "active" : ""} onClick={() => setTab("collections")}>📁 Collections</li>
          <li className={tab === "experiments" ? "active" : ""} onClick={() => setTab("experiments")}>🧪 Experiments</li>
          <li className={tab === "notes" ? "active" : ""} onClick={() => setTab("notes")}>📝 Notes</li>
        </ul>

        <button className="add-button">+ Add Paper</button>
      </aside>

      {/* MAIN AREA */}
      <main className="workspace-main">
        <h2 className="workspace-title">
          {tab === "all" && "My Papers"}
          {tab === "favorites" && "Favorites"}
          {tab === "collections" && "Collections"}
          {tab === "experiments" && "Experiments"}
          {tab === "notes" && "Notes"}
        </h2>

        <p className="workspace-sub">
          {tab === "all" && "Your personal research universe"}
          {tab === "favorites" && "Your starred papers"}
          {tab === "collections" && "Grouped by field"}
          {tab === "experiments" && "Prototype: Coming soon"}
          {tab === "notes" && "Your saved ideas and annotations"}
        </p>

        {/* EMPTY STATE */}
        {filteredPapers.length === 0 && (
          <div className="empty">
            {tab === "favorites" && "No favorites yet ⭐"}
            {tab === "collections" && "Nothing to group yet 📁"}
            {tab === "experiments" && "No experiments yet 🧪"}
            {tab === "notes" && "No notes yet 📝"}
          </div>
        )}

        {/* PAPER GRID */}
        <div className="paper-grid">
          {filteredPapers.map((p) => (
            <div key={p.id} className="paper-card">
              <div className="paper-header">
                <h4>{p.title}</h4>

                <button
                  className={`fav-btn ${p.favorite ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(p.id);
                  }}
                >
                  ★
                </button>
              </div>

              <div className="paper-meta">{p.field} · {p.year}</div>

              <div className="paper-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="paper-graph"></div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
