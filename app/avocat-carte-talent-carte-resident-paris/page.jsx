import Desktop from "../../src/components/layout/Desktop";
import SeoLandingPage from "../../src/views/seo-pages/SeoLandingPage";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "../seo";

export const metadata = buildMetadata({
  title: "Avocate carte talent et carte de résident à Paris",
  description:
    "Sophie Maréchal accompagne à Paris les demandes de carte talent et de carte de résident : choix du titre, dossier, renouvellement et recours.",
  path: "/avocat-carte-talent-carte-resident-paris",
  keywords: [
    "avocat carte talent paris",
    "avocate carte talent paris",
    "avocat carte de résident paris",
    "carte talent renouvellement paris",
  ],
  image: "/droit-des-etrangers/opengraph-image",
});

const faqItems = [
  {
    question: "Carte talent ou passeport talent : quel terme utiliser ?",
    answer:
      "« Carte talent » est le terme actuel utilisé par Service-Public et le code pour ce dispositif. L'expression « passeport talent » reste présente dans certains visas, formulaires et usages administratifs.",
  },
  {
    question: "Quelle différence entre une carte talent et une carte de résident ?",
    answer:
      "La carte talent est un titre pluriannuel lié à des catégories professionnelles, scientifiques, artistiques ou économiques définies par les textes. La carte de résident répond à plusieurs fondements liés notamment à la durée et aux conditions du séjour, aux attaches familiales ou à certains statuts. Ces titres ne sont pas interchangeables.",
  },
  {
    question: "Toutes les demandes de carte talent suivent-elles les mêmes conditions ?",
    answer:
      "Non. Les justificatifs et critères varient selon le motif invoqué, par exemple salarié qualifié, chercheur, projet économique ou activité artistique. La procédure diffère aussi selon que la personne réside déjà en France ou se trouve à l'étranger.",
  },
  {
    question: "Faut-il avoir vécu cinq ans en France pour toute carte de résident ?",
    answer:
      "Non. La carte de résident de longue durée-UE repose en principe sur une résidence régulière et ininterrompue de cinq ans, mais d'autres cartes de résident peuvent être délivrées sur des fondements et selon des conditions différents.",
  },
  {
    question: "Pourquoi faire vérifier le dossier avant le dépôt ?",
    answer:
      "Une vérification permet d'identifier le titre et le motif adaptés, de contrôler les conditions propres à la situation, d'organiser les preuves et de repérer une incohérence avant qu'elle ne conduise à une demande de complément ou à une décision défavorable.",
  },
  {
    question: "Que faire après un refus ou une difficulté de renouvellement ?",
    answer:
      "Il faut conserver la décision complète, sa date et sa preuve de notification, ainsi que les attestations de dépôt et échanges avec l'administration. La voie de recours et son délai dépendent de la décision reçue et doivent être vérifiés rapidement.",
  },
];

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Compétences", path: "/competences" },
  { name: "Droit des étrangers", path: "/droit-des-etrangers" },
  {
    name: "Carte talent et carte de résident à Paris",
    path: "/avocat-carte-talent-carte-resident-paris",
  },
];

const faqSchema = buildFaqSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
const serviceSchema = buildServiceSchema({
  name: "Avocate carte talent et carte de résident à Paris",
  description:
    "Accompagnement juridique des demandes et renouvellements de carte talent et de carte de résident, ainsi que des décisions défavorables.",
  path: "/avocat-carte-talent-carte-resident-paris",
  serviceType: "Carte talent et carte de résident",
});

const sections = [
  {
    eyebrow: "Orientation",
    title: "Distinguer deux titres qui répondent à des logiques différentes",
    paragraphs: [
      "La carte de séjour pluriannuelle « talent » vise différentes situations professionnelles, scientifiques, artistiques ou économiques. Chaque catégorie possède ses propres conditions et ses propres justificatifs.",
      "Ce titre est encore appelé « passeport talent » dans certains visas, formulaires et usages administratifs. La terminologie ne dispense pas de vérifier la mention exacte et les conditions applicables au projet.",
      "La carte de résident n'est pas une simple version plus longue de la carte talent. Elle recouvre plusieurs fondements juridiques, auxquels peuvent s'ajouter les régimes particuliers prévus pour certaines nationalités. Une analyse individualisée est nécessaire avant de choisir la demande.",
    ],
  },
  {
    eyebrow: "Carte talent",
    title: "Relier le bon motif au projet professionnel ou économique",
    paragraphs: [
      "Le dossier doit correspondre exactement à la catégorie invoquée : emploi qualifié, recherche, création d'entreprise, projet économique, activité artistique ou autre situation prévue par les textes. Le diplôme, le contrat, la mission, la convention d'accueil ou le projet doivent être cohérents entre eux.",
      "La procédure n'est pas identique selon que la personne se trouve en France ou à l'étranger. Les seuils et documents peuvent évoluer : ils doivent être vérifiés sur la source officielle au moment du dépôt, sans s'appuyer sur une liste générique ancienne.",
    ],
    points: [
      "Salarié qualifié",
      "Carte bleue européenne",
      "Chercheur",
      "Porteur de projet",
      "Mandataire social",
      "Profession artistique et culturelle",
      "Renommée nationale ou internationale",
      "Profession médicale et de la pharmacie",
    ],
  },
  {
    eyebrow: "Carte de résident",
    title: "Identifier le fondement exact avant d'évaluer les conditions",
    paragraphs: [
      "La carte de résident de dix ans peut être demandée dans plusieurs situations, notamment selon les attaches en France, certains statuts de protection ou d'autres fondements prévus par le droit du séjour. La carte de résident de longue durée-UE suit une logique distincte liée, en principe, à cinq années de séjour régulier et ininterrompu ainsi qu'à d'autres conditions.",
      "Depuis 2026, de nouvelles exigences de langue et d'examen civique concernent aussi certaines premières cartes de résident. Leur application dépend du titre demandé et de la situation de la personne ; les règles particulières et exceptions doivent donc être contrôlées avant le dépôt.",
    ],
  },
  {
    eyebrow: "Dossier",
    title: "Préparer les preuves utiles et une chronologie compréhensible",
    paragraphs: [
      "Une demande solide associe le bon fondement juridique à des pièces actualisées. L'administration doit pouvoir comprendre rapidement le parcours de séjour, le projet professionnel ou les attaches invoquées et vérifier la continuité entre les documents.",
    ],
    points: [
      "Titre actuel, visa et preuves de la régularité du séjour",
      "Contrat, diplômes, attestations d'employeur ou documents du projet",
      "État civil, domicile, ressources, couverture maladie et éléments familiaux selon le titre",
      "Attestations de dépôt, demandes de complément et échanges avec l'administration",
    ],
  },
  {
    eyebrow: "Renouvellement et recours",
    title: "Anticiper l'échéance et analyser toute décision reçue",
    paragraphs: [
      "Un changement d'employeur, de mission, de projet ou de situation familiale peut modifier le fondement pertinent au renouvellement. Il faut également vérifier le calendrier officiel applicable au titre détenu et conserver la preuve de chaque démarche.",
      "En cas de refus, de retrait, de difficulté de dépôt ou de silence prolongé, la stratégie dépend de la décision, de sa notification et de la situation de séjour. Aucun délai universel ne doit être appliqué sans lecture des documents et des voies de recours.",
    ],
  },
];

