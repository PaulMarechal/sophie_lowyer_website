import Desktop from "../../src/components/layout/Desktop";
import DroitFonctionPublique from "../../src/views/droit-de-la-fonction-publique/DroitFonctionPublique";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit de la fonction publique à Paris",
  description:
    "Sophie Maréchal, avocate en droit de la fonction publique à Paris, défend les agents publics en matière de carrière, conseil de discipline, sanctions disciplinaires et contentieux administratifs.",
  path: "/droit-de-la-fonction-publique",
  image: "/droit-de-la-fonction-publique/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand consulter un avocat en droit de la fonction publique ?",
    answer:
      "Il est pertinent de consulter un avocat en cas de procédure disciplinaire, de difficulté de carrière ou lorsque vous envisagez un recours contre une sanction administrative.",
  },
  {
    question: "Une sanction disciplinaire dans la fonction publique peut-elle être contestée ?",
    answer:
      "Oui, selon la situation, une sanction disciplinaire peut être contestée devant le tribunal administratif afin d'en demander l'annulation ou la réduction.",
  },
  {
    question: "L'avocat peut-il assister un agent devant le conseil de discipline ?",
    answer:
      "Oui, l'avocat peut préparer la défense de l'agent, vérifier la régularité de la procédure et l'assister ou le représenter devant le conseil de discipline.",
  },
]);

export default function Page() {
  return (
    <Desktop>
      <DroitFonctionPublique />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Desktop>
  );
}
