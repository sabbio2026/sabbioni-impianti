"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const save = (analytics: boolean) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, analytics, marketing: analytics, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0F1117] border-t border-white/[0.08] px-6 py-5">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-white/55 max-w-2xl leading-relaxed">
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie analitici per migliorare l&apos;esperienza di navigazione. Leggi la nostra{" "}
          <Link href="/cookie-policy" className="text-[#8DC63F] hover:underline">Cookie Policy</Link>
          {" "}e la{" "}
          <Link href="/privacy-policy" className="text-[#8DC63F] hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => save(false)}
            className="px-4 py-2 rounded-lg border border-white/20 text-white/55 text-sm hover:border-white/40 hover:text-white/80 transition-colors"
          >
            Solo necessari
          </button>
          <button
            onClick={() => save(true)}
            className="px-4 py-2 rounded-lg bg-[#8DC63F] text-[#0F1117] text-sm font-semibold hover:bg-[#9ED44F] transition-colors"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
