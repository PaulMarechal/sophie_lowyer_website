import HomeEntry from "../src/views/home/HomeEntry";
import { buildMetadata } from "./seo";

export const metadata = buildMetadata({
  title: "Sophie Maréchal, avocate à Paris en droit public",
  description:
    "Sophie Maréchal, avocate à Paris, accompagne particuliers et professionnels en droit public, droit de l'urbanisme, droit des étrangers et droit de la nationalité.",
  path: "/",
  image: "/og.png",
  keywords: [
    "avocate droit public Paris",
    "avocate urbanisme Paris",
    "avocate droit des étrangers Paris",
    "avocate naturalisation Paris",
  ],
});

export default function Page() {
  return <HomeEntry />;
}
