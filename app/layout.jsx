import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Sophie Marechal",
  description: "Cabinet de Sophie Marechal, avocate en droit public et droit de l'urbanisme.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
