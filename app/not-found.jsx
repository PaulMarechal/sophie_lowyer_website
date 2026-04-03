import Link from "next/link";
import Desktop from "../src/components/layout/Desktop";
import Footer from "../src/components/layout/Footer";
import styles from "./not-found.module.css";

const quickLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/honoraires", label: "Honoraires" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <Desktop>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Erreur 404</p>
            <h1 className={styles.heroTitle}>
              La page demandée n&apos;existe pas ou n&apos;est plus disponible.
            </h1>
            <p className={styles.heroText}>
              Vous pouvez revenir à l&apos;accueil ou accéder directement aux principales pages du
              site.
            </p>
            <div className={styles.actions}>
              <Link href="/" className={styles.primaryBtn}>
                Retour à l&apos;accueil
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Contacter le cabinet
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.infoCard}>
            <p className={styles.cardEyebrow}>Navigation</p>
            <h2 className={styles.sectionTitle}>Pages utiles</h2>
            <p className={styles.introText}>
              Si vous êtes arrivé ici depuis un ancien lien ou une URL erronée, ces accès rapides
              vous permettront de retrouver la bonne page.
            </p>

            <div className={styles.linksGrid}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.linkCard}>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Desktop>
  );
}
