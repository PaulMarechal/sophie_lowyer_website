import Desktop from "../../src/components/layout/Desktop";
import DroitUrbanisme from "../../src/views/droit-de-urbanisme/DroitUrbanisme";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit de l'urbanisme à Paris",
  description:
    "Sophie Maréchal accompagne les projets d'urbanisme à Paris : permis de construire, déclaration préalable, autorisations d'urbanisme et recours.",
  path: "/droit-de-urbanisme",
  image: "/droit-de-urbanisme/opengraph-image",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand faire appel à un avocat en droit de l'urbanisme ?",
    answer:
      "Un avocat en droit de l'urbanisme peut intervenir avant le dépôt d'une demande d'autorisation d'urbanisme pour sécuriser votre projet, ou après une décision défavorable pour étudier les recours possibles et vous aider à choisir la meilleure stratégie.",
  },
  {
    question: "Un refus de permis de construire peut-il être contesté ?",
    answer:
      "Oui. Un refus de permis de construire peut, selon le dossier, faire l'objet d'un recours gracieux ou d'un recours contentieux devant le tribunal administratif.",
  },
  {
    question: "Un avocat peut-il vous aider à préparer un dossier de permis de construire ?",
    answer:
      "Oui. L'accompagnement permet de vérifier les règles applicables au terrain, d'anticiper les points de blocage et de constituer un dossier juridiquement plus solide.",
  },
]);

export default function Page() {
  return (
    <Desktop>
      <DroitUrbanisme />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Desktop>
  );
}
