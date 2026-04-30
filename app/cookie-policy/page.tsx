import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
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

          <div className="badge mb-6">Cookie</div>
          <h1 className="text-[clamp(26px,4vw,40px)] font-extrabold text-[#0F1117] mb-3 tracking-tight">Cookie Policy</h1>
          <p className="text-xs text-[#94A3B8] mb-10">Ultimo aggiornamento: aprile 2026</p>

          <p className={p}>
            Il sito <span className="font-semibold text-[#0F1117]">www.sabbioniimpianti.it</span> utilizza cookie e tecnologie simili. La presente Cookie Policy spiega cosa sono, quali utilizziamo e come gestirli, in conformità al D.Lgs. 196/2003 (Codice Privacy), al Provvedimento del Garante del 10 giugno 2021 e al GDPR.
          </p>

          <h2 className={h2}>1. Cosa sono i cookie</h2>
          <p className={p}>
            I cookie sono piccoli file di testo che i siti visitati inviano al browser, dove vengono memorizzati per essere poi ritrasmessi alla successiva visita. Permettono al sito di ricordare le tue azioni e preferenze (lingua, consenso, ecc.) per un determinato periodo di tempo.
          </p>

          <h2 className={h2}>2. Cookie utilizzati da questo sito</h2>

          <h3 className={h3}>2.1 Cookie tecnici — necessari (nessun consenso richiesto)</h3>
          <p className={p}>Questi cookie sono indispensabili al funzionamento del sito e non possono essere disabilitati.</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#F7F9FC]">
                  <th className="text-left px-3 py-2 border border-black/[0.07] font-semibold text-[#0F1117]">Nome</th>
                  <th className="text-left px-3 py-2 border border-black/[0.07] font-semibold text-[#0F1117]">Finalità</th>
                  <th className="text-left px-3 py-2 border border-black/[0.07] font-semibold text-[#0F1117]">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border border-black/[0.07] text-[#64748B]">cookie-consent</td>
                  <td className="px-3 py-2 border border-black/[0.07] text-[#64748B]">Memorizza la preferenza sui cookie (localStorage)</td>
                  <td className="px-3 py-2 border border-black/[0.07] text-[#64748B]">Persistente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={h3}>2.2 Cookie analitici (consenso richiesto)</h3>
          <p className={p}>
            Previo tuo consenso, possono essere attivati cookie analitici per raccogliere informazioni aggregate sull&apos;utilizzo del sito (pagine visitate, durata della sessione, provenienza del traffico). Questi dati ci aiutano a migliorare il sito. Attualmente utilizziamo <span className="font-semibold text-[#0F1117]">Vercel Speed Insights</span> in modalità anonima (nessun dato personale raccolto, nessun consenso richiesto). Servizi analitici aggiuntivi potranno essere attivati solo previo tuo consenso esplicito.
          </p>

          <h3 className={h3}>2.3 Cookie di marketing e profilazione (consenso richiesto)</h3>
          <p className={p}>
            Cookie di terze parti (es. Google Ads, Meta Pixel) utilizzati per mostrare annunci pertinenti ai tuoi interessi. Attualmente <span className="font-semibold text-[#0F1117]">non attivi</span>. Verranno installati solo previo tuo consenso esplicito tramite il banner.
          </p>

          <h2 className={h2}>3. Come gestire i cookie</h2>

          <h3 className={h3}>3.1 Tramite il banner del sito</h3>
          <p className={p}>
            Alla prima visita viene mostrato un banner che ti permette di accettare tutti i cookie o di selezionare solo quelli necessari. Puoi modificare la tua scelta in qualsiasi momento cancellando i dati del sito dal browser (vedi sotto).
          </p>

          <h3 className={h3}>3.2 Tramite il browser</h3>
          <p className={p}>Puoi bloccare o eliminare i cookie direttamente dalle impostazioni del tuo browser:</p>
          <ul className={ul}>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#5A9222] hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#5A9222] hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#5A9222] hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#5A9222] hover:underline">Microsoft Edge</a></li>
          </ul>
          <p className={p}>
            La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
          </p>

          <h2 className={h2}>4. Titolare del trattamento</h2>
          <p className={p}>
            <span className="font-semibold text-[#0F1117]">Sabbioni Impianti S.R.L.</span> — Via Salaria 108D, 00015 Monterotondo (RM)<br />
            Email: <a href="mailto:marzia@sabbionimpianti.it" className="text-[#5A9222] hover:underline">marzia@sabbionimpianti.it</a>
          </p>
          <p className={p}>
            Per ulteriori informazioni sul trattamento dei dati personali consulta la{" "}
            <a href="/privacy-policy" className="text-[#5A9222] hover:underline">Privacy Policy</a>.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
