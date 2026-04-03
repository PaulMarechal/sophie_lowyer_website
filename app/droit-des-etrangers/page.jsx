import Desktop from "../../src/components/layout/Desktop";
import DroitEtrangers from "../../src/views/droit-des-etrangers/DroitEtrangers";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit des étrangers à Paris",
  description:
    "Sophie Maréchal accompagne les démarches de séjour, naturalisation, nationalité française et contentieux des étrangers à Paris.",
  path: "/droit-des-etrangers",
});

const faqSchema = buildFaqSchema([
  {
    question: "Quand consulter un avocat en droit des étrangers ?",
    answer:
      "Il est utile de consulter un avocat pour préparer une demande de titre de séjour, une naturalisation, un recours contre un refus de séjour, une OQTF ou un refus de regroupement familial.",
  },
  {
    question: "Un refus de titre de séjour peut-il être contesté ?",
    answer:
      "Oui, selon la situation, un refus de titre de séjour peut faire l'objet d'un recours gracieux ou contentieux. Une analyse du dossier permet d'identifier la stratégie la plus adaptée.",
  },
  {
    question: "L'avocat peut-il accompagner une demande de naturalisation ?",
    answer:
      "Oui, l'avocat peut aider à constituer un dossier complet, à anticiper les difficultés juridiques et à sécuriser la démarche de naturalisation.",
  },
]);

export default function Page() {
  return (
    <Desktop>
      <DroitEtrangers />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Desktop>
  );
}
