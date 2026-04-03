import Desktop from "../../src/components/layout/Desktop";
import Contact from "../../src/views/contact/Contact";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Sophie Maréchal, avocate à Paris, pour un premier échange en droit public, urbanisme, droit des étrangers ou fonction publique.",
  path: "/contact",
});

export default function Page() {
  return (
    <Desktop>
      <Contact />
    </Desktop>
  );
}
