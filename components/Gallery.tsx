"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

type Cat = "Tutti" | "Residenziale" | "Commerciale";

const photos: { src: string; cat: Exclude<Cat, "Tutti">; alt: string }[] = [
  // — Residenziale —
  { src: "/gallery/r01.jpg", cat: "Residenziale", alt: "Soggiorno — LED geometrico su soffitto grigio e libreria a muro" },
  { src: "/gallery/r02.jpg", cat: "Residenziale", alt: "Ingresso — LED strip circolare e porta laccata rossa" },
  { src: "/gallery/r03.jpg", cat: "Residenziale", alt: "Corridoio — LED lineare incassato su parquet a spina di pesce" },
  { src: "/gallery/r04.jpg", cat: "Residenziale", alt: "Sala pranzo — plafoniera LED circolare e cucina a vista" },
  { src: "/gallery/r06.jpg", cat: "Residenziale", alt: "Soggiorno — LED geometrico custom, pavimento marmo b/n" },
  { src: "/gallery/r07.jpg", cat: "Residenziale", alt: "Soffitto — LED geometrico a forma libera" },
  { src: "/gallery/r11.jpg", cat: "Residenziale", alt: "Scala — LED strip su muro ad arco" },
  { src: "/gallery/r12.jpg", cat: "Residenziale", alt: "Corridoio notte — LED strip, clima canalizzato, domotica" },
  { src: "/gallery/r15.jpg", cat: "Residenziale", alt: "Bagno — LED warm in travertino, doccia a pioggia" },
  { src: "/gallery/i01.jpg", cat: "Residenziale", alt: "Camera matrimoniale — LED geometrico e corridoio notte" },
  { src: "/gallery/i02.jpg", cat: "Residenziale", alt: "Camera — LED geometrico su soffitto grigio, parquet a spina di pesce" },
  { src: "/gallery/i03.jpg", cat: "Residenziale", alt: "Doppi bagni in travertino — LED warm e doppio lavabo" },
  { src: "/gallery/r16.jpg", cat: "Residenziale", alt: "Domotica Vimar — pannello touchscreen gestione luci" },
  { src: "/gallery/r17.jpg", cat: "Residenziale", alt: "Camera singola — LED strip perimetrale, parete verde salvia" },
  // — Commerciale / Industriale —
  { src: "/gallery/c01.jpg", cat: "Commerciale", alt: "Showroom materiale elettrico — LED sospesi su bancone" },
  { src: "/gallery/c02.jpg", cat: "Commerciale", alt: "Showroom — impianto LED industriale a pannelli" },
  { src: "/gallery/c03.jpg", cat: "Commerciale", alt: "Quadro elettrico BT — interruttore di manovra e busbars in rame" },
  { src: "/gallery/c04.jpg", cat: "Commerciale", alt: "Armadio di distribuzione industriale — cablaggio e ventilazione" },
  { src: "/gallery/c05.jpg", cat: "Commerciale", alt: "Quadro BT Schneider — cablaggio professionale" },
  { src: "/gallery/c06.jpg", cat: "Commerciale", alt: "Sala pubblica — LED strip su soffitto industriale" },
  { src: "/gallery/c07.jpg", cat: "Commerciale", alt: "Impianto fotovoltaico — pannelli su copertura a tegole" },
  { src: "/gallery/i05.png", cat: "Commerciale", alt: "Cabina elettrica MT/BT — quadri di distribuzione industriale" },
];

const cats: Cat[] = ["Tutti", "Residenziale", "Commerciale"];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Cat>("Tutti");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Tutti" ? photos : photos.filter(p => p.cat === active);

  const prev = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <section id="galleria" ref={ref} className="relative bg-[#F7F9FC] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5">Galleria</div>
          <h2 className="mb-6 text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">I lavori</span>
            <br />
            <span className="grad-lime">parlano da soli</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => { setActive(c); setLightbox(null); }}
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.03, ease: E }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={26} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9997] bg-black/92 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 z-10"
              onClick={() => setLightbox(null)}>
              <X size={26} />
            </button>

            {/* Prev */}
            <button className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 z-10 rounded-full hover:bg-white/10"
              onClick={e => { e.stopPropagation(); prev(); }}>
              <ChevronLeft size={32} />
            </button>

            {/* Next */}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 z-10 rounded-full hover:bg-white/10"
              onClick={e => { e.stopPropagation(); next(); }}>
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={800}
                height={1067}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="mt-3 text-center text-sm text-white/55">{filtered[lightbox].alt}</p>
              <p className="text-center text-xs text-white/25 mt-1">{lightbox + 1} / {filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
