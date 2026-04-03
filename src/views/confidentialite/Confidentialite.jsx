import React from 'react';
import styles from './Confidentialite.module.css';

const privacySections = [
  {
    title: 'Engagement du cabinet',
    eyebrow: 'Principe',
    content: (
      <>
        <p>Le Cabinet d&apos;Avocats Sophie Maréchal EI s&apos;engage à protéger la confidentialité des données à caractère personnel de ses utilisateurs conformément au RGPD et aux autres législations applicables.</p>
        <p>Cette politique présente les principales règles de traitement, de conservation et d&apos;exercice des droits applicables aux données collectées dans le cadre de l&apos;activité du cabinet.</p>
      </>
    ),
  },
  {
    title: 'Finalités du traitement',
    eyebrow: 'Usages',
    featured: true,
    content: (
      <>
        <p>Les traitements mis en oeuvre reposent notamment sur l&apos;intérêt légitime poursuivi par le cabinet.</p>
        <ul>
          <li>Prospection et gestion de la relation avec les clients et prospects</li>
          <li>Organisation, inscription et invitation à des événements du cabinet</li>
          <li>Exécution de mesures précontractuelles ou contractuelles</li>
          <li>Traitement, suivi et gestion des demandes et dossiers</li>
          <li>Rédaction d&apos;actes pour le compte des clients</li>
          <li>Respect des obligations légales et réglementaires</li>
          <li>Prévention du blanchiment, financement du terrorisme et lutte contre la corruption</li>
          <li>Facturation et comptabilité</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Durées de conservation',
    eyebrow: 'Conservation',
    content: (
      <>
        <p>Les données sont conservées pendant la durée nécessaire aux opérations pour lesquelles elles ont été collectées et dans le respect de la réglementation en vigueur.</p>
        <p>Les données des clients sont conservées pendant la durée des relations contractuelles, augmentée de 3 ans à des fins d&apos;animation et de prospection, sous réserve des obligations légales de conservation et des délais de prescription.</p>
        <p>En matière de prévention du blanchiment et du financement du terrorisme, les données sont conservées 5 ans après la fin des relations.</p>
        <p>En matière comptable, elles sont conservées 10 ans à compter de la clôture de l&apos;exercice.</p>
        <p>Les données des prospects sont conservées 3 ans en l&apos;absence de participation ou d&apos;inscription à un événement.</p>
      </>
    ),
  },
  {
    title: 'Droits des personnes',
    eyebrow: 'Droits',
    content: (
      <>
        <p>Les personnes concernées disposent notamment d&apos;un droit d&apos;opposition, d&apos;accès, de rectification, de limitation, de portabilité et d&apos;effacement de leurs données, dans les conditions prévues par le RGPD.</p>
        <p>Ces droits peuvent être exercés à tout moment en contactant directement le cabinet.</p>
        <p>
          Adresse de contact :{' '}
          <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
        </p>
      </>
    ),
  },
  {
    title: 'Évolution de la politique',
    eyebrow: 'Mise à jour',
    content: (
      <>
        <p>En cas de modification de la présente politique de confidentialité, le cabinet s&apos;engage à en informer les utilisateurs par tout moyen approprié.</p>
      </>
    ),
  },
];

const Confidentialite = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Confidentialité</p>
          <h1 className={styles.heroTitle}>
            Une politique de confidentialité présentée dans le même cadre visuel que le reste du
            site.
          </h1>
          <p className={styles.heroText}>
            Protection des données, finalités du traitement, durées de conservation et exercice
            des droits.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Politique de confidentialité</p>
          <h2 className={styles.sectionTitle}>Traitement des données personnelles</h2>
          <p className={styles.introText}>
            Le cabinet expose ici les principes applicables à la collecte, à l&apos;utilisation et à
            la conservation des données à caractère personnel dans le cadre de son activité.
          </p>
        </div>

        <div className={styles.cardsSection}>
          {privacySections.map((section) => (
            <article
              key={section.title}
              className={`${styles.displayCard} ${section.featured ? styles.highlightCard : ''}`}
            >
              <p className={section.featured ? styles.cardEyebrowAlt : styles.cardEyebrow}>
                {section.eyebrow}
              </p>
              <h3>{section.title}</h3>
              <div className={styles.cardContent}>{section.content}</div>
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div className={styles.bottomCtaText}>
            <p className={styles.cardEyebrow}>Contact</p>
            <h2 className={styles.sectionTitle}>Une question sur vos données ?</h2>
            <p>
              Pour toute demande relative au traitement de vos données personnelles, vous pouvez
              joindre directement le cabinet.
            </p>
            <p>11 boulevard de Sebastopol, 75001 Paris</p>
            <p>
              <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
              {' · '}
              <a href="tel:+33652609138">06 52 60 91 38</a>
            </p>
          </div>

          <div className={styles.contactLinks}>
            <a
              href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
            <a href="mailto:sophie.marechal@avocat.fr" aria-label="Envoyer un email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
            <a href="tel:+33652609138" aria-label="Téléphoner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </a>
            <a
              href="https://maps.google.com/?q=11 Boulevard de Sebastopol 75001 PARIS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adresse du cabinet"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                <path d="M9 4v13" />
                <path d="M15 7v5.5" />
                <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                <path d="M19 18v.01" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Confidentialite;
