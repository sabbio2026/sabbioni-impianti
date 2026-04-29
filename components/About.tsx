"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const timeline = [
  { y: "1994", t: "Fondazione",            d: "Sabbioni Impianti nasce a Monterotondo con focus sugli impianti elettrici civili." },
  { y: "2005", t: "Espansione industriale", d: "Prime commesse industriali e ospedaliere. Ottenuta la certificazione SOA OS30." },
  { y: "2012", t: "Impianti speciali",      d: "Integrazione di TVCC, domotica e sistemi BMS nel portfolio aziendale." },
  { y: "2018", t: "Fotovoltaico & Green",   d: "Lancio divisione fotovoltaico industriale. Oltre 2 MW installati." },
  { y: "2024", t: "Leadership di settore",  d: "500+ impianti realizzati. Policlinico Gemelli, La Sapienza, PA tra i clienti principali." },
];

const values = [
  { icon: Target,     t: "Precisione",    d: "Ogni progetto gestito con rigore ingegneristico. Zero compromessi sulla qualità." },
  { icon: Users,      t: "Team esperto",  d: "Tecnici certificati e formazione continua su normative e tecnologie." },
  { icon: Award,      t: "Certificazioni", d: "OS30 SOA, F-GAS, CEI 64-8. Standard riconosciuti a livello nazionale." },
  { icon: TrendingUp, t: "Innovazione",   d: "IoT, BIM, Building Automation e monitoraggio remoto su ogni progetto." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="chi-siamo" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28 overflow-hidden">
      <div className="blob-navy absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header — full-width centered like all other sections */}
        <motion.div className="mb-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5">Chi Siamo</div>
          <h2 className="mx-auto max-w-2xl text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">30 anni di expertise</span>
            <br />
            <span className="grad-lime">al servizio delle imprese</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
            Sabbioni Impianti S.R.L. — sede a{" "}
            <strong className="text-[#0F1117] font-semibold">Via Salaria 108D, Monterotondo (Roma)</strong>.
            Progettazione, installazione e manutenzione di impianti tecnologici dal 1994.
          </p>
        </motion.div>

        {/* Two-column body */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left — values + second paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: E }}
          >
            <p className="mb-7 text-base leading-relaxed text-[#64748B]">
              Dal 1994 offriamo un servizio chiavi in mano: dalla consulenza tecnica iniziale
              alla consegna dell&apos;opera, fino alla manutenzione programmata. Team certificati,
              tecnologia all&apos;avanguardia, zero intermediari.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <motion.div key={v.t}
                  initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: E }}
                  className="s-card p-4 rounded-xl">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#8DC63F]/10">
                    <v.icon size={15} className="text-[#5A9222]" />
                  </div>
                  <h4 className="mb-1 text-sm font-bold text-[#0F1117]">{v.t}</h4>
                  <p className="text-xs leading-relaxed text-[#94A3B8]">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: E }}
          >
            <h3 className="mb-8 text-lg font-bold text-[#0F1117]">La nostra storia</h3>
            <div className="relative">
              <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#8DC63F]/70 via-[#8DC63F]/25 to-transparent" />
              <div className="space-y-7 pl-8">
                {timeline.map((item, i) => (
                  <motion.div key={item.y}
                    initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: E }}
                    className="group relative">
                    <div className="absolute -left-8 mt-1 h-[10px] w-[10px] rounded-full bg-[#8DC63F] ring-4 ring-[#8DC63F]/15 transition-all group-hover:ring-[#8DC63F]/30" />
                    <span className="block text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222] mb-0.5">{item.y}</span>
                    <h4 className="mb-1 text-sm font-bold text-[#0F1117]">{item.t}</h4>
                    <p className="text-sm leading-relaxed text-[#64748B]">{item.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.55, ease: E }}
              className="mt-8 rounded-2xl border border-[#8DC63F]/20 bg-white p-5 shadow-sm">
              <p className="mb-3 text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222]">Certificazioni</p>
              <div className="flex flex-wrap gap-2">
                {["OS30 SOA","F-GAS","CEI 64-8","CEI 11-27","ISO 9001","UNI 11224"].map(c => (
                  <span key={c} className="rounded-lg border border-black/[0.08] bg-[#F7F9FC] px-3 py-1.5 text-xs font-semibold text-[#1A1F6B]">{c}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
