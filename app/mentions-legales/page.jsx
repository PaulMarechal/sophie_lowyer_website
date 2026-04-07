import Desktop from "../../src/components/layout/Desktop";
import MentionsLegales from "../../src/views/mentions-legales/MentionsLegales";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Consultez les mentions légales du site du cabinet Sophie Maréchal : identité, hébergement, contact et informations réglementaires.",
  path: "/mentions-legales",
  image: "/mentions-legales/opengraph-image",
});

export default function Page() {
  return (
    <Desktop>
      <MentionsLegales />
    </Desktop>
  );
}
