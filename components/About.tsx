"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, FileText, Wrench, Headphones } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const timeline = [
  { y: "1990", t: "Elettrica Romana Nord S.R.L.", d: "Fondata nel 1990, diventa punto di riferimento per impianti elettrici civili e industriali a Roma." },
  { y: "2016", t: "Fotovoltaico e idraulica",     d: "Dal 2016 ampliamo i servizi con impianti fotovoltaici e idraulici per il mercato residenziale e commerciale." },
  { y: "2023", t: "Espansione e SOA OS30",         d: "Certificazione SOA OS30 ottenuta per operare su grandi commesse e appalti pubblici." },
];

const steps = [
  { icon: ClipboardList, t: "Sopralluogo",        d: "Prima di qualsiasi preventivo, veniamo a vedere il lavoro di persona." },
  { icon: FileText,      t: "Preventivo scritto", d: "Documento chiaro con materiali, tempi e costi. Niente voci vaghe." },
  { icon: Wrench,        t: "Esecuzione",         d: "Lavoriamo con personale interno. Consegniamo tutta la documentazione tecnica al termine." },
  { icon: Headphones,    t: "Assistenza",         d: "Disponibili per manutenzione e assistenza successiva ai lavori eseguiti." },
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
            <span className="text-[#0F1117]">Trent&apos;anni di lavoro</span>
            <br />
            <span className="grad-lime">sul campo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
            Dal 1990 installiamo e manteniamo impianti per privati, aziende e strutture pubbliche
            nell&apos;area di Roma e provincia. Un unico interlocutore, senza subappalti sulle fasi critiche.
            Sede: <strong className="text-[#0F1117] font-semibold">Via Salaria 108D, Monterotondo (Roma)</strong>.
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
              Sabbioni Impianti raccoglie l&apos;esperienza iniziata nel 1990 con Elettrica Romana Nord S.R.L.
              Nel 2016 abbiamo ampliato i servizi agli impianti fotovoltaici e idraulici.
              Nel 2023 abbiamo ottenuto la certificazione SOA OS30 per grandi commesse e appalti pubblici.
              Seguiamo ogni progetto internamente — dalla progettazione all&apos;installazione fino alla manutenzione —
              mantenendo un rapporto diretto con il cliente per tutta la durata del cantiere.
            </p>

            <p className="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-[#5A9222]">Come lavoriamo</p>
            <div className="grid grid-cols-2 gap-3">
              {steps.map((v, i) => (
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
                {['OS30 SOA','F-GAS'].map(c => (
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
