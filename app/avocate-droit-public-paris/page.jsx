import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit public à Paris",
  description:
    "Sophie Maréchal, aussi recherchée comme Sophie Marechal, accompagne particuliers, agents publics et professionnels en droit public à Paris.",
  path: "/avocate-droit-public-paris",
  keywords: [
    "avocate droit public paris",
    "avocat droit public paris",
    "Sophie Marechal avocate",
    "Sophie Maréchal avocate Paris",
  ],
});

const faqSchema = buildFaqSchema([
  {
    question: "Dans quels cas consulter une avocate en droit public à Paris ?",
    answer:
      "Il est utile de consulter une avocate en droit public lorsqu'une décision administrative affecte une situation personnelle, professionnelle ou patrimoniale : refus, sanction, autorisation, procédure disciplinaire ou recours devant le tribunal administratif.",
  },
  {
    question: "Le droit public concerne-t-il seulement les administrations ?",
    answer:
      "Non. Le droit public concerne aussi les particuliers, agents publics, associations, entreprises et porteurs de projet lorsqu'ils sont confrontés à une décision ou à une procédure administrative.",
  },
  {
    question: "Le cabinet intervient-il devant le tribunal administratif de Paris ?",
    answer:
      "Le cabinet accompagne les dossiers administratifs et contentieux à Paris, notamment devant les juridictions administratives lorsque la situation le nécessite.",
  },
  {
    question: "Sophie Maréchal et Sophie Marechal désignent-elles la même avocate ?",
    answer:
      "Oui. Le cabinet est celui de Sophie Maréchal, avocate inscrite au barreau de Paris. Certains internautes recherchent aussi son nom sans accent : Sophie Marechal.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Avocate en droit public à Paris", path: "/avocate-droit-public-paris" },
]);

const sections = [
  {
    eyebrow: "Décision administrative",
    title: "Quand une décision de l'administration appelle une réponse juridique",
    paragraphs: [
      "Le droit public regroupe les règles applicables aux relations avec l'administration, aux décisions administratives et aux recours devant le juge administratif. Il intervient dans des situations très concrètes : refus, sanctions, autorisations, démarches bloquées ou décisions difficiles à comprendre.",
      "Sophie Maréchal, avocate inscrite au barreau de Paris, accompagne les particuliers, agents publics et professionnels confrontés à ces situations. Le cabinet intervient en conseil comme en contentieux, avec une analyse juridique structurée et une explication claire des options possibles.",
    ],
  },
  {
    eyebrow: "Champs d'intervention",
    title: "Urbanisme, étrangers, fonction publique : trois pratiques du droit public",
    paragraphs: [
      "Le cabinet intervient principalement en droit de l'urbanisme, droit des étrangers et droit de la fonction publique. Ces matières ont un point commun : elles reposent souvent sur une décision administrative qu'il faut analyser, sécuriser ou contester dans des délais précis.",
      "Une même méthode s'applique : identifier la décision, vérifier sa motivation, contrôler la procédure suivie par l'administration, évaluer les pièces disponibles et déterminer si un recours gracieux ou contentieux est pertinent.",
    ],
    points: [
      "Analyse de décisions administratives individuelles",
      "Recours gracieux et recours contentieux",
      "Contentieux devant les juridictions administratives",
      "Conseil stratégique avant une démarche ou une procédure",
    ],
  },
  {
    eyebrow: "Lecture du dossier",
    title: "Clarifier les délais, les pièces et la voie de recours utile",
    paragraphs: [
      "Le premier travail consiste à comprendre la situation, les délais et les objectifs du client. En droit public, une action utile dépend souvent de la chronologie : date de notification, pièces déjà déposées, échanges avec l'administration, recours déjà exercés.",
      "Le cabinet privilégie une information lisible. Si une action n'est pas adaptée ou si le dossier nécessite d'abord une démarche administrative, cela doit être identifié avant d'engager une procédure inutile.",
    ],
  },
  {
    eyebrow: "Cabinet",
    title: "Un cabinet à Paris pour les dossiers administratifs",
    paragraphs: [
      "Le cabinet reçoit sur rendez-vous au 11 boulevard de Sébastopol, 75001 Paris. Cette implantation facilite l'accompagnement de dossiers parisiens et franciliens, tout en permettant un suivi à distance lorsque la situation le permet.",
      "Sophie Maréchal est également recherchée sous la forme sans accent Sophie Marechal. Les deux orthographes renvoient au même cabinet d'avocate en droit public à Paris.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit public · Paris"
        title="Avocate en droit public à Paris"
        intro="Le cabinet de Sophie Maréchal accompagne les dossiers de droit public à Paris : urbanisme, droit des étrangers, fonction publique et recours administratifs."
        sections={sections}
        proofTitle="Éléments de parcours utiles à la pratique"
        proofItems={[
          {
            title: "Droit public",
            text: "Sophie Maréchal est titulaire d'un master affaires publiques de Sciences Po Paris et d'un master en droit public général de l'Université Paris-I Panthéon Sorbonne.",
          },
          {
            title: "Administration",
            text: "Avant de devenir avocate, elle a exercé pendant 7 ans comme directrice d'hôpital, expérience utile pour comprendre les logiques administratives et institutionnelles.",
          },
          {
            title: "Barreau",
            text: "Elle a suivi la formation de l'EFB en droit public et droit des étrangers, puis prêté serment en 2024.",
          },
          {
            title: "Méthode",
            text: "Le cabinet explique les délais, les risques, les recours envisageables et les pièces utiles avant de construire une stratégie adaptée.",
          },
        ]}
        relatedTitle="Approfondir les domaines du droit public"
        relatedItems={[
          {
            href: "/avocate-droit-urbanisme-paris",
            label: "Avocate en droit de l'urbanisme à Paris",
            text: "Autorisations d'urbanisme, permis de construire et recours.",
          },
          {
            href: "/avocate-droit-des-etrangers-paris",
            label: "Avocate en droit des étrangers à Paris",
            text: "Titres de séjour, naturalisation, OQTF et refus préfectoraux.",
          },
          {
            href: "/droit-de-la-fonction-publique",
            label: "Droit de la fonction publique",
            text: "Agents publics, conseil de discipline et sanctions.",
          },
          {
            href: "/contact",
            label: "Contacter le cabinet",
            text: "Échanger sur un dossier administratif ou contentieux.",
          },
        ]}
        faqTitle="FAQ droit public à Paris"
        faqItems={faqSchema.mainEntity.map((item) => ({
          question: item.name,
          answer: item.acceptedAnswer.text,
        }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
    </Desktop>
  );
}
