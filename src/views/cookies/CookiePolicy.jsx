import Link from "next/link";
import CookieSettingsButton from "../../components/privacy/CookieSettingsButton";
import styles from "./CookiePolicy.module.css";

const services = [
  {
    title: "Préférences nécessaires",
    status: "Toujours actif",
    text: "Le navigateur mémorise localement vos choix pendant six mois. Cette information n’est pas utilisée pour vous suivre et reste sur votre appareil.",
  },
  {
    title: "Google Analytics",
    status: "Après accord",
    text: "Google Analytics mesure les pages vues et quelques interactions génériques. Le contenu des formulaires, le nom, l’e-mail et le téléphone ne sont jamais envoyés dans les événements Analytics. Les signaux publicitaires et la personnalisation sont désactivés sur ce site.",
  },
  {
    title: "Calendly",
    status: "Après accord",
    text: "Le module Calendly n’est chargé sur la page Contact qu’après votre accord ou votre demande explicite d’afficher le calendrier. Calendly applique alors ses propres règles de confidentialité.",
  },
  {
    title: "Formulaire de contact",
    status: "Lors de l’envoi",
    text: "Lorsque vous envoyez le formulaire, les informations saisies sont acheminées au cabinet par Formspree. Ce service n’est sollicité qu’au moment de l’envoi et les données du message ne sont pas utilisées pour la mesure d’audience.",
  },
];

export default function CookiePolicy() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Confidentialité</p>
          <h1 className={styles.heroTitle}>Gestion des cookies et services externes</h1>
          <p className={styles.heroText}>
            Le site limite les services externes et vous laisse choisir ceux qui peuvent être
            chargés dans votre navigateur.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Vos choix</p>
          <h2>Modifier vos préférences à tout moment</h2>
          <p>
            Accepter ou refuser la mesure d’audience n’empêche pas de consulter le site ni
            d’utiliser le formulaire. Le calendrier peut aussi être ouvert directement dans un
            nouvel onglet.
          </p>
          <CookieSettingsButton className={styles.settingsButton} />
        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <p className={styles.status}>{service.status}</p>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.linksBlock}>
          <h2>En savoir plus</h2>
          <p>
            Vous pouvez consulter la <Link href="/confidentialite">politique de confidentialité</Link>,
            la <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">politique de confidentialité de Google</a>,
            la <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité de Calendly</a> et
            la <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">politique de confidentialité de Formspree</a>.
          </p>
          <p className={styles.update}>Dernière mise à jour : 1er septembre 2026.</p>
        </div>
      </section>
    </div>
  );
}
