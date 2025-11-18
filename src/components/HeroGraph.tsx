"use client";
import { useEffect, useRef } from "react";

export default function HeroGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const DPR = window.devicePixelRatio || 1;
    const W = canvas.width = 420 * DPR;
    const H = canvas.height = 260 * DPR;
    ctx.scale(DPR, DPR);

    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const glow = isDark ? "rgba(0,230,255,0.9)" : "rgba(0,140,255,0.9)";
    const glowEdge = isDark ? "rgba(0,230,255,0.25)" : "rgba(0,140,255,0.25)";

    const nodes = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 420,
      y: Math.random() * 260,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      pulse: Math.random() * Math.PI * 2,
    }));

    function animate() {
      ctx.clearRect(0, 0, 420, 260);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > 420) n.vx *= -1;
        if (n.y < 0 || n.y > 260) n.vy *= -1;

        const radius = 2.5 + Math.sin(n.pulse) * 0.8;

        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = glow;

        ctx.shadowColor = glow;
        ctx.shadowBlur = isDark ? 12 : 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        nodes.forEach((m) => {
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.45;
            ctx.strokeStyle = glowEdge;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.9,
        filter: "drop-shadow(0px 4px 12px rgba(0,200,255,0.35))",
      }}
    />
  );
}
