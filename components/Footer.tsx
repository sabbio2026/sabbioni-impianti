import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Impianti Elettrici", href: "/servizi/impianti-elettrici" },
  { label: "Fotovoltaico",       href: "/servizi/fotovoltaico" },
  { label: "Climatizzazione",    href: "/servizi/climatizzazione" },
  { label: "Impianti Speciali",  href: "/servizi/sicurezza" },
  { label: "Manutenzione",       href: "/servizi/manutenzione" },
  { label: "Termoidraulica",     href: "/#servizi" },
  { label: "Domotica",           href: "/#servizi" },
];
const navLinks = [
  { label:"Chi Siamo", href:"#chi-siamo" },{ label:"Servizi", href:"#servizi" },
  { label:"Portfolio", href:"#progetti" },{ label:"Clienti", href:"#clienti" },
  { label:"Contatti",  href:"#contatti" },{ label:"Privacy", href:"#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1117]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="Sabbioni Impianti S.R.L." width={140} height={50} className="h-9 w-auto mb-5 brightness-0 invert" />
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Oltre 30 anni di esperienza in impianti elettrici, fotovoltaico,
              climatizzazione e manutenzione. Operiamo in tutto il Centro Italia.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+390690069123" className="flex items-center gap-2 text-white/40 hover:text-[#8DC63F] text-sm transition-colors">
                <Phone size={12} />+39 06 900 69 123
              </a>
              <a href="mailto:marzia@sabbioniimpianti.it" className="flex items-center gap-2 text-white/40 hover:text-[#8DC63F] text-sm transition-colors">
                <Mail size={12} />marzia@sabbioniimpianti.it
              </a>
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <MapPin size={12} />Via Salaria 108D, 00015 Monterotondo
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Servizi</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/40 hover:text-[#8DC63F] text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#8DC63F]/40 group-hover:bg-[#8DC63F] transition-colors" />{s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Link Utili</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 hover:text-[#8DC63F] text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#8DC63F]/40 group-hover:bg-[#8DC63F] transition-colors" />{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5">Hai un progetto?</h4>
            <div className="p-4 rounded-xl border border-[#8DC63F]/20 bg-[#8DC63F]/6 mb-4">
              <p className="text-white/45 text-sm leading-relaxed mb-4">Preventivo gratuito. Team tecnico disponibile entro 24h.</p>
              <a href="#contatti" className="btn-primary text-sm px-4 py-2.5 rounded-lg inline-flex">
                Contattaci <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['OS30','F-GAS'].map(c => (
                <span key={c} className="text-xs text-[#8DC63F] border border-[#8DC63F]/20 px-2.5 py-1 rounded-lg bg-[#8DC63F]/8 font-semibold">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Sabbioni Impianti S.R.L. — P.IVA 13649651000</p>
          <div className="flex gap-4">
            {["Privacy Policy","Cookie Policy","Note Legali"].map(t => (
              <a key={t} href="#" className="text-white/20 hover:text-white/45 text-xs transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
