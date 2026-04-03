import { absoluteUrl } from "./seo";

export default function sitemap() {
  const routes = [
    "/",
    "/a-propos",
    "/competences",
    "/contact",
    "/droit-de-la-fonction-publique",
    "/droit-de-urbanisme",
    "/droit-des-etrangers",
    "/honoraires",
    "/confidentialite",
    "/mentions-legales",
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
