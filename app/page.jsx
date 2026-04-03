import HomeEntry from "../src/views/home/HomeEntry";
import { buildMetadata } from "./seo";

export const metadata = buildMetadata({
  title: "Avocate en droit public à Paris",
  description:
    "Sophie Maréchal, avocate à Paris, accompagne particuliers et professionnels en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  path: "/",
  keywords: [
    "avocate droit public Paris",
    "avocate urbanisme Paris",
    "avocate droit des étrangers Paris",
    "avocate fonction publique Paris",
  ],
});

export default function Page() {
  return <HomeEntry />;
}
