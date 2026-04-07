"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import styles from './DroitEtrangers.module.css';

const cards = [
  {
    label: "Démarches",
    title: "Titre de séjour & naturalisation",
    subtitle: "Constitution du dossier, stratégie et suivi auprès de l’administration.",
    bg: "/Images/droit-des-etrangers-passeports.webp",
    content: (
      <>
        <p>Sophie Maréchal vous aide à préparer et déposer votre <b>demande de titre de séjour</b>, en fonction de votre situation personnelle et professionnelle.</p>
        <p>Elle vous accompagne notamment pour :</p>
        <ul>
          <li><b>Titre de séjour “salarié”</b> ou <b>“métiers en tension”</b></li>
          <li>Titre de séjour <b>“vie privée et familiale”</b></li>
          <li><b>Passeport talent</b></li>
          <li><b>Titre de séjour “étudiant”</b></li>
        </ul>
        <p>Elle intervient également pour les démarches de <b>naturalisation française</b> par décret ou par déclaration afin de constituer un dossier complet et d’anticiper les difficultés.</p>
      </>
    )
  },
  {
    label: "Recours",
    title: "Contestations & procédures",
    subtitle: "Recours gracieux, contentieux et représentation.",
    bg: "/Images/droit-etrangers-recours-sophie-marechal.webp",
    content: (
      <>
        <p>Lorsque l’administration refuse une demande, il est souvent possible de <b>contester la décision</b>.</p>
        <p>Elle vous assiste et vous représente notamment en cas de :</p>
        <ul>
          <li><b>Refus de titre de séjour</b></li>
          <li><b>Refus de regroupement familial</b></li>
          <li><b>Obligation de Quitter le Territoire Français (OQTF)</b>, avec ou sans délai</li>
        </ul>
        <p>Elle intervient également devant la <b>CNDA</b> pour les recours contre certaines décisions de refus de protection, avec analyse du dossier, préparation du recours et représentation.</p>
      </>
    )
  }
];

const faqItems = [
  {
    question: "Quand consulter un avocat en droit des étrangers ?",
    answer:
      "Il est utile de consulter un avocat pour préparer une demande de titre de séjour, une naturalisation, ou pour contester un refus de séjour, une OQTF ou un refus de regroupement familial.",
  },
  {
    question: "Un refus de titre de séjour peut-il être contesté ?",
    answer:
      "Oui. Selon la situation, un refus de titre de séjour peut faire l'objet d'un recours gracieux ou contentieux, après analyse du dossier et des délais applicables.",
  },
  {
    question: "L'avocat peut-il accompagner une demande de naturalisation ?",
    answer:
      "Oui. L'accompagnement permet de constituer un dossier plus solide, d'anticiper les difficultés et de sécuriser la démarche de naturalisation.",
  },
];

const DroitEtrangers = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Droit des étrangers et de la nationalité</p>
          <h1 className={styles.heroTitle}>
            Demande de titre de séjour, naturalisation, refus de séjour (OQTF) :
            <br />
            un accompagnement clair à chaque étape
          </h1>
          <p className={styles.heroText}>
            Une intervention stratégique pour sécuriser vos démarches, défendre vos droits et anticiper les difficultés face à l’administration.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introCard}>
          <p className={styles.cardEyebrow}>Présentation</p>
          <h2 className={styles.sectionTitle}>Un contentieux humain, technique et décisif</h2>
          <div className={styles.introText}>
            <p>Le <b>droit des étrangers</b> regroupe l’ensemble des règles qui concernent le <b>séjour</b>, le <b>travail</b> et l’installation des personnes étrangères en France.</p>
            <p>Ces démarches peuvent être complexes, longues et source de stress. Le rôle d’un avocat intervenant en droit des étrangers est de vous <b>accompagner à chaque étape</b>, de sécuriser votre dossier et de défendre vos droits.</p>
            <p>Vous pouvez notamment consulter un avocat si vous souhaitez déposer une demande de titre de séjour, engager une démarche de naturalisation, ou contester une décision défavorable comme un refus, une OQTF ou certaines décisions en matière d’asile.</p>
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
          <h2 className={styles.sectionTitle}>Le rôle de conseil de l’avocat</h2>
          <p className={styles.closeText}>
            Dans tous les cas, le rôle de l’avocat est de vous conseiller au mieux de vos intérêts. Si vous souhaitez recourir aux services de Sophie Maréchal, elle procède toujours à une analyse juridique détaillée et personnalisée de votre situation au cours d’un entretien.
          </p>
          <p className={styles.closeText}>
            Si elle considère que les conditions d’obtention d’un titre de séjour ou d’une naturalisation ne sont pas réunies, elle vous en informera en toute transparence.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.primaryBtn}>Contacter le cabinet</Link>
            <Link href="/honoraires" className={styles.secondaryBtn}>Consulter les honoraires</Link>
          </div>
        </div>

        <div className={styles.faqCard}>
          <p className={styles.cardEyebrow}>Questions fréquentes</p>
          <h2 className={styles.sectionTitle}>FAQ droit des étrangers</h2>
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
          <h2 className={styles.sectionTitle}>Aller plus loin sur les recours contre une OQTF à Paris</h2>
          <p className={styles.relatedText}>
            Si votre situation concerne une obligation de quitter le territoire français, un contenu dédié détaille les délais, les recours envisageables et les enjeux d’une stratégie contentieuse rapide.
          </p>
          <div className={styles.relatedLinks}>
            <Link href="/avocat-oqtf-paris" className={styles.primaryBtn}>Consulter la page OQTF</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Parler de votre dossier</Link>
          </div>
        </div>
      </section>

      <Footer year={2026} />
    </div>
  );
};

export default DroitEtrangers;
