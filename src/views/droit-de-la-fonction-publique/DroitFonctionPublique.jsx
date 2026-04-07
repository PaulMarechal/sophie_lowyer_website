"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import styles from './DroitFonctionPublique.module.css';

const cards = [
  {
    label: "Procédure disciplinaire",
    title: "Assistance devant le conseil de discipline",
    subtitle: "Préparation complète et représentation à l’audience.",
    bg: "/Images/assistance-conseil-de-discipline-maitre-marechal.webp",
    content: (
      <>
        <p>Sophie Maréchal vous assiste dans le cadre des <b>procédures disciplinaires</b> engagées à votre encontre, notamment lors d’une <b>comparution devant le conseil de discipline</b>.</p>
        <p>Son intervention comprend notamment :</p>
        <ul>
          <li>L’analyse des faits reprochés et de votre situation administrative</li>
          <li>L’étude de la régularité de la procédure disciplinaire</li>
          <li>La préparation de votre défense et de vos observations écrites</li>
          <li>L’assistance et la représentation lors de la séance devant le conseil de discipline</li>
        </ul>
        <p>L’objectif est de garantir le respect de vos droits et d’obtenir la décision la plus favorable possible.</p>
      </>
    )
  },
  {
    label: "Recours",
    title: "Contestation des sanctions disciplinaires",
    subtitle: "Analyse, stratégie de recours et défense devant le tribunal.",
    bg: "/Images/contestation-sanctions-disciplinaires.webp",
    content: (
      <>
        <p>Lorsqu’une <b>sanction disciplinaire</b> est prononcée, il est souvent possible de la <b>contester devant le tribunal administratif</b>.</p>
        <p>Me Sophie Maréchal vous accompagne pour contester notamment :</p>
        <ul>
          <li>Un avertissement</li>
          <li>Un blâme</li>
          <li>Une exclusion temporaire de fonctions</li>
          <li>Une rétrogradation</li>
          <li>Une révocation ou toute autre sanction disciplinaire</li>
        </ul>
        <p>Elle vous conseille sur les recours possibles et vous représente devant le tribunal administratif afin de contester la légalité de la sanction et d’en obtenir l’annulation ou la réduction.</p>
      </>
    )
  }
];

const faqItems = [
  {
    question: "Quand consulter un avocat en droit de la fonction publique ?",
    answer:
      "Il est pertinent de consulter un avocat en cas de procédure disciplinaire, de difficulté de carrière ou lorsque vous envisagez un recours contre une sanction administrative.",
  },
  {
    question: "Une sanction disciplinaire peut-elle être contestée ?",
    answer:
      "Oui. Selon la situation, une sanction disciplinaire peut être contestée devant le tribunal administratif afin d'en demander l'annulation ou la réduction.",
  },
  {
    question: "L’avocat peut-il assister un agent devant le conseil de discipline ?",
    answer:
      "Oui. L'avocat peut préparer la défense de l'agent, vérifier la régularité de la procédure et l'assister ou le représenter devant le conseil de discipline.",
  },
];

const DroitFonctionPublique = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Fonction publique</p>
          <h1 className={styles.heroTitle}>
            Défendre les agents publics
            <br />
            face aux procédures disciplinaires
          </h1>
          <p className={styles.heroText}>
            Une intervention structurée pour protéger vos droits, préparer votre défense et contester une sanction si nécessaire.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introCard}>
          <p className={styles.cardEyebrow}>Présentation</p>
          <h2 className={styles.sectionTitle}>Une défense adaptée à votre statut et à votre administration</h2>
          <div className={styles.introText}>
            <p>Avocat en <b>droit de la fonction publique</b>, Sophie Maréchal accompagne les <b>agents publics</b> titulaires ou contractuels confrontés à des difficultés dans leur carrière, notamment en cas d’engagement d’une procédure <b>disciplinaire</b>.</p>
            <p>Les procédures disciplinaires peuvent avoir des conséquences importantes sur la situation professionnelle et personnelle de l’agent.</p>
            <p>Son rôle est de vous informer, de vous assister et de défendre vos droits à chaque étape de la procédure.</p>
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
          <h2 className={styles.sectionTitle}>Un accompagnement dédié aux agents publics</h2>
          <p className={styles.closeText}>
            En tant qu’<b>avocat en droit de la fonction publique</b>, elle propose un accompagnement personnalisé, adapté à votre statut et à votre administration d’appartenance, avec une information claire et accessible tout au long de la procédure.
          </p>
          <p className={styles.closeText}>
            Elle attache une grande importance au devoir de conseil. Une action contentieuse devant le tribunal administratif est souvent longue et doit être engagée avec une stratégie claire.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.primaryBtn}>Contacter le cabinet</Link>
            <Link href="/honoraires" className={styles.secondaryBtn}>Consulter les honoraires</Link>
          </div>
        </div>

        <div className={styles.faqCard}>
          <p className={styles.cardEyebrow}>Questions fréquentes</p>
          <h2 className={styles.sectionTitle}>FAQ fonction publique</h2>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.relatedCard}>
          <p className={styles.cardEyebrow}>Guide associé</p>
          <h2 className={styles.sectionTitle}>Préparer sa défense devant un conseil de discipline à Paris</h2>
          <p className={styles.relatedText}>
            Cette page complémentaire précise les étapes de la procédure, le rôle de l’avocat et les réflexes utiles pour un agent public convoqué devant un conseil de discipline.
          </p>
          <div className={styles.relatedLinks}>
            <Link href="/avocat-conseil-discipline-paris" className={styles.primaryBtn}>Consulter la page discipline</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Discuter de votre situation</Link>
          </div>
        </div>
      </section>

      <Footer year={2026} />
    </div>
  );
};

export default DroitFonctionPublique;
