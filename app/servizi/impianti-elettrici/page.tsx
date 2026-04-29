import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Impianti Elettrici in tutto il Centro Italia",
  description: "Impianti elettrici civili e industriali in tutto il Centro Italia. Progettazione, installazione, collaudo e dichiarazione di conformità. Operiamo in Lazio, Umbria, Toscana, Marche e Abruzzo. SOA OS30. Richiedi un sopralluogo gratuito.",
  alternates: { canonical: "https://www.sabbioniimpianti.it/servizi/impianti-elettrici" },
  openGraph: {
    title: "Impianti Elettrici in tutto il Centro Italia | Sabbioni Impianti",
    description: "Impianti elettrici civili e industriali in tutto il Centro Italia. Progettazione, installazione e collaudo. Richiedi sopralluogo gratuito.",
    url: "https://www.sabbioniimpianti.it/servizi/impianti-elettrici",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quanto costa un impianto elettrico civile?", acceptedAnswer: { "@type": "Answer", text: "Il costo dipende dalla metratura, dal numero di punti luce e prese e dallo stato dell'impianto esistente. Facciamo sempre un sopralluogo prima di dare un preventivo scritto." } },
    { "@type": "Question", name: "È obbligatorio adeguare l'impianto elettrico?", acceptedAnswer: { "@type": "Answer", text: "Non esiste un obbligo generale, ma in caso di ristrutturazione, vendita o cambio di destinazione d'uso l'adeguamento è necessario per ottenere la dichiarazione di conformità." } },
    { "@type": "Question", name: "Cosa include la dichiarazione di conformità?", acceptedAnswer: { "@type": "Answer", text: "La dichiarazione di conformità certifica che l'impianto è stato realizzato secondo le norme vigenti. È obbligatoria per nuovi impianti e ristrutturazioni. La rilasciamo al termine di ogni lavoro." } },
    { "@type": "Question", name: "In quali zone operate?", acceptedAnswer: { "@type": "Answer", text: "Operiamo in tutto il Centro Italia: Lazio, Umbria, Toscana, Marche e Abruzzo. La sede è a Monterotondo (Roma), ma seguiamo commesse su tutto il territorio del Centro Italia." } },
  ],
};

export default function Page() {
  return (
    <ServicePage data={{
      badge: "Impianti Elettrici",
      title: "Impianti elettrici civili e industriali",
      titleHighlight: "in tutto il Centro Italia",
      subtitle: "Progettiamo e realizziamo impianti elettrici per abitazioni, uffici, capannoni e strutture commerciali in tutto il Centro Italia. Dalla progettazione al collaudo, documentazione tecnica inclusa.",
      includes: [
        "Progettazione dell'impianto elettrico",
        "Quadri elettrici BT e cabine MT/BT",
        "Forza motrice e illuminazione",
        "Messa a terra e sistemi di protezione",
        "Adeguamento alle normative vigenti",
        "Collaudo e dichiarazione di conformità",
        "Documentazione tecnica completa",
      ],
      forWho: [
        "Privati che ristrutturano casa o costruiscono",
        "Aziende e attività commerciali",
        "Condomìni e gestori immobiliari",
        "Imprese edili e costruttori",
        "Enti pubblici e strutture istituzionali",
      ],
      benefit: "Un impianto elettrico realizzato a regola d'arte riduce i rischi di guasto e incendio, abbassa i consumi e mantiene la conformità normativa nel tempo. Rilasciamo tutta la documentazione necessaria per assicurazioni, rogiti e pratiche edilizie.",
      faq: [
        { q: "Quanto costa un impianto elettrico civile?", a: "Il costo dipende dalla metratura, dal numero di punti luce e prese e dallo stato dell'impianto esistente. Facciamo sempre un sopralluogo prima di dare un preventivo scritto." },
        { q: "È obbligatorio adeguare l'impianto elettrico?", a: "Non esiste un obbligo generale, ma in caso di ristrutturazione, vendita o cambio di destinazione d'uso l'adeguamento è necessario per ottenere la dichiarazione di conformità." },
        { q: "Cosa include la dichiarazione di conformità?", a: "La dichiarazione di conformità certifica che l'impianto è stato realizzato secondo le norme vigenti. È obbligatoria per nuovi impianti e ristrutturazioni. La rilasciamo al termine di ogni lavoro." },
        { q: "In quali zone operate?", a: "Operiamo in tutto il Centro Italia: Lazio, Umbria, Toscana, Marche e Abruzzo. La sede è a Monterotondo (Roma), ma seguiamo commesse su tutto il territorio del Centro Italia." },
      ],
      faqSchema,
    }} />
  );
}
