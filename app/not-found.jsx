"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Desktop from "../src/components/layout/Desktop";
import styles from "./not-found.module.css";

export default function NotFound() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname?.startsWith("/en/");
  const copy = isEnglish
    ? {
        eyebrow: "404 error",
        title: "The page you requested does not exist or is no longer available.",
        text: "You can return to the home page or go directly to the main sections of the website.",
        home: "Return to home",
        contact: "Contact the firm",
        navigation: "Navigation",
        useful: "Useful pages",
        intro: "If you arrived here from an old or incorrect link, these shortcuts will help you find the right page.",
        homePath: "/en",
        contactPath: "/en/contact",
        links: [
          { href: "/en/about", label: "About" },
          { href: "/en/practice-areas", label: "Practice areas" },
          { href: "/en/fees", label: "Fees" },
          { href: "/en/contact", label: "Contact" },
        ],
      }
    : {
        eyebrow: "Erreur 404",
        title: "La page demandée n’existe pas ou n’est plus disponible.",
        text: "Vous pouvez revenir à l’accueil ou accéder directement aux principales pages du site.",
        home: "Retour à l’accueil",
        contact: "Contacter le cabinet",
        navigation: "Navigation",
        useful: "Pages utiles",
        intro: "Si vous êtes arrivé ici depuis un ancien lien ou une URL erronée, ces accès rapides vous permettront de retrouver la bonne page.",
        homePath: "/",
        contactPath: "/contact",
        links: [
          { href: "/a-propos", label: "À propos" },
          { href: "/competences", label: "Compétences" },
          { href: "/honoraires", label: "Honoraires" },
          { href: "/contact", label: "Contact" },
        ],
      };

  return (
    <Desktop>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.heroTitle}>{copy.title}</h1>
            <p className={styles.heroText}>{copy.text}</p>
            <div className={styles.actions}>
              <Link href={copy.homePath} className={styles.primaryBtn}>
                {copy.home}
              </Link>
              <Link href={copy.contactPath} className={styles.secondaryBtn}>
                {copy.contact}
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.infoCard}>
            <p className={styles.cardEyebrow}>{copy.navigation}</p>
            <h2 className={styles.sectionTitle}>{copy.useful}</h2>
            <p className={styles.introText}>{copy.intro}</p>

            <div className={styles.linksGrid}>
              {copy.links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.linkCard}>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Desktop>
  );
}
