import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://www.sabbioniimpianti.it";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Impianti Tecnici in tutto il Centro Italia | Sabbioni Impianti S.R.L.",
    template: "%s | Sabbioni Impianti S.R.L.",
  },
  description:
    "Impiantistica in tutto il Centro Italia dal 1990. Impianti elettrici civili, industriali e ospedalieri, fotovoltaico, condizionamento e termoidraulica. Operiamo in Lazio, Umbria, Toscana, Marche e Abruzzo. SOA OS30. Preventivo gratuito.",
  keywords: [
    "impiantistica Centro Italia",
    "impianti elettrici Centro Italia",
    "impiantistica Lazio",
    "impiantista Lazio",
    "impianti elettrici Lazio",
    "impiantistica Roma",
    "impianti elettrici Roma",
    "impianti elettrici Monterotondo",
    "impianti industriali Centro Italia",
    "impianti ospedalieri Centro Italia",
    "fotovoltaico Centro Italia",
    "fotovoltaico Lazio",
    "fotovoltaico Roma",
    "condizionamento Centro Italia",
    "condizionamento Lazio",
    "termoidraulica Centro Italia",
    "termoidraulica Roma",
    "domotica Lazio",
    "impianti civili Centro Italia",
    "impiantista Monterotondo",
    "Sabbioni Impianti",
    "OS30 SOA Centro Italia",
  ],
  authors: [{ name: "Sabbioni Impianti S.R.L." }],
  creator: "Sabbioni Impianti S.R.L.",
  publisher: "Sabbioni Impianti S.R.L.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: BASE_URL,
    siteName: "Sabbioni Impianti S.R.L.",
    title: "Impianti Tecnici in tutto il Centro Italia | Sabbioni Impianti S.R.L.",
    description:
      "Impiantistica in tutto il Centro Italia dal 1990. Impianti elettrici, fotovoltaico, condizionamento, termoidraulica. Lazio, Umbria, Toscana, Marche, Abruzzo. SOA OS30. Preventivo gratuito.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sabbioni Impianti S.R.L. — Impiantistica Lazio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impianti Tecnici in tutto il Centro Italia | Sabbioni Impianti S.R.L.",
    description: "Impiantistica in tutto il Centro Italia dal 1990. OS30 SOA. Preventivo gratuito.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: BASE_URL },
  category: "Impiantistica",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectricalContractor"],
      "@id": `${BASE_URL}/#business`,
      name: "Sabbioni Impianti S.R.L.",
      legalName: "Sabbioni Impianti S.R.L.",
      url: BASE_URL,
      telephone: "+39-06-900-69-123",
      email: "marzia@sabbioniimpianti.it",
      foundingDate: "1990",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Bonifico bancario, Assegno",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.svg`,
      },
      image: `${BASE_URL}/opengraph-image`,
      description:
        "Sabbioni Impianti S.R.L. — impiantistica elettrica, fotovoltaico, condizionamento e termoidraulica nel Lazio dal 1990. Certificazione SOA OS30, F-GAS. Clienti istituzionali in tutta Italia.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Salaria 108D",
        addressLocality: "Monterotondo",
        addressRegion: "Lazio",
        postalCode: "00015",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.029,
        longitude: 12.608,
      },
      hasMap: `https://maps.google.com/?q=Via+Salaria+108D+Monterotondo+Roma`,
      areaServed: [
        { "@type": "State", name: "Lazio" },
        { "@type": "State", name: "Umbria" },
        { "@type": "State", name: "Toscana" },
        { "@type": "State", name: "Marche" },
        { "@type": "State", name: "Abruzzo" },
        { "@type": "City", name: "Roma" },
        { "@type": "City", name: "Monterotondo" },
        { "@type": "City", name: "Guidonia Montecelio" },
        { "@type": "City", name: "Tivoli" },
        { "@type": "City", name: "Mentana" },
        { "@type": "City", name: "Fonte Nuova" },
        { "@type": "City", name: "Rieti" },
        { "@type": "City", name: "Viterbo" },
        { "@type": "City", name: "Frosinone" },
        { "@type": "City", name: "Latina" },
        { "@type": "City", name: "Perugia" },
        { "@type": "City", name: "Firenze" },
        { "@type": "City", name: "Ancona" },
        { "@type": "City", name: "L'Aquila" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      serviceType: [
        "Impianti elettrici civili",
        "Impianti elettrici industriali",
        "Impianti elettrici ospedalieri",
        "Fotovoltaico industriale",
        "Condizionamento e climatizzazione",
        "Termoidraulica",
        "Domotica e building automation",
        "Videosorveglianza TVCC",
        "Impianti speciali",
      ],
      knowsAbout: [
        "Impianti BT/MT",
        "Cabine elettriche",
        "Sistemi fotovoltaici BESS",
        "VRF multi-split",
        "KNX BACnet",
        "Certificazione SOA OS30",
        "F-GAS",
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Sabbioni Impianti S.R.L.",
      description: "Impiantistica nel Lazio dal 1990",
      inLanguage: "it-IT",
      publisher: { "@id": `${BASE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={jakarta.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <meta name="theme-color" content="#ffffff" />
        {/* Geo tags per local SEO */}
        <meta name="geo.region" content="IT-62" />
        <meta name="geo.placename" content="Monterotondo, Roma, Lazio" />
        <meta name="geo.position" content="42.0290;12.6080" />
        <meta name="ICBM" content="42.0290, 12.6080" />
      </head>
      <body className="bg-white text-[#0F1117] antialiased overflow-x-hidden">
        {children}
        <CookieBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
