"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  pulse: number; pSpeed: number;
  lime: boolean;
}

interface Particle {
  x: number; y: number;
  progress: number; speed: number;
  from: number; to: number;
}

export default function EnergyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number | null>(null);
  const nodes     = useRef<Node[]>([]);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();

    const init = () => {
      nodes.current = Array.from({ length: 28 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
        pulse: Math.random() * Math.PI * 2,
        pSpeed: Math.random() * 0.018 + 0.008,
        lime: Math.random() > 0.45,
      }));
    };
    init();

    const spawnInterval = setInterval(() => {
      const ns = nodes.current;
      if (ns.length < 2) return;
      const f = Math.floor(Math.random() * ns.length);
      let t = Math.floor(Math.random() * ns.length);
      while (t === f) t = Math.floor(Math.random() * ns.length);
      particles.current.push({ x: ns[f].x, y: ns[f].y, progress: 0, speed: Math.random() * 0.003 + 0.002, from: f, to: t });
    }, 320);

    const CONN = 190;

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const ns = nodes.current, ps = particles.current;

      for (const n of ns) {
        n.x += n.vx; n.y += n.vy; n.pulse += n.pSpeed;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // connections
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const dx = ns[i].x - ns[j].x, dy = ns[i].y - ns[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < CONN) {
            ctx.beginPath();
            ctx.moveTo(ns[i].x, ns[i].y);
            ctx.lineTo(ns[j].x, ns[j].y);
            ctx.strokeStyle = `rgba(26,31,107,${(1 - d/CONN) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of ns) {
        const pr = n.r + Math.sin(n.pulse) * 0.7;
        const lime = n.lime;
        const color = lime ? "141,198,63" : "74,144,217";

        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 9);
        g.addColorStop(0, `rgba(${color},0.18)`);
        g.addColorStop(1, `rgba(${color},0)`);
        ctx.beginPath(); ctx.arc(n.x, n.y, pr * 9, 0, Math.PI*2);
        ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${color},0.85)`; ctx.fill();
      }

      // particles
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        const fn = ns[p.from], tn = ns[p.to];
        if (!fn || !tn) { ps.splice(i,1); continue; }
        p.progress += p.speed;
        if (p.progress > 1) { ps.splice(i,1); continue; }

        const cx = fn.x + (tn.x - fn.x) * p.progress;
        const cy = fn.y + (tn.y - fn.y) * p.progress;
        const tail = 0.07;
        const tx = fn.x + (tn.x - fn.x) * Math.max(0, p.progress - tail);
        const ty = fn.y + (tn.y - fn.y) * Math.max(0, p.progress - tail);
        const a = Math.sin(p.progress * Math.PI) * 0.85;

        const lg = ctx.createLinearGradient(tx, ty, cx, cy);
        lg.addColorStop(0, `rgba(141,198,63,0)`);
        lg.addColorStop(1, `rgba(141,198,63,${a})`);
        ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(cx,cy);
        ctx.strokeStyle = lg; ctx.lineWidth = 1.5; ctx.stroke();

        ctx.beginPath(); ctx.arc(cx, cy, 2, 0, Math.PI*2);
        ctx.fillStyle = `rgba(141,198,63,${a})`; ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", () => { resize(); init(); });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(spawnInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />;
}
