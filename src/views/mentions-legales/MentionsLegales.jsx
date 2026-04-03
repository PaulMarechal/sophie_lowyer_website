import React from 'react';
import styles from './MentionsLegales.module.css';

const legalSections = [
  {
    title: 'Identité de la structure',
    eyebrow: 'Cabinet',
    content: (
      <>
        <p>Sophie Maréchal EI</p>
        <p>CDAAP, 11 boulevard de Sebastopol, 75001 Paris</p>
        <p>SIRET : 937 495 570 00023</p>
      </>
    ),
  },
  {
    title: 'Contact',
    eyebrow: 'Coordonnées',
    content: (
      <>
        <p>
          Adresse e-mail :{' '}
          <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
        </p>
        <p>
          Téléphone : <a href="tel:+33652609138">06 52 60 91 38</a>
        </p>
      </>
    ),
  },
  {
    title: 'Site internet',
    eyebrow: 'Édition',
    featured: true,
    content: (
      <>
        <p>Le présent site est édité par Sophie Maréchal EI à titre informatif et ne constitue pas une offre contractuelle.</p>
        <p>Sophie Maréchal EI s&apos;efforce de fournir des informations fiables et à jour, sans pouvoir garantir l&apos;absence d&apos;erreurs, d&apos;omissions ou d&apos;indisponibilité temporaire.</p>
        <p>Directrice de publication : Sophie Maréchal.</p>
        <p>Conformément aux articles L.612-1 et suivants du Code de la consommation, l&apos;utilisateur peut recourir gratuitement au médiateur de la consommation auprès du Conseil national des barreaux : 180 boulevard Haussmann, 75008 Paris.</p>
      </>
    ),
  },
  {
    title: 'Protection des données personnelles',
    eyebrow: 'Données',
    content: (
      <>
        <p>Des traitements de données personnelles peuvent être mis en oeuvre pour la gestion des clients, prospects, demandes de contact, obligations comptables et demandes d&apos;exercice de droits.</p>
        <p>Les données sont destinées exclusivement à l&apos;avocat exerçant au sein de Sophie Maréchal EI et ne sont pas accessibles à des tiers non autorisés.</p>
        <p>Conformément à la loi Informatique et Libertés modifiée et au RGPD, chaque utilisateur dispose notamment d&apos;un droit d&apos;accès, de rectification, d&apos;opposition, d&apos;effacement et de limitation.</p>
        <p>
          Ces droits peuvent être exercés à l&apos;adresse suivante :{' '}
          <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
        </p>
      </>
    ),
  },
  {
    title: 'Hébergement',
    eyebrow: 'Technique',
    content: (
      <>
        <p>OVH, 424 761 419 RCS Roubaix - Tourcoing</p>
        <p>2 rue Kellermann, 59100 Roubaix, France</p>
        <p>Téléphone : +33 9 72 10 10 07</p>
      </>
    ),
  },
  {
    title: 'Crédits',
    eyebrow: 'Création',
    content: (
      <>
        <p>
          Conception graphique et développement :{' '}
          <a href="https://devxr.fr" target="_blank" rel="noreferrer">
            DevXR
          </a>
        </p>
        <p>Entreprise individuelle</p>
        <p>SIRET : 931 264 592 00011</p>
        <p>Siège social : 19 rue Bellier-Dedouvre, 75013 Paris</p>
      </>
    ),
  },
];

const MentionsLegales = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Mentions légales</p>
          <h1 className={styles.heroTitle}>
            Les informations juridiques du cabinet, présentées dans le même langage visuel que le
            reste du site.
          </h1>
          <p className={styles.heroText}>
            Identification, contact, édition du site, hébergement et données personnelles.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Informations générales</p>
          <h2 className={styles.sectionTitle}>Mentions légales du site</h2>
          <p className={styles.introText}>
            Cette page regroupe les informations obligatoires liées à l&apos;identité du cabinet, à
            l&apos;édition du site et au traitement des données personnelles.
          </p>
        </div>

        <div className={styles.cardsSection}>
          {legalSections.map((section) => (
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
            <h2 className={styles.sectionTitle}>Une lecture simple, avec les coordonnées utiles</h2>
            <p>
              Pour toute question relative au site, au cabinet ou au traitement des données
              personnelles, les coordonnées directes restent accessibles ici.
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

export default MentionsLegales;
