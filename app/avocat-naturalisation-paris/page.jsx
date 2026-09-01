import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en naturalisation à Paris",
  description:
    "Sophie Maréchal accompagne à Paris les demandes de naturalisation : analyse, dossier, instruction, ajournement, rejet et recours.",
  path: "/avocat-naturalisation-paris",
  keywords: [
    "avocat naturalisation paris",
    "avocate naturalisation paris",
    "recours naturalisation paris",
    "dossier naturalisation paris",
  ],
  image: "/droit-de-la-nationalite/opengraph-image",
});

const faqItems = [
  {
    question: "Quand consulter une avocate pour une naturalisation ?",
    answer:
      "Une consultation peut être utile avant le dépôt lorsqu'un point du dossier est fragile, pendant l'instruction après une demande de complément, ou dès la notification d'une irrecevabilité, d'un rejet, d'un ajournement ou d'un classement sans suite.",
  },
  {
    question: "Quels documents apporter au premier rendez-vous ?",
    answer:
      "Il est utile de réunir les documents d'identité et de séjour, les actes d'état civil, les justificatifs de domicile, de situation familiale, de travail, de ressources et d'impôts, ainsi que les récépissés, courriels et décisions déjà reçus de l'administration.",
  },
  {
    question: "L'avocate peut-elle garantir l'obtention de la naturalisation ?",
    answer:
      "Non. L'accompagnement vise à qualifier la procédure, identifier les difficultés et présenter un dossier cohérent. Il ne permet de garantir ni la décision de l'administration ni son délai de traitement.",
  },
  {
    question: "Quelle plateforme traite une demande déposée depuis Paris ?",
    answer:
      "La compétence dépend du domicile du demandeur. Pour une personne domiciliée à Paris, l'annuaire officiel identifie la plateforme de naturalisation de la Préfecture de Police de Paris. Un domicile dans un autre département relève de la plateforme compétente pour ce département.",
  },
  {
    question: "Que transmettre après une décision défavorable ?",
    answer:
      "Il faut transmettre rapidement la décision complète, sa preuve et sa date de notification, le récépissé, les pièces déposées et les échanges avec l'administration. Pour certaines décisions en matière de naturalisation par décret, un recours administratif préalable est obligatoire avant le recours contentieux.",
  },
];

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Compétences", path: "/competences" },
  { name: "Droit de la nationalité", path: "/droit-de-la-nationalite" },
  { name: "Avocate en naturalisation à Paris", path: "/avocat-naturalisation-paris" },
];

const faqSchema = buildFaqSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
const serviceSchema = buildServiceSchema({
  name: "Avocate en naturalisation à Paris",
  description:
    "Accompagnement juridique des demandes de naturalisation française et des recours contre les décisions défavorables.",
  path: "/avocat-naturalisation-paris",
  serviceType: "Demande et recours en naturalisation française",
});

const sections = [
  {
    eyebrow: "Avant le dépôt",
    title: "Vérifier la procédure et les points de fragilité du dossier",
    paragraphs: [
      "Un entretien préalable permet de déterminer si la naturalisation par décret correspond à la situation et si le moment du dépôt est opportun. La durée de résidence ne constitue qu'un élément parmi ceux examinés par l'administration.",
      "Le cabinet analyse notamment la continuité du séjour, le centre des intérêts en France, la situation familiale, l'insertion professionnelle, les ressources, la maîtrise du français et les éventuelles difficultés administratives ou pénales.",
    ],
  },
  {
    eyebrow: "Pièces",
    title: "Présenter une chronologie claire et des justificatifs cohérents",
    paragraphs: [
      "La solidité d'une demande dépend moins du volume de documents que de leur pertinence et de leur cohérence. Les actes d'état civil, traductions, preuves de domicile, avis d'imposition, contrats, bulletins de salaire et éléments familiaux doivent correspondre à la situation déclarée.",
      "L'accompagnement vise à repérer les périodes mal documentées, les écarts entre plusieurs pièces et les changements qui méritent une explication avant le dépôt ou en réponse à l'administration.",
    ],
    points: [
      "Identifier les pièces applicables à la situation personnelle",
      "Vérifier les traductions et formalités des actes étrangers",
      "Expliquer les changements familiaux, professionnels ou de domicile",
      "Conserver les preuves de dépôt, récépissés et échanges administratifs",
    ],
  },
  {
    eyebrow: "Instruction",
    title: "Anticiper les règles 2026 et répondre aux demandes de complément",
    paragraphs: [
      "Depuis le 1er janvier 2026, une demande de naturalisation suppose en principe un niveau B2 en français, à l'oral et à l'écrit, ainsi que la réussite à l'examen civique. L'entretien en préfecture reste une étape distincte.",
      "Pendant l'instruction, tout changement important doit être signalé selon les modalités applicables. Une demande de complément doit être lue avec attention afin de répondre utilement, dans le délai indiqué, sans créer de contradiction avec les éléments déjà transmis.",
    ],
  },
  {
    eyebrow: "Paris",
    title: "Une compétence administrative déterminée par le domicile",
    paragraphs: [
      "Pour une personne domiciliée à Paris, la plateforme de naturalisation identifiée par l'annuaire officiel relève de la Préfecture de Police de Paris. Une personne domiciliée ailleurs en Île-de-France dépend de la plateforme de son département.",
      "Le cabinet peut accompagner un dossier parisien ou francilien en tenant compte du service compétent et des modalités officielles de dépôt. L'avocate ne se substitue pas au demandeur pour les étapes qui doivent être accomplies personnellement.",
    ],
  },
  {
    eyebrow: "Recours",
    title: "Analyser précisément la décision et sa notification",
    paragraphs: [
      "Une irrecevabilité, un rejet, un ajournement et un classement sans suite ont des causes et des conséquences différentes. La décision complète permet d'identifier les motifs retenus et la réponse utile.",
      "Lorsqu'un recours administratif préalable est obligatoire, il doit précéder le recours devant le juge. La consultation d'une avocate ne suspend pas le délai : la date de notification et les voies de recours doivent donc être transmises immédiatement.",
    ],
  },
];

