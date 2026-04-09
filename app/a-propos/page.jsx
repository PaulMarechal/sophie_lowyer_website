import Desktop from "../../src/components/layout/Desktop";
import APropos from "../../src/views/a-propos/APropos";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit public à Paris | À propos",
  description:
    "Découvrez le parcours de Sophie Maréchal, avocate en droit public à Paris, et l'approche du cabinet en urbanisme, droit des étrangers et fonction publique.",
  path: "/a-propos",
  image: "/Images/og_pages/a-propos.png",
});

export default function Page() {
  return (
    <Desktop>
      <APropos />
    </Desktop>
  );
}
