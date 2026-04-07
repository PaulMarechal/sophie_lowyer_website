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
    question: "Combien de temps a-t-on pour contester une OQTF ?",
    answer:
      "Le délai dépend du type d'OQTF et de la situation de la personne concernée. Une analyse immédiate de la décision est importante pour éviter toute forclusion.",
  },
  {
    question: "Un avocat est-il utile pour un recours contre une OQTF ?",
    answer:
      "Oui, un avocat peut analyser la légalité de la décision, vérifier la procédure, préparer les arguments et représenter la personne devant le tribunal administratif.",
  },
  {
    question: "Peut-on contester en même temps le refus de séjour et l'OQTF ?",
    answer:
      "Oui, selon la décision reçue, le recours peut porter à la fois sur le refus de séjour, l'obligation de quitter le territoire et les mesures qui l'accompagnent.",
  },
]);

const sections = [
  {
    eyebrow: "Recours",
    title: "Comprendre l'OQTF et réagir rapidement",
    paragraphs: [
      "Lorsqu'une personne reçoit une obligation de quitter le territoire français, il est essentiel d'identifier rapidement les délais applicables et la portée exacte de la décision.",
      "Une OQTF peut être accompagnée d'un refus de titre de séjour, d'une interdiction de retour ou d'une désignation du pays de renvoi. Chaque élément doit être analysé séparément.",
    ],
  },
  {
    eyebrow: "Analyse",
    title: "Ce que l'avocat vérifie dans le dossier",
    paragraphs: [
      "L'analyse porte notamment sur la motivation de la décision, le respect de la procédure, la prise en compte de la vie privée et familiale, l'ancienneté du séjour et les pièces du dossier.",
    ],
    points: [
      "Régularité de la procédure préfectorale",
      "Motivation du refus et de l'OQTF",
      "Atteinte disproportionnée à la vie privée et familiale",
      "Pièces utiles à réunir rapidement",
    ],
  },
  {
    eyebrow: "Stratégie",
    title: "Préparer un recours contre une OQTF à Paris",
    paragraphs: [
      "Le recours doit être construit avec méthode : lecture de la décision, identification des arguments sérieux, réunion des justificatifs et préparation de la procédure contentieuse.",
      "Le cabinet accompagne les personnes concernées à Paris pour défendre leurs droits et sécuriser au mieux la suite de leur situation administrative.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit des étrangers · Paris"
        title="Avocate OQTF à Paris"
        intro="Le cabinet accompagne les recours contre les obligations de quitter le territoire français, avec une analyse rapide des délais et des moyens de contestation."
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
