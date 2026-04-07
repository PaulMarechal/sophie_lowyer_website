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
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  description:
    "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
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
  sameAs: [
    "https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr",
  ],
  knowsAbout: [
    "Droit public",
    "Droit de l'urbanisme",
    "Droit des étrangers",
    "Droit de la fonction publique",
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
