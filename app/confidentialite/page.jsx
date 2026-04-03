import Desktop from "../../src/components/layout/Desktop";
import Confidentialite from "../../src/views/confidentialite/Confidentialite";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Consultez la politique de confidentialité du cabinet Sophie Maréchal relative au traitement des données personnelles.",
  path: "/confidentialite",
});

export default function Page() {
  return (
    <Desktop>
      <Confidentialite />
    </Desktop>
  );
}
