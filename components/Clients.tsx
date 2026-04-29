"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const clients = [
  { name: "Policlinico Gemelli",                      sector: "Ospedaliero" },
  { name: "Università La Sapienza",                   sector: "Universitario" },
  { name: "C.C.C. Costruzioni Civili Cerasi S.p.A.", sector: "Costruzioni" },
  { name: "Gruppo CTY S.r.l.",                        sector: "Industriale" },
  { name: "Centro Polifunzionale di Sperimentazione", sector: "Difesa" },
  { name: "Ministero della Difesa",                   sector: "P.A. / Difesa" },
  { name: "Scuola Interforze NBC Rieti",               sector: "Difesa" },
  { name: "Comando Legione Carabinieri Lazio",         sector: "Sicurezza" },
  { name: "AVC S.r.l.",                               sector: "Industriale" },
  { name: "Perfect Car",                              sector: "Commerciale" },
  { name: "Sales S.p.A.",                             sector: "Industriale" },
  { name: "Pontificio Ateneo Salesiano",              sector: "Istruzione" },
  { name: "Comune di Scandriglia",                    sector: "Pubblica Amm." },
  { name: "Comune di Nerola",                         sector: "Pubblica Amm." },
  { name: "Simmetrico Group S.r.l.",                  sector: "Industriale" },
];

const testimonials = [
  { q: "Professionalità e competenza fuori dal comune. Hanno gestito il blocco operatorio con zero criticità e tempi rispettati al 100%.", a: "Ing. Marco Rossi", r: "Responsabile Tecnico — Struttura Ospedaliera" },
  { q: "L'impianto fotovoltaico funziona perfettamente, con resa superiore alle previsioni. Team eccezionale.", a: "Dott.ssa Laura Bianchi", r: "Energy Manager — Ente Pubblico" },
  { q: "Collaboriamo da oltre 10 anni. Ogni progetto è gestito con rigore tecnico assoluto. Il nostro partner di riferimento.", a: "Ing. Giuseppe Ferrari", r: "Facility Manager — Università" },
];

export default function Clients() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clienti" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28 overflow-hidden">
      <div className="blob-lime absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div className="mb-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5"><Star size={11} /> Clienti &amp; Trust</div>
          <h2 className="mx-auto max-w-2xl text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Scelti dai migliori</span>
            <br />
            <span className="grad-lime">da trent&apos;anni</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#64748B]">
            Istituzioni pubbliche, ospedali, università e grandi aziende si affidano
            a Sabbioni Impianti per le infrastrutture più critiche.
          </p>
        </motion.div>

        {/* Client name grid — clean, no initials */}
        <motion.div className="mb-12 grid grid-cols-2 gap-2.5 md:grid-cols-4"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: E }}>
          {clients.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05, ease: E }}
              className="s-card flex flex-col justify-center rounded-xl p-4 text-center">
              <p className="text-sm font-bold text-[#0F1117] leading-snug">{c.name}</p>
              <p className="mt-1 text-[11px] font-medium text-[#94A3B8]">{c.sector}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.a}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease: E }}
              className="s-card flex flex-col rounded-2xl p-5 md:p-6">
              <Quote size={22} className="mb-3 text-[#8DC63F]/40 flex-shrink-0" />
              <p className="mb-5 flex-1 text-sm leading-relaxed text-[#64748B] italic">&ldquo;{t.q}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-black/[0.06] pt-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20">
                  <span className="text-xs font-bold text-[#5A9222]">{t.a[0]}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#0F1117]">{t.a}</p>
                  <p className="truncate text-xs text-[#94A3B8]">{t.r}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array(5).fill(0).map((_,j) => <Star key={j} size={11} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certs */}
        <motion.div className="flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: E }}>
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] mr-2">
            <ShieldCheck size={14} className="text-[#8DC63F]" /> Certificazioni
          </div>
          {['OS30 SOA','F-GAS'].map(c => (
            <div key={c} className="s-card flex items-center gap-2 rounded-xl px-4 py-2">
              <span className="text-sm font-bold text-[#1A1F6B]">{c}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
