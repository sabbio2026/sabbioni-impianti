import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  { q: "In quali zone operate?", a: "Operiamo in tutto il Centro Italia: Lazio, Umbria, Toscana, Marche e Abruzzo. La sede è a Monterotondo (Roma), ma seguiamo commesse su tutto il territorio del Centro Italia." },
  { q: "Fate sopralluoghi gratuiti?", a: "Sì. Il sopralluogo tecnico è gratuito e senza impegno. Preferiamo sempre vedere il lavoro di persona prima di fare un preventivo." },
  { q: "Lavorate solo per privati?", a: "No. Lavoriamo per privati, aziende, attività commerciali, condomìni e strutture pubbliche. Tra i nostri clienti ci sono strutture ospedaliere, universitarie e del Ministero della Difesa." },
  { q: "Quanti anni di esperienza avete?", a: "Oltre 30 anni. L'attività nasce nel 1990 con Elettrica Romana Nord S.R.L. e si è evoluta in Sabbioni Impianti S.R.L. Nel 2023 abbiamo ottenuto la certificazione SOA OS30." },
  { q: "Avete certificazioni?", a: "Sì. Siamo certificati SOA OS30, che ci abilita a operare su appalti pubblici e grandi commesse. I nostri tecnici sono in possesso del patentino F-GAS per gli impianti di climatizzazione." },
  { q: "Quanto tempo ci vuole per avere un preventivo?", a: "Dopo il sopralluogo, inviamo il preventivo scritto entro 48 ore lavorative con materiali, tempi e costi dettagliati." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="badge mb-5">FAQ</div>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="text-[#0F1117]">Domande </span>
            <span className="grad-lime">frequenti</span>
          </h2>
          <p className="mt-3 max-w-md text-base text-[#64748B]">
            Le risposte alle domande più comuni che riceviamo.
          </p>
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
