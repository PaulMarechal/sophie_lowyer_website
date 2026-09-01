import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "../seo";

export const metadata = buildMetadata({
  title: "Droit de la nationalité : naturalisation française",
  description:
    "Comprendre la naturalisation française : procédure, critères examinés, examen civique, décision et recours, avec une avocate à Paris.",
  path: "/droit-de-la-nationalite",
  keywords: [
    "droit de la nationalité",
    "naturalisation française",
    "demande de naturalisation",
    "recours naturalisation",
  ],
  image: "/droit-de-la-nationalite/opengraph-image",
});

const faqItems = [
  {
    question: "Cinq années de résidence suffisent-elles pour être naturalisé ?",
    answer:
      "Non. Cinq années de résidence habituelle constituent la durée de principe, sous réserve d'exceptions, mais l'administration examine l'ensemble de la situation. Le respect des conditions ne rend pas la décision favorable automatique.",
  },
  {
    question: "Quel niveau de français est demandé pour une naturalisation en 2026 ?",
    answer:
      "Depuis le 1er janvier 2026, le niveau demandé est en principe le niveau B2, à l'oral et à l'écrit. Les justificatifs admis ainsi que les cas d'aménagement ou de dispense sont encadrés par les textes.",
  },
  {
    question: "L'examen civique remplace-t-il l'entretien en préfecture ?",
    answer:
      "Non. Pour une demande de naturalisation par décret, la réussite à l'examen civique et l'entretien conduit par l'administration sont deux étapes distinctes.",
  },
  {
    question: "La demande de naturalisation se fait-elle toujours en ligne ?",
    answer:
      "Le dépôt en ligne est la voie générale pour de nombreux demandeurs résidant en France, mais des modalités particulières existent selon le lieu de résidence et certaines situations. Il faut vérifier la procédure officielle applicable à son cas.",
  },
  {
    question: "Comment contester une décision défavorable de naturalisation ?",
    answer:
      "Pour une décision préfectorale d'irrecevabilité, de rejet ou d'ajournement d'une demande de naturalisation par décret, un recours administratif préalable auprès du ministère de l'Intérieur est obligatoire avant de pouvoir saisir le juge. La décision et sa notification doivent être examinées sans attendre.",
  },
];

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Compétences", path: "/competences" },
  { name: "Droit de la nationalité", path: "/droit-de-la-nationalite" },
];

const faqSchema = buildFaqSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
const serviceSchema = buildServiceSchema({
  name: "Accompagnement en droit de la nationalité et naturalisation française",
  description:
    "Analyse et accompagnement des demandes de naturalisation française et des décisions défavorables en matière de nationalité.",
  path: "/droit-de-la-nationalite",
  serviceType: "Droit de la nationalité française",
  areaServed: ["Paris", "Île-de-France", "France"],
});

const sections = [
  {
    eyebrow: "Orientation",
    title: "Identifier la voie d'acquisition de la nationalité adaptée",
    paragraphs: [
      "La naturalisation par décret est l'une des voies d'acquisition de la nationalité française. Elle se distingue notamment des déclarations de nationalité fondées sur le mariage ou certains liens familiaux, ainsi que des règles liées à la naissance et à la filiation.",
      "La première étape consiste donc à qualifier précisément la situation. Une démarche engagée sur un fondement inadapté peut faire perdre du temps et conduire à réunir des pièces qui ne répondent pas aux critères réellement applicables.",
    ],
  },
  {
    eyebrow: "Naturalisation",
    title: "Une décision prise après l'examen global de la situation",
    paragraphs: [
      "La naturalisation par décret est accordée à la demande de la personne étrangère. Réunir les conditions permet de présenter une demande, mais ne garantit pas son acceptation : l'administration conserve un pouvoir d'appréciation sur le dossier.",
      "Elle examine notamment la résidence et le centre des intérêts en France, la régularité du séjour, l'assimilation, la maîtrise du français, l'insertion professionnelle, les ressources, la situation familiale ainsi que les éléments relatifs à la moralité et à l'ordre public.",
    ],
  },
  {
    eyebrow: "Règles 2026",
    title: "Langue française, examen civique et entretien",
    paragraphs: [
      "Depuis le 1er janvier 2026, une demande de naturalisation par décret suppose en principe de justifier d'un niveau B2 en français, à l'oral et à l'écrit, et de réussir l'examen civique. Des aménagements et dispenses existent dans des situations encadrées.",
      "L'examen civique ne remplace pas l'entretien avec l'administration. Le dossier doit rester cohérent avec les éléments présentés au cours de l'instruction et avec les éventuels changements de situation signalés après le dépôt.",
    ],
  },
  {
    eyebrow: "Dossier",
    title: "Construire un ensemble de pièces lisible et cohérent",
    paragraphs: [
      "Les justificatifs d'état civil, de domicile, de séjour, de situation familiale, de ressources et d'impôts doivent raconter une situation cohérente. Les documents étrangers peuvent nécessiter une traduction, une légalisation ou une apostille selon leur nature et leur pays d'origine.",
      "Une analyse préalable sert à repérer les écarts de dates, les périodes insuffisamment justifiées, les changements professionnels ou familiaux et les pièces qui appellent une explication complémentaire.",
    ],
    points: [
      "Vérifier la procédure et le service compétent",
      "Contrôler la cohérence des actes d'état civil et des traductions",
      "Documenter la résidence, l'activité, les ressources et la vie familiale",
      "Anticiper l'examen civique, l'entretien et les demandes de complément",
    ],
  },
  {
    eyebrow: "Décision",
    title: "Comprendre une irrecevabilité, un rejet, un ajournement ou un classement sans suite",
    paragraphs: [
      "La nature exacte de la décision détermine la réponse possible. Une irrecevabilité, un rejet, un ajournement et un classement sans suite ne reposent pas sur la même logique et n'appellent pas nécessairement le même recours.",
      "Pour contester l'irrecevabilité, le rejet ou l'ajournement prononcé par le préfet dans une procédure par décret, un recours administratif préalable obligatoire doit être adressé au ministère de l'Intérieur avant un éventuel recours contentieux. La date et les voies de recours figurant sur la notification doivent être vérifiées immédiatement.",
    ],
  },
];

