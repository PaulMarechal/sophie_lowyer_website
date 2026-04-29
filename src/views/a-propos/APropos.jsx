import React from 'react';
import Link from 'next/link';
import styles from './APropos.module.css';

const APropos = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="a_propos_section">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>À propos du cabinet</p>
            <h1 className={styles.heroQuote}>
              Une pratique fondée sur une réponse juridique <span className={styles.highlight}>adaptée</span>, <span className={styles.highlight}>claire</span> et <span className={styles.highlight}>pragmatique</span>.
            </h1>
            <h2 className={styles.heroSubquote}>
              Défendre vos intérêts avec humanité, rigueur et détermination.
            </h2>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>Prendre contact</Link>
              <Link href="/competences" className={styles.secondaryBtn}>Voir les compétences</Link>
            </div>
          </div>
          <div className={styles.portraitCard} />
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.articleCard}>
          <p className={styles.cardEyebrow}>Parcours</p>
          <h2 className={styles.sectionTitle}>Une expertise engagée</h2>
          <p className={styles.articleLead}>
            Le parcours de Sophie Maréchal associe une formation exigeante en droit public,
            une expérience concrète de l’administration et une pratique tournée vers les
            contentieux administratifs.
          </p>
          <div className={styles.textColumns}>
            <div className={styles.storyColumn}>
              <p>
                Sophie Maréchal est titulaire d’un master affaires publiques obtenu à Sciences Po Paris et d’un master en droit public général obtenu à l’Université Paris-I Panthéon Sorbonne.
              </p>
              <p>
                Après avoir été reçue au concours d’entrée de l’École des Hautes Études en Santé publique, elle a exercé pendant 7 ans les fonctions de directrice d’hôpital dans plusieurs établissements situés en Nouvelle-Aquitaine et dans les Hauts-de-France.
              </p>
            </div>
            <div>
              <p>
                En 2022, elle a réussi l’examen d’entrée au CRFPA. De janvier 2023 à juin 2024, elle a suivi la formation de l’EFB en droit public et droit des étrangers.
              </p>
              <p>
                Ce parcours nourrit aujourd’hui une pratique exigeante, tournée vers le conseil stratégique, le contentieux administratif et l’accompagnement personnalisé des clients.
              </p>
              <p>
                Le cabinet de Sophie Maréchal, parfois recherché sous l’orthographe sans accent Sophie Marechal, intervient à Paris en droit public, droit de l’urbanisme, droit des étrangers et droit de la fonction publique.
              </p>
            </div>
            <div className={styles.timelineColumn} aria-label="Repères du parcours">
              <div className={styles.timelineItem}>
                <span>Formation</span>
                <strong>Sciences Po Paris · Paris-I Panthéon Sorbonne</strong>
              </div>
              <div className={styles.timelineItem}>
                <span>Administration</span>
                <strong>7 ans comme directrice d’hôpital</strong>
              </div>
              <div className={styles.timelineItem}>
                <span>Avocature</span>
                <strong>CRFPA en 2022 · EFB de 2023 à 2024</strong>
              </div>
              <div className={styles.timelineItem}>
                <span>Pratique</span>
                <strong>Droit public, urbanisme, étrangers, fonction publique</strong>
              </div>
            </div>
          </div>
        </div>

        <aside className={styles.sideCard}>
          <p className={styles.cardEyebrow}>Intervention</p>
          <h3 className={styles.sideCardTitle}>Domaines du cabinet</h3>
          <div className={styles.expertiseList}>
            <Link href="/droit-de-la-fonction-publique" className={styles.expertiseItem}>
              <img src="/Images/droit_public.webp" alt="Droit de la fonction publique" />
              <span>Droit de la fonction publique</span>
            </Link>
            <Link href="/droit-de-urbanisme" className={styles.expertiseItem}>
              <img src="/Images/droit_urbanisme.webp" alt="Droit de l’urbanisme" />
              <span>Droit de l’urbanisme</span>
            </Link>
            <Link href="/avocate-droit-urbanisme-paris" className={styles.expertiseItem}>
              <img src="/Images/droit-urbanisme-plan.webp" alt="Avocate en droit de l’urbanisme à Paris" />
              <span>Avocate en droit de l’urbanisme à Paris</span>
            </Link>
            <Link href="/droit-des-etrangers" className={styles.expertiseItem}>
              <img src="/Images/droit_etrangers.webp" alt="Droit des étrangers" />
              <span>Droit des étrangers et de la nationalité</span>
            </Link>
            <Link href="/recours-oqtf-paris" className={styles.expertiseItem}>
              <img src="/Images/droit-etrangers-recours-sophie-marechal.webp" alt="Recours contre OQTF à Paris" />
              <span>Recours contre OQTF à Paris</span>
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default APropos;
