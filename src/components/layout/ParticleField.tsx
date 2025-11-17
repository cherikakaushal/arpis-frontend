"use client";

import { useEffect } from "react";

export default function ParticleField() {
  useEffect(() => {
    const container = document.getElementById("arpis-particles");
    if (!container) return;

    // Create 40 floating particles
    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "arpis-particle";

      // Random starting position
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = Math.random() * 100 + "vh";

      // Random animation duration 4–10s
      const duration = 4000 + Math.random() * 6000;
      p.style.animationDuration = duration + "ms";

      container.appendChild(p);
    }
  }, []);

  return null;
}
