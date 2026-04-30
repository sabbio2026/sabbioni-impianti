"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slideshow, { type Slide } from "./Slideshow";

const residenzialeSlides: Slide[] = [
  { src: "/gallery/01_WhatsApp Image 2026-04-30 at 12.26.08 (5).jpeg", caption: "Illuminazione cucina residenziale" },
  { src: "/gallery/01_WhatsApp Image 2026-04-30 at 12.26.08.jpeg",     caption: "Illuminazione soggiorno residenziale" },
  { src: "/gallery/01_WhatsApp Image 2026-04-30 at 12.26.09 (3).jpeg", caption: "Illuminazione bagno di lusso" },
  { src: "/gallery/02_WhatsApp Image 2026-04-30 at 12.26.08 (6).jpeg", caption: "Illuminazione camera da letto" },
  { src: "/gallery/02_WhatsApp Image 2026-04-30 at 12.26.09 (1).jpeg", caption: "Illuminazione residenziale" },
  { src: "/gallery/02_WhatsApp Image 2026-04-30 at 12.26.09 (4).jpeg", caption: "Illuminazione bagno di lusso" },
  { src: "/gallery/03_WhatsApp Image 2026-04-30 at 12.26.08 (1).jpeg", caption: "Illuminazione camera da letto" },
  { src: "/gallery/03_WhatsApp Image 2026-04-30 at 12.26.09 (5).jpeg", caption: "Illuminazione bagno di pregio" },
  { src: "/gallery/03_WhatsApp Image 2026-04-30 at 12.26.09.jpeg",     caption: "Illuminazione bagno residenziale" },
  { src: "/gallery/04_WhatsApp Image 2026-04-30 at 12.26.08 (2).jpeg", caption: "Illuminazione camera da letto" },
  { src: "/gallery/04_WhatsApp Image 2026-04-30 at 12.27.42 (1).jpeg", caption: "Illuminazione residenziale" },
  { src: "/gallery/05_WhatsApp Image 2026-04-30 at 12.26.08 (3).jpeg", caption: "Illuminazione bagno residenziale" },
  { src: "/gallery/05_WhatsApp Image 2026-04-30 at 12.27.42 (2).jpeg", caption: "Illuminazione bagno di pregio" },
  { src: "/gallery/06_WhatsApp Image 2026-04-30 at 12.26.08 (4).jpeg", caption: "Illuminazione residenziale" },
  { src: "/gallery/06_WhatsApp Image 2026-04-30 at 12.27.42 (3).jpeg", caption: "Illuminazione residenziale" },
  { src: "/gallery/07_WhatsApp Image 2026-04-30 at 12.27.42 (4).jpeg", caption: "Illuminazione ingresso residenziale" },
  { src: "/gallery/08_WhatsApp Image 2026-04-30 at 12.27.42 (5).jpeg", caption: "Illuminazione scala residenziale" },
  { src: "/gallery/09_WhatsApp Image 2026-04-30 at 12.27.42.jpeg",     caption: "Impianti residenziali" },
  { src: "/gallery/10_WhatsApp Image 2026-04-30 at 12.27.43 (1).jpeg", caption: "Illuminazione corridoio" },
  { src: "/gallery/11_WhatsApp Image 2026-04-30 at 12.27.43 (2).jpeg", caption: "Domotica e automazione" },
  { src: "/gallery/12_WhatsApp Image 2026-04-30 at 12.27.43 (3).jpeg", caption: "Quadro elettrico residenziale" },
  { src: "/gallery/r01.jpg",      caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r03.jpg",      caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r12.jpg",      caption: "Domotica e automazione" },
  { src: "/gallery/r16.jpg",      caption: "Domotica e automazione" },
];

const industrialeSlides: Slide[] = [
  { src: "/gallery/ind_13.jpeg", caption: "Quadro elettrico BT" },
  { src: "/gallery/ind_12.jpeg", caption: "Quadri di automazione industriale" },
  { src: "/gallery/ind_11.jpeg", caption: "Cabina media tensione" },
  { src: "/gallery/ind_05.jpeg", caption: "Quadro elettrico di distribuzione" },
  { src: "/gallery/ind_03.jpeg", caption: "Cabina di trasformazione MT/BT" },
  { src: "/gallery/ind_01.jpeg", caption: "Impianto fotovoltaico" },
  { src: "/gallery/ind_02.jpeg", caption: "Impianto fotovoltaico commerciale" },
  { src: "/gallery/ind_04.jpeg", caption: "Impianto fotovoltaico" },
  { src: "/gallery/ind_10.jpeg", caption: "Impianto fotovoltaico industriale" },
  { src: "/gallery/ind_09.jpeg", caption: "Cablaggio strutturato" },
  { src: "/gallery/ind_08.jpeg", caption: "Impianto idraulico industriale" },
  { src: "/gallery/ind_07.jpeg", caption: "Illuminazione commerciale" },
  { src: "/gallery/ind_06.jpeg", caption: "Illuminazione commerciale" },
  { src: "/gallery/ind_14.jpeg", caption: "Impianto HVAC commerciale" },
  { src: "/gallery/i01.jpg",     caption: "Impianti commerciali" },
  { src: "/gallery/c01.jpg",     caption: "Illuminazione commerciale" },
  { src: "/gallery/c02.jpg",     caption: "Illuminazione commerciale" },
  { src: "/gallery/c05.jpg",     caption: "Quadri elettrici e distribuzione" },
  { src: "/gallery/c07.jpg",     caption: "Impianto fotovoltaico" },
];

type Tab = "residenziale" | "industriale";

export default function SlideshowTabs() {
  const [tab, setTab] = useState<Tab>("residenziale");

  return (
    <section id="galleria" className="bg-[#0A0E1A]">
      {/* Tab selector */}
      <div className="flex justify-center gap-2 pt-6 pb-4 px-4">
        {(["residenziale", "industriale"] as Tab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="relative px-6 py-2.5 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
            style={{ color: tab === t ? "#8DC63F" : "rgba(255,255,255,0.45)" }}
          >
            {t === "residenziale" ? "Residenziale" : "Industriale & Commerciale"}
            {tab === t && (
              <motion.span
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8DC63F] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Slideshow */}
      <Slideshow
        key={tab}
        slides={tab === "residenziale" ? residenzialeSlides : industrialeSlides}
      />
    </section>
  );
}
