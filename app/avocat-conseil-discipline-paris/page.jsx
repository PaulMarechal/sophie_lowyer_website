import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate conseil de discipline à Paris",
  description:
    "Sophie Maréchal assiste les agents publics convoqués devant un conseil de discipline à Paris : préparation du dossier, stratégie de défense et représentation.",
  path: "/avocat-conseil-discipline-paris",
  keywords: [
    "avocate conseil de discipline paris",
    "avocat conseil de discipline fonction publique paris",
    "sanction disciplinaire fonction publique avocat paris",
  ],
  image: "/droit-de-la-fonction-publique/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Pourquoi consulter un avocat avant un conseil de discipline ?",
    answer:
      "Un avocat permet d'analyser le dossier disciplinaire, de vérifier la régularité de la procédure et de préparer une défense structurée avant la séance.",
  },
  {
    question: "L'avocat peut-il assister l'agent pendant la séance ?",
    answer:
      "Oui, l'avocat peut assister ou représenter l'agent selon le cadre applicable et défendre ses observations devant le conseil de discipline.",
  },
  {
    question: "Une sanction disciplinaire peut-elle être contestée après la décision ?",
    answer:
      "Oui, selon la situation, la sanction peut ensuite faire l'objet d'un recours devant le tribunal administratif.",
  },
]);

const sections = [
  {
    eyebrow: "Procédure disciplinaire",
    title: "Préparer efficacement une comparution devant le conseil de discipline",
    paragraphs: [
      "Une convocation devant le conseil de discipline est une étape sensible pour un agent public. La procédure doit être examinée avec rigueur avant la séance.",
      "Le cabinet aide à comprendre les griefs reprochés, à relire le dossier disciplinaire et à préparer des observations adaptées à la situation administrative de l'agent.",
    ],
  },
  {
    eyebrow: "Défense",
    title: "Ce que le cabinet met en place avant l'audience",
    paragraphs: [
      "La préparation ne consiste pas seulement à intervenir le jour de la séance. Elle implique une véritable stratégie de défense et une revue détaillée du dossier.",
    ],
    points: [
      "Analyse des faits et de la procédure",
      "Lecture du dossier disciplinaire",
      "Préparation des observations écrites et orales",
      "Assistance pendant la séance",
    ],
  },
  {
    eyebrow: "Suite du dossier",
    title: "Après le conseil de discipline",
    paragraphs: [
      "Selon la décision prise, il peut être nécessaire de préparer la suite : recours gracieux, stratégie administrative ou contentieux devant le tribunal administratif.",
      "Le cabinet accompagne les agents publics à Paris à chaque étape, avec un conseil clair et une défense structurée.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Fonction publique · Paris"
        title="Avocate conseil de discipline à Paris"
        intro="Le cabinet accompagne les agents publics convoqués devant un conseil de discipline, de la préparation du dossier à la défense pendant la séance."
        sections={sections}
        faqTitle="FAQ conseil de discipline"
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
