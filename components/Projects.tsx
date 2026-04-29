"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;
const cats = ["Tutti","Ospedaliero","Universitario"];

const projects = [
  { id:1, n:"01", title:"Policlinico Universitario Gemelli",  sub:"Impianti Elettrici MT/BT — Blocco Operatorio",   loc:"Roma",   cat:"Ospedaliero",  icon:Building2, tags:["500 kVA","UPS 200 kVA","EVAC System","Impianto Terre"], color:"#8DC63F" },
  { id:2, n:"02", title:"Università La Sapienza",             sub:"Impianti Speciali — 12 Edifici Campus",          loc:"Roma",   cat:"Universitario",icon:Building2, tags:["350 IP Cam","Accessi","BMS","Fire Detect."], color:"#4A90D9" },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("Tutti");
  const filtered = active === "Tutti" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="progetti" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28 overflow-hidden">
      <div className="blob-navy absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5"><Building2 size={11} /> Portfolio</div>
          <h2 className="mb-6 text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Opere che</span>
            <br />
            <span className="grad-lime">parlano da sole</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  active === c
                    ? "bg-[#8DC63F] text-[#0F1117] shadow-[0_4px_20px_rgba(141,198,63,0.35)]"
                    : "border border-black/[0.1] text-[#64748B] hover:border-[#8DC63F]/40 hover:text-[#0F1117]"
                }`}>
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* List */}
        <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.id} layout
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: E }}
                className="proj-row group">
                <div className="grid grid-cols-[36px_1fr] md:grid-cols-[40px_1fr_auto_100px] items-center gap-3 px-5 py-4 md:gap-8 md:px-6 md:py-5">
                  <span className="proj-n">{p.n}</span>

                  <div>
                    <div className="mb-0.5 flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-[#0F1117] leading-tight md:text-base">{p.title}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase"
                        style={{ color: p.color, background: `${p.color}14` }}>
                        {p.cat}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] md:text-sm">{p.sub}</p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-[#94A3B8] md:hidden">
                      <MapPin size={10} /> {p.loc}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-wrap gap-1.5 justify-end">
                    {p.tags.map(t => (
                      <span key={t} className="rounded-md border border-black/[0.07] bg-[#F7F9FC] px-2 py-0.5 text-[11px] text-[#94A3B8]">{t}</span>
                    ))}
                  </div>

                  <div className="hidden md:flex items-center justify-end gap-1 text-xs text-[#94A3B8]">
                    <MapPin size={11} /> {p.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-[#94A3B8]">
          Portfolio completo disponibile su richiesta — oltre 500 impianti completati
        </p>
      </div>
    </section>
  );
}
