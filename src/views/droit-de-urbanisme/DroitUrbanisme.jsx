"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import styles from './DroitUrbanisme.module.css';

const cards = [
  {
    label: "Autorisations",
    title: "Autorisations d’urbanisme",
    subtitle: "Conseil, constitution du dossier et sécurisation du projet.",
    bg: "/Images/droit-urbanisme-plan.webp",
    content: (
      <>
        <p>Me Sophie Maréchal vous assiste dans vos démarches de demande d’<b>autorisation d’urbanisme</b>, notamment pour :</p>
        <ul>
          <li>Le <b>permis de construire</b></li>
          <li>Le <b>permis d’aménager</b></li>
          <li>La <b>déclaration préalable de travaux</b></li>
        </ul>
        <p>Son intervention comprend l’analyse de la faisabilité juridique du projet, l’identification des règles applicables et l’accompagnement dans la constitution du dossier.</p>
      </>
    )
  },
  {
    label: "Recours",
    title: "Contestation des décisions",
    subtitle: "Recours gracieux ou contentieux et défense devant le tribunal.",
    bg: "/Images/Contestation-des-décisions-permis-construire.webp",
    content: (
      <>
        <p>En cas de décision défavorable, il est souvent possible de <b>la contester</b>.</p>
        <p>Me Sophie Maréchal intervient notamment pour contester :</p>
        <ul>
          <li>Un <b>refus de permis de construire</b></li>
          <li>Un <b>refus de permis d’aménager</b></li>
          <li>Une <b>opposition à déclaration préalable</b></li>
          <li>Toute décision imposant des prescriptions illégales</li>
        </ul>
        <p>Elle vous conseille sur les recours possibles et vous représente devant le <b>tribunal administratif</b> afin de défendre votre projet et vos droits.</p>
      </>
    )
  }
];

const faqItems = [
  {
    question: "Quand faire appel à un avocat en droit de l’urbanisme ?",
    answer:
      "Un avocat peut intervenir avant le dépôt d'une demande d'autorisation d'urbanisme pour sécuriser le projet, ou après une décision défavorable pour étudier les recours possibles.",
  },
  {
    question: "Un refus de permis de construire peut-il être contesté ?",
    answer:
      "Oui. Un refus de permis de construire peut, selon le dossier, faire l'objet d'un recours gracieux ou d'un recours devant le tribunal administratif.",
  },
  {
    question: "L’avocat peut-il aider à préparer un dossier de permis ?",
    answer:
      "Oui. L'accompagnement permet de vérifier les règles applicables, d'anticiper les points de blocage et de constituer un dossier juridiquement plus solide.",
  },
];

const DroitUrbanisme = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Droit de l’urbanisme</p>
          <h1 className={styles.heroTitle}>
            Construire, aménager, contester :
            <br />
            sécuriser juridiquement votre projet
          </h1>
          <p className={styles.heroText}>
            Un accompagnement en amont des autorisations et en aval des décisions défavorables, avec une lecture claire des risques et des recours.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introCard}>
          <p className={styles.cardEyebrow}>Présentation</p>
          <h2 className={styles.sectionTitle}>Sécuriser le projet avant et après la décision</h2>
          <div className={styles.introText}>
            <p>Avocat en <b>droit de l’urbanisme</b>, Me Sophie Maréchal accompagne les <b>particuliers</b>, <b>professionnels</b> et <b>collectivités</b> dans leurs démarches liées aux autorisations d’urbanisme et dans les litiges avec l’administration.</p>
            <p>Le droit de l’urbanisme encadre les règles de construction et d’aménagement. Les procédures peuvent être complexes et les décisions administratives lourdes de conséquences.</p>
            <p>Son rôle est de vous aider à sécuriser vos projets et à défendre vos intérêts, avec une information claire à chaque étape.</p>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className={`${styles.card} ${idx === activeCard ? styles.active : ''}`}
              style={{ '--cardBg': `url(${card.bg})` }}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              onFocus={() => setActiveCard(idx)}
              onBlur={() => setActiveCard(null)}
              tabIndex={0}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardTop}>
                <span className={styles.cardBadge}>{card.label}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
              </div>
              <div className={styles.cardContent}>{card.content}</div>
              <div className={styles.cardFooter}>
                <Link href="/contact" className={styles.cardLink}>Prendre rendez-vous</Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.closeCard}>
          <p className={styles.cardEyebrow}>Méthode</p>
          <h2 className={styles.sectionTitle}>Défense et sécurisation des projets d’urbanisme</h2>
          <p className={styles.closeText}>
            En tant qu’<b>avocat en droit de l’urbanisme</b>, elle vous propose un accompagnement personnalisé, que vous soyez porteur de projet ou confronté à une décision administrative défavorable.
          </p>
          <p className={styles.closeText}>
            Elle attache une importance particulière à son devoir de conseil. Si, à l’issue de l’entretien, elle constate qu’une action n’est pas nécessaire ou qu’elle n’est pas adaptée à votre situation, elle vous en informera en toute transparence.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.primaryBtn}>Contacter le cabinet</Link>
            <Link href="/honoraires" className={styles.secondaryBtn}>Consulter les honoraires</Link>
          </div>
        </div>

        <div className={styles.faqCard}>
          <p className={styles.cardEyebrow}>Questions fréquentes</p>
          <h2 className={styles.sectionTitle}>FAQ droit de l’urbanisme</h2>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer year={2026} />
    </div>
  );
};

export default DroitUrbanisme;
