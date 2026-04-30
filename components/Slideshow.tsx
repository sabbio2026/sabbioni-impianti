"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const slides = [
  { src: "/gallery/r01.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r02.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r03.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r04.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r05.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r06.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r07.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r08.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r09.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r10.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r11.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r12.jpg",  caption: "Domotica e automazione" },
  { src: "/gallery/r13.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r14.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/r15.jpg",  caption: "Impianto elettrico residenziale" },
  { src: "/gallery/r16.jpg",  caption: "Domotica e automazione" },
  { src: "/gallery/r17.jpg",  caption: "Impianto elettrico residenziale" },
  { src: "/gallery/i01.jpg",  caption: "Impianto elettrico residenziale" },
  { src: "/gallery/i02.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/i03.jpg",  caption: "Impianto elettrico residenziale" },
  { src: "/gallery/i04.jpg",  caption: "Impianto illuminazione residenziale" },
  { src: "/gallery/c01.jpg",  caption: "Illuminazione commerciale" },
  { src: "/gallery/c02.jpg",  caption: "Illuminazione commerciale" },
  { src: "/gallery/c03.jpg",  caption: "Quadri elettrici e distribuzione" },
  { src: "/gallery/c04.jpg",  caption: "Quadri elettrici e distribuzione" },
  { src: "/gallery/c05.jpg",  caption: "Quadri elettrici e distribuzione" },
  { src: "/gallery/c06.jpg",  caption: "Illuminazione commerciale" },
  { src: "/gallery/c07.jpg",  caption: "Impianto fotovoltaico" },
  { src: "/gallery/i05.png",  caption: "Quadri elettrici e distribuzione" },
];

const INTERVAL = 4500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [dir, setDir]   = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, direction: number) => {
    setDir(direction);
    setIndex(next);
  }, []);

  const prev = useCallback(() => go((index - 1 + slides.length) % slides.length, -1), [index, go]);
  const next = useCallback(() => go((index + 1) % slides.length,  1), [index, go]);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDir(1);
      setIndex(i => (i + 1) % slides.length);
    }, INTERVAL);
  }, []);

  useEffect(() => { startTimer(); return () => { if (timer.current) clearInterval(timer.current); }; }, [startTimer]);

  const pause  = () => { if (timer.current) clearInterval(timer.current); };
  const resume = () => startTimer();

  return (
    <section
      id="galleria"
      className="relative w-full overflow-hidden bg-[#0A0E1A]"
      style={{ height: "88vh", minHeight: 500 }}
    >
      {/* ── Sfondo sfocato (riempie le bande laterali/superiori) ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={"bg-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt=""
            fill
            className="object-cover blur-2xl scale-110 brightness-30"
            sizes="100vw"
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Foto principale — intera senza ritagli ── */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={"img-" + index}
          custom={dir}
          initial={{ opacity: 0, x: dir * 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -80 }}
          transition={{ duration: 0.65, ease: E }}
          className="absolute inset-0 flex items-center justify-center"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[index].src}
              alt={slides[index].caption}
              fill
              className="object-contain"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
          {/* gradiente solo in basso per caption */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center pointer-events-none px-6 z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: E }}
            className="text-white/85 text-sm md:text-base font-medium tracking-wide text-center drop-shadow-lg"
          >
            {slides[index].caption}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-5 z-10 text-white/40 text-xs font-mono tabular-nums select-none">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { go(i, i > index ? 1 : -1); startTimer(); }}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-5 h-1.5 bg-[#8DC63F]" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Frecce */}
      <button
        onClick={() => { prev(); startTimer(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white transition-all duration-200"
        aria-label="Precedente"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={() => { next(); startTimer(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white transition-all duration-200"
        aria-label="Successivo"
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
}
