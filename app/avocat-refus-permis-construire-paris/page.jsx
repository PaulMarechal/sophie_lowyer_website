import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate refus de permis de construire à Paris",
  description:
    "Sophie Maréchal accompagne les recours contre les refus de permis de construire à Paris : analyse du dossier, stratégie et contentieux administratif.",
  path: "/avocat-refus-permis-construire-paris",
  keywords: [
    "avocate refus permis de construire paris",
    "avocat permis de construire paris",
    "recours refus permis construire paris",
  ],
  image: "/droit-de-urbanisme/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Un refus de permis de construire peut-il être contesté ?",
    answer:
      "Oui, un refus de permis de construire peut être contesté par un recours gracieux ou devant le tribunal administratif selon la situation et les délais applicables.",
  },
  {
    question: "Que vérifie un avocat après un refus de permis ?",
    answer:
      "L'avocat vérifie la motivation du refus, les règles d'urbanisme invoquées, la faisabilité d'un recours et les pièces nécessaires pour défendre le projet.",
  },
  {
    question: "Faut-il agir vite après un refus ?",
    answer:
      "Oui, les délais de recours en urbanisme sont encadrés. Une analyse rapide permet de ne pas perdre la possibilité de contester utilement la décision.",
  },
]);

const sections = [
  {
    eyebrow: "Décision défavorable",
    title: "Refus de permis de construire : quelle réaction adopter ?",
    paragraphs: [
      "Un refus de permis de construire ne signifie pas nécessairement que le projet est juridiquement impossible. Il faut d'abord comprendre les motifs exacts retenus par l'administration.",
      "Une lecture technique du dossier et des règles d'urbanisme applicables permet souvent d'identifier les marges de recours ou les ajustements envisageables.",
    ],
  },
  {
    eyebrow: "Vérifications",
    title: "Les points clés analysés par le cabinet",
    paragraphs: [
      "Le cabinet examine la cohérence du refus, les pièces déposées, le règlement applicable au terrain et la possibilité d'un recours gracieux ou contentieux.",
    ],
    points: [
      "Motivation juridique du refus",
      "Règles du PLU et servitudes applicables",
      "Possibilité de régularisation du projet",
      "Stratégie de recours administratif ou contentieux",
    ],
  },
  {
    eyebrow: "Recours",
    title: "Défendre le projet à Paris",
    paragraphs: [
      "L'objectif est de sécuriser la meilleure stratégie : obtenir le retrait de la décision, préparer une nouvelle demande ou engager un contentieux devant le tribunal administratif.",
      "Le cabinet accompagne particuliers et professionnels à Paris dans la contestation des refus de permis de construire et autres autorisations d'urbanisme.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit de l'urbanisme · Paris"
        title="Avocate refus de permis de construire à Paris"
        intro="Le cabinet accompagne l'analyse et la contestation des refus de permis de construire à Paris, avec une lecture claire des motifs et des recours."
        sections={sections}
        faqTitle="FAQ refus de permis de construire"
        faqItems={faqSchema.mainEntity.map((item) => ({
          question: item.name,
          answer: item.acceptedAnswer.text,
        }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Desktop>
  );
}
