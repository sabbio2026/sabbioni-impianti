import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle2, ArrowRight, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface ServiceData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  includes: string[];
  forWho: string[];
  benefit: string;
  faq: { q: string; a: string }[];
  faqSchema: object;
}

export default function ServicePage({ data }: { data: ServiceData }) {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.faqSchema) }}
      />
      <main className="bg-white pt-[72px]">

        {/* Breadcrumb */}
        <div className="bg-[#F7F9FC] border-b border-black/[0.06]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3 flex items-center gap-1.5 text-xs text-[#94A3B8]">
            <Link href="/" className="hover:text-[#8DC63F] transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/#servizi" className="hover:text-[#8DC63F] transition-colors">Servizi</Link>
            <ChevronRight size={11} />
            <span className="text-[#0F1117] font-medium">{data.badge}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-white pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
          <div className="blob-lime absolute -top-60 -right-40 h-[500px] w-[500px] rounded-full pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="badge mb-6">{data.badge}</div>
              <h1 className="mb-5 text-[clamp(32px,5vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
                <span className="text-[#0F1117]">{data.title}</span>
                <br />
                <span className="grad-lime">{data.titleHighlight}</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#64748B]">
                {data.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contatti" className="btn-primary rounded-xl">
                  Richiedi un sopralluogo <ArrowRight size={17} />
                </Link>
                <a href="tel:+390690069123" className="btn-secondary rounded-xl flex items-center gap-2">
                  <Phone size={16} /> +39 06 900 69 123
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Includes + ForWho */}
        <section className="bg-[#F7F9FC] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

              <div>
                <p className="mb-5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222]">Cosa include</p>
                <ul className="space-y-3">
                  {data.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-[#8DC63F]" />
                      <span className="text-sm leading-relaxed text-[#0F1117]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222]">Per chi è</p>
                <ul className="mb-8 space-y-2.5">
                  {data.forWho.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8DC63F]" />
                      <span className="text-sm leading-relaxed text-[#64748B]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-[#8DC63F]/20 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222]">Beneficio concreto</p>
                  <p className="text-sm leading-relaxed text-[#64748B]">{data.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="mb-3 text-center text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A9222]">Domande frequenti</p>
            <h2 className="mb-10 text-center text-[clamp(24px,3.5vw,38px)] font-extrabold tracking-[-0.02em] text-[#0F1117]">
              Hai domande su questo servizio?
            </h2>
            <FAQAccordion items={data.faq} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F9FC] py-16 md:py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="mb-3 text-2xl font-extrabold text-[#0F1117]">Hai un progetto?</h2>
            <p className="mb-8 text-base text-[#64748B]">
              Veniamo a vedere il lavoro di persona. Preventivo scritto entro 48 ore.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#contatti" className="btn-primary rounded-xl">
                Richiedi un sopralluogo <ArrowRight size={17} />
              </Link>
              <a href="tel:+390690069123" className="btn-secondary rounded-xl flex items-center gap-2">
                <Phone size={16} /> Chiamaci
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
