"use client";

import { useState } from "react";
import Image from "next/image";
import PlaylabOrb from "@/components/PlaylabOrb";
import HeroGraph from "@/components/HeroGraph";

export default function HomePage() {
  const [url, setUrl] = useState("");

  const handleFetch = () => {
    if (!url.trim()) {
      alert("Paste a research paper link first.");
      return;
    }
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("arpis_link_to_fetch", url);
        window.location.href = "/fetch";
      }
    } catch {
      window.location.href = "/fetch";
    }
  };

  const sites = [
    { name: "Google Scholar", logo: "/logos/google.png", link: "https://scholar.google.com" },
    { name: "arXiv", logo: "/logos/arxiv.png", link: "https://arxiv.org" },
    { name: "Semantic Scholar", logo: "/logos/semantic.png", link: "https://www.semanticscholar.org" },
    { name: "PubMed", logo: "/logos/pubmed.png", link: "https://pubmed.ncbi.nlm.nih.gov" },
    { name: "IEEE Xplore", logo: "/logos/ieee.png", link: "https://ieeexplore.ieee.org" },
  ];

  return (
    <main
      className="w3-container w3-animate-opacity"
      style={{
        padding: "32px 18px 80px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {/* =============================== */}
      {/*         HERO SECTION            */}
      {/* =============================== */}
      <section
        className="w3-row-padding"
        style={{
          marginTop: "40px",
          marginBottom: "60px",
        }}
      >
        {/* LEFT */}
        <div className="w3-col l7 m12 s12" style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "3.6rem",
              fontWeight: 800,
              margin: "0 0 14px",
              letterSpacing: "0.018em",
            }}
          >
            ARPIS
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "560px",
              opacity: 0.9,
              marginBottom: "30px",
              lineHeight: "1.55",
            }}
          >
            AI Research Paper Intelligence System — summaries, embeddings,
            semantic graphs, comparisons, and structured insights.
            Built for scientists, engineers, and the academically obsessed.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="/upload"
              className="w3-button w3-round-xxlarge"
              style={{
                padding: "12px 30px",
                background: "linear-gradient(135deg, #00d0ff, #006dff)",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.01em",
                boxShadow: "0 4px 16px rgba(0,140,255,0.22)",
              }}
            >
              Upload Paper
            </a>

            <a
              href="/results"
              className="w3-button w3-round-xxlarge"
              style={{
                padding: "12px 30px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--arp-border-subtle)",
                color: "var(--arp-text-main)",
                fontWeight: 500,
              }}
            >
              Sample Paper
            </a>
          </div>

          <div style={{ marginTop: "14px", opacity: 0.75 }}>
            Or jump into{" "}
            <a
              href="/workspace"
              style={{
                color: "var(--arpis-cyan)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Workspace →
            </a>
          </div>
        </div>

        {/* RIGHT — GRAPH + URL CARD */}
        <div className="w3-col l5 m12 s12">
          {/* SEMANTIC GRAPH */}
          <div
            style={{
              width: "100%",
              height: "240px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "var(--arp-bg-alt)",
              border: "1px solid var(--arp-border-subtle)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <HeroGraph />
          </div>

          {/* URL INPUT */}
          <div
            className="w3-round-xxlarge"
            style={{
              marginTop: "16px",
              padding: "18px 16px",
              background: "var(--arp-bg-alt)",
              border: "1px solid var(--arp-border-subtle)",
            }}
          >
            <input
              type="text"
              placeholder="Paste Google Scholar / arXiv link…"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "14px",
                border: "1px solid var(--arp-border-subtle)",
                background: "transparent",
                color: "var(--arp-text-main)",
                marginBottom: "12px",
              }}
            />

            <button
              onClick={handleFetch}
              className="w3-button w3-round-large w3-block"
              style={{
                padding: "11px 18px",
                background: "var(--arpis-cyan)",
                color: "#000",
                fontWeight: 600,
                letterSpacing: "0.01em",
              }}
            >
              Fetch Metadata →
            </button>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/*      PROBLEM STRIP              */}
      {/* =============================== */}
      <section className="w3-row-padding w3-margin-bottom">
        <div className="w3-col s12" style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: "6px" }}>
            Research analysis is slow, repetitive, and overwhelming.
          </h2>
          <p style={{ fontSize: "0.97rem", opacity: 0.75 }}>
            ARPIS removes the grunt work so you can focus on thinking.
          </p>
        </div>

        {[
          {
            title: "Endless reading",
            body: "Reviewing tens of dense PDFs delays real research by weeks.",
          },
          {
            title: "Hard to compare results",
            body: "Baselines, datasets, and methods are scattered across papers.",
          },
          {
            title: "Equations & citation chaos",
            body: "Extracting math and mapping citations slows everyone down.",
          },
        ].map((p, idx) => (
          <div key={idx} className="w3-col l4 m12 s12" style={{ marginBottom: "16px" }}>
            <div
              className="w3-round-xlarge"
              style={{
                padding: "18px 20px",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>Pain #{idx + 1}</div>
              <div style={{ fontWeight: 600, margin: "4px 0", fontSize: "1.1rem" }}>
                {p.title}
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* =============================== */}
      {/*     SOURCES GRID                */}
      {/* =============================== */}
      <section style={{ marginTop: "45px" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "8px" }}>
          Start from trusted research indexes.
        </h2>
        <p style={{ fontSize: "0.95rem", opacity: 0.75, marginBottom: "20px" }}>
          Open any source, copy a link, and let ARPIS do the rest.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          }}
        >
          {sites.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="w3-round-xxlarge"
              style={{
                padding: "18px 20px",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image src={s.logo} alt={s.name} width={36} height={36} />
                <span style={{ fontWeight: 600 }}>{s.name}</span>
              </div>
              <span style={{ fontSize: "1.6rem", opacity: 0.6 }}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/*         CTA SECTION             */}
      {/* =============================== */}
      <section style={{ marginTop: "60px" }}>
        <div
          className="w3-round-xxlarge"
          style={{
            padding: "28px 26px",
            background: "var(--arp-bg-alt)",
            border: "1px solid var(--arp-border-subtle)",
          }}
        >
          <div className="w3-row-padding">
            <div className="w3-col l8 m12 s12">
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "6px" }}>
                Ready to accelerate your next literature review?
              </h3>
              <p style={{ opacity: 0.8 }}>
                Upload a paper, explore the dashboards, and imagine this powered end-to-end.
              </p>
            </div>

            <div
              className="w3-col l4 m12 s12"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/upload"
                className="w3-button w3-round-xxlarge"
                style={{
                  padding: "12px 26px",
                  background: "linear-gradient(135deg, var(--arpis-cyan), #ff00aa)",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                Upload your first paper
              </a>

              <a
                href="/graph"
                className="w3-button w3-round-xxlarge"
                style={{
                  padding: "12px 24px",
                  background: "transparent",
                  border: "1px solid var(--arp-border-subtle)",
                  color: "var(--arp-text-main)",
                }}
              >
                View 3D Universe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/*         PLAYLAB SECTION         */}
      {/* =============================== */}
      <section style={{ marginTop: "70px", marginBottom: "45px" }}>
        <div
          className="w3-round-xxlarge"
          style={{
            padding: "26px 24px",
            background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,20,0.32))",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 14px 28px rgba(0,0,0,0.22)",
          }}
        >
          <div
            className="w3-row"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "26px",
            }}
          >
            {/* LEFT */}
            <div style={{ flex: 1, minWidth: "240px" }}>
              <div style={{ opacity: 0.6, fontSize: "0.85rem" }}>Break Zone</div>

              <h2
                style={{
                  fontSize: "2rem",
                  margin: "10px 0",
                  fontWeight: 700,
                }}
              >
                ARPIS PlayLab
              </h2>

              <p style={{ opacity: 0.8, marginBottom: "20px" }}>
                Micro-games to recharge your brain between papers.
              </p>

              <a
                href="/playlab"
                className="w3-button w3-round-xxlarge"
                style={{
                  padding: "12px 28px",
                  background: "linear-gradient(135deg, #00f7ff, #7b2cff, #ff00aa)",
                  color: "#020008",
                  fontWeight: 600,
                }}
              >
                Launch PlayLab →
              </a>
            </div>

            {/* RIGHT — ORB */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <PlaylabOrb />
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/*            FOOTER               */}
      {/* =============================== */}
      <footer
        style={{
          marginTop: "40px",
          borderTop: "1px solid var(--arp-border-subtle)",
          paddingTop: "12px",
          fontSize: "0.85rem",
          opacity: 0.7,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>© 2025 ARPIS — All rights reserved.</span>
        <span>
          by <strong style={{ opacity: 0.9 }}>Cherika Kaushal</strong>
        </span>
      </footer>
    </main>
  );
}
