import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate OQTF à Paris",
  description:
    "Sophie Maréchal accompagne les personnes faisant l'objet d'une OQTF à Paris : analyse de la décision, délais de recours et stratégie contentieuse.",
  path: "/avocat-oqtf-paris",
  keywords: ["avocate oqtf paris", "avocat oqtf paris", "recours oqtf paris"],
});

const faqSchema = buildFaqSchema([
  {
    "question": "Quel est le délai pour contester une OQTF ?",
    "answer": "Il n'existe pas un délai unique : tout dépend de la situation de la personne au moment de la notification. En dehors de toute mesure de contrainte, le délai de recours devant le tribunal administratif est généralement de 30 jours.\n\nIl est réduit à sept jours en cas d'assignation à résidence, et à quarante-huit heures en cas de placement en rétention administrative.\n\nUne vérification immédiate du cadre applicable est indispensable. Il est préférable de consulter un avocat sans délai dès la notification de l’OQTF."
  },
  {
    "question": "Le recours contre une OQTF empêche-t-il l'éloignement pendant son examen ?",
    "answer": "En principe oui. Formé dans les délais, le recours contentieux contre une OQTF est suspensif, ce qui signifie que la personne ne peut pas être éloignée du territoire tant que le tribunal administratif n'a pas rendu sa décision."
  },
  {
    "question": "Que risque-t-on si le délai de recours contre une OQTF est dépassé ?",
    "answer": "Passé le délai, l'OQTF devient définitive et exécutoire. La personne s'expose alors à une exécution forcée de la mesure d'éloignement ainsi que, selon les cas, à une interdiction de retour sur le territoire français."
  },
  {
    "question": "Peut-on contester en même temps le refus de titre de séjour et l'OQTF qui l'accompagne ?",
    "answer": "Oui : lorsque ces décisions sont notifiées ensemble, un recours unique devant le tribunal administratif permet de contester à la fois le refus de séjour, l'obligation de quitter le territoire et les mesures qui l'accompagnent (délai de départ volontaire, pays de destination, interdiction de retour, assignation à résidence)."
  }
]);

const sections = [
  {
    eyebrow: "Définition",
    title: "Ce que signifie une obligation de quitter le territoire français",
    paragraphs: [
      "Une OQTF est une décision administrative prise par le préfet qui ordonne à un étranger de quitter la France. Elle est souvent accompagnée d'un délai pour partir volontairement, en général 30 jours, parfois sans aucun délai.",
      "Recevoir une OQTF ne signifie pas forcément que votre éloignement est inévitable. Vous avez le droit de contester cette décision devant un juge.",
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
