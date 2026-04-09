import Desktop from "../../src/components/layout/Desktop";
import Honoraires from "../../src/views/honoraires/Honoraires";
import { buildFaqSchema, buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Honoraires avocate à Paris",
  description:
    "Consultez les honoraires du cabinet de Sophie Maréchal, avocate à Paris, en droit public, urbanisme, droit des étrangers et fonction publique.",
  path: "/honoraires",
  image: "/Images/og_pages/honoraires.png",
});

const faqSchema = buildFaqSchema([
  {
    question: "Comment sont fixés les honoraires du cabinet ?",
    answer:
      "Les honoraires sont fixés notamment en fonction de la nature du dossier, de sa complexité, du temps consacré et de l'urgence de la situation.",
  },
  {
    question: "Le cabinet propose-t-il un forfait ?",
    answer:
      "Oui, lorsque cela est possible, un honoraire au forfait peut être proposé afin de donner au client une meilleure visibilité sur le coût de l'intervention.",
  },
  {
    question: "L'aide juridictionnelle est-elle acceptée ?",
    answer:
      "Oui, l'aide juridictionnelle est acceptée sous réserve d'éligibilité du dossier et de la situation du client.",
  },
]);

export default function Page() {
  return (
    <Desktop>
      <Honoraires />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Desktop>
  );
}
