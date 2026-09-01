import Desktop from "../../src/components/layout/Desktop";
import CookiePolicy from "../../src/views/cookies/CookiePolicy";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Gestion des cookies et services externes",
  description:
    "Comprendre et modifier les préférences liées à Google Analytics et au calendrier Calendly sur le site du cabinet Sophie Maréchal.",
  path: "/gestion-des-cookies",
});

export default function Page() {
  return (
    <Desktop>
      <CookiePolicy />
    </Desktop>
  );
}
