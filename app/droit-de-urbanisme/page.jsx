import Desktop from "../../src/components/layout/Desktop";
import DroitUrbanisme from "../../src/views/droit-de-urbanisme/DroitUrbanisme";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit de l'urbanisme à Paris",
  description:
    "Le cabinet conseille et assiste en droit de l'urbanisme à Paris pour permis de construire, autorisations d'urbanisme et recours administratifs.",
  path: "/droit-de-urbanisme",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand faire appel à un avocat en droit de l'urbanisme ?",
    answer:
      "Un avocat peut intervenir avant le dépôt d'une demande d'autorisation d'urbanisme pour sécuriser le projet, ou après une décision défavorable pour analyser les recours possibles.",
  },
  {
    question: "Un refus de permis de construire peut-il être contesté ?",
    answer:
      "Oui, un refus de permis de construire peut, selon le dossier, être contesté par un recours gracieux ou devant le tribunal administratif.",
  },
  {
    question: "L'avocat peut-il aider à préparer un dossier de permis ?",
    answer:
      "Oui, l'avocat peut analyser les règles applicables, vérifier la faisabilité juridique du projet et accompagner la constitution du dossier.",
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
