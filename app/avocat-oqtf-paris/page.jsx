import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate OQTF à Paris",
  description:
    "Sophie Maréchal accompagne les personnes faisant l'objet d'une OQTF à Paris : analyse de la décision, délais de recours et stratégie contentieuse.",
  path: "/avocat-oqtf-paris",
  keywords: ["avocate oqtf paris", "avocat oqtf paris", "recours oqtf paris"],
  image: "/droit-des-etrangers/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Qu'est-ce qu'une OQTF ?",
    answer:
      "Une OQTF est une décision administrative prise par le préfet qui ordonne à un étranger de quitter la France. Elle peut être accompagnée d'un délai de départ volontaire ou être prise sans délai.",
  },
  {
    question: "Quels sont les délais de recours contre une OQTF ?",
    answer:
      "Le délai dépend de la situation : 30 jours dans le cas général, 7 jours en cas d'assignation à résidence et 48 heures en cas de placement en centre de rétention administrative.",
  },
  {
    question: "Que faut-il faire dès réception d'une OQTF ?",
    answer:
      "Il faut lire la décision, vérifier la date de notification, identifier le délai de recours, consulter rapidement un avocat ou une association spécialisée et rassembler les pièces utiles.",
  },
]);

const sections = [
  {
    eyebrow: "Définition",
    title: "Ce que signifie une obligation de quitter le territoire français",
    paragraphs: [
      "Une OQTF est une décision administrative prise par le préfet qui ordonne à un étranger de quitter la France. Elle est souvent accompagnée d'un délai pour partir volontairement, en général 30 jours, parfois sans aucun délai.",
      "Recevoir une OQTF ne signifie pas forcément que votre expulsion est inévitable. Vous avez le droit de contester cette décision devant un juge.",
    ],
  },
  {
    eyebrow: "Délais",
    title: "Les délais de recours à retenir absolument",
    paragraphs: [
      "Le délai commence à courir dès la notification, c'est-à-dire le jour où vous recevez ou signez le document, et non à partir du moment où vous en prenez connaissance plus tard.",
    ],
    points: [
      "30 jours pour une OQTF avec délai de départ volontaire",
      "7 jours pour une OQTF avec assignation à résidence",
      "48 heures pour une OQTF avec placement en centre de rétention administrative",
      "Consultation rapide d'un avocat pour éviter toute erreur de procédure",
    ],
  },
  {
    eyebrow: "Pièces",
    title: "Les premiers réflexes après réception de l'OQTF",
    paragraphs: [
      "Lisez attentivement le document et repérez la date de notification, le délai indiqué et les voies de recours mentionnées.",
      "Rassemblez vos documents : preuves de résidence, de travail, de vie familiale, documents d'identité et tout justificatif de votre présence et de votre durée de séjour en France.",
      "Ne quittez pas le territoire avant d'avoir consulté un avocat, sauf si vous avez décidé de partir volontairement.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit des étrangers · Paris"
        title="Avocate OQTF à Paris"
        intro="Le cabinet accompagne les personnes visées par une OQTF afin d'identifier les délais, les voies de recours et les pièces à réunir rapidement."
        sections={sections}
        faqTitle="FAQ OQTF à Paris"
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
