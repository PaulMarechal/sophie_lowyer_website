import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ year = 2026 }) {
  return (
    <footer className={styles.footer}>
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
