import "./globals.css";

export const metadata = {
  title: "Sophie Marechal",
  description: "Cabinet de Sophie Marechal, avocate en droit public et droit de l'urbanisme.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
