import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Recours contre OQTF à Paris",
  description:
    "Recours contre OQTF à Paris : Sophie Maréchal analyse les délais, la décision préfectorale, les pièces utiles et la stratégie contentieuse.",
  path: "/recours-oqtf-paris",
  keywords: [
    "recours contre OQTF à Paris",
    "recours oqtf paris",
    "avocate oqtf paris",
    "avocat obligation de quitter le territoire paris",
  ],
  image: "/droit-des-etrangers/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Qu'est-ce qu'une OQTF ?",
    answer:
      "Une OQTF est une décision administrative prise par le préfet qui ordonne à un étranger de quitter la France. Elle est souvent accompagnée d'un délai pour partir volontairement, parfois sans aucun délai.",
  },
  {
    question: "Qui peut recevoir une OQTF ?",
    answer:
      "Toute personne étrangère qui ne dispose pas d'un titre de séjour en cours de validité ou d'une attestation de prolongation d'instruction, dont le titre est refusé ou retiré, ou dont la demande d'asile est rejetée, peut recevoir une OQTF.",
  },
  {
    question: "Comment l'OQTF est-elle notifiée ?",
    answer:
      "L'OQTF est notifiée par courrier remis en main propre, en préfecture ou lors d'un contrôle, ou par lettre recommandée. La décision doit préciser les voies et délais de recours.",
  },
  {
    question: "Quels sont les délais de recours à retenir ?",
    answer:
      "Le délai dépend de la situation : 30 jours dans le cas général avec délai de départ volontaire, 7 jours en cas d'assignation à résidence, et 48 heures en cas de placement en centre de rétention administrative.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Recours contre OQTF à Paris", path: "/recours-oqtf-paris" },
]);

const sections = [
  {
    eyebrow: "Définition",
    title: "L'OQTF : obligation de quitter le territoire français",
    paragraphs: [
      "Une OQTF est une décision administrative prise par le préfet qui ordonne à un étranger de quitter la France. Elle est souvent accompagnée d'un délai pour partir volontairement, en général 30 jours, parfois sans aucun délai.",
      "Recevoir une OQTF ne signifie pas forcément que votre expulsion est inévitable. Vous avez le droit de contester cette décision devant un juge. Dans certains cas, tant que votre recours est en cours d'examen, vous ne pouvez pas être renvoyé de force.",
    ],
  },
  {
    eyebrow: "Notification",
    title: "Identifier la date, le délai et les voies de recours",
    paragraphs: [
      "L'OQTF est notifiée par courrier remis en main propre, en préfecture ou lors d'un contrôle, ou par lettre recommandée. La décision doit préciser les voies et délais de recours.",
      "Le délai commence à courir dès la notification, c'est-à-dire le jour où vous recevez ou signez le document, et non à partir du moment où vous en prenez connaissance plus tard.",
    ],
    points: [
      "30 jours dans le cas général, pour une OQTF avec délai de départ volontaire",
      "7 jours en cas d'OQTF avec assignation à résidence",
      "48 heures en cas de placement en centre de rétention administrative",
      "Analyse immédiate de la décision pour éviter toute forclusion",
    ],
  },
  {
    eyebrow: "Réflexes",
    title: "Que faire dès que vous recevez une OQTF ?",
    paragraphs: [
      "Lisez attentivement le document et repérez la date de notification, le délai indiqué et les voies de recours mentionnées.",
      "Consultez un avocat ou une association spécialisée le plus tôt possible. Les délais sont très courts et une erreur de procédure peut faire rejeter votre recours.",
      "Rassemblez vos documents : preuves de résidence, de travail, de vie familiale, documents d'identité, justificatifs de présence et de durée de séjour en France.",
    ],
  },
  {
    eyebrow: "Droit des étrangers",
    title: "Un accompagnement à Paris pour contester une OQTF",
    paragraphs: [
      "Sophie Maréchal intervient en droit des étrangers et en droit public à Paris. Son cabinet accompagne les personnes concernées par une OQTF pour analyser la décision, préparer le recours et défendre leur situation devant la juridiction administrative.",
      "Ne quittez pas le territoire avant d'avoir consulté un avocat, sauf si vous avez décidé de partir volontairement. Le cabinet peut organiser un premier échange rapide lorsque les délais de recours l'exigent.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="OQTF · Paris"
        title="Recours contre OQTF à Paris"
        intro="Ce que signifie une OQTF, les délais à connaître et les premiers réflexes à adopter pour préserver vos droits."
        sections={sections}
        proofItems={[
          {
            title: "Éloignement",
            text: "Le cabinet intervient sur les refus de séjour, OQTF, démarches de titre de séjour, naturalisation et recours administratifs.",
          },
          {
            title: "Délais",
            text: "La première vérification porte sur la date de notification et le régime de recours applicable à la décision reçue.",
          },
          {
            title: "Dossier personnel",
            text: "Le recours est préparé à partir de la situation personnelle, familiale et professionnelle de la personne concernée.",
          },
          {
            title: "Paris",
            text: "Les rendez-vous peuvent se tenir au cabinet dans le 1er arrondissement ou à distance selon l'urgence du dossier.",
          },
        ]}
        relatedTitle="Pages liées aux recours en droit des étrangers"
        relatedItems={[
          {
            href: "/avocat-oqtf-paris",
            label: "Avocate OQTF à Paris",
            text: "Une page complémentaire sur les obligations de quitter le territoire.",
          },
          {
            href: "/avocate-droit-des-etrangers-paris",
            label: "Avocate en droit des étrangers à Paris",
            text: "Titres de séjour, naturalisation et décisions préfectorales.",
          },
          {
            href: "/droit-des-etrangers",
            label: "Droit des étrangers",
            text: "Présentation générale des démarches et recours.",
          },
          {
            href: "/contact",
            label: "Contacter le cabinet",
            text: "Faire analyser une OQTF ou une décision préfectorale.",
          },
        ]}
        faqTitle="FAQ recours OQTF à Paris"
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
