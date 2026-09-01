export const ROUTE_PAIRS = [
  { fr: "/", en: "/en" },
  { fr: "/a-propos", en: "/en/about" },
  { fr: "/competences", en: "/en/practice-areas" },
  { fr: "/contact", en: "/en/contact" },
  { fr: "/honoraires", en: "/en/fees" },
  { fr: "/droit-de-urbanisme", en: "/en/planning-law" },
  { fr: "/droit-des-etrangers", en: "/en/immigration-law" },
  { fr: "/droit-de-la-nationalite", en: "/en/french-nationality-law" },
  { fr: "/avocate-droit-public-paris", en: "/en/public-law-lawyer-paris" },
  { fr: "/avocate-droit-urbanisme-paris", en: "/en/planning-law-lawyer-paris" },
  { fr: "/avocate-droit-des-etrangers-paris", en: "/en/immigration-lawyer-paris" },
  { fr: "/avocat-oqtf-paris", en: "/en/oqtf-lawyer-paris" },
  {
    fr: "/avocat-refus-permis-construire-paris",
    en: "/en/building-permit-refusal-lawyer-paris",
  },
  {
    fr: "/avocat-carte-talent-carte-resident-paris",
    en: "/en/talent-passport-resident-card-lawyer-paris",
  },
  { fr: "/avocat-naturalisation-paris", en: "/en/naturalisation-lawyer-paris" },
  { fr: "/confidentialite", en: "/en/privacy" },
  { fr: "/mentions-legales", en: "/en/legal-notice" },
  { fr: "/gestion-des-cookies", en: "/en/cookie-settings" },
];

function normalisePath(pathname = "/") {
  const path = pathname.split(/[?#]/)[0] || "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export function getLocaleFromPath(pathname = "/") {
  const path = normalisePath(pathname);
  return path === "/en" || path.startsWith("/en/") ? "en" : "fr";
}

export function getRoutePair(pathname = "/") {
  const path = normalisePath(pathname);
  return ROUTE_PAIRS.find((pair) => pair.fr === path || pair.en === path) ?? ROUTE_PAIRS[0];
}

export function getAlternatePath(pathname = "/") {
  const locale = getLocaleFromPath(pathname);
  const pair = getRoutePair(pathname);
  return locale === "en" ? pair.fr : pair.en;
}

export function getLanguagePaths(pathname = "/") {
  const pair = getRoutePair(pathname);
  return {
    "fr-FR": pair.fr,
    "en-GB": pair.en,
    "x-default": pair.fr,
  };
}
