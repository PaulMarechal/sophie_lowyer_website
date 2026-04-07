"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import styles from './Home.module.css';

const domainCards = [
  {
    label: "Séjour & nationalité",
    title: "Droit des étrangers",
    bg: "/Images/droit-des-etrangers-passeports.webp",
    href: "/droit-des-etrangers",
    body: (
      <>
        <p>Elle assiste les personnes étrangères dans l’ensemble des démarches liées au <b>séjour en France</b> et à l’obtention de la <b>nationalité française</b>.</p>
        <p>Elle intervient notamment pour :</p>
        <ul>
          <li>Les <b>demandes de titre de séjour</b> : salarié, vie privée et familiale, passeport talent, étudiant.</li>
          <li>Les <b>démarches de naturalisation</b> par décret ou par déclaration.</li>
          <li>La <b>contestation des décisions préfectorales</b> : refus de titre, OQTF, refus de regroupement familial.</li>
        </ul>
      </>
    )
  },
  {
    label: "Autorisations & recours",
    title: "Droit de l’urbanisme",
    bg: "/Images/droit-urbanisme-plan.webp",
    href: "/droit-de-urbanisme",
    body: (
      <>
        <p>Elle accompagne les particuliers et les professionnels dans leurs projets de construction et d’aménagement, ainsi que dans les litiges liés aux <b>autorisations d’urbanisme</b>.</p>
        <p>Elle intervient notamment pour :</p>
        <ul>
          <li>Les <b>permis de construire</b>.</li>
          <li>Les <b>permis d’aménager</b>.</li>
          <li>Les <b>déclarations préalables de travaux</b>.</li>
          <li>La <b>contestation des refus ou décisions défavorables</b> devant l’administration et le tribunal administratif.</li>
        </ul>
      </>
    )
  },
  {
    label: "Agents publics",
    title: "Droit de la fonction publique",
    bg: "/Images/droit-fonction-publique-marianne.webp",
    href: "/droit-de-la-fonction-publique",
    body: (
      <>
        <p>Elle assiste les <b>agents publics</b> confrontés à des difficultés dans leur carrière, en particulier dans le cadre de <b>procédures disciplinaires</b>.</p>
        <p>Elle intervient notamment pour :</p>
        <ul>
          <li>L’<b>assistance devant le conseil de discipline</b>.</li>
          <li>La <b>contestation des sanctions disciplinaires</b> devant le tribunal administratif.</li>
        </ul>
      </>
    )
  }
];

const seoResources = [
  {
    eyebrow: "Droit des étrangers",
    title: "Recours contre une OQTF à Paris",
    text: "Un guide dédié pour comprendre les délais, la stratégie de recours et les points de vigilance en cas d’obligation de quitter le territoire français.",
    href: "/avocat-oqtf-paris",
    cta: "Consulter le guide OQTF"
  },
  {
    eyebrow: "Droit de l’urbanisme",
    title: "Refus de permis de construire à Paris",
    text: "Une page ciblée pour analyser les motifs de refus, les recours possibles et l’intérêt d’un accompagnement avant le tribunal administratif.",
    href: "/avocat-refus-permis-construire-paris",
    cta: "Voir le guide permis"
  },
  {
    eyebrow: "Fonction publique",
    title: "Conseil de discipline à Paris",
    text: "Un point d’entrée utile pour les agents publics qui doivent préparer leur défense et anticiper une éventuelle contestation de sanction.",
    href: "/avocat-conseil-discipline-paris",
    cta: "Découvrir le guide discipline"
  }
];

