import Desktop from "../../src/components/layout/Desktop";
import DocumentLandingPage from "../../src/views/seo-pages/DocumentLandingPage";
import { publicService } from "../../src/content/fr/public-service";
import { buildMetadata, buildServiceSchema } from "../seo";

export const metadata = buildMetadata({
  title: "Avocate conseil de discipline à Paris",
  description: publicService.intro[0],
  path: "/avocat-conseil-discipline-paris",
});

const serviceSchema = buildServiceSchema({
  name: publicService.title,
  description: publicService.intro[0],
  path: "/avocat-conseil-discipline-paris",
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
