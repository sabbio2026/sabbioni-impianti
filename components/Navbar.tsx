"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#servizi",    label: "Servizi" },
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#progetti",  label: "Progetti" },
  { href: "#clienti",   label: "Clienti" },
  { href: "#contatti",  label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(l.href.slice(1)); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-black/[0.07] shadow-[0_1px_16px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#" onClick={go("#home")} className="flex-shrink-0">
            <Image src="/logo.svg" alt="Sabbioni Impianti" width={148} height={52} priority className="h-[38px] w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={go(l.href)}
                className={`nav-a ${active === l.href.slice(1) ? "on" : ""}`}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="tel:+390690069123"
              className="hidden md:flex items-center gap-1.5 text-sm text-[#0F1117]/45 hover:text-[#8DC63F] transition-colors">
              <Phone size={13} strokeWidth={2.5} /> +39 06 900 69 123
            </a>
            <a href="#contatti" onClick={go("#contatti")} className="btn-primary px-5 py-2.5 text-sm hidden md:inline-flex rounded-xl">
              Preventivo gratuito
            </a>
            <button onClick={() => setOpen(!open)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.1] text-[#0F1117]/55 hover:text-[#0F1117] transition-colors">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white flex flex-col pt-[72px] pb-8 px-8 border-l border-black/[0.07] shadow-2xl"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
              <nav className="flex flex-col mt-8">
                {links.map((l, i) => (
                  <motion.a key={l.href} href={l.href} onClick={go(l.href)}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="py-4 border-b border-black/[0.06] text-lg font-semibold text-[#0F1117]/60 hover:text-[#0F1117] transition-colors">
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a href="tel:+390690069123" className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[#8DC63F]/40 text-[#5A9222] font-semibold text-sm">
                  <Phone size={15} /> +39 06 900 69 123
                </a>
                <a href="#contatti" onClick={go("#contatti")} className="btn-primary justify-center py-3.5 rounded-xl text-sm">
                  Richiedi Preventivo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
