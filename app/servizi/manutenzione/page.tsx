import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Manutenzione Impianti in tutto il Centro Italia",
  description: "Manutenzione ordinaria e straordinaria di impianti elettrici, meccanici e di climatizzazione in tutto il Centro Italia. Contratti programmati per aziende e condomìni. Operiamo in Lazio, Umbria, Toscana, Marche e Abruzzo. Richiedi preventivo.",
  alternates: { canonical: "https://www.sabbioniimpianti.it/servizi/manutenzione" },
  openGraph: {
    title: "Manutenzione Impianti in tutto il Centro Italia | Sabbioni Impianti",
    description: "Manutenzione impianti elettrici e meccanici in tutto il Centro Italia. Contratti programmati. Richiedi preventivo.",
    url: "https://www.sabbioniimpianti.it/servizi/manutenzione",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Ogni quanto va verificato un impianto elettrico?", acceptedAnswer: { "@type": "Answer", text: "Per gli impianti civili è consigliabile ogni 10 anni per impianti recenti e ogni 5 per impianti più vecchi. Per uso lavorativo e impianti industriali esistono obblighi normativi specifici." } },
    { "@type": "Question", name: "Gestite anche impianti che non avete installato voi?", acceptedAnswer: { "@type": "Answer", text: "Sì, prendiamo in carico la manutenzione di impianti esistenti, anche se non installati da noi. Facciamo prima un sopralluogo per valutare lo stato dell'impianto." } },
    { "@type": "Question", name: "Quanto costa un contratto di manutenzione?", acceptedAnswer: { "@type": "Answer", text: "Dipende dal tipo di impianto, dalla frequenza degli interventi e dalla tipologia della struttura. Facciamo sempre un sopralluogo preliminare prima di definire le condizioni contrattuali." } },
    { "@type": "Question", name: "Intervenite anche in caso di guasto urgente?", acceptedAnswer: { "@type": "Answer", text: "Sì, per i clienti con contratto di manutenzione garantiamo interventi in tempi prioritari." } },
  ],
};

export default function Page() {
  return (
    <ServicePage data={{
      badge: "Manutenzione",
      title: "Manutenzione impianti elettrici",
      titleHighlight: "e meccanici nel Centro Italia",
      subtitle: "Manutenzione ordinaria e straordinaria su impianti elettrici, cabine MT/BT e impianti di climatizzazione. Contratti programmati per aziende, condomìni e strutture commerciali in tutto il Centro Italia.",
      includes: [
        "Manutenzione ordinaria programmata",
        "Verifiche periodiche impianti elettrici",
        "Manutenzione cabine MT/BT",
        "Manutenzione impianti di climatizzazione",
        "Assistenza guasti e anomalie",
        "Aggiornamento documentazione tecnica",
        "Interventi su impianti non installati da noi",
      ],
      forWho: [
        "Aziende con impianti da gestire periodicamente",
        "Condomìni e amministratori immobiliari",
        "Attività commerciali e uffici",
        "Strutture pubbliche e istituzionali",
        "Proprietari di capannoni industriali",
      ],
      benefit: "La manutenzione programmata riduce i fermi impianto imprevisti, prolunga la vita dei sistemi e mantiene la conformità normativa. Avere un riferimento tecnico fisso significa non cercare un tecnico in emergenza.",
      faq: [
        { q: "Ogni quanto va verificato un impianto elettrico?", a: "Per gli impianti civili è consigliabile ogni 10 anni per impianti recenti e ogni 5 per impianti più vecchi. Per uso lavorativo e impianti industriali esistono obblighi normativi specifici." },
        { q: "Gestite anche impianti che non avete installato voi?", a: "Sì, prendiamo in carico la manutenzione di impianti esistenti, anche se non installati da noi. Facciamo prima un sopralluogo per valutare lo stato dell'impianto." },
        { q: "Quanto costa un contratto di manutenzione?", a: "Dipende dal tipo di impianto, dalla frequenza degli interventi e dalla tipologia della struttura. Facciamo sempre un sopralluogo preliminare prima di definire le condizioni contrattuali." },
        { q: "Intervenite anche in caso di guasto urgente?", a: "Sì, per i clienti con contratto di manutenzione garantiamo interventi in tempi prioritari." },
      ],
      faqSchema,
    }} />
  );
}
