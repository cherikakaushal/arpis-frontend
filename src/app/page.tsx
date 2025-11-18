"use client";

import { useState } from "react";
import Image from "next/image";

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
      // fail silently, still navigate
      window.location.href = "/fetch";
    }
  };

  const sites = [
    {
      name: "Google Scholar",
      logo: "/logos/google.png",
      link: "https://scholar.google.com",
    },
    {
      name: "arXiv",
      logo: "/logos/arxiv.png",
      link: "https://arxiv.org",
    },
    {
      name: "Semantic Scholar",
      logo: "/logos/semantic.png",
      link: "https://www.semanticscholar.org",
    },
    {
      name: "PubMed",
      logo: "/logos/pubmed.png",
      link: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      name: "IEEE Xplore",
      logo: "/logos/ieee.png",
      link: "https://ieeexplore.ieee.org",
    },
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
      {/* ===================== */}
      {/* HERO + URL CARD       */}
      {/* ===================== */}
      <section className="w3-row-padding w3-margin-bottom">
        {/* Left: hero copy + CTAs */}
        <div className="w3-col l7 m12 s12" style={{ marginBottom: "24px" }}>
          <div style={{ marginBottom: "8px" }}>
            <span
              className="w3-small"
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                color: "var(--arp-text-main)",
                opacity: 0.9,
              }}
            >
              Mock AI Mode · Frontend Demo
            </span>
          </div>

          <h1
            style={{
              fontSize: "3rem",
              lineHeight: 1.1,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "18px 0 6px",
            }}
          >
            ARPIS
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 0 24px",
              opacity: 0.85,
            }}
          >
            AI Research Paper Intelligence System — accelerate scientific
            discovery with structured summaries, citation graphs, and comparison
            dashboards.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="/upload"
              className="w3-button w3-round-xxlarge"
              style={{
                padding: "12px 28px",
                background:
                  "linear-gradient(135deg, var(--arpis-cyan), #ff00aa)",
                border: "none",
                color: "black",
                fontWeight: 600,
                boxShadow: "0 0 18px rgba(36,227,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              🚀 Upload Research Paper
            </a>

            <a
              href="/results"
              className="w3-button w3-round-xxlarge"
              style={{
                padding: "12px 26px",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                color: "var(--arp-text-main)",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              ⚡ Try Demo (Sample Paper)
            </a>
          </div>

          <div
            style={{
              marginTop: "14px",
              fontSize: "0.85rem",
              opacity: 0.7,
            }}
          >
            Or jump into your{" "}
            <a
              href="/workspace"
              style={{
                textDecoration: "none",
                color: "var(--arpis-cyan)",
                fontWeight: 500,
              }}
            >
              ARPIS Workspace →
            </a>
          </div>
        </div>

        {/* Right: paste URL card */}
        <div className="w3-col l5 m12 s12">
          <div
            className="w3-card-4 w3-round-xxlarge"
            style={{
              padding: "20px 18px 18px",
              background: "var(--arp-bg-alt)",
              border: "1px solid var(--arp-border-subtle)",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Paste Research Paper Link
            </h3>

            <input
              type="text"
              placeholder="Paste Google Scholar / arXiv / PubMed link…"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "14px",
                border: "1px solid var(--arp-border-subtle)",
                background: "transparent",
                color: "var(--arp-text-main)",
                fontSize: "0.95rem",
                marginBottom: "12px",
                outline: "none",
              }}
            />

            <button
              onClick={handleFetch}
              className="w3-button w3-round-large w3-block"
              style={{
                padding: "11px 18px",
                background: "var(--arpis-cyan)",
                color: "black",
                fontWeight: 600,
                boxShadow: "0 0 12px rgba(36,227,255,0.4)",
              }}
            >
              Fetch Paper Metadata →
            </button>

            <p
              style={{
                fontSize: "0.75rem",
                marginTop: "8px",
                opacity: 0.7,
              }}
            >
              ARPIS will store this link locally and open the Fetch console.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/*   PROBLEM STRIP       */}
      {/* ===================== */}
      <section className="w3-row-padding w3-margin-bottom">
        <div className="w3-col s12">
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "4px",
              fontWeight: 600,
            }}
          >
            Research analysis is slow, repetitive, and overwhelming.
          </h2>
          <p style={{ fontSize: "0.95rem", opacity: 0.75, marginBottom: "18px" }}>
            ARPIS is built to remove the grunt work so you can think.
          </p>
        </div>

        {[
          {
            title: "Endless reading",
            body: "Reviewing tens of dense PDFs can delay actual research work by weeks.",
          },
          {
            title: "Hard to compare results",
            body: "Manually tracking baselines, datasets, and methods is error-prone.",
          },
          {
            title: "Equations & citations chaos",
            body: "Extracting math and building citation maps slows everyone down.",
          },
        ].map((p, idx) => (
          <div key={p.title} className="w3-col l4 m12 s12" style={{ marginBottom: "16px" }}>
            <div
              className="w3-round-xlarge"
              style={{
                padding: "16px 18px 18px",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.7,
                  marginBottom: "6px",
                }}
              >
                Pain #{idx + 1}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: "6px",
                  fontSize: "1rem",
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===================== */}
      {/*   SOURCES GRID        */}
      {/* ===================== */}
      <section style={{ marginTop: "32px" }}>
        <h2
          style={{
            fontSize: "1.3rem",
            marginBottom: "6px",
            fontWeight: 600,
          }}
        >
          Start from trusted research indexes.
        </h2>
        <p style={{ fontSize: "0.95rem", opacity: 0.75, marginBottom: "18px" }}>
          Open any source, copy a link, and let ARPIS handle the heavy lifting.
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
                textDecoration: "none",
                background: "var(--arp-bg-alt)",
                border: "1px solid var(--arp-border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={36}
                  height={36}
                  style={{ borderRadius: "10px" }}
                />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {s.name}
                </span>
              </div>
              <span style={{ fontSize: "1.6rem", opacity: 0.6 }}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/*   CTA + FOOTER        */}
      {/* ===================== */}
      <section
        className="w3-margin-top"
        style={{ marginTop: "40px" }}
      >
        <div
          className="w3-round-xxlarge"
          style={{
            padding: "26px 26px 24px",
            background: "var(--arp-bg-alt)",
            border: "1px solid var(--arp-border-subtle)",
          }}
        >
          <div className="w3-row-padding">
            <div className="w3-col l8 m12 s12" style={{ marginBottom: "10px" }}>
              <h3
                style={{
                  margin: "0 0 4px",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                }}
              >
                Ready to accelerate your next literature review?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  opacity: 0.8,
                }}
              >
                Upload a paper, explore the mock dashboards, and imagine this
                wired to a full backend pipeline.
              </p>
            </div>
            <div
              className="w3-col l4 m12 s12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/upload"
                className="w3-button w3-round-xxlarge"
                style={{
                  padding: "10px 24px",
                  background:
                    "linear-gradient(135deg, var(--arpis-cyan), #ff00aa)",
                  border: "none",
                  color: "black",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                🚀 Upload your first paper
              </a>
              <a
                href="/graph"
                className="w3-button w3-round-xxlarge"
                style={{
                  padding: "10px 22px",
                  background: "transparent",
                  border: "1px solid var(--arp-border-subtle)",
                  color: "var(--arp-text-main)",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}
              >
                View 3D Citation Universe
              </a>
            </div>
          </div>

          {/* footer line */}
          <div
            style={{
              marginTop: "18px",
              borderTop: "1px solid var(--arp-border-subtle)",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.8rem",
              opacity: 0.7,
            }}
          >
            <span>© 2025 ARPIS · All rights reserved.</span>
            <span>
              Created by{" "}
              <span style={{ fontWeight: 500 }}>Cherika Kaushal</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
