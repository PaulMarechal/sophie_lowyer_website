import {
  createPageOgImage,
  ogImageContentType,
  ogImageSize,
} from "../og-page-template";

export const runtime = "edge";
export const alt = "Mentions légales - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Mentions légales",
    title: "Informations légales du cabinet",
    accent: "Identité, contact, hébergement",
    subtitle:
      "Retrouvez les informations légales, réglementaires et de publication du site du cabinet Sophie Maréchal.",
  });
}
