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
    localStorage.setItem("arpis_link_to_fetch", url);
    window.location.href = "/fetch";
  };

  const sites = [
    {
      name: "Google Scholar",
      logo: "/logos/google.png",
      link: "https://scholar.google.com",
      color: "linear-gradient(135deg, #00eaff55, #0077ff33)",
    },
    {
      name: "arXiv",
      logo: "/logos/arxiv.png",
      link: "https://arxiv.org",
      color: "linear-gradient(135deg, #a855f755, #6b21a833)",
    },
    {
      name: "Semantic Scholar",
      logo: "/logos/semantic.png",
      link: "https://www.semanticscholar.org",
      color: "linear-gradient(135deg, #38bdf855, #2563eb33)",
    },
    {
      name: "PubMed",
      logo: "/logos/pubmed.png",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      color: "linear-gradient(135deg, #2dd4bf55, #0d948833)",
    },
    {
      name: "IEEE Xplore",
      logo: "/logos/ieee.png",
      link: "https://ieeexplore.ieee.org",
      color: "linear-gradient(135deg, #6366f155, #4f46e533)",
    },
  ];

  return (
    <div
      className="w3-animate-opacity"
      style={{
        padding: "40px 14px",
        display: "grid",
        justifyContent: "center",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* ===================== */}
      {/*  PASTE LINK BOX       */}
      {/* ===================== */}
      <div style={{ marginBottom: "40px", width: "100%" }}>
        <h2
          style={{
            fontSize: "1.6rem",
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          Paste Research Paper Link
        </h2>

        <input
          type="text"
          placeholder="Paste Google Scholar / arXiv / PubMed link…"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: "14px",
            border: "1px solid var(--arp-border-subtle)",
            background: "var(--arp-bg-alt)",
            color: "var(--arp-text-main)",
            fontSize: "1rem",
            marginBottom: "14px",
          }}
        />

        <button
          onClick={handleFetch}
          className="w3-button w3-round-large"
          style={{
            padding: "12px 26px",
            background: "var(--arpis-cyan)",
            color: "black",
            fontWeight: 600,
            boxShadow: "0 0 15px rgba(36,227,255,0.4)",
          }}
        >
          Fetch Paper Metadata →
        </button>
      </div>

      {/* ===================== */}
      {/*  SOURCES GRID         */}
      {/* ===================== */}
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "25px",
          fontWeight: 700,
        }}
      >
        Research Sources
      </h1>

      <div
        style={{
          display: "grid",
          gap: "28px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          width: "100%",
        }}
      >
        {sites.map((s) => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            className="arpis-site-card"
            style={{
              padding: "30px 24px",
              borderRadius: "18px",
              background: s.color,
              border: "1px solid var(--arp-border-subtle)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              transition: "0.25s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Image
                src={s.logo}
                alt={s.name}
                width={42}
                height={42}
                style={{ borderRadius: "8px" }}
              />
              <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                {s.name}
              </span>
            </div>

            <span style={{ fontSize: "1.8rem", opacity: 0.7 }}>→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
