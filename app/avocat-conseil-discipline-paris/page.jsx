import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate conseil de discipline à Paris",
  description:
    "Sophie Maréchal accompagne les agents publics convoqués devant un conseil de discipline à Paris : accès au dossier, défense, séance et recours.",
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
      "Être convoqué devant un conseil de discipline est souvent source de stress, d'incompréhension et de peur pour l'avenir professionnel. Un avocat aide à comprendre ce qui est reproché, vérifier la procédure, préparer les explications et choisir la stratégie de défense.",
  },
  {
    question: "L'avocat peut-il assister l'agent pendant la séance ?",
    answer:
      "Oui, l'agent public peut être assisté par un avocat lors de la séance. L'avocat peut rester à ses côtés, présenter des observations, poser des questions et veiller au respect de ses droits.",
  },
  {
    question: "Une sanction disciplinaire peut-elle être contestée après la décision ?",
    answer:
      "Oui, une sanction disciplinaire peut, dans certains cas, être contestée par un recours gracieux, un recours hiérarchique ou un recours devant le juge administratif.",
  },
]);

const sections = [
  {
    eyebrow: "Convocation",
    title: "Relire le dossier avant le conseil de discipline",
    paragraphs: [
      "Une convocation devant le conseil de discipline est une étape sensible pour un agent public. La procédure doit être examinée avec rigueur avant la séance.",
      "La procédure doit être examinée avec rigueur avant la séance, afin de vérifier le respect de vos droits et d'anticiper les conséquences possibles sur votre situation professionnelle.",
      "Le cabinet aide à comprendre les griefs reprochés, à relire le dossier disciplinaire et à préparer des observations adaptées à votre situation. Il vous accompagne également pour formuler vos explications et rassembler les éléments utiles à votre défense.",
    ],
  },
  {
    eyebrow: "Préparation",
    title: "Structurer les observations et les pièces de défense",
    paragraphs: [
      "La préparation ne consiste pas seulement à intervenir le jour de la séance. Elle implique une véritable stratégie de défense et une revue détaillée du dossier.",
    ],
    points: [
      "Analyse des faits reprochés et de la procédure disciplinaire",
      "Lecture approfondie du dossier disciplinaire : rapports, témoignages, pièces administratives",
      "Préparation des observations écrites et orales, dans un langage clair et adapté à votre situation",
      "Assistance pendant la séance du conseil de discipline : présentation des arguments, réponses aux questions, rappel de vos droits",
    ],
  },
  {
    eyebrow: "Décision",
    title: "Anticiper la suite après l'avis du conseil ou la sanction disciplinaire",
    paragraphs: [
      "Selon la décision prise, il peut être nécessaire de préparer la suite : recours gracieux, recours hiérarchique ou recours contentieux devant le tribunal administratif.",
      "Le cabinet accompagne les agents publics, fonctionnaires titulaires et contractuels, avec un conseil clair et une défense structurée, depuis la convocation devant le conseil de discipline jusqu'à un éventuel recours contentieux devant le tribunal administratif.",
    ],
  },
  {
    eyebrow: "Recours",
    title: "Former un recours contre une sanction disciplinaire",
    paragraphs: [
      "Après avoir reçu la sanction disciplinaire, il est possible de la contester en formant un recours contentieux devant le tribunal administratif, dans un certain délai.",
      "L'avocat vous aide à vérifier ce délai, à analyser la régularité de la procédure, la proportion de la sanction par rapport aux faits reprochés et les chances de succès d'un recours.",
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
