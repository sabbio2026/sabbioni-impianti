"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Wind, Droplets, Sun, Shield, Home, CheckCircle2 } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const svc = [
  { icon: Zap,      title: "Impianti Elettrici",  sub: "Civili · Industriali · Ospedalieri", color: "#8DC63F",
    desc: "Progettazione e realizzazione impianti BT/MT per ogni tipologia, incluse sale operatorie e ambienti ad alta criticità.",
    tags: ["Cabine MT/BT", "Quadri BT", "Forza Motrice", "BUS Management"] },
  { icon: Shield,   title: "Impianti Speciali",   sub: "Sicurezza · TVCC · Antincendio",      color: "#4A90D9",
    desc: "Videosorveglianza IP 4K, antintrusione, controllo accessi, antincendio e antenne TV-SAT per ambienti civili e industriali.",
    tags: ["TVCC 4K", "Antintrusione", "Antincendio", "Antenne TV-SAT"] },
  { icon: Wind,     title: "Condizionamento",      sub: "Climatizzazione · VRF · AHU",        color: "#06B6D4",
    desc: "Sistemi VRF multi-split, centrali trattamento aria e free-cooling ad alta efficienza energetica. Certificazione F-GAS.",
    tags: ["VRF Multi-split", "AHU", "Free-cooling", "F-GAS Cert."] },
  { icon: Droplets, title: "Termoidraulica",       sub: "Riscaldamento · Idraulica",           color: "#F59E0B",
    desc: "Impianti di riscaldamento, distribuzione fluidi e sanitaria industriale. Pompe di calore e pannelli radianti.",
    tags: ["Pompe di calore", "Pannelli Radianti", "Distribuzione", "Sanitaria Ind."] },
  { icon: Sun,      title: "Fotovoltaico",          sub: "Solare · Storage · IoT",             color: "#F97316",
    desc: "Impianti fotovoltaici industriali con accumulo BESS, ottimizzatori di potenza e monitoraggio remoto IoT.",
    tags: ["Ottimizzatori", "BESS Storage", "IoT Monitor", "Pratiche GSE"] },
  { icon: Home,     title: "Domotica",              sub: "Smart Building · Automazione",       color: "#A855F7",
    desc: "Building management con KNX, Z-Wave e app mobile per il controllo intelligente di edifici residenziali e commerciali.",
    tags: ["KNX Protocol", "App Mobile", "Energy Mgmt", "Scene Auto"] },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servizi" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28 overflow-hidden">
      <div className="blob-lime absolute -top-60 right-0 h-[500px] w-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5"><Zap size={11} /> Servizi</div>
          <h2 className="mx-auto max-w-2xl text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Tutto ciò che serve,</span>
            <br />
            <span className="grad-lime">un solo partner</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#64748B] leading-relaxed">
            Dalla consulenza iniziale alla manutenzione programmata. Team certificati,
            tecnologia all&apos;avanguardia, zero intermediari.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {svc.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: E }}
              className="s-card group p-5 md:p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${s.color}14`, border: `1.5px solid ${s.color}30` }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <h3 className="mb-1 text-lg font-bold text-[#0F1117]">{s.title}</h3>
              <p className="mb-3 text-xs font-semibold tracking-wide" style={{ color: s.color }}>{s.sub}</p>
              <p className="mb-5 text-sm leading-relaxed text-[#64748B]">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-y-1.5">
                {s.tags.map(t => (
                  <li key={t} className="flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
                    <CheckCircle2 size={10} style={{ color: s.color }} className="flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-14 flex justify-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}>
          <button onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary rounded-xl">
            Parla con un tecnico <Zap size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
