import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

const h2 = "text-lg font-bold text-[#0F1117] mt-10 mb-3";
const h3 = "text-sm font-bold text-[#0F1117] mt-6 mb-1.5";
const p  = "text-sm leading-relaxed text-[#64748B] mb-3";
const ul = "list-disc pl-5 space-y-1 text-sm text-[#64748B] mb-3";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[72px]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-24">

          <div className="badge mb-6">Informativa sulla privacy</div>
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold text-[#0F1117] mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-[#94A3B8] mb-10">Ultimo aggiornamento: aprile 2026</p>

          <p className={p}>
            La presente informativa è resa ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR) agli utenti che interagiscono con il sito web{" "}
            <span className="font-semibold text-[#0F1117]">www.sabbioniimpianti.it</span>.
          </p>

          <h2 className={h2}>1. Titolare del trattamento</h2>
          <p className={p}>
            <span className="font-semibold text-[#0F1117]">Sabbioni Impianti S.R.L.</span><br />
            Via Salaria 108D, 00015 Monterotondo (RM)<br />
            P.IVA 13649651000<br />
            Email: <a href="mailto:marzia@sabbionimpianti.it" className="text-[#5A9222] hover:underline">marzia@sabbionimpianti.it</a><br />
            Tel: <a href="tel:+390690069123" className="text-[#5A9222] hover:underline">+39 06 900 69 123</a>
          </p>

          <h2 className={h2}>2. Dati raccolti e finalità del trattamento</h2>

          <h3 className={h3}>2.1 Modulo di contatto</h3>
          <p className={p}>
            Quando compili il modulo di contatto raccogliamo: nome, azienda (facoltativo), numero di telefono, indirizzo email, tipo di servizio richiesto e messaggio.
            Questi dati vengono trattati per rispondere alla tua richiesta e, se necessario, per eseguire misure precontrattuali.
          </p>
          <p className={p}><span className="font-semibold text-[#0F1117]">Base giuridica:</span> Art. 6.1.b GDPR — esecuzione di misure precontrattuali su richiesta dell&apos;interessato.</p>

          <h3 className={h3}>2.2 Dati di navigazione e performance</h3>
          <p className={p}>
            Il sito utilizza Vercel Speed Insights per monitorare le prestazioni tecniche (tempi di caricamento, Web Vitals). Questi dati sono anonimi e non consentono l&apos;identificazione degli utenti.
          </p>
          <p className={p}><span className="font-semibold text-[#0F1117]">Base giuridica:</span> Art. 6.1.f GDPR — legittimo interesse al corretto funzionamento del sito.</p>

          <h3 className={h3}>2.3 Cookie analitici e di marketing</h3>
          <p className={p}>
            Previo tuo consenso esplicito, possono essere attivati cookie analitici (es. Google Analytics) e/o di marketing (es. Meta Pixel) per analizzare il traffico e mostrare annunci pertinenti. Puoi revocare il consenso in qualsiasi momento tramite il banner cookie o le impostazioni del browser.
          </p>
          <p className={p}><span className="font-semibold text-[#0F1117]">Base giuridica:</span> Art. 6.1.a GDPR — consenso dell&apos;interessato.</p>

          <h2 className={h2}>3. Periodo di conservazione</h2>
          <ul className={ul}>
            <li>Dati del modulo di contatto: conservati per 24 mesi dalla raccolta, salvo obblighi di legge.</li>
            <li>Dati di performance (Speed Insights): aggregati e anonimi, conservati secondo la policy di Vercel.</li>
            <li>Cookie tecnici: durata indicata nella Cookie Policy.</li>
          </ul>

          <h2 className={h2}>4. Destinatari e responsabili del trattamento</h2>
          <p className={p}>I dati possono essere comunicati ai seguenti soggetti, nominati responsabili del trattamento ai sensi dell&apos;art. 28 GDPR:</p>
          <ul className={ul}>
            <li><span className="font-semibold text-[#0F1117]">Supabase Inc.</span> (USA) — archiviazione dei dati del modulo di contatto. Trasferimento verso Paesi terzi coperto da Clausole Contrattuali Standard (SCC).</li>
            <li><span className="font-semibold text-[#0F1117]">Resend Inc.</span> (USA) — invio delle notifiche email. Trasferimento verso Paesi terzi coperto da SCC.</li>
            <li><span className="font-semibold text-[#0F1117]">Vercel Inc.</span> (USA) — hosting del sito e Speed Insights. Trasferimento verso Paesi terzi coperto da SCC.</li>
          </ul>
          <p className={p}>I dati non vengono venduti né ceduti a terzi per finalità proprie.</p>

          <h2 className={h2}>5. Diritti dell&apos;interessato</h2>
          <p className={p}>Hai il diritto di:</p>
          <ul className={ul}>
            <li>Accedere ai tuoi dati personali (art. 15 GDPR)</li>
            <li>Rettificare dati inesatti (art. 16 GDPR)</li>
            <li>Ottenere la cancellazione («diritto all&apos;oblio», art. 17 GDPR)</li>
            <li>Limitare il trattamento (art. 18 GDPR)</li>
            <li>Ricevere i dati in formato strutturato — portabilità (art. 20 GDPR)</li>
            <li>Opporti al trattamento (art. 21 GDPR)</li>
            <li>Revocare il consenso in qualsiasi momento, senza pregiudizio per la liceità del trattamento precedente</li>
          </ul>
          <p className={p}>
            Per esercitare i tuoi diritti scrivi a{" "}
            <a href="mailto:marzia@sabbionimpianti.it" className="text-[#5A9222] hover:underline">marzia@sabbionimpianti.it</a>.
            Risponderemo entro 30 giorni.
          </p>

          <h2 className={h2}>6. Diritto di reclamo</h2>
          <p className={p}>
            Hai il diritto di proporre reclamo al Garante per la protezione dei dati personali (
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#5A9222] hover:underline">www.garanteprivacy.it</a>
            ), Piazza Venezia 11, 00187 Roma.
          </p>

          <h2 className={h2}>7. Modifiche alla presente informativa</h2>
          <p className={p}>
            Il Titolare si riserva di aggiornare la presente informativa. La data di ultima modifica è indicata in cima alla pagina. Per modifiche sostanziali verrà fornita comunicazione tramite banner sul sito.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
