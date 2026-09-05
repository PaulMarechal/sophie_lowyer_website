import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PhotoCredit from '../../components/media/PhotoCredit';
import styles from './Competences.module.css';

const Competences = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Compétences</p>
          <h1 className={styles.heroTitle}>
            Une pratique en <span className={styles.highlight}>droit public</span> pensée pour des dossiers techniques, sensibles et concrets.
          </h1>
          <p className={styles.heroText}>
            Le cabinet accompagne ses clients avec une méthode claire, une stratégie juridique lisible et une intervention adaptée à la réalité de chaque situation.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Parcours</p>
          <h2 className={styles.sectionTitle}>Une expertise engagée</h2>
          <div className={styles.introColumns}>
            <div className={styles.introColumn}>
              <p>
                Sophie Maréchal est titulaire d’un master affaires publiques obtenu à Sciences Po Paris et d’un master en droit public général obtenu à l’Université Paris-I Panthéon Sorbonne.
              </p>
              <p>
                Après avoir été reçue au concours d’entrée de l’École des Hautes Études en Santé publique, elle a exercé les fonctions de directrice d’hôpital pendant 7 ans dans plusieurs établissements situés en Nouvelle-Aquitaine et dans les Hauts-de-France.
              </p>
              <p>
                Après cette expérience professionnelle particulièrement riche, elle a souhaité devenir avocat.
              </p>
            </div>

            <div className={styles.introColumn}>
              <p>
                En 2022, elle a réussi l’examen d’entrée au CRFPA. De janvier 2023 à juin 2024, elle a suivi la formation de l’EFB en droit public et droit des étrangers.
              </p>
              <p>
                Parallèlement, elle a étudié à l’Institut de droit public des affaires. Lauréate du certificat d’aptitude à la profession d’avocat, elle a prêté serment en 2024.
              </p>
              <p>
                Elle travaille en français, anglais et allemand et défend les intérêts de ses clients sur l’ensemble du territoire national.
              </p>
            </div>
          </div>
        </div>

        <article className={styles.displayCard}>
          <p className={styles.cardEyebrow}>Domaines d’intervention</p>
          <h3 className={styles.displayTitle}>Les principales compétences du cabinet</h3>
          <p className={styles.displayText}>
            Le cabinet intervient principalement en <strong>droit public</strong>, avec une approche rigoureuse, claire et adaptée aux réalités concrètes de chaque dossier.
          </p>
          <p className={styles.displayText}>
            Pour les recherches ciblées, consultez aussi les pages dédiées à l&apos;<Link href="/avocate-droit-public-paris">avocate en droit public à Paris</Link>, aux <Link href="/avocat-oqtf-paris">recours contre OQTF à Paris</Link>, aux <Link href="/avocat-carte-talent-carte-resident-paris">cartes talent et cartes de résident</Link> et à la <Link href="/avocat-naturalisation-paris">naturalisation à Paris</Link>.
          </p>
          <div className={styles.expertiseGrid}>
            <Link href="/droit-de-urbanisme" className={styles.expertiseItem}>
              <div className={styles.expertiseImage}>
                <Image src="/Images/droit_urbanisme.webp" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" />
              </div>
              <span>Droit de l’urbanisme</span>
            </Link>
            <Link href="/avocat-carte-talent-carte-resident-paris" className={styles.expertiseItem}>
              <div className={styles.expertiseImage}>
                <Image src="/Images/droit-des-etrangers-passeports.webp" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" />
                <PhotoCredit />
              </div>
              <span>Droit des étrangers</span>
            </Link>
            <Link href="/droit-de-la-nationalite" className={styles.expertiseItem}>
              <div className={styles.expertiseImage}>
                <Image src="/Images/paris_monument.jpg" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" />
              </div>
              <span>Droit de la nationalité</span>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Competences;
