import Link from "next/link";
import CookieSettingsButton from "../privacy/CookieSettingsButton";
import styles from "./Footer.module.css";

export default function Footer({ locale = "fr" }) {
  const year = new Date().getFullYear();
  const isEnglish = locale === "en";
  const paths = isEnglish
    ? {
        contact: "/en/contact",
        publicLaw: "/en/public-law-lawyer-paris",
        planningLaw: "/en/planning-law-lawyer-paris",
        immigrationLaw: "/en/immigration-lawyer-paris",
        talent: "/en/talent-passport-resident-card-lawyer-paris",
        oqtf: "/en/oqtf-lawyer-paris",
        nationality: "/en/french-nationality-law",
        naturalisation: "/en/naturalisation-lawyer-paris",
        legal: "/en/legal-notice",
        privacy: "/en/privacy",
        cookies: "/en/cookie-settings",
      }
    : {
        contact: "/contact",
        publicLaw: "/avocate-droit-public-paris",
        planningLaw: "/avocate-droit-urbanisme-paris",
        immigrationLaw: "/avocate-droit-des-etrangers-paris",
        talent: "/avocat-carte-talent-carte-resident-paris",
        oqtf: "/avocat-oqtf-paris",
        nationality: "/droit-de-la-nationalite",
        naturalisation: "/avocat-naturalisation-paris",
        legal: "/mentions-legales",
        privacy: "/confidentialite",
        cookies: "/gestion-des-cookies",
      };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.identityRow}>
          <div className={styles.identityCopy}>
            <p className={styles.identityName}>{isEnglish ? "Sophie Maréchal Law Firm" : "Cabinet Sophie Maréchal"}</p>
            <address>
              11 boulevard de Sébastopol · 75001 Paris<br />
              <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
            </address>
          </div>
          <div className={styles.contactActions} role="group" aria-label={isEnglish ? "Contact the firm" : "Contacter le cabinet"}>
            <Link href={`${paths.contact}#contact-form`}>{isEnglish ? "Contact form" : "Formulaire"}</Link>
            <a href="sms:+33652609138">SMS</a>
            <Link href={`${paths.contact}#rendez-vous`}>{isEnglish ? "Appointment" : "Rendez-vous"}</Link>
          </div>
        </div>
        <nav className={styles.seoNav} aria-label={isEnglish ? "Main practice pages" : "Pages principales du cabinet"}>
          <Link href={paths.publicLaw}>{isEnglish ? "Public law lawyer Paris" : "Avocate droit public Paris"}</Link>
          <Link href={paths.planningLaw}>{isEnglish ? "Planning law lawyer Paris" : "Avocate droit urbanisme Paris"}</Link>
          <Link href={paths.immigrationLaw}>{isEnglish ? "Immigration lawyer Paris" : "Avocate droit des étrangers Paris"}</Link>
          <Link href={paths.talent}>{isEnglish ? "Talent passport and resident card" : "Carte talent et résident Paris"}</Link>
          <Link href={paths.oqtf}>{isEnglish ? "OQTF lawyer Paris" : "Avocate OQTF Paris"}</Link>
          <Link href={paths.nationality}>{isEnglish ? "Nationality law" : "Droit de la nationalité"}</Link>
          <Link href={paths.naturalisation}>{isEnglish ? "Naturalisation lawyer Paris" : "Avocate naturalisation Paris"}</Link>
        </nav>
        <div id="contact_me">
          <div>
            <p>© {year} Sophie Maréchal</p>
          </div>
          <div className={styles.separator} aria-hidden="true">
            <p>·</p>
          </div>
          <div>
            <Link href={paths.legal}>{isEnglish ? "Legal notice" : "Mentions légales"}</Link>
          </div>
          <div className={styles.separator} aria-hidden="true">
            <p>·</p>
          </div>
          <div>
            <Link href={paths.privacy}>{isEnglish ? "Privacy policy" : "Politique de confidentialité"}</Link>
          </div>
          <div className={styles.separator} aria-hidden="true">
            <p>·</p>
          </div>
          <div>
            <Link href={paths.cookies}>{isEnglish ? "Cookies and external services" : "Cookies et services externes"}</Link>
          </div>
          <div className={styles.separator} aria-hidden="true">
            <p>·</p>
          </div>
          <div>
            <CookieSettingsButton
              className={styles.cookieButton}
              label={isEnglish ? "Manage preferences" : "Gérer mes préférences"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
