import {
  createPageOgImage,
  ogImageContentType,
  ogImageSize,
} from "../og-page-template";

export const runtime = "edge";
export const alt = "Fonction publique - Sophie Maréchal";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return createPageOgImage({
    eyebrow: "Fonction publique · Paris",
    title: "Conseil de discipline et sanctions administratives",
    accent: "Défendre les agents publics",
    subtitle:
      "Le cabinet assiste les agents publics dans les procédures disciplinaires et les recours devant le tribunal administratif.",
  });
}
