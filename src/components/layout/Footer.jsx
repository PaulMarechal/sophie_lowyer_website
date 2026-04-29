import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ year = 2026 }) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.seoNav} aria-label="Pages principales du cabinet">
        <Link href="/avocate-droit-public-paris">Avocate droit public Paris</Link>
        <Link href="/avocate-droit-urbanisme-paris">Avocate droit urbanisme Paris</Link>
        <Link href="/avocate-droit-des-etrangers-paris">Avocate droit des étrangers Paris</Link>
        <Link href="/recours-oqtf-paris">Recours OQTF Paris</Link>
      </nav>
      <div id="contact_me">
        <div>
          <p>© {year} Sophie Maréchal</p>
        </div>
        <div>
          <p> - </p>
        </div>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
        <div>
          <p> - </p>
        </div>
        <div>
          <Link href="/confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
