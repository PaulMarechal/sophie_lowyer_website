import { getLanguagePaths, getLocaleFromPath } from "../src/lib/i18n";
import { getSocialImages } from "../src/lib/social-images";

const siteUrl = "https://www.sophiemarechal-avocat.fr";
const siteName = "Sophie Maréchal";
const defaultOgImage = "/social/fr/home-og.png";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  locale: requestedLocale,
}) {
  const locale = requestedLocale ?? getLocaleFromPath(path);
  const socialImages = getSocialImages(path, locale);
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = absoluteUrl(path);
  const languagePaths = getLanguagePaths(path);
  const languages = Object.fromEntries(
    Object.entries(languagePaths).map(([language, languagePath]) => [
      language,
      absoluteUrl(languagePath),
    ])
  );

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_GB" : "fr_FR",
      alternateLocale: locale === "en" ? ["fr_FR"] : ["en_GB"],
      url,
      title: fullTitle,
      description,
      siteName,
      images: socialImages.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: socialImages.twitter,
    },
  };
}

export const lawFirmSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legal-service`,
  name: "Sophie Maréchal",
  alternateName: ["Sophie Marechal", "Maître Sophie Maréchal", "Me Sophie Maréchal"],
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  description:
    "Cabinet de Sophie Maréchal, avocate à Paris en droit public. Paris law firm advising on French public, planning, immigration and nationality law.",
  telephone: "+33 6 52 60 91 38",
  email: "sophie.marechal@avocat.fr",
  knowsLanguage: ["fr", "en", "de"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 boulevard de Sébastopol",
    postalCode: "75001",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Paris",
    },
    {
      "@type": "AdministrativeArea",
      name: "Île-de-France",
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr",
  ],
  knowsAbout: [
    "Droit public",
    "Droit de l'urbanisme",
    "Droit des étrangers",
    "Droit de la nationalité",
    "Naturalisation française",
    "Carte talent",
    "Carte de résident",
    "Obligation de quitter le territoire français",
    "Recours contre refus de permis de construire",
    "French public law",
    "French planning law",
    "French immigration law",
    "French nationality law",
    "French naturalisation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services juridiques en droit public",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit public à Paris",
          url: absoluteUrl("/avocate-droit-public-paris"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit de l'urbanisme à Paris",
          url: absoluteUrl("/avocate-droit-urbanisme-paris"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recours contre OQTF à Paris",
          url: absoluteUrl("/avocat-oqtf-paris"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit des étrangers à Paris",
          url: absoluteUrl("/avocate-droit-des-etrangers-paris"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit de la nationalité à Paris",
          url: absoluteUrl("/droit-de-la-nationalite"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Accompagnement en naturalisation française à Paris",
          url: absoluteUrl("/avocat-naturalisation-paris"),
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carte talent et carte de résident à Paris",
          url: absoluteUrl("/avocat-carte-talent-carte-resident-paris"),
          areaServed: "Paris",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: ["Cabinet Sophie Maréchal", "Sophie Maréchal Law Firm"],
  inLanguage: ["fr-FR", "en-GB"],
  publisher: { "@id": `${siteUrl}/#legal-service` },
};

export function buildFaqSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((question) => ({
      "@type": "Question",
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ["Paris", "Île-de-France"],
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: { "@id": `${siteUrl}/#legal-service` },
    areaServed: areaServed.map((name) => ({
      "@type":
        name === "Paris" ? "City" : name === "France" ? "Country" : "AdministrativeArea",
      name,
    })),
  };
}

export { siteName, siteUrl };
