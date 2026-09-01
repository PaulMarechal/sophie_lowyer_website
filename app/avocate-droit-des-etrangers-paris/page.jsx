import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit des étrangers à Paris",
  description:
    "Sophie Maréchal accompagne à Paris les demandes de titre de séjour, cartes talent et de résident, refus de séjour, OQTF et recours.",
  path: "/avocate-droit-des-etrangers-paris",
  keywords: [
    "avocate droit des étrangers paris",
    "avocat titre de séjour paris",
    "recours oqtf paris",
    "avocate carte talent paris",
  ],
  image: "/droit-des-etrangers/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand consulter une avocate en droit des étrangers à Paris ?",
    answer:
      "Vous pouvez consulter une avocate en droit des étrangers avant une demande ou un renouvellement de titre de séjour, après une difficulté d'instruction, à la réception d'une décision de refus ou d'une obligation de quitter le territoire français.",
  },
  {
    question: "Le cabinet défend-il les personnes visées par une OQTF ?",
    answer:
      "Oui, le cabinet défend les personnes visées par une OQTF avec délai ou sans délai de départ volontaire.",
  },
  {
    question: "Un refus de délivrance ou de renouvellement d'un titre de séjour peut-il être contesté ?",
    answer:
      "Oui, un refus de délivrance ou de renouvellement d'un titre de séjour peut être contesté, sous réserve de vérifier d'abord que le délai pour saisir le tribunal n'est pas dépassé.",
  },
  {
    question: "L'avocate peut-elle aider avant le dépôt d'une demande de titre de séjour ?",
    answer:
      "Oui. Elle peut étudier la situation, identifier les titres envisageables, vérifier les conditions propres au fondement retenu et organiser les pièces avant le dépôt.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Compétences", path: "/competences" },
  { name: "Droit des étrangers", path: "/droit-des-etrangers" },
  { name: "Avocate en droit des étrangers à Paris", path: "/avocate-droit-des-etrangers-paris" },
]);

const serviceSchema = buildServiceSchema({
  name: "Avocate en droit des étrangers à Paris",
  description:
    "Accompagnement des demandes de titre de séjour et des recours contre les décisions préfectorales en droit des étrangers.",
  path: "/avocate-droit-des-etrangers-paris",
  serviceType: "Droit des étrangers",
});

const sections = [
  {
    eyebrow: "Démarches",
    title: "Constituer un dossier de demande de titre de séjour clair, complet et cohérent",
    paragraphs: [
      "Le droit des étrangers concerne des démarches administratives importantes : demande de titre de séjour, changement de statut, renouvellement, carte talent, carte de résident ou regroupement familial.",
      "La qualité du dossier et la cohérence des pièces sont souvent déterminantes pour obtenir une décision favorable de l'administration.",
      "Le cabinet accompagne la préparation des demandes en tenant compte de la situation personnelle, familiale, professionnelle ou universitaire de la personne concernée. L'objectif est de présenter un dossier lisible, complet et juridiquement cohérent pour faciliter l'examen par l'administration.",
    ],
  },
  {
    eyebrow: "Décision préfectorale",
    title: "Former un recours contre le refus de délivrance d'un titre de séjour, une OQTF ou une autre mesure défavorable",
    paragraphs: [
      "Lorsqu'une décision défavorable est reçue, les délais pour agir peuvent être très courts. Il faut identifier la nature exacte de la décision, vérifier sa date de notification, lire attentivement les motifs et réunir rapidement les pièces utiles.",
      "Sophie Maréchal vous représente dans la procédure de recours contre les refus de délivrance de titres de séjour, implicites ou explicites, les obligations de quitter le territoire français et les refus de regroupement familial.",
      "Elle vous assiste également en cas de rejet de votre demande d'asile par l'OFPRA, l'Office français de protection des réfugiés et apatrides.",
    ],
    points: [
      "Analyser les causes du refus de délivrance du titre de séjour, du refus opposé par l'OFPRA ou de la délivrance de l'OQTF",
      "Réunir les pièces personnelles, familiales et professionnelles pertinentes",
      "Vérifier si la procédure suivie par l'administration a été conforme aux règles",
      "Préparer le recours et saisir le tribunal administratif ou la Cour nationale du droit d'asile",
    ],
  },
  {
    eyebrow: "Situation personnelle",
    title: "Relier la procédure à la vie familiale, au travail et au séjour",
    paragraphs: [
      "Les dossiers de droit des étrangers sont souvent sensibles, car ils touchent à la vie familiale, au travail, aux études et à l'installation en France. Le cabinet prend le temps d'identifier les enjeux réels avant de conseiller une stratégie.",
      "Lorsque les conditions d'une demande de titre de séjour ne sont pas réunies ou qu'une action n'est pas adaptée, le cabinet l'explique clairement afin d'éviter une démarche inutile, mal préparée ou vouée à l'échec.",
    ],
  },
  {
    eyebrow: "Cabinet",
    title: "Un premier échange pour identifier les délais et les pièces",
    paragraphs: [
      "Le cabinet reçoit sur rendez-vous à Paris et peut suivre certains dossiers à distance. Les échanges permettent de clarifier les délais, les pièces disponibles et les étapes à venir.",
      "Pour les personnes ayant reçu une OQTF, une page dédiée détaille les enjeux du recours et l'importance d'une analyse rapide de la situation.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Compétences", href: "/competences" },
          { label: "Droit des étrangers", href: "/droit-des-etrangers" },
          { label: "Avocate en droit des étrangers à Paris" },
        ]}
        eyebrow="Droit des étrangers · Paris"
        title="Avocate en droit des étrangers à Paris"
        intro="Le cabinet accompagne les demandes de titre de séjour, les refus de séjour, les OQTF et les recours en droit des étrangers à Paris."
        sections={sections}
        proofItems={[
          {
            title: "Droit des étrangers",
            text: "Sophie Maréchal a suivi la formation de l'EFB en droit public et droit des étrangers avant de prêter serment.",
          },
          {
            title: "Décision administrative",
            text: "Son parcours en droit public et son expérience de l'administration aident à analyser les décisions préfectorales avec méthode.",
          },
          {
            title: "Délais",
            text: "Le cabinet vérifie rapidement les délais applicables et les documents nécessaires à la stratégie de recours ou de demande.",
          },
          {
            title: "Situation individuelle",
            text: "Chaque situation est examinée à partir de ses éléments propres : séjour, famille, travail, études, santé ou intégration.",
          },
        ]}
        relatedTitle="Pages liées en droit des étrangers"
        relatedItems={[
          {
            href: "/droit-des-etrangers",
            label: "Droit des étrangers",
            text: "Présentation générale des demandes et recours.",
          },
          {
            href: "/avocat-oqtf-paris",
            label: "Avocate OQTF à Paris",
            text: "Comprendre les recours contre une obligation de quitter le territoire.",
          },
          {
            href: "/avocat-carte-talent-carte-resident-paris",
            label: "Carte talent et carte de résident à Paris",
            text: "Distinguer les titres, préparer une demande ou anticiper un renouvellement.",
          },
          {
            href: "/droit-de-la-nationalite",
            label: "Droit de la nationalité",
            text: "Retrouver séparément les informations relatives à la naturalisation française.",
          },
        ]}
        faqTitle="FAQ droit des étrangers à Paris"
        faqItems={faqSchema.mainEntity.map((item) => ({
          question: item.name,
          answer: item.acceptedAnswer.text,
        }))}
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
