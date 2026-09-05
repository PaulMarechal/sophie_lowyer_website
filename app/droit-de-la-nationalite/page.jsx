import Desktop from "../../src/components/layout/Desktop";
import DocumentLandingPage from "../../src/views/seo-pages/DocumentLandingPage";
import { naturalisation } from "../../src/content/fr/word-pages";
import { buildMetadata, buildServiceSchema } from "../seo";

export const metadata = buildMetadata({
  title: "Naturalisation française",
  description: naturalisation.intro[0],
  path: "/droit-de-la-nationalite",
  keywords: [
    "droit de la nationalité",
    "naturalisation française",
    "demande de naturalisation",
    "recours naturalisation",
  ],
});

const serviceSchema = buildServiceSchema({
  name: naturalisation.title,
  description: naturalisation.intro[0],
  path: "/droit-de-la-nationalite",
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