const sourceItems = [
  {
    label: "Service-Public — Naturalisation française par décret",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
  },
  {
    label: "Service-Public — Comment obtenir la nationalité française ?",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34717",
  },
  {
    label: "Service-Public — Justifier de son niveau en français",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
  },
  {
    label: "Ministère de l'Intérieur — Procédures d'accès à la nationalité française",
    href: "https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise",
  },
  {
    label: "Ministère de l'Intérieur — Contentieux de l'accès à la nationalité française",
    href: "https://www.immigration.interieur.gouv.fr/devenir-francais/contentieux-de-lacces-a-nationalite-francaise",
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Compétences", href: "/competences" },
          { label: "Droit de la nationalité" },
        ]}
        eyebrow="Droit de la nationalité"
        title="Droit de la nationalité : la naturalisation française"
        intro="Comprendre la voie juridique adaptée, les critères examinés, les étapes de la demande et les recours possibles en cas de décision défavorable."
        notice="Cette page présente principalement la naturalisation par décret. Les déclarations de nationalité et les autres modes d'acquisition répondent à des règles distinctes qui doivent être vérifiées selon la situation personnelle."
        sections={sections}
        proofTitle="Ce que l'accompagnement juridique permet de sécuriser"
        proofItems={[
          {
            title: "Qualification de la demande",
            text: "Identifier la voie d'acquisition de la nationalité et l'autorité compétente avant d'engager la démarche.",
          },
          {
            title: "Cohérence des pièces",
            text: "Repérer les documents manquants, les incohérences et les éléments qui nécessitent une explication.",
          },
          {
            title: "Suivi de l'instruction",
            text: "Préparer les compléments demandés et signaler les changements de situation de manière structurée.",
          },
          {
            title: "Analyse de la décision",
            text: "Distinguer la nature d'une décision défavorable et vérifier la voie de recours réellement applicable.",
          },
        ]}
        faqTitle="FAQ sur la naturalisation française"
        faqItems={faqItems}
        updatedAt="1er septembre 2026"
        sourceItems={sourceItems}
        relatedTitle="Poursuivre selon votre situation"
        relatedItems={[
          {
            href: "/avocat-naturalisation-paris",
            label: "Avocate en naturalisation à Paris",
            text: "L'accompagnement concret avant le dépôt, pendant l'instruction ou après une décision défavorable.",
          },
          {
            href: "/droit-des-etrangers",
            label: "Droit des étrangers",
            text: "Titre de séjour, refus préfectoral, OQTF et autres démarches liées au séjour.",
          },
          {
            href: "/avocate-droit-des-etrangers-paris",
            label: "Avocate en droit des étrangers à Paris",
            text: "Une analyse personnalisée des démarches et recours administratifs.",
          },
          {
            href: "/contact",
            label: "Contacter le cabinet",
            text: "Présenter votre demande, une difficulté d'instruction ou une décision reçue.",
          },
        ]}
        ctaTitle="Faire analyser une demande ou une décision de naturalisation"
        ctaText="Le premier échange permet d'identifier la procédure, les fragilités éventuelles du dossier et les délais mentionnés dans une notification. Aucun résultat ni délai de traitement administratif ne peut être garanti."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]),
        }}
      />
    </Desktop>
  );
}
