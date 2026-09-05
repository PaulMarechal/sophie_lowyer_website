import { notFound } from "next/navigation";
import Link from "next/link";
import Desktop from "../../../src/components/layout/Desktop";
import Contact from "../../../src/views/contact/Contact";
import { AboutEn, FeesEn, PracticeAreasEn } from "../../../src/views/en/CorePagesEn";
import { CookieSettingsEn, LegalNoticeEn, PrivacyEn } from "../../../src/views/en/LegalPagesEn";
import SeoLandingPage from "../../../src/views/seo-pages/SeoLandingPage";
import DocumentLandingPage from "../../../src/views/seo-pages/DocumentLandingPage";
import styles from "../../../src/views/seo-pages/SeoLandingPage.module.css";
import { englishLandingPages } from "../../../src/content/en/landing-pages";
import { englishDocumentPages, immigrationNotice, legalAid } from "../../../src/content/en/word-pages";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "../../seo";

const customPages = {
  about: {
    metadata: {
      title: "About the firm",
      description: "Learn about Sophie Maréchal’s background and the firm’s approach to public law, planning law, immigration law and nationality law in Paris.",
      path: "/en/about",
    },
    component: AboutEn,
  },
  "practice-areas": {
    metadata: {
      title: "Areas of practice",
      description: "The firm advises clients in Paris on public law, planning law, immigration law and French nationality law, with clear, tailored legal strategies.",
      path: "/en/practice-areas",
    },
    component: PracticeAreasEn,
  },
  fees: {
    metadata: {
      title: "Fees",
      description: "Read how Sophie Maréchal’s firm sets fixed and hourly fees, with transparent terms agreed before any work begins.",
      path: "/en/fees",
    },
    component: FeesEn,
    faqItems: [
      { question: "How does the firm set its fees?", answer: "Fees are set based, in particular, on the nature and complexity of the matter, the time involved and the urgency of the situation." },
      { question: "Does the firm offer fixed fees?", answer: "Yes. Wherever appropriate, a fixed fee may be offered to give the client greater certainty about the cost of the work." },
      { question: "Does the firm accept legal aid?", answer: legalAid },
    ],
  },
  contact: {
    metadata: {
      title: "Contact and appointments",
      description: "Contact Sophie Maréchal’s Paris law firm by form, email, text message or Calendly to discuss a public law matter or book an appointment.",
      path: "/en/contact",
    },
    component: () => <Contact locale="en" />,
  },
  privacy: {
    metadata: {
      title: "Privacy policy",
      description: "Read Sophie Maréchal law firm’s privacy policy concerning the processing of personal data.",
      path: "/en/privacy",
    },
    component: PrivacyEn,
  },
  "legal-notice": {
    metadata: {
      title: "Legal notice",
      description: "Read the legal notice for the Sophie Maréchal law firm website, including identity, hosting, contact and regulatory information.",
      path: "/en/legal-notice",
    },
    component: LegalNoticeEn,
  },
  "cookie-settings": {
    metadata: {
      title: "Cookie and external service settings",
      description: "Understand and change your preferences relating to Google Analytics and the Calendly calendar on the Sophie Maréchal law firm website.",
      path: "/en/cookie-settings",
    },
    component: CookieSettingsEn,
  },
};

export function generateStaticParams() {
  return [...Object.keys(customPages), ...Object.keys(englishLandingPages), ...Object.keys(englishDocumentPages)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = customPages[slug] ?? englishDocumentPages[slug] ?? englishLandingPages[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({ ...page.metadata, locale: "en" });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const customPage = customPages[slug];

  if (customPage) {
    const Component = customPage.component;
    const faqSchema = customPage.faqItems ? buildFaqSchema(customPage.faqItems) : null;

    return (
      <Desktop>
        <Component />
        {faqSchema ? (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        ) : null}
      </Desktop>
    );
  }

  const documentPage = englishDocumentPages[slug];
  if (documentPage) {
    const { content, metadata } = documentPage;
    const serviceSchema = buildServiceSchema({
      name: content.title,
      description: metadata.description,
      path: metadata.path,
      serviceType: content.title,
    });

    return (
      <Desktop>
        <DocumentLandingPage content={content} locale="en" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Desktop>
    );
  }

  const landingPage = englishLandingPages[slug];
  if (!landingPage) {
    notFound();
  }

  const { metadata, serviceType, ...pageProps } = landingPage;
  const breadcrumbItems = pageProps.breadcrumbs.map((item) => ({
    name: item.label,
    path: item.href ?? metadata.path,
  }));
  const schemas = [
    buildFaqSchema(pageProps.faqItems),
    buildBreadcrumbSchema(breadcrumbItems),
    buildServiceSchema({
      name: pageProps.title,
      description: metadata.description,
      path: metadata.path,
      serviceType,
      areaServed: ["Paris", "Île-de-France", "France"],
    }),
  ];

  return (
    <Desktop>
      <SeoLandingPage locale="en" {...pageProps}>
        {slug === "immigration-law" ? (
          <section className={styles.sectionCard} data-document-notice>
            <h2 className={styles.sectionTitle}>{immigrationNotice.title}</h2>
            <div className={styles.copy}>
              <p>{immigrationNotice.paragraphs[0]}</p>
              <p>
                {immigrationNotice.paragraphs[1].split('Naturalisation')[0]}
                <Link href="/en/french-nationality-law">Naturalisation</Link>
                {' and '}
                <Link href="/en/talent-passport-resident-card-lawyer-paris">Talent &amp; international mobility</Link>.
              </p>
              <p>
                {immigrationNotice.paragraphs[2].split('OQTF lawyer in Paris')[0]}
                <Link href="/en/oqtf-lawyer-paris">OQTF lawyer in Paris</Link>.
              </p>
            </div>
          </section>
        ) : null}
      </SeoLandingPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    </Desktop>
  );
}
