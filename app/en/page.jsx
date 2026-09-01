import Desktop from "../../src/components/layout/Desktop";
import HomeEn from "../../src/views/home/HomeEn";
import { buildMetadata } from "../seo";

export const metadata = buildMetadata({
  title: "French public law lawyer in Paris",
  description: "Sophie Maréchal is a Paris-based lawyer advising individuals and businesses on French public law, planning law, immigration law and nationality law.",
  path: "/en",
  locale: "en",
  keywords: [
    "public law lawyer Paris",
    "planning law lawyer Paris",
    "immigration lawyer Paris",
    "French naturalisation lawyer Paris",
  ],
});

export default function Page() {
  return <Desktop><HomeEn /></Desktop>;
}
