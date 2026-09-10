import Desktop from "../../src/components/layout/Desktop";
import DocumentLandingPage from "../../src/views/seo-pages/DocumentLandingPage";
import { publicService } from "../../src/content/fr/public-service";
import { buildMetadata, buildServiceSchema } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate en droit de la fonction publique",
  description: publicService.intro[0],
  path: "/droit-de-la-fonction-publique",
});

const serviceSchema = buildServiceSchema({
  name: publicService.title,
  description: publicService.intro[0],
  path: "/droit-de-la-fonction-publique",
  serviceType: publicService.title,
});

export default function Page() {
  return (
    <Desktop>
      <DocumentLandingPage content={publicService} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </Desktop>
  );
}
