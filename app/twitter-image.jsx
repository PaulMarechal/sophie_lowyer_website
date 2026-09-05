import { createPageOgImage } from "./og-page-template";
import { socialCards } from "../src/lib/social-images";

export const runtime = "edge";
export const alt = "Sophie Maréchal — Avocate en droit public à Paris";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return createPageOgImage(socialCards.home.fr, size);
}
