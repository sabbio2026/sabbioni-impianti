import { MetadataRoute } from "next";

const BASE_URL = "https://www.sabbioniimpianti.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                                           lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/servizi/impianti-elettrici`,           lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/servizi/fotovoltaico`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/servizi/climatizzazione`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/servizi/sicurezza`,                    lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE_URL}/servizi/manutenzione`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
  ];
}
