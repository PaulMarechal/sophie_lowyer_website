import HomeEntry from "../src/views/home/HomeEntry";
import { buildMetadata } from "./seo";

export const metadata = buildMetadata({
  title: "Avocate en droit public à Paris",
  description:
    "Sophie Maréchal, avocate en droit public à Paris, accompagne particuliers, professionnels et agents publics en droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  path: "/",
  image: "/Images/og_pages/home.png",
});

export default function Page() {
  return <HomeEntry />;
}
