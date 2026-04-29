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
    question: "Quel est le délai pour faire un recours contre une OQTF ?",
    answer:
      "Le délai dépend de la nature de l'OQTF, de la décision reçue et de sa notification. Il faut faire analyser la décision très rapidement pour éviter de perdre la possibilité d'agir.",
  },
  {
    question: "Que faut-il transmettre à l'avocat après une OQTF ?",
    answer:
      "Il faut transmettre la décision complète, l'enveloppe ou la preuve de notification, les précédents échanges avec la préfecture et les pièces relatives au séjour, à la famille, au travail, aux études ou à la santé.",
  },
  {
    question: "Peut-on contester le refus de séjour et l'OQTF ensemble ?",
    answer:
      "Oui, lorsque les décisions sont liées, le recours peut viser le refus de séjour, l'obligation de quitter le territoire, le pays de renvoi et parfois l'interdiction de retour.",
  },
  {
    question: "Le recours suspend-il l'exécution de l'OQTF ?",
    answer:
      "La réponse dépend du type d'OQTF et du régime procédural applicable. L'analyse de la décision permet d'identifier les effets du recours et les urgences à traiter.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Recours contre OQTF à Paris", path: "/recours-oqtf-paris" },
]);

const sections = [
  {
    eyebrow: "Notification",
    title: "Identifier tout de suite le délai applicable",
    paragraphs: [
      "Une obligation de quitter le territoire français est une décision administrative qui peut avoir des conséquences immédiates sur le séjour, le travail, la vie familiale et la possibilité de revenir en France. La première étape consiste à identifier le délai de recours applicable.",
      "Le recours contre une OQTF à Paris doit être préparé à partir de la décision complète. Il faut vérifier si elle est accompagnée d'un refus de séjour, d'une interdiction de retour, d'un délai de départ volontaire ou de la désignation d'un pays de renvoi.",
    ],
  },
  {
    eyebrow: "Contrôle",
    title: "Motivation, procédure, attaches en France : ce qui doit être relu",
    paragraphs: [
      "Le cabinet analyse la compétence de l'autorité signataire, la motivation de la décision, la prise en compte de la vie privée et familiale, la situation professionnelle, les attaches en France et les éventuelles erreurs de procédure.",
      "Cette analyse permet de construire des moyens de contestation sérieux, adaptés au dossier, plutôt que de déposer un recours standardisé.",
    ],
    points: [
      "Date et mode de notification de l'OQTF",
      "Motifs du refus de séjour et de l'éloignement",
      "Vie privée et familiale en France",
      "Ancienneté du séjour, travail, études, santé et intégration",
    ],
  },
  {
    eyebrow: "Pièces",
    title: "Présenter au tribunal une situation claire et documentée",
    paragraphs: [
      "Les pièces justificatives sont essentielles : documents d'identité, preuves de présence en France, justificatifs familiaux, bulletins de salaire, attestations, certificats médicaux lorsque la situation le justifie, diplômes ou preuves d'insertion.",
      "Le cabinet aide à identifier les pièces réellement utiles et à organiser le dossier pour que le tribunal comprenne la situation concrète de la personne concernée.",
    ],
  },
  {
    eyebrow: "Droit des étrangers",
    title: "Un accompagnement à Paris pour contester une OQTF",
    paragraphs: [
      "Sophie Maréchal intervient en droit des étrangers et en droit public à Paris. Son cabinet accompagne les personnes concernées par une OQTF pour analyser la décision, préparer le recours et défendre leur situation devant la juridiction administrative.",
      "Le cabinet est situé au 11 boulevard de Sébastopol, 75001 Paris, et peut organiser un premier échange rapide lorsque les délais de recours l'exigent.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="OQTF · Paris"
        title="Recours contre OQTF à Paris"
        intro="Le cabinet accompagne les recours contre les obligations de quitter le territoire français, avec une analyse rapide des délais, de la décision et des pièces utiles."
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