const Home = () => {
  const [activeDomainCard, setActiveDomainCard] = useState(null);

  return (
    <div className={styles.page}>
      <section className={styles.homepage}>
        <div className={styles.heroVeil} />
        <div className={styles.heroFrame}>
          <p className={styles.heroEyebrow}>Avocate en droit public à Paris</p>
          <div className={styles.homeText}>
            <h1>
              Sophie Maréchal
              <span className={styles.titleBand}>
                Droit public & droit de l’urbanisme
              </span>
            </h1>
            <h2>Avocate inscrite au barreau de Paris · urbanisme, étrangers, fonction publique</h2>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryBtn}>Prendre rendez-vous</Link>
              <Link href="/competences" className={styles.secondaryBtn}>Découvrir le cabinet</Link>
            </div>
          </div>
        </div>

        <div className={styles.scrollDowns}>
          <div className={styles.mousey}>
            <div className={styles.scroller}></div>
          </div>
          <p>scroll</p>
        </div>

        <div className={styles.licenseDetails}>
          <p>
            licence : <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA</a>
            <br />
            Créateur : <a href="https://delso.photo" target="_blank" rel="noreferrer">Diego Delso</a>
          </p>
        </div>
      </section>

      <section className={styles.introSection} id="a_propos_section">
        <div className={styles.introBackdrop}></div>
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>
            <span>Avocate en </span>
            <span className={styles.accentMark}>droit public</span>
            <span> et en droit de l’urbanisme, inscrite au barreau de Paris.</span>
          </h2>
          <p className={styles.introLead}>
            Une approche rigoureuse, accessible et engagée pour défendre vos intérêts face à l’administration à Paris, en droit public, droit de l’urbanisme, droit des étrangers et droit de la fonction publique.
          </p>
          <div className={styles.introTags}>
            <span className={styles.accentChip}>Une expertise</span>
            <span className={styles.accentChipMuted}>des valeurs</span>
            <span className={styles.accentChipMuted}>et une écoute</span>
          </div>
          <p className={styles.introContact}>
            <a href="mailto:sophie.marechal@avocat.fr">Contactez-moi</a> ou retrouvez-moi au cabinet à Paris pour un premier échange.
          </p>
        </div>
        <div className={styles.introVisual}>
          <div className={styles.portraitGlow}></div>
          <div className={styles.cityGlow}></div>
          <div className={styles.cityGlowSoft}></div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={styles.textCard}>
          <p className={styles.cardEyebrow}>Domaines d’intervention</p>
          <h2><b>Une pratique tournée vers le droit public</b></h2>
          <p>
            Sophie Maréchal intervient principalement en <b>droit des étrangers</b>, en <b>droit de l’urbanisme</b> et en <b>droit de la fonction publique</b>.
            Elle accompagne les particuliers, les agents publics et les professionnels dans leurs démarches administratives et dans leurs contentieux devant les juridictions administratives.
          </p>
          <p>
            Ces matières ont un point commun : elles concernent des décisions prises par l’administration, souvent techniques et lourdes de conséquences. Son rôle est de vous aider à comprendre vos droits, sécuriser vos démarches et contester les décisions injustifiées.
          </p>
          <p>
            Le cabinet accompagne ainsi une clientèle recherchant une <b>avocate en droit public à Paris</b>, en <b>droit de l’urbanisme</b>, en <b>droit des étrangers</b> et en <b>droit de la fonction publique</b>.
          </p>
        </div>
      </section>

      <section className={styles.resourceSection}>
        <div className={styles.resourceWrap}>
          <div className={styles.resourceIntro}>
            <p className={styles.cardEyebrow}>Guides pratiques</p>
            <h2 className={styles.resourceHeading}>Des guides utiles sur les recours les plus fréquents</h2>
            <p className={styles.resourceLead}>
              Ces contenus permettent d’aller plus loin sur les recours les plus fréquents en droit des étrangers, en urbanisme et en fonction publique.
            </p>
          </div>
          <div className={styles.resourceGrid}>
            {seoResources.map((resource) => (
              <article key={resource.href} className={styles.resourceCard}>
                <p className={styles.resourceMeta}>{resource.eyebrow}</p>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceText}>{resource.text}</p>
                <Link href={resource.href} className={styles.resourceLink}>
                  {resource.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.domainSection}>
        <div className={styles.domainWrap}>
          <div className={styles.domainIntro}>
            <p className={styles.cardEyebrow}>Interventions principales</p>
            <h2 className={styles.domainHeading}>Trois matières, une même exigence de clarté et de stratégie</h2>
            <p className={styles.domainLead}>
              Chaque domaine fait l’objet d’un accompagnement précis, avec une lecture concrète du dossier, des risques et des marges de recours.
            </p>
          </div>
          <div className={styles.domainOptions} role="list">
            {domainCards.map((card, idx) => (
              <div
                key={card.title}
                role="listitem"
                className={`${styles.domainOption} ${idx === activeDomainCard ? styles.active : ''}`}
                style={{ '--domainBg': `url(${card.bg})` }}
                tabIndex={0}
                onMouseEnter={() => setActiveDomainCard(idx)}
                onMouseLeave={() => setActiveDomainCard(null)}
                onFocus={() => setActiveDomainCard(idx)}
                onBlur={() => setActiveDomainCard(null)}
                aria-label={card.title}
              >
                <div className={styles.domainShadow} />
                <div className={styles.domainLabel}>
                  <span className={styles.domainBadge}>{card.label}</span>
                  <div className={styles.domainTitle}><b>{card.title}</b></div>
                </div>
                <div className={styles.domainReveal}>
                  <div className={styles.domainContent}>{card.body}</div>
                  <div className={styles.domainFooter}>
                    <Link href={card.href} className={styles.domainLink}>
                      Découvrir ce domaine
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={styles.textCard}>
          <p className={styles.cardEyebrow}>Méthode</p>
          <h2><b>Un accompagnement clair et personnalisé</b></h2>
          <p>
            Quelle que soit votre situation, elle vous propose un <b>accompagnement personnalisé</b>, avec une information claire, accessible et un suivi rigoureux du dossier.
          </p>
          <p>
            Si une action en justice n’est pas nécessaire ou n’est pas adaptée à votre situation, elle vous en informe en toute transparence. L’objectif reste de défendre vos droits avec discernement et efficacité.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGrid}>
          <div className={styles.introBlock}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20l10 0" /><path d="M6 6l6 -1l6 1" /><path d="M12 3l0 17" /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>
            </div>
            <div className={styles.hoverBg}></div>
            <h3>Des compétences diversifiées</h3>
            <p>Droit public, urbanisme, fonction publique, étrangers : une expertise construite autour des litiges administratifs et du conseil stratégique.</p>
            <Link href="/competences" className={styles.btn}>En savoir plus</Link>
          </div>
          <div className={styles.introBlock}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" /><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M18.5 19.5l2.5 2.5" /></svg>
            </div>
            <div className={styles.hoverBg}></div>
            <h3>Une transparence totale</h3>
            <p>Chaque situation est analysée précisément et les honoraires sont expliqués dès le début dans une convention claire et lisible.</p>
            <Link href="/honoraires" className={styles.btn}>Voir les détails</Link>
          </div>
          <div className={styles.introBlock}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
            </div>
            <div className={styles.hoverBg}></div>
            <h3>Un accompagnement humain</h3>
            <p>Un cabinet à taille humaine, disponible pour un échange par téléphone, e-mail ou au cabinet selon votre situation.</p>
            <Link href="/contact" className={styles.btn}>Contactez-moi</Link>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <p className={styles.contactIntro}>
          Un besoin ? Une question ? Je suis à votre écoute. Contactez-moi par le moyen qui vous convient le mieux.
        </p>

        <div className={styles.contactLinks}>
          <div>
            <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" title="Aller sur mon LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
            </a>
            <a href="mailto:sophie.marechal@avocat.fr">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            </a>
            <a href="tel:+0652609138" title="Contactez moi par téléphone">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
            </a>
            <a href="http://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer year={2026} />
    </div>
  );
};

export default Home;
