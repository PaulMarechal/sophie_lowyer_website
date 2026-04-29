const siteUrl = "https://www.sophiemarechal-avocat.fr";
const siteName = "Sophie Maréchal";
const defaultOgImage = "/opengraph-image";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1162,
          height: 630,
          alt: `${siteName} - ${title ?? "Cabinet d'avocat"}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const lawFirmSchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Sophie Maréchal",
  alternateName: ["Sophie Marechal", "Maître Sophie Maréchal", "Me Sophie Maréchal"],
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  description:
    "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  telephone: "+33 6 52 60 91 38",
  email: "sophie.marechal@avocat.fr",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 boulevard de Sebastopol",
    postalCode: "75001",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.859,
    longitude: 2.347,
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr",
  ],
  knowsAbout: [
    "Droit public",
    "Droit de l'urbanisme",
    "Droit des étrangers",
    "Droit de la fonction publique",
    "Obligation de quitter le territoire français",
    "Recours contre refus de permis de construire",
    "Conseil de discipline",
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
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit de l'urbanisme à Paris",
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recours contre OQTF à Paris",
          areaServed: "Paris",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Avocat en droit des étrangers à Paris",
          areaServed: "Paris",
        },
      },
    ],
  },
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

export { siteName, siteUrl };
