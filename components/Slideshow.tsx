"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const slides = [
  { src: "/gallery/r01.jpg",  caption: "Soggiorno — LED geometrico custom" },
  { src: "/gallery/r11.jpg",  caption: "Scala — LED strip su muro ad arco" },
  { src: "/gallery/i02.jpg",  caption: "Camera matrimoniale — LED geometrico" },
  { src: "/gallery/r15.jpg",  caption: "Bagno — LED warm in travertino" },
  { src: "/gallery/r04.jpg",  caption: "Sala pranzo — plafoniera LED circolare" },
  { src: "/gallery/c01.jpg",  caption: "Showroom — impianto LED industriale" },
  { src: "/gallery/c07.jpg",  caption: "Fotovoltaico — impianto su copertura" },
  { src: "/gallery/r03.jpg",  caption: "Corridoio — LED lineare su parquet" },
  { src: "/gallery/r02.jpg",  caption: "Ingresso — porta laccata rossa e LED strip" },
  { src: "/gallery/r06.jpg",  caption: "Soggiorno — LED geometrico, marmo b/n" },
  { src: "/gallery/r07.jpg",  caption: "Soffitto — LED geometrico a forma libera" },
  { src: "/gallery/r12.jpg",  caption: "Corridoio notte — LED strip e domotica" },
  { src: "/gallery/i01.jpg",  caption: "Camera — LED geometrico e corridoio notte" },
  { src: "/gallery/i03.jpg",  caption: "Doppi bagni — LED warm in travertino" },
  { src: "/gallery/r16.jpg",  caption: "Domotica Vimar — pannello touchscreen" },
  { src: "/gallery/r17.jpg",  caption: "Camera singola — LED strip, parete verde" },
  { src: "/gallery/c02.jpg",  caption: "Showroom — pannelli LED sospesi" },
  { src: "/gallery/c03.jpg",  caption: "Quadro BT — busbars e cablaggio in rame" },
  { src: "/gallery/c04.jpg",  caption: "Armadio industriale — distribuzione e ventilazione" },
  { src: "/gallery/c05.jpg",  caption: "Quadro BT Schneider — cablaggio professionale" },
  { src: "/gallery/c06.jpg",  caption: "Sala pubblica — LED strip su soffitto industriale" },
  { src: "/gallery/i05.png",  caption: "Cabina MT/BT — quadri di distribuzione" },
];

const INTERVAL = 4500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setIndex(next);
  }, []);

  const prev = useCallback(() => {
    go((index - 1 + slides.length) % slides.length, -1);
  }, [index, go]);

  const next = useCallback(() => {
    go((index + 1) % slides.length, 1);
  }, [index, go]);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDir(1);
      setIndex(i => (i + 1) % slides.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [startTimer]);

  const pause = () => { if (timer.current) clearInterval(timer.current); };
  const resume = () => startTimer();

  return (
    <section id="slideshow" className="relative w-full overflow-hidden bg-[#0A0E1A]" style={{ height: "70vh", minHeight: 420 }}>

      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          initial={{ opacity: 0, x: dir * 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -80 }}
          transition={{ duration: 0.7, ease: E }}
          className="absolute inset-0"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].caption}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center pointer-events-none px-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: E }}
            className="text-white/80 text-sm md:text-base font-medium tracking-wide text-center drop-shadow"
          >
            {slides[index].caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-5 z-10 text-white/40 text-xs font-mono tabular-nums">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > index ? 1 : -1)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-5 h-1.5 bg-[#8DC63F]" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => { prev(); startTimer(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white transition-all duration-200"
        aria-label="Precedente"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => { next(); startTimer(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white transition-all duration-200"
        aria-label="Successivo"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
