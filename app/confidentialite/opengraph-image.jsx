import {
  createPageOgImage,
  ogImageContentType,
  ogImageSize,
} from "../og-page-template";

export const runtime = "edge";
export const alt = "Politique de confidentialité - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Confidentialité",
    title: "Protection des données personnelles",
    accent: "Traitement clair et transparent",
    subtitle:
      "Consultez la politique de confidentialité du cabinet concernant la collecte, l'usage et la conservation des données.",
  });
}
