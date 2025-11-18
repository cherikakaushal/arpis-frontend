"use client";
import { useRef, useEffect, useState } from "react";

export default function PlaylabOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mode, setMode] = useState<"orb" | "galaxy">("orb");

  useEffect(() => {
    // MODE SWITCH LOOP
    const loop = setInterval(() => {
      setMode((m) => (m === "orb" ? "galaxy" : "orb"));
    }, 7000);
    return () => clearInterval(loop);
  }, []);

  // ORB ANIMATION
  useEffect(() => {
    if (mode !== "orb") return;
    let angle = 0;
    let pulse = 0;

    const animate = () => {
      angle += 0.2;
      pulse += 0.04;

      const scale = 1 + Math.sin(pulse) * 0.04;

      if (orbRef.current) {
        orbRef.current.style.transform = `rotate(${angle}deg) scale(${scale})`;
        orbRef.current.style.opacity = "1";
      }

      if (canvasRef.current) {
        canvasRef.current.style.opacity = "0";
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [mode]);

  // GALAXY GRAPH ANIMATION
  useEffect(() => {
    if (mode !== "galaxy") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const size = 260;
    canvas.width = size;
    canvas.height = size;

    // Create random nodes
    const nodes = Array.from({ length: 16 }).map(() => ({
      x: Math.random() * size,
      y: Math.random() * size,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // fade orb away
      if (orbRef.current) orbRef.current.style.opacity = "0";
      canvas.style.opacity = "1";

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > size) n.vx *= -1;
        if (n.y < 0 || n.y > size) n.vy *= -1;

        // draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00eaff";
        ctx.fill();

        // draw linking lines
        nodes.forEach((m) => {
          let dx = n.x - m.x;
          let dy = n.y - m.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.strokeStyle = `rgba(0,240,255,${1 - dist / 70})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [mode]);

  return (
    <div style={{ position: "relative", width: 260, height: 260 }}>
      {/* ORB MODE */}
      <div
        ref={orbRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 35% 35%, #00f7ff 0%, #0094ff44 30%, #7b2cff22 55%, #0008 90%)
          `,
          boxShadow: `
            0 0 50px #00eaffaa,
            0 0 80px #7b2cff88,
            inset 0 0 40px #ffffff22
          `,
          transition: "opacity 1s",
        }}
      />

      {/* GALAXY MODE */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 1.2s",
        }}
      />
    </div>
  );
}
