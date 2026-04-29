import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit des étrangers à Paris",
  description:
    "Sophie Maréchal accompagne les demandes de titre de séjour, naturalisation, refus préfectoraux et recours OQTF à Paris.",
  path: "/avocate-droit-des-etrangers-paris",
  keywords: [
    "avocate droit des étrangers paris",
    "avocat titre de séjour paris",
    "recours oqtf paris",
    "avocate naturalisation paris",
  ],
  image: "/droit-des-etrangers/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand consulter une avocate en droit des étrangers à Paris ?",
    answer:
      "Il est utile de consulter pour préparer une demande de titre de séjour ou de naturalisation, répondre à une difficulté avec la préfecture, ou contester un refus de séjour, une OQTF ou une autre décision défavorable.",
  },
  {
    question: "Le cabinet intervient-il pour les recours contre OQTF ?",
    answer:
      "Oui. Le cabinet analyse la décision, les délais applicables, les pièces utiles et les moyens de contestation envisageables.",
  },
  {
    question: "Un refus de titre de séjour peut-il être contesté ?",
    answer:
      "Oui, selon la situation, un refus de titre de séjour peut faire l'objet d'un recours gracieux ou contentieux après analyse de la décision et du dossier.",
  },
  {
    question: "L'avocat peut-il aider avant le dépôt d'une demande ?",
    answer:
      "Oui. Un accompagnement en amont permet de constituer un dossier plus solide, d'anticiper les difficultés et d'adapter les pièces à la situation personnelle ou professionnelle.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Avocate en droit des étrangers à Paris", path: "/avocate-droit-des-etrangers-paris" },
]);

const sections = [
  {
    eyebrow: "Démarches",
    title: "Constituer un dossier de séjour ou de naturalisation cohérent",
    paragraphs: [
      "Le droit des étrangers concerne des démarches administratives importantes : titre de séjour, changement de statut, renouvellement, regroupement familial, naturalisation ou nationalité française. La qualité du dossier et la cohérence des pièces sont souvent déterminantes.",
      "Le cabinet accompagne la préparation des demandes en tenant compte de la situation personnelle, familiale, professionnelle ou universitaire de la personne concernée. L'objectif est de présenter un dossier lisible, complet et juridiquement cohérent.",
    ],
  },
  {
    eyebrow: "Décision préfectorale",
    title: "Lire un refus, une OQTF ou une mesure défavorable",
    paragraphs: [
      "Lorsqu'une décision défavorable est reçue, les délais peuvent être courts. Il faut identifier la nature exacte de la décision, vérifier sa date de notification, lire les motifs et réunir rapidement les pièces utiles.",
      "Sophie Maréchal accompagne les recours contre les refus de titre de séjour, les obligations de quitter le territoire français, les refus de regroupement familial et certaines décisions liées à la nationalité ou à la protection.",
    ],
    points: [
      "Analyse du refus de séjour ou de l'OQTF",
      "Vérification de la procédure et de la motivation",
      "Préparation du recours devant le tribunal administratif",
      "Réunion des pièces personnelles, familiales et professionnelles",
    ],
  },
  {
    eyebrow: "Situation personnelle",
    title: "Relier la procédure à la vie familiale, au travail et au séjour",
    paragraphs: [
      "Les dossiers de droit des étrangers sont souvent sensibles, car ils touchent à la vie familiale, au travail, aux études et à l'installation en France. Le cabinet prend le temps d'identifier les enjeux réels avant de conseiller une stratégie.",
      "Lorsque les conditions d'une demande ne sont pas réunies ou qu'une action n'est pas adaptée, le cabinet l'explique clairement afin d'éviter une démarche inutile ou mal préparée.",
    ],
  },
  {
    eyebrow: "Cabinet",
    title: "Un premier échange pour identifier les délais et les pièces",
    paragraphs: [
      "Le cabinet reçoit sur rendez-vous à Paris et peut suivre certains dossiers à distance. Les échanges permettent de clarifier les délais, les pièces disponibles et les étapes à venir.",
      "Pour les situations d'OQTF, une page dédiée détaille les enjeux du recours et l'importance d'une analyse rapide de la décision.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit des étrangers · Paris"
        title="Avocate en droit des étrangers à Paris"
        intro="Le cabinet accompagne les demandes de séjour, naturalisation, refus préfectoraux et recours contre OQTF à Paris."
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
            href: "/recours-oqtf-paris",
            label: "Recours contre OQTF à Paris",
            text: "Page ciblée pour la recherche recours OQTF Paris.",
          },
          {
            href: "/contact",
            label: "Contacter le cabinet",
            text: "Présenter une décision préfectorale ou une demande de séjour.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
    </Desktop>
  );
}
