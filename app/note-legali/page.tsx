import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Note Legali",
  robots: { index: false, follow: false },
};

const h2 = "text-lg font-bold text-[#0F1117] mt-10 mb-3";
const p  = "text-sm leading-relaxed text-[#64748B] mb-3";
const ul = "list-disc pl-5 space-y-1 text-sm text-[#64748B] mb-3";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[72px]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-24">

          <div className="badge mb-6">Legale</div>
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold text-[#0F1117] mb-3 tracking-tight">Note Legali</h1>
          <p className="text-xs text-[#94A3B8] mb-10">Ultimo aggiornamento: aprile 2026</p>

          <h2 className={h2}>1. Proprietà del sito</h2>
          <p className={p}>
            Il sito <span className="font-semibold text-[#0F1117]">www.sabbioniimpianti.it</span> è di proprietà di:
          </p>
          <p className={p}>
            <span className="font-semibold text-[#0F1117]">Sabbioni Impianti S.R.L.</span><br />
            Via Salaria 108D, 00015 Monterotondo (RM)<br />
            P.IVA 13649651000<br />
            Email: <a href="mailto:marzia@sabbionimpianti.it" className="text-[#5A9222] hover:underline">marzia@sabbionimpianti.it</a><br />
            Tel: <a href="tel:+390690069123" className="text-[#5A9222] hover:underline">+39 06 900 69 123</a>
          </p>

          <h2 className={h2}>2. Proprietà intellettuale</h2>
          <p className={p}>
            Tutti i contenuti presenti su questo sito — testi, immagini, loghi, grafica, codice sorgente — sono di proprietà di Sabbioni Impianti S.R.L. o concessi in licenza, e sono protetti dalle norme sul diritto d&apos;autore (L. 633/1941) e dalla normativa comunitaria applicabile.
          </p>
          <p className={p}>
            È vietata la riproduzione, anche parziale, la distribuzione, la modifica o l&apos;utilizzo dei contenuti del sito per scopi commerciali senza previa autorizzazione scritta del titolare.
          </p>

          <h2 className={h2}>3. Esclusione di responsabilità</h2>
          <p className={p}>
            Le informazioni presenti sul sito hanno carattere puramente informativo. Sabbioni Impianti S.R.L. si riserva il diritto di modificare, aggiornare o rimuovere i contenuti in qualsiasi momento senza preavviso.
          </p>
          <p className={p}>
            Il Titolare non è responsabile per:
          </p>
          <ul className={ul}>
            <li>Eventuali errori od omissioni nei contenuti del sito.</li>
            <li>Danni diretti o indiretti derivanti dall&apos;utilizzo o dall&apos;impossibilità di utilizzo del sito.</li>
            <li>Contenuti di siti esterni eventualmente raggiungibili tramite link presenti nel sito.</li>
            <li>Interruzioni temporanee del servizio per manutenzione o cause tecniche.</li>
          </ul>

          <h2 className={h2}>4. Link a siti esterni</h2>
          <p className={p}>
            Il sito può contenere link a siti web di terze parti. Tali link sono forniti a titolo informativo. Sabbioni Impianti S.R.L. non ha controllo su detti siti e non è responsabile del loro contenuto, delle loro politiche sulla privacy né delle loro pratiche.
          </p>

          <h2 className={h2}>5. Legge applicabile e foro competente</h2>
          <p className={p}>
            Le presenti note legali sono regolate dalla legge italiana. Per qualsiasi controversia derivante dall&apos;utilizzo del sito è competente in via esclusiva il Tribunale di Roma.
          </p>

          <h2 className={h2}>6. Contatti</h2>
          <p className={p}>
            Per qualsiasi comunicazione relativa al presente sito scrivere a{" "}
            <a href="mailto:marzia@sabbionimpianti.it" className="text-[#5A9222] hover:underline">marzia@sabbionimpianti.it</a>.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
