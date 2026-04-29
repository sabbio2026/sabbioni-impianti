"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: 30,  s: "+",   label: "Anni di esperienza",  sub: "Dal 1994" },
  { n: 500, s: "+",   label: "Impianti realizzati",  sub: "Civili, ind., osped." },
  { n: 2,   s: " MW", label: "Fotovoltaico inst.",   sub: "Energia rinnovabile" },
  { n: 98,  s: "%",   label: "Clienti soddisfatti",  sub: "Tasso rinnovo contratti" },
];

function Count({ n, s }: { n: number; s: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let c = 0; const step = n / 70;
    const t = setInterval(() => { c += step; if (c >= n) { setV(n); clearInterval(t); } else setV(Math.floor(c)); }, 18);
    return () => clearInterval(t);
  }, [inView, n]);
  return (
    <strong ref={ref} className="stat-v">
      {v}<span className="text-[#8DC63F]">{s}</span>
    </strong>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative border-y border-black/[0.06] bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* gap-px + bg on parent creates 1-px dividers between cells */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06]">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center justify-center gap-1 py-8 px-4 md:py-10 md:px-6 text-center bg-[#F7F9FC]"
            >
              <Count n={s.n} s={s.s} />
              <p className="mt-2 text-sm font-semibold text-[#0F1117]">{s.label}</p>
              <p className="text-xs text-[#94A3B8]">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
