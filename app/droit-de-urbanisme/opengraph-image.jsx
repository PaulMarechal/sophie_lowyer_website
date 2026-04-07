import {
  createPageOgImage,
  ogImageContentType,
  ogImageRuntime,
  ogImageSize,
} from "../og-page-template";

export const runtime = ogImageRuntime;
export const alt = "Droit de l'urbanisme - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Droit de l'urbanisme · Paris",
    title: "Permis de construire, recours, autorisations",
    accent: "Sécuriser juridiquement le projet",
    subtitle:
      "Conseil en amont, analyse des risques et contestation des décisions défavorables en urbanisme.",
  });
}
