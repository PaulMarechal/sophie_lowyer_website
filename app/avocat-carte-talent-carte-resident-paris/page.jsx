import Desktop from "../../src/components/layout/Desktop";
import DocumentLandingPage from "../../src/views/seo-pages/DocumentLandingPage";
import { talents } from "../../src/content/fr/word-pages";
import { buildMetadata, buildServiceSchema } from "../seo";

export const metadata = buildMetadata({
  title: "Talents & mobilité internationale",
  description: talents.intro[1],
  path: "/avocat-carte-talent-carte-resident-paris",
  keywords: [
    "avocat carte talent paris",
    "avocate carte talent paris",
    "avocat carte de résident paris",
    "carte talent renouvellement paris",
  ],
});

const serviceSchema = buildServiceSchema({
  name: talents.title,
  description: talents.intro[1],
  path: "/avocat-carte-talent-carte-resident-paris",
  serviceType: talents.title,
});

export default function Page() {
  return (
    <Desktop>
      <DocumentLandingPage content={talents} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </Desktop>
  );
}
