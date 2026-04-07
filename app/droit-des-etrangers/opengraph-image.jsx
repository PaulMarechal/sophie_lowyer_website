import {
  createPageOgImage,
  ogImageContentType,
  ogImageRuntime,
  ogImageSize,
} from "../og-page-template";

export const runtime = ogImageRuntime;
export const alt = "Droit des étrangers - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Droit des étrangers · Paris",
    title: "Titre de séjour, naturalisation, OQTF",
    accent: "Accompagnement clair à chaque étape",
    subtitle:
      "Le cabinet accompagne les démarches de séjour, la nationalité française et les recours contre les décisions préfectorales.",
  });
}
