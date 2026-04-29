"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Building2, ShieldCheck } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

type Cat = "Tutti" | "Industriale" | "Difesa" | "Pubblico" | "Fotovoltaico";

const catColor: Record<string, string> = {
  Industriale:  "#8DC63F",
  Difesa:       "#1A1F6B",
  Pubblico:     "#4A90D9",
  Fotovoltaico: "#F97316",
};

const projects = [
  { id:1,  n:"01", client:"Policlinico Universitario Gemelli",        work:"Impianti Elettrici MT/BT — Blocco Operatorio",         loc:"Roma",  cat:"Pubblico",     tags:["500 kVA","UPS 200 kVA","EVAC","Impianto Terre"] },
  { id:2,  n:"02", client:"Università La Sapienza",                   work:"Impianti Speciali — 12 Edifici Campus",                loc:"Roma",  cat:"Pubblico",     tags:["350 IP Cam","Controllo Accessi","BMS","Fire Det."] },
  { id:3,  n:"03", client:"C.C.C. Costruzioni Civili Cerasi S.p.A.",  work:"Impianti elettrici e speciali",                        loc:"Roma",  cat:"Industriale",  tags:[] },
  { id:4,  n:"04", client:"Gruppo CTY S.r.l.",                        work:"Impianti elettrici, speciali e meccanici",             loc:"Roma",  cat:"Industriale",  tags:[] },
  { id:5,  n:"05", client:"Centro Polifunzionale di Sperimentazione", work:"Manutenzione cabine MT/BT e impianti climatizzazione", loc:"Roma",  cat:"Difesa",       tags:["Ministero della Difesa"] },
  { id:6,  n:"06", client:"Scuola Interforze NBC Rieti",              work:"Impianti speciali",                                    loc:"Rieti", cat:"Difesa",       tags:[] },
  { id:7,  n:"07", client:"Comando Legione Carabinieri Lazio",        work:"Impianti per efficientamento energetico",              loc:"Lazio", cat:"Difesa",       tags:[] },
  { id:8,  n:"08", client:"AVC S.r.l.",                               work:"Impianti elettrici e speciali",                        loc:"Roma",  cat:"Industriale",  tags:[] },
  { id:9,  n:"09", client:"Perfect Car",                              work:"Impianto fotovoltaico",                                loc:"Roma",  cat:"Fotovoltaico", tags:[] },
  { id:10, n:"10", client:"Sales S.p.A.",                             work:"Manutenzione cabina MT/BT",                            loc:"Roma",  cat:"Industriale",  tags:[] },
  { id:11, n:"11", client:"Pontificio Ateneo Salesiano",              work:"Impianti idrici",                                     loc:"Roma",  cat:"Pubblico",     tags:[] },
  { id:12, n:"12", client:"Comune di Scandriglia",                    work:"Illuminazione stradale — efficientamento energetico",  loc:"Rieti", cat:"Pubblico",     tags:[] },
  { id:13, n:"13", client:"Comune di Nerola",                         work:"Illuminazione stradale — efficientamento energetico",  loc:"Roma",  cat:"Pubblico",     tags:[] },
  { id:14, n:"14", client:"Simmetrico Group S.r.l.",                  work:"Impianti elettrici, speciali, meccanici ed idraulici", loc:"Roma",  cat:"Industriale",  tags:[] },
];

const cats: Cat[] = ["Tutti", "Industriale", "Difesa", "Pubblico", "Fotovoltaico"];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Cat>("Tutti");
  const filtered = active === "Tutti" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="progetti" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28 overflow-hidden">
      <div className="blob-navy absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5"><Building2 size={11} /> Lavori &amp; Clienti</div>
          <h2 className="mb-6 text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Alcuni dei lavori</span>
            <br />
            <span className="grad-lime">che parlano per noi</span>
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
                transition={{ duration: 0.3, delay: i * 0.04, ease: E }}
                className="proj-row group">
                <div className="grid grid-cols-[36px_1fr] md:grid-cols-[40px_1fr_auto_100px] items-center gap-3 px-5 py-4 md:gap-8 md:px-6 md:py-5">
                  <span className="proj-n">{p.n}</span>

                  <div>
                    <div className="mb-0.5 flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-[#0F1117] leading-tight md:text-base">{p.client}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase"
                        style={{ color: catColor[p.cat], background: `${catColor[p.cat]}14` }}>
                        {p.cat}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] md:text-sm">{p.work}</p>
                    {p.tags.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1 md:hidden">
                        {p.tags.map(t => (
                          <span key={t} className="rounded-md border border-black/[0.07] bg-[#F7F9FC] px-2 py-0.5 text-[10px] text-[#94A3B8]">{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-[#94A3B8] md:hidden">
                      <MapPin size={10} /> {p.loc}
                    </div>
                  </div>

                  {p.tags.length > 0 ? (
                    <div className="hidden md:flex flex-wrap gap-1.5 justify-end">
                      {p.tags.map(t => (
                        <span key={t} className="rounded-md border border-black/[0.07] bg-[#F7F9FC] px-2 py-0.5 text-[11px] text-[#94A3B8]">{t}</span>
                      ))}
                    </div>
                  ) : <div className="hidden md:block" />}

                  <div className="hidden md:flex items-center justify-end gap-1 text-xs text-[#94A3B8]">
                    <MapPin size={11} /> {p.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications */}
        <motion.div className="mt-8 flex flex-wrap justify-center items-center gap-3"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: E }}>
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] mr-2">
            <ShieldCheck size={14} className="text-[#8DC63F]" /> Certificazioni
          </div>
          {["OS30 SOA", "F-GAS"].map(c => (
            <div key={c} className="s-card flex items-center gap-2 rounded-xl px-4 py-2">
              <span className="text-sm font-bold text-[#1A1F6B]">{c}</span>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-[#94A3B8]">
          Portfolio completo disponibile su richiesta — oltre 500 impianti completati
        </p>
      </div>
    </section>
  );
}
