import Desktop from "../../src/components/layout/Desktop";
import DocumentLandingPage from "../../src/views/seo-pages/DocumentLandingPage";
import { naturalisation } from "../../src/content/fr/word-pages";
import { buildMetadata, buildServiceSchema } from "../seo";

export const metadata = buildMetadata({
  title: "Avocat naturalisation Paris",
  description: naturalisation.intro[1],
  path: "/avocat-naturalisation-paris",
  keywords: [
    "avocat naturalisation paris",
    "avocate naturalisation paris",
    "recours naturalisation paris",
    "dossier naturalisation paris",
  ],
});

const serviceSchema = buildServiceSchema({
  name: naturalisation.title,
  description: naturalisation.intro[1],
  path: "/avocat-naturalisation-paris",
  serviceType: naturalisation.title,
});

export default function Page() {
  return (
    <Desktop>
      <DocumentLandingPage content={naturalisation} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </Desktop>
  );
}
