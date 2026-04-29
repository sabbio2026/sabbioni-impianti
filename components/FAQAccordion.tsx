"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="s-card overflow-hidden rounded-xl">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="text-sm font-semibold text-[#0F1117]">{item.q}</span>
            <ChevronDown
              size={16}
              className={`flex-shrink-0 text-[#8DC63F] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-4">
              <p className="text-sm leading-relaxed text-[#64748B]">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
