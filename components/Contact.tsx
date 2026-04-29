"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as const;

const info = [
  { icon: Phone,  label: "Telefono", val: "+39 06 900 69 123",          sub: "Lun–Ven 08:00–18:00", href: "tel:+390690069123",              c: "#8DC63F" },
  { icon: Mail,   label: "Email",    val: "marzia@sabbioniimpianti.it",  sub: "Risposta entro 24h",  href: "mailto:marzia@sabbioniimpianti.it",  c: "#4A90D9" },
  { icon: MapPin, label: "Sede",     val: "Via Salaria 108D",            sub: "00015 Monterotondo (RM)", href: "https://maps.google.com/?q=Via+Salaria+108D+Monterotondo+Roma", c: "#F97316" },
  { icon: Clock,  label: "Orari",    val: "Lun–Ven 08:00–18:00",        sub: "Servizi su appuntamento", href: "#",                              c: "#A855F7" },
];

const svcs = ["Impianti elettrici civili","Impianti industriali","Impianti ospedalieri","Fotovoltaico","Condizionamento","Termoidraulica","Domotica & Sicurezza","Manutenzione"];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name:"", company:"", phone:"", email:"", service:"", message:"", privacy: false });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(p => ({ ...p, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Errore nell'invio. Riprova o contattaci per telefono.");
    } finally {
      setBusy(false);
    }
  };

  const inputCls = "w-full rounded-xl border border-black/[0.1] bg-[#F7F9FC] px-4 py-3 text-sm text-[#0F1117] placeholder-[#94A3B8] transition-all";
  const labelCls = "mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]";

  return (
    <section id="contatti" ref={ref} className="relative bg-white py-16 md:py-28 overflow-hidden">
      <div className="blob-lime absolute -top-60 -left-40 h-[500px] w-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div className="mb-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}>
          <div className="badge mb-5">Contatti</div>
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Richiedi un sopralluogo</span>
            <br />
            <span className="grad-lime">o un preventivo</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#64748B]">
            Veniamo a vedere il lavoro di persona prima di fare un preventivo. Risposta entro 24 ore lavorative.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div className="space-y-3 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: E }}>
            {info.map((it, i) => (
              <motion.a key={it.label} href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.38, delay: i * 0.09, ease: E }}
                className="s-card group flex items-start gap-4 rounded-xl p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background:`${it.c}12`, border:`1.5px solid ${it.c}28` }}>
                  <it.icon size={17} style={{ color: it.c }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8]">{it.label}</p>
                  <p className="text-sm font-semibold text-[#0F1117] truncate">{it.val}</p>
                  <p className="mt-0.5 text-xs text-[#94A3B8]">{it.sub}</p>
                </div>
                <ArrowRight size={14} className="mt-2 flex-shrink-0 text-black/15 transition-colors group-hover:text-[#8DC63F]" />
              </motion.a>
            ))}

            <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.42, ease: E }}
              className="rounded-xl border border-[#8DC63F]/25 bg-[#F7F9FC] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 56 56" className="h-12 w-12" aria-label="Deutsche Bank" role="img">
                    <rect width="56" height="56" rx="8" fill="#0018A8" />
                    <path d="M14 42 L42 14" stroke="white" strokeWidth="9" strokeLinecap="square" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5A9222]">Finanziamento</p>
                  <p className="text-sm font-semibold text-[#0F1117]">Possibilità di finanziamento con Deutsche Bank</p>
                  <p className="mt-1 text-sm text-[#64748B]">Richiedi un progetto con supporto finanziario dedicato al tuo impianto.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: E }}>
            <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-7 md:p-8 shadow-[0_4px_32px_rgba(0,0,0,0.08)]">
              <div className="blob-lime pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full" />

              {sent ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-14 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8DC63F]/12"
                    style={{ boxShadow: "0 0 40px rgba(141,198,63,0.2)" }}>
                    <CheckCircle size={28} className="text-[#5A9222]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0F1117]">Richiesta inviata!</h3>
                  <p className="max-w-xs text-sm text-[#64748B]">
                    Il nostro team tecnico ti risponderà entro 24 ore lavorative.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative z-10">
                  <h3 className="mb-6 text-lg font-bold text-[#0F1117]">Descrivi il tuo progetto</h3>

                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelCls}>Nome e Cognome *</label>
                      <input type="text" name="name" required placeholder="Mario Rossi"
                        value={form.name} onChange={onChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Azienda / Ente</label>
                      <input type="text" name="company" placeholder="Azienda S.r.l."
                        value={form.company} onChange={onChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Telefono *</label>
                      <input type="tel" name="phone" required placeholder="+39 06 900 69 123"
                        value={form.phone} onChange={onChange} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email *</label>
                      <input type="email" name="email" required placeholder="mario@azienda.it"
                        value={form.email} onChange={onChange} className={inputCls} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={labelCls}>Servizio di interesse</label>
                    <select name="service" value={form.service} onChange={onChange}
                      className={`${inputCls} appearance-none`}>
                      <option value="">Seleziona un servizio</option>
                      {svcs.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className={labelCls}>Descrivi il progetto</label>
                    <textarea name="message" rows={3} placeholder="Tipo di impianto, metratura, struttura..."
                      value={form.message} onChange={onChange} className={`${inputCls} resize-none`} />
                  </div>

                  <div className="mb-6 flex items-start gap-3">
                    <input type="checkbox" id="priv" name="privacy" required
                      checked={form.privacy} onChange={onChange}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#8DC63F]" />
                    <label htmlFor="priv" className="text-xs leading-relaxed text-[#94A3B8]">
                      Acconsento al trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR).
                    </label>
                  </div>

                  {error && (
                    <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                  )}
                  <button type="submit" disabled={busy}
                    className="btn-primary w-full justify-center rounded-xl py-4 disabled:opacity-60">
                    {busy
                      ? <><div className="h-4 w-4 rounded-full border-2 border-[#0F1117]/30 border-t-[#0F1117] animate-spin" />Invio…</>
                      : <>Invia richiesta <Send size={15} /></>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.07] shadow-sm" style={{ height: 200 }}
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.38, ease: E }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11876.826609012785!2d12.606453!3d42.053529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13254f30d2898765%3A0x89e40d2e897e5f4b!2sVia+Salaria%2C+Monterotondo+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%" height="100%" style={{ border: 0 }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Sabbioni Impianti — Via Salaria 108D, Monterotondo"
          />
        </motion.div>
      </div>
    </section>
  );
}
