import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit de l'urbanisme à Paris",
  description:
    "Avocate en droit de l'urbanisme à Paris, Sophie Maréchal accompagne permis de construire, autorisations d'urbanisme et recours administratifs.",
  path: "/avocate-droit-urbanisme-paris",
  keywords: [
    "avocate droit de l'urbanisme paris",
    "avocat urbanisme paris",
    "avocate permis de construire paris",
    "recours urbanisme paris",
  ],
  image: "/droit-de-urbanisme/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand consulter une avocate en droit de l'urbanisme à Paris ?",
    answer:
      "Un avocat peut intervenir avant le dépôt d'une autorisation d'urbanisme, après un refus ou lorsqu'un projet fait l'objet d'un recours ou d'un litige avec l'administration.",
  },
  {
    question: "Un refus de permis de construire peut-il être contesté ?",
    answer:
      "Oui, un refus peut être contesté par un recours gracieux ou devant le tribunal administratif, selon les délais et les motifs retenus par l'administration.",
  },
  {
    question: "Le cabinet accompagne-t-il les particuliers et les professionnels ?",
    answer:
      "Oui, le cabinet accompagne les particuliers, professionnels, porteurs de projet et collectivités pour analyser les règles d'urbanisme et sécuriser les démarches.",
  },
  {
    question: "Pourquoi faire analyser un dossier avant le dépôt d'une demande ?",
    answer:
      "L'analyse en amont permet d'identifier les règles applicables, les risques de refus, les pièces à renforcer et la stratégie à adopter avant le dépôt du dossier.",
  },
]);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Avocate en droit de l'urbanisme à Paris", path: "/avocate-droit-urbanisme-paris" },
]);

const sections = [
  {
    eyebrow: "Projet",
    title: "Vérifier le cadre juridique avant de construire ou d'aménager",
    paragraphs: [
      "Le droit de l'urbanisme encadre les conditions dans lesquelles un projet peut être construit, modifié ou aménagé. À Paris, ces règles peuvent être particulièrement techniques : plan local d'urbanisme, servitudes, prescriptions architecturales, destination des constructions et contraintes patrimoniales.",
      "Sophie Maréchal accompagne les particuliers, professionnels et collectivités dans l'analyse juridique de leurs projets. L'objectif est d'anticiper les difficultés, de comprendre les règles applicables et de préparer une démarche cohérente face à l'administration.",
    ],
  },
  {
    eyebrow: "Autorisations",
    title: "Permis, déclaration préalable, prescriptions : lire la décision",
    paragraphs: [
      "Le cabinet intervient sur les demandes d'autorisation d'urbanisme : permis de construire, permis d'aménager, déclaration préalable de travaux ou prescriptions imposées par l'administration.",
      "L'accompagnement peut porter sur la faisabilité juridique du projet, l'analyse du règlement applicable, la relecture des pièces et la préparation d'une stratégie avant dépôt ou après décision.",
    ],
    points: [
      "Analyse du PLU et des règles applicables au terrain",
      "Vérification des motifs de refus ou de prescription",
      "Préparation d'un recours gracieux",
      "Contentieux devant le tribunal administratif",
    ],
  },
  {
    eyebrow: "Après un refus",
    title: "Choisir entre recours, régularisation ou nouveau dépôt",
    paragraphs: [
      "Un refus de permis de construire, une opposition à déclaration préalable ou une prescription contestable doit être lu précisément. Tous les motifs invoqués par l'administration ne sont pas nécessairement fondés, et certains projets peuvent être régularisés ou défendus.",
      "La stratégie dépend du dossier : échange avec l'administration, recours gracieux, nouvelle demande ou recours contentieux. Le cabinet aide à choisir l'option la plus adaptée à la situation et aux délais.",
    ],
  },
  {
    eyebrow: "Cabinet",
    title: "Un accompagnement à Paris pour les dossiers d'urbanisme",
    paragraphs: [
      "Le cabinet est situé au 11 boulevard de Sébastopol, à Paris. Il accompagne les dossiers d'urbanisme parisiens et franciliens, avec un suivi adapté à la complexité du projet et au calendrier administratif.",
      "La page générale droit de l'urbanisme et la page dédiée aux refus de permis permettent d'approfondir les situations les plus fréquentes.",
    ],
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        eyebrow="Droit de l'urbanisme · Paris"
        title="Avocate en droit de l'urbanisme à Paris"
        intro="Le cabinet accompagne les projets de construction, autorisations d'urbanisme et recours contre les décisions défavorables à Paris."
        sections={sections}
        proofItems={[
          {
            title: "Droit public",
            text: "La pratique du cabinet s'inscrit dans le droit public, avec une attention particulière aux décisions administratives et aux recours.",
          },
          {
            title: "Avant et après décision",
            text: "Le cabinet peut intervenir en amont du dépôt d'un dossier ou après une décision défavorable pour analyser les options disponibles.",
          },
          {
            title: "Risques du dossier",
            text: "Chaque projet est étudié à partir des règles applicables, des pièces du dossier, des échanges avec l'administration et des délais de recours.",
          },
          {
            title: "Paris",
            text: "Les rendez-vous peuvent se tenir au cabinet dans le 1er arrondissement ou à distance selon les besoins du dossier.",
          },
        ]}
        relatedTitle="Pages liées en droit de l'urbanisme"
        relatedItems={[
          {
            href: "/droit-de-urbanisme",
            label: "Droit de l'urbanisme",
            text: "Présentation générale des interventions en autorisations et recours.",
          },
          {
            href: "/avocat-refus-permis-construire-paris",
            label: "Refus de permis de construire à Paris",
            text: "Analyser les motifs de refus et les recours possibles.",
          },
          {
            href: "/avocate-droit-public-paris",
            label: "Avocate en droit public à Paris",
            text: "Comprendre l'approche du cabinet en droit administratif.",
          },
          {
            href: "/contact",
            label: "Contacter le cabinet",
            text: "Présenter un projet ou une décision d'urbanisme.",
          },
        ]}
        faqTitle="FAQ droit de l'urbanisme à Paris"
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
