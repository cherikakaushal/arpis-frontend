"use client";

import { useEffect, useRef } from "react";
import styles from "./graph.module.css";

export default function CitationGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 80;
    }
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 22 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 4 + Math.random() * 4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    function animate() {
      // 🌙 always draw background using CSS variable (dark in light mode)
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue("--arp-graph-bg");

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.strokeStyle = "rgba(0, 220, 255, 0.12)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Glowing nodes (unchanged)
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 255, 0.9)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "cyan";
        ctx.fill();

        n.x += n.dx;
        n.y += n.dy;

        // bounce
        if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Citation Graph</h2>
      <p className={styles.subtitle}>Coming Soon — Semantic Citation Graph Engine</p>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
