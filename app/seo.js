const siteUrl = "https://sophiemarechal-avocat.fr";
const siteName = "Sophie Maréchal";
const defaultOgImage = "/opengraph-image";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
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
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  description:
    "Cabinet de Sophie Maréchal, avocate en droit public à Paris, intervenant en droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  telephone: "+33 6 52 60 91 38",
  email: "sophie.marechal@avocat.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 boulevard de Sebastopol",
    postalCode: "75001",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: "Paris",
  availableLanguage: ["fr"],
  serviceType: [
    "Avocate en droit public à Paris",
    "Avocate en droit de l'urbanisme à Paris",
    "Avocate en droit des étrangers à Paris",
    "Avocate en droit de la fonction publique à Paris",
    "Avocate OQTF à Paris",
    "Avocate pour refus de permis de construire à Paris",
    "Avocate pour conseil de discipline à Paris",
  ],
  sameAs: [
    "https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr",
  ],
  knowsAbout: [
    "Droit public",
    "Droit de l'urbanisme",
    "Droit des étrangers",
    "Droit de la fonction publique",
    "OQTF",
    "Permis de construire",
    "Conseil de discipline",
    "Contentieux administratif",
  ],
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

export { siteName, siteUrl };
