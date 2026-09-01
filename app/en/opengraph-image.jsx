import {
  createPageOgImage,
  ogImageContentType,
  ogImageSize,
} from "../og-page-template";

export const runtime = "edge";
export const alt = "Sophie Maréchal, public law lawyer in Paris";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    locale: "en",
    eyebrow: "Law firm · Paris",
    title: "Public law lawyer in Paris",
    accent: "Planning · Immigration · Nationality",
    subtitle: "Clear, tailored advice and representation in French public law.",
  });
}
