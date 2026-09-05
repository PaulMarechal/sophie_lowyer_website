import { createPageOgImage } from "../og-page-template";
import { socialCards } from "../../src/lib/social-images";

export const runtime = "edge";
export const alt = "Sophie Maréchal — Cabinet d’avocat à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return createPageOgImage({ ...socialCards["nationalite"].fr, locale: "fr" });
}
