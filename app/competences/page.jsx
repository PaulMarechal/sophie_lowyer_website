import Desktop from "../../src/components/layout/Desktop";
import Competences from "../../src/views/competences/Competences";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Compétences en droit public à Paris",
  description:
    "Le cabinet intervient à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  path: "/competences",
  image: "/Images/og_pages/competences.png",
});

export default function Page() {
  return (
    <Desktop>
      <Competences />
    </Desktop>
  );
}
