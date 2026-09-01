import {
  createPageOgImage,
  ogImageContentType,
  ogImageSize,
} from "../og-page-template";

export const runtime = "edge";
export const alt = "Droit de la nationalité et naturalisation française - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Droit de la nationalité · Paris",
    title: "Naturalisation française",
    accent: "Demande, instruction et recours",
    subtitle:
      "Une information claire et vérifiée pour comprendre la procédure et faire analyser chaque situation individuellement.",
  });
}