const sourceItems = [
  {
    label: "Service-Public — Naturalisation française par décret",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
  },
  {
    label: "Service-Public — Niveau de français pour la nationalité française",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
  },
  {
    label: "Ministère de l'Intérieur — Examen civique pour la naturalisation",
    href: "https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/lexamen-civique-pour-demande-de-naturalisation-ou-de-reintegration-dans-nationalite-francaise.html",
  },
  {
    label: "Ministère de l'Intérieur — Contentieux de l'accès à la nationalité française",
    href: "https://www.immigration.interieur.gouv.fr/devenir-francais/contentieux-de-lacces-a-nationalite-francaise",
  },
  {
    label: "Annuaire Service-Public — Plateforme de naturalisation de Paris",
    href: "https://lannuaire.service-public.gouv.fr/ile-de-france/paris/fe03148c-ac19-4ee3-ae43-51f391bf980c",
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Compétences", href: "/competences" },
          { label: "Droit de la nationalité", href: "/droit-de-la-nationalite" },
          { label: "Naturalisation à Paris" },
        ]}
        eyebrow="Droit de la nationalité · Paris"
        title="Avocate en naturalisation à Paris"
        intro="Le cabinet accompagne l'analyse, la préparation et le suivi d'une demande de naturalisation, ainsi que l'étude d'une décision défavorable."
        notice="L'intervention de l'avocate vise à sécuriser la présentation du dossier et à examiner les voies de recours. Elle ne peut garantir ni l'issue de la demande ni le délai de traitement de l'administration."
        sections={sections}
        proofTitle="Un accompagnement à chaque moment utile"
        proofItems={[
          {
            title: "Diagnostic préalable",
            text: "Vérifier la bonne procédure, le service compétent et l'opportunité du dépôt au regard de la situation actuelle.",
          },
          {
            title: "Audit documentaire",
            text: "Contrôler la cohérence des pièces et préparer les explications nécessaires avant leur transmission.",
          },
          {
            title: "Suivi juridique",
            text: "Analyser les demandes de complément et les changements à signaler pendant l'instruction.",
          },
          {
            title: "Décision et recours",
            text: "Qualifier la décision reçue, préserver les délais et construire le recours adapté lorsqu'il est juridiquement pertinent.",
          },
        ]}
        faqTitle="FAQ naturalisation à Paris"
        faqItems={faqItems}
        updatedAt="1er septembre 2026"
        sourceItems={sourceItems}
        relatedTitle="Comprendre le cadre et les démarches associées"
        relatedItems={[
          {
            href: "/droit-de-la-nationalite",
            label: "Droit de la nationalité",
            text: "Le cadre général de la naturalisation française, de l'instruction et des décisions possibles.",
          },
          {
            href: "/droit-des-etrangers",
            label: "Droit des étrangers",
            text: "Les démarches de séjour et les recours contre les décisions préfectorales.",
          },
          {
            href: "/avocat-carte-talent-carte-resident-paris",
            label: "Carte talent et carte de résident",
            text: "Préparer une demande de titre de séjour adaptée au projet et à la situation.",
          },
          {
            href: "/contact",
            label: "Transmettre votre situation",
            text: "Présenter les faits, les dates et les documents déjà reçus avant un rendez-vous.",
          },
        ]}
        ctaTitle="Préparer une demande ou préserver un délai de recours"
        ctaText="Pour une décision défavorable, transmettez la décision complète avec sa date et sa preuve de notification. Pour un projet de demande, indiquez votre domicile, votre situation de séjour et les principales étapes de votre parcours en France."
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
