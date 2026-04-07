import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { absoluteUrl, lawFirmSchema } from "./seo";

export const metadata = {
  metadataBase: new URL("https://sophiemarechal-avocat.fr"),
  title: "Sophie Maréchal | Avocate en droit public à Paris",
  description:
    "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: absoluteUrl("/"),
    siteName: "Sophie Maréchal",
    title: "Sophie Maréchal | Avocate en droit public à Paris",
    description:
      "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
    images: [
      {
        url: "/Images/og_images/og_image_1200_600.png",
        width: 1200,
        height: 600,
        alt: "Sophie Maréchal, avocate à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie Maréchal | Avocate en droit public à Paris",
    description:
      "Cabinet de Sophie Maréchal, avocate à Paris en droit public, droit de l'urbanisme, droit des étrangers et droit de la fonction publique.",
    images: ["/Images/og_images/og_image_1200_600.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DG7E5MZQ8M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DG7E5MZQ8M');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lawFirmSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
