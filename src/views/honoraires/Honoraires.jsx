import React from 'react';
import styles from './Honoraires.module.css';

const Honoraires = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Honoraires</p>
          <h1 className={styles.heroTitle}>
            Des honoraires fixés dans un souci de <span className={styles.highlight}>transparence</span> et toujours expliqués avant toute intervention.
          </h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Méthode</p>
          <h2 className={styles.sectionTitle}>Comment un avocat facture-t-il ses honoraires ?</h2>
          <p className={styles.introText}>
            Les honoraires sont fixés conformément aux règles déontologiques de la profession. Ils sont déterminés notamment en fonction de la nature et de la complexité du dossier, du temps consacré, de l’urgence, ainsi que de l’expérience de l’avocat.
          </p>

          <div className={styles.pointsGrid}>
            <div className={styles.pointCard}><p><strong>Nature et complexité du dossier</strong></p></div>
            <div className={styles.pointCard}><p><strong>Temps consacré à l’affaire</strong></p></div>
            <div className={styles.pointCard}><p><strong>Urgence de la situation</strong></p></div>
            <div className={styles.pointCard}><p><strong>Expérience de l’avocat</strong></p></div>
          </div>
        </div>

        <div className={styles.cardsSection}>
          <article className={styles.displayCard}>
            <p className={styles.cardEyebrow}>Forfait</p>
            <h3>Une facturation au forfait</h3>
            <p>
              Une facturation au forfait est plus sécurisante pour le client car elle permet de connaître dès le début de la procédure le montant des honoraires qui seront facturés.
            </p>
          </article>

          <article className={styles.displayCard}>
            <p className={styles.cardEyebrow}>Temps passé</p>
            <h3>Une facturation au temps passé</h3>
            <p>
              Plus l’avocat passe de temps sur un dossier, plus le montant des honoraires demandés sera élevé. Cette facturation est adaptée aux contentieux les plus complexes.
            </p>
            <p>
              Les modalités de facturation font l’objet d’une convention préalable, garantissant une information claire et loyale du client.
            </p>
          </article>

          <article className={`${styles.displayCard} ${styles.highlightCard}`}>
            <p className={styles.cardEyebrowAlt}>Cabinet</p>
            <h3>Le fonctionnement du cabinet</h3>
            <p>Le taux horaire est de <strong>180 euros TTC</strong>.</p>
            <p>Les modalités de facturation tiennent compte de la complexité de votre affaire.</p>
            <p>Le plus souvent, un honoraire au forfait est proposé.</p>
            <p>L’aide juridictionnelle est acceptée sous réserve d’éligibilité.</p>
          </article>
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomCtaText}>
            <p className={styles.cardEyebrow}>Premier échange</p>
            <h2 className={styles.sectionTitle}>Vous souhaitez une estimation d’honoraires ?</h2>
            <p>
              Chaque situation est différente. Un premier échange permet d’évaluer votre dossier et de vous orienter vers la modalité de facturation la plus adaptée.
            </p>
          </div>

          <div className={styles.contactLinks}>
            <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
            </a>
            <a href="mailto:sophie.marechal@avocat.fr" aria-label="Envoyer un email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            </a>
            <a href="tel:+0652609138" aria-label="Téléphoner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            </a>
            <a href="http://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau" aria-label="Adresse du cabinet">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Honoraires;
