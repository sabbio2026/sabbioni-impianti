"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import CircuitCanvas from "./CircuitCanvas";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      {/* Circuit board animation — only client side */}
      {mounted && <CircuitCanvas />}

      {/* Subtle vignette so center content area stays clean */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 100%)" }} />

      {/* Green blob corner accents */}
      <div className="blob-lime absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full pointer-events-none" />
      <div className="blob-navy absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8 flex justify-center"
        >
          <Image src="/logo.svg" alt="Sabbioni Impianti S.R.L." width={280} height={100} priority className="h-16 w-auto" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6 max-w-4xl text-[clamp(36px,6.5vw,80px)] font-extrabold leading-[1.06] tracking-[-0.03em]"
        >
          <span className="text-[#0F1117]">Impianti tecnici</span>
          <br />
          <span className="grad-lime">in tutto il Centro Italia</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 max-w-xl text-[17px] leading-relaxed text-[#64748B]"
        >
          Dal 1990 installiamo impianti per abitazioni, aziende, attività commerciali e condomìni
          in tutto il Centro Italia.{" "}
          <span className="text-[#0F1117] font-semibold">Dalla progettazione al collaudo, un unico interlocutore.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          <button onClick={() => go("contatti")} className="btn-primary rounded-xl">
            Richiedi un sopralluogo <ArrowRight size={17} />
          </button>
          <button onClick={() => go("servizi")} className="btn-secondary rounded-xl">
            Scopri i servizi
          </button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8"
        >
          {[
            ["30+", "Anni di esperienza"],
            ["500+", "Impianti realizzati"],
            ["OS30", "Certificazione SOA"],
            ["F-GAS", "Patentino frigoristi"],
          ].map(([val, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[#5A9222] font-bold text-sm">{val}</span>
              <span className="text-[#94A3B8] text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go("servizi")}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-black/20 hover:text-[#8DC63F] transition-colors"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </motion.button>

      {/* Bottom fade to stats section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F7F9FC] to-transparent" />
    </section>
  );
}
