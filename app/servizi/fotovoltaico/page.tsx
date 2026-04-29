import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Impianti Fotovoltaici a Roma e Monterotondo",
  description: "Installazione impianti fotovoltaici con accumulo a Roma, Monterotondo e provincia. Pratiche GSE incluse. Oltre 30 anni di esperienza. Richiedi un sopralluogo gratuito.",
  alternates: { canonical: "https://www.sabbioniimpianti.it/servizi/fotovoltaico" },
  openGraph: {
    title: "Impianti Fotovoltaici a Roma e Monterotondo | Sabbioni Impianti",
    description: "Installazione fotovoltaico con accumulo a Roma e Monterotondo. Pratiche GSE incluse. Richiedi sopralluogo gratuito.",
    url: "https://www.sabbioniimpianti.it/servizi/fotovoltaico",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quanto costa un impianto fotovoltaico?", acceptedAnswer: { "@type": "Answer", text: "Il costo varia in base alla potenza installata, alla tipologia di copertura e all'eventuale sistema di accumulo. Facciamo una valutazione gratuita prima di qualsiasi preventivo." } },
    { "@type": "Question", name: "Quanto si risparmia con il fotovoltaico?", acceptedAnswer: { "@type": "Answer", text: "Dipende dai consumi e dalla dimensione dell'impianto. In media un impianto residenziale da 3–6 kW copre il 60–80% del fabbisogno annuo. Forniamo una stima basata sui consumi reali." } },
    { "@type": "Question", name: "Ci sono incentivi attivi nel 2025?", acceptedAnswer: { "@type": "Answer", text: "Sì, esistono incentivi come la detrazione fiscale del 50% per il residenziale e altri meccanismi per le aziende. Le condizioni cambiano frequentemente: contattaci per un aggiornamento." } },
    { "@type": "Question", name: "Gestite anche le pratiche con il GSE?", acceptedAnswer: { "@type": "Answer", text: "Sì, gestiamo internamente tutta la documentazione necessaria per l'accesso agli incentivi e la connessione alla rete." } },
  ],
};

export default function Page() {
  return (
    <ServicePage data={{
      badge: "Fotovoltaico",
      title: "Impianti fotovoltaici con accumulo",
      titleHighlight: "a Roma e Monterotondo",
      subtitle: "Installiamo impianti fotovoltaici per abitazioni e aziende nell'area di Roma e Monterotondo. Dalla progettazione alle pratiche GSE, dall'installazione al monitoraggio della produzione.",
      includes: [
        "Analisi dei consumi e dimensionamento impianto",
        "Fornitura e installazione pannelli fotovoltaici",
        "Sistema di accumulo (batterie) su richiesta",
        "Ottimizzatori di potenza",
        "Monitoraggio remoto della produzione",
        "Pratiche GSE per accesso agli incentivi",
        "Collaudo e documentazione tecnica",
      ],
      forWho: [
        "Proprietari di abitazioni e ville",
        "Aziende con coperture industriali o commerciali",
        "Attività commerciali che vogliono ridurre la bolletta",
        "Condomìni interessati all'autoconsumo collettivo",
      ],
      benefit: "Un impianto fotovoltaico dimensionato sui tuoi consumi reali riduce la dipendenza dalla rete e abbatte i costi energetici nel tempo. Gestiamo anche tutte le pratiche burocratiche, comprese quelle per gli incentivi GSE.",
      faq: [
        { q: "Quanto costa un impianto fotovoltaico?", a: "Il costo varia in base alla potenza installata, alla tipologia di copertura e all'eventuale sistema di accumulo. Facciamo una valutazione gratuita prima di qualsiasi preventivo." },
        { q: "Quanto si risparmia con il fotovoltaico?", a: "Dipende dai consumi e dalla dimensione dell'impianto. In media un impianto residenziale da 3–6 kW copre il 60–80% del fabbisogno annuo. Forniamo una stima basata sui consumi reali." },
        { q: "Ci sono incentivi attivi nel 2025?", a: "Sì, esistono incentivi come la detrazione fiscale del 50% per il residenziale e altri meccanismi per le aziende. Le condizioni cambiano frequentemente: contattaci per un aggiornamento." },
        { q: "Quanto dura l'installazione?", a: "Un impianto residenziale si installa in 1–2 giorni lavorativi. Per impianti industriali i tempi dipendono dalla complessità del progetto." },
        { q: "Gestite anche le pratiche con il GSE?", a: "Sì, gestiamo internamente tutta la documentazione necessaria per l'accesso agli incentivi e la connessione alla rete." },
      ],
      faqSchema,
    }} />
  );
}
