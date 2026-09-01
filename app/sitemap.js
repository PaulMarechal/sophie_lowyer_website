import { absoluteUrl } from "./seo";
import { ROUTE_PAIRS } from "../src/lib/i18n";

export default function sitemap() {
  const routes = ROUTE_PAIRS.flatMap(({ fr, en }) => [fr, en]);

  return routes.map((route) => {
    const pair = ROUTE_PAIRS.find(({ fr, en }) => fr === route || en === route);
    const isHome = route === "/" || route === "/en";

    return {
      url: absoluteUrl(route),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.7,
      alternates: {
        languages: {
          "fr-FR": absoluteUrl(pair.fr),
          "en-GB": absoluteUrl(pair.en),
          "x-default": absoluteUrl(pair.fr),
        },
      },
    };
  });
}
