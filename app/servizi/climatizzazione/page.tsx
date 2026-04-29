import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Climatizzazione e Condizionamento in tutto il Centro Italia",
  description: "Installazione e manutenzione impianti di climatizzazione in tutto il Centro Italia. Split, VRF, pompe di calore. Patentino F-GAS. Operiamo in Lazio, Umbria, Toscana, Marche e Abruzzo. Richiedi preventivo gratuito.",
  alternates: { canonical: "https://www.sabbioniimpianti.it/servizi/climatizzazione" },
  openGraph: {
    title: "Climatizzazione in tutto il Centro Italia | Sabbioni Impianti",
    description: "Installazione e manutenzione climatizzatori in tutto il Centro Italia. Split, VRF, pompe di calore. F-GAS. Richiedi preventivo.",
    url: "https://www.sabbioniimpianti.it/servizi/climatizzazione",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Cosa è il patentino F-GAS e perché è importante?", acceptedAnswer: { "@type": "Answer", text: "Il patentino F-GAS è la certificazione obbligatoria per chi lavora con gas refrigeranti. Chi non ce l'ha non può legalmente installare o fare manutenzione su impianti di climatizzazione. Tutti i nostri tecnici sono certificati F-GAS." } },
    { "@type": "Question", name: "Ogni quanto va fatta la manutenzione ai climatizzatori?", acceptedAnswer: { "@type": "Answer", text: "Almeno una volta all'anno, preferibilmente prima dell'estate. La manutenzione include pulizia filtri, controllo gas, verifica componenti e test di funzionamento." } },
    { "@type": "Question", name: "Qual è la differenza tra split e VRF?", acceptedAnswer: { "@type": "Answer", text: "Un sistema split è adatto per ambienti singoli o piccoli appartamenti. Il VRF è un sistema centralizzato per edifici più grandi, con una sola unità esterna che serve più ambienti." } },
    { "@type": "Question", name: "Installate qualsiasi marca?", acceptedAnswer: { "@type": "Answer", text: "Lavoriamo con i principali marchi del mercato. In fase di preventivo consigliamo la soluzione più adatta alle esigenze e al budget del cliente." } },
  ],
};

export default function Page() {
  return (
    <ServicePage data={{
      badge: "Climatizzazione",
      title: "Installazione e manutenzione",
      titleHighlight: "impianti di climatizzazione",
      subtitle: "Split, VRF, pompe di calore e centrali trattamento aria per residenziale, commerciale e industriale in tutto il Centro Italia. Tutti i tecnici sono certificati F-GAS.",
      includes: [
        "Installazione sistemi split e multi-split",
        "Impianti VRF per edifici commerciali e industriali",
        "Pompe di calore aria-aria e aria-acqua",
        "Centrali di trattamento aria (AHU)",
        "Manutenzione programmata annuale",
        "Assistenza guasti e interventi urgenti",
        "Certificazione F-GAS su ogni intervento",
      ],
      forWho: [
        "Privati e condomìni",
        "Uffici e studi professionali",
        "Attività commerciali e negozi",
        "Capannoni e strutture industriali",
        "Strutture ricettive e alberghiere",
      ],
      benefit: "Un impianto di climatizzazione installato correttamente consuma meno e dura di più. La manutenzione programmata previene i guasti nei mesi critici e mantiene l'efficienza energetica nel tempo.",
      faq: [
        { q: "Cosa è il patentino F-GAS e perché è importante?", a: "Il patentino F-GAS è la certificazione obbligatoria per chi lavora con gas refrigeranti. Chi non ce l'ha non può legalmente installare o fare manutenzione su impianti di climatizzazione. Tutti i nostri tecnici sono certificati F-GAS." },
        { q: "Ogni quanto va fatta la manutenzione ai climatizzatori?", a: "Almeno una volta all'anno, preferibilmente prima dell'estate. La manutenzione include pulizia filtri, controllo gas, verifica componenti e test di funzionamento." },
        { q: "Qual è la differenza tra split e VRF?", a: "Un sistema split è adatto per ambienti singoli o piccoli appartamenti. Il VRF è un sistema centralizzato per edifici più grandi, con una sola unità esterna che serve più ambienti." },
        { q: "Installate qualsiasi marca?", a: "Lavoriamo con i principali marchi del mercato. In fase di preventivo consigliamo la soluzione più adatta alle esigenze e al budget del cliente." },
      ],
      faqSchema,
    }} />
  );
}
