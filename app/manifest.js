import { absoluteUrl } from "./seo";

export default function manifest() {
  return {
    name: "Sophie Maréchal",
    short_name: "Sophie Maréchal",
    description:
      "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#162336",
    icons: [
      {
        src: absoluteUrl("/icons/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: absoluteUrl("/icons/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
