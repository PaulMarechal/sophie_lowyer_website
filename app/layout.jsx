import "./globals.css";
import ConsentManager from "../src/components/privacy/ConsentManager";
import { absoluteUrl, lawFirmSchema, websiteSchema } from "./seo";

export const metadata = {
  metadataBase: new URL("https://www.sophiemarechal-avocat.fr"),
  title: "Sophie Maréchal | Avocate en droit public à Paris",
  description:
    "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la nationalité.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "fr-FR": absoluteUrl("/"),
      "en-GB": absoluteUrl("/en"),
      "x-default": absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: absoluteUrl("/"),
    siteName: "Sophie Maréchal",
    title: "Sophie Maréchal | Avocate en droit public à Paris",
    description:
      "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la nationalité.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sophie Maréchal, avocate à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie Maréchal | Avocate en droit public à Paris",
    description:
      "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la nationalité.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang=(location.pathname==='/en'||location.pathname.startsWith('/en/'))?'en':'fr';",
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lawFirmSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ConsentManager />
      </body>
    </html>
  );
}
