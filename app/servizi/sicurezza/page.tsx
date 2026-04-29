import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Impianti di Sicurezza a Roma e Monterotondo",
  description: "Videosorveglianza, antintrusione e antincendio a Roma, Monterotondo e provincia. Installazione e manutenzione sistemi di sicurezza. Richiedi un sopralluogo gratuito.",
  alternates: { canonical: "https://www.sabbioniimpianti.it/servizi/sicurezza" },
  openGraph: {
    title: "Impianti di Sicurezza a Roma e Monterotondo | Sabbioni Impianti",
    description: "Videosorveglianza, antintrusione e antincendio a Roma e Monterotondo. Richiedi sopralluogo gratuito.",
    url: "https://www.sabbioniimpianti.it/servizi/sicurezza",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Posso vedere le telecamere da smartphone?", acceptedAnswer: { "@type": "Answer", text: "Sì, tutti i sistemi di videosorveglianza che installiamo sono accessibili da remoto tramite app smartphone, sia iOS che Android." } },
    { "@type": "Question", name: "L'impianto antintrusione richiede un contratto con un istituto di vigilanza?", acceptedAnswer: { "@type": "Answer", text: "No, non è obbligatorio. L'impianto può funzionare in autonomia con notifiche dirette al proprietario. Il collegamento con la vigilanza è un'opzione aggiuntiva." } },
    { "@type": "Question", name: "Installate impianti antincendio conformi alle normative?", acceptedAnswer: { "@type": "Answer", text: "Sì, installiamo sistemi di rilevazione incendi conformi alle norme UNI EN 54 e alle normative vigenti per civile e industriale." } },
    { "@type": "Question", name: "Quanto tempo ci vuole per installare un sistema di videosorveglianza?", acceptedAnswer: { "@type": "Answer", text: "Per un'installazione residenziale standard bastano in genere 1–2 giorni lavorativi. Per sistemi più complessi i tempi dipendono dalla planimetria e dal numero di telecamere." } },
  ],
};

export default function Page() {
  return (
    <ServicePage data={{
      badge: "Impianti di Sicurezza",
      title: "Videosorveglianza, antintrusione",
      titleHighlight: "e antincendio a Roma",
      subtitle: "Progettiamo e installiamo sistemi di sicurezza per abitazioni, attività commerciali e strutture industriali nell'area di Roma, Monterotondo e provincia.",
      includes: [
        "Videosorveglianza IP con visione da remoto",
        "Sistemi antintrusione con centrale e sensori",
        "Controllo accessi",
        "Rilevazione e allarme antincendio",
        "Diffusione sonora e antenne TV-SAT",
        "Configurazione app per gestione da smartphone",
        "Manutenzione e assistenza tecnica",
      ],
      forWho: [
        "Privati e famiglie",
        "Negozi e attività commerciali",
        "Uffici e studi professionali",
        "Capannoni e magazzini",
        "Strutture pubbliche e istituzionali",
      ],
      benefit: "Un sistema di sicurezza ben progettato protegge l'immobile e le persone. Per le attività commerciali, la presenza di un impianto certificato può abbassare i costi assicurativi.",
      faq: [
        { q: "Posso vedere le telecamere da smartphone?", a: "Sì, tutti i sistemi di videosorveglianza che installiamo sono accessibili da remoto tramite app smartphone, sia iOS che Android." },
        { q: "L'impianto antintrusione richiede un contratto con un istituto di vigilanza?", a: "No, non è obbligatorio. L'impianto può funzionare in autonomia con notifiche dirette al proprietario. Il collegamento con la vigilanza è un'opzione aggiuntiva." },
        { q: "Installate impianti antincendio conformi alle normative?", a: "Sì, installiamo sistemi di rilevazione incendi conformi alle norme UNI EN 54 e alle normative vigenti per civile e industriale." },
        { q: "Quanto tempo ci vuole per installare un sistema di videosorveglianza?", a: "Per un'installazione residenziale standard bastano in genere 1–2 giorni lavorativi. Per sistemi più complessi i tempi dipendono dalla planimetria e dal numero di telecamere." },
      ],
      faqSchema,
    }} />
  );
}
