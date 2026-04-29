"use client";
import { useEffect, useRef } from "react";

const G = "#8DC63F";
const GR = 141, GG = 198, GB = 63;
const STEP = 96;

type Seg = [number, number, number, number]; // x1,y1,x2,y2

interface Pulse {
  si: number;
  t: number;
  spd: number;
  sz: number;
  alpha: number;
}

export default function CircuitCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let W = 0, H = 0;
    let segs: Seg[] = [];
    let pulses: Pulse[] = [];

    const build = () => {
      segs = [];
      const cols = Math.ceil(W / STEP) + 2;
      const rows = Math.ceil(H / STEP) + 2;
      const ox = -STEP * 0.5, oy = -STEP * 0.5;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = ox + c * STEP, y = oy + r * STEP;
          if (c < cols && Math.random() > 0.28)
            segs.push([x, y, x + STEP, y]);
          if (r < rows && Math.random() > 0.28)
            segs.push([x, y, x, y + STEP]);
        }
      }
      const pulseCount = W < 768 ? 12 : 22;
      pulses = Array.from({ length: pulseCount }, () => ({
        si: Math.floor(Math.random() * segs.length),
        t: Math.random(),
        spd: 0.006 + Math.random() * 0.009,
        sz: 2.5 + Math.random() * 2,
        alpha: 0.65 + Math.random() * 0.35,
      }));
    };

    const resize = () => {
      const par = canvas.parentElement;
      W = par ? par.offsetWidth : window.innerWidth;
      H = par ? par.offsetHeight : window.innerHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      build();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Traces ──
      ctx.strokeStyle = "rgba(0,0,0,0.065)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "square";
      for (const s of segs) {
        ctx.beginPath();
        ctx.moveTo(s[0], s[1]);
        ctx.lineTo(s[2], s[3]);
        ctx.stroke();
      }

      // ── Pads ──
      const cols = Math.ceil(W / STEP) + 2;
      const rows = Math.ceil(H / STEP) + 2;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = -STEP * 0.5 + c * STEP;
          const y = -STEP * 0.5 + r * STEP;
          ctx.strokeStyle = "rgba(0,0,0,0.05)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = "rgba(0,0,0,0.1)";
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Pulses ──
      for (const p of pulses) {
        p.t += p.spd;
        if (p.t > 1) {
          p.t = 0;
          p.si = Math.floor(Math.random() * segs.length);
        }
        const s = segs[p.si];
        if (!s) continue;

        const x = s[0] + (s[2] - s[0]) * p.t;
        const y = s[1] + (s[3] - s[1]) * p.t;
        const px = s[0] + (s[2] - s[0]) * Math.max(0, p.t - 0.28);
        const py = s[1] + (s[3] - s[1]) * Math.max(0, p.t - 0.28);

        // Trail
        const tg = ctx.createLinearGradient(px, py, x, y);
        tg.addColorStop(0, `rgba(${GR},${GG},${GB},0)`);
        tg.addColorStop(1, `rgba(${GR},${GG},${GB},${0.7 * p.alpha})`);
        ctx.strokeStyle = tg;
        ctx.lineWidth = p.sz * 0.65;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Halo
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 22);
        halo.addColorStop(0, `rgba(${GR},${GG},${GB},${0.45 * p.alpha})`);
        halo.addColorStop(0.45, `rgba(${GR},${GG},${GB},${0.15 * p.alpha})`);
        halo.addColorStop(1, `rgba(${GR},${GG},${GB},0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.shadowColor = G;
        ctx.shadowBlur = 12;
        ctx.fillStyle = G;
        ctx.beginPath();
        ctx.arc(x, y, p.sz, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const par = canvas.parentElement;
    const ro = new ResizeObserver(resize);
    if (par) ro.observe(par);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0" aria-hidden />;
}