const sourceItems = [
  {
    label: "Service-Public — Carte de séjour pluriannuelle « talent »",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
  },
  {
    label: "Ministère de l'Intérieur — Les catégories de cartes talent",
    href: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/limmigration-professionnelle-et-etudiante",
  },
  {
    label: "Service-Public — Carte de résident de 10 ans",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
  },
  {
    label: "Service-Public — Carte de résident de longue durée-UE",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17359",
  },
  {
    label: "Service-Public — Carte de résident permanent",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11201",
  },
  {
    label: "Service-Public — Titres et cartes de séjour en France",
    href: "https://www.service-public.gouv.fr/particuliers/vosdroits/N110",
  },
];

export default function Page() {
  return (
    <Desktop>
      <SeoLandingPage
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Compétences", href: "/competences" },
          { label: "Droit des étrangers", href: "/droit-des-etrangers" },
          { label: "Carte talent et carte de résident" },
        ]}
        eyebrow="Droit des étrangers · Paris"
        title="Avocate carte talent et carte de résident à Paris"
        intro="Le cabinet vous aide à identifier le titre adapté, préparer un dossier cohérent, anticiper le renouvellement et analyser une décision défavorable."
        notice="Les conditions varient selon le motif, la nationalité, le lieu de résidence et le titre déjà détenu. Les seuils, pièces et modalités de dépôt doivent être vérifiés au jour de la démarche."
        sections={sections}
        proofTitle="Une méthode adaptée aux titres de séjour complexes"
        proofItems={[
          {
            title: "Choix du fondement",
            text: "Comparer les titres envisageables et retenir celui qui correspond à la situation réelle et aux pièces disponibles.",
          },
          {
            title: "Audit des justificatifs",
            text: "Vérifier les documents professionnels, économiques, familiaux et de séjour propres à la catégorie demandée.",
          },
          {
            title: "Anticipation",
            text: "Repérer les échéances, changements de situation et points qui peuvent fragiliser une première demande ou un renouvellement.",
          },
          {
            title: "Décision administrative",
            text: "Analyser le motif, la notification et la voie de recours lorsqu'une décision défavorable intervient.",
          },
        ]}
        faqTitle="FAQ carte talent et carte de résident"
        faqItems={faqItems}
        updatedAt="1er septembre 2026"
        sourceItems={sourceItems}
        relatedTitle="Pages utiles en droit des étrangers et de la nationalité"
        relatedItems={[
          {
            href: "/droit-des-etrangers",
            label: "Droit des étrangers",
            text: "Présentation générale des demandes de séjour et des recours contre les décisions préfectorales.",
          },
          {
            href: "/avocate-droit-des-etrangers-paris",
            label: "Avocate en droit des étrangers à Paris",
            text: "Un accompagnement juridique pour les démarches et contentieux liés au séjour.",
          },
          {
            href: "/droit-de-la-nationalite",
            label: "Droit de la nationalité",
            text: "Comprendre la naturalisation française, son instruction et les décisions possibles.",
          },
          {
            href: "/avocat-oqtf-paris",
            label: "Avocate OQTF à Paris",
            text: "Réagir rapidement à une obligation de quitter le territoire français.",
          },
        ]}
        ctaTitle="Faire vérifier le titre, les pièces et le calendrier"
        ctaText="Indiquez votre nationalité, votre lieu de résidence, le titre actuellement détenu, son échéance et l'objectif de la demande. En cas de décision, joignez sa version complète et sa preuve de notification."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumbSchema, serviceSchema]),
        }}
      />
    </Desktop>
  );
}
