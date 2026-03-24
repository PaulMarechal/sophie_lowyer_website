"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Footer from '../../components/layout/Footer';
import styles from '../droit-des-etrangers/PracticeArea.module.css';

const DroitFonctionPublique = () => {
    const [activeCard, setActiveCard] = useState(null);
    return(
        <div className={styles.page}>
            <div style={{ width: '100%', minHeight: '100vh' }}>
                <section className="first_section" id="a_propos_section">
                    <div className="practice_hero_inner">
                        <p className="practice_eyebrow">Fonction publique</p>
                        <h1 className="first_section_h1">
                            <span>
                                Défendre les agents publics
                                <br />
                                face aux procédures disciplinaires
                            </span>
                        </h1>
                        <p className="practice_hero_lead">
                            Une intervention structurée pour protéger vos droits, préparer votre défense et contester une sanction si nécessaire.
                        </p>
                    </div>
                </section>

                <section className="text_section_droit_public">
                    <div className="practice_intro_shell">
                    <div className="practice_intro_card">
                        <p className="practice_section_eyebrow">Présentation</p>
                        <h2 className="practice_section_title">Une défense adaptée à votre statut et à votre administration</h2>
                        <p>
                            Avocat en <b>droit de la fonction publique</b>, Sophie Maréchal accompagne les <b>agents publics</b> titulaires ou contractuels confrontés à des difficultés dans leur carrière, notamment en cas d’engagement d’une procédure <b>disciplinaire</b>.
                        </p>
                        <p>
                            Les procédures disciplinaires peuvent avoir des conséquences importantes sur la situation professionnelle et personnelle de l’agent.
                        </p>
                        <p>
                            Son rôle est de vous informer, de vous assister et de défendre vos droits à chaque étape de la procédure.
                        </p>
                    </div>
                    </div>
                </section>

                <section className="fp-cards" aria-label="Accompagnement en droit de la fonction publique">
                    <div
                        className={`fp-card ${activeCard === 0 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(/Images/assistance-conseil-de-discipline-maitre-marechal.webp)" }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeCard === 0}
                        onMouseEnter={() => setActiveCard(0)}
                        onMouseLeave={() => setActiveCard(null)}
                        onFocus={() => setActiveCard(0)}
                        onClick={() => setActiveCard(0)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setActiveCard(0);
                        }}
                    >
                        <div className="fp-shadow" />

                        <div className="fp-badge">Procédure disciplinaire</div>
                        <div className="fp-title">
                            <h2>Assistance devant le conseil de discipline</h2>
                            <p>
                                Préparation complète et représentation à l’audience.
                            </p>
                        </div>

                        <div className="fp-content">
                            <p>
                                Sophie Maréchal vous assiste dans le cadre des <b>procédures disciplinaires</b> engagées à votre encontre, notamment lors d’une <b>comparution devant le conseil de discipline</b>.
                            </p>
                            <p>Son intervention comprend notamment :</p>
                            <ul>
                                <li>L’analyse des faits reprochés et de votre situation administrative</li>
                                <li>L’étude de la régularité de la procédure disciplinaire</li>
                                <li>La préparation de votre défense et de vos observations écrites</li>
                                <li>L’assistance et la représentation lors de la séance devant le conseil de discipline</li>
                            </ul>
                            <p>
                                L’objectif est de garantir le respect de vos droits et d’obtenir la décision la plus favorable possible.
                            </p>
                        </div>

                        <div className="fp-footer">
                            <Link href="/contact" className="fp-link">Prendre rendez-vous</Link>
                        </div>
                    </div>

                    <div
                        className={`fp-card ${activeCard === 1 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(/Images/contestation-sanctions-disciplinaires.webp)" }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeCard === 1}
                        onMouseEnter={() => setActiveCard(1)}
                        onMouseLeave={() => setActiveCard(null)}
                        onFocus={() => setActiveCard(1)}
                        onClick={() => setActiveCard(1)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setActiveCard(1);
                        }}
                    >
                        <div className="fp-shadow" />

                        <div className="fp-badge">Recours</div>
                        <div className="fp-title">
                            <h2>Contestation des sanctions disciplinaires</h2>
                            <p>
                                Analyse, stratégie de recours et défense devant le tribunal.
                            </p>
                        </div>

                        <div className="fp-content">
                            <p>
                                Lorsqu’une <b>sanction disciplinaire</b> est prononcée, il est souvent possible de la <b>contester devant le tribunal administratif</b>.
                            </p>
                            <p>Me Sophie Maréchal vous accompagne pour contester notamment :</p>
                            <ul>
                                <li>Un avertissement</li>
                                <li>Un blâme</li>
                                <li>Une exclusion temporaire de fonctions</li>
                                <li>Une rétrogradation</li>
                                <li>Une révocation ou toute autre sanction disciplinaire</li>
                            </ul>
                            <p>
                                Elle vous conseille sur les recours possibles (recours gracieux, recours contentieux) et vous représente devant le <b>tribunal administratif</b>, afin de contester la légalité de la sanction et d’en obtenir l’annulation ou la réduction.
                            </p>
                        </div>

                        <div className="fp-footer">
                            <Link href="/contact" className="fp-link">Prendre rendez-vous</Link>
                        </div>
                    </div>
                </section>

                <section className="last_text_fonction_publique">
                    <div className="practice_close_shell">
                    <p className="practice_section_eyebrow">Méthode</p>
                    <h2><b>Un accompagnement dédié aux agents publics</b></h2>
                    <p>
                        En tant qu’<b>avocat en droit de la fonction publique</b>, elle propose un accompagnement personnalisé, adapté à votre statut et à votre administration d’appartenance, avec une information claire et accessible tout au long de la procédure. <br /><br />
                        Elle attache beaucoup d’importance à mon devoir de conseil. Une action contentieuse devant le tribunal administratif est généralement longue.
                    </p>
                    <div className="practice_bottom_links">
                        <Link href="/contact" className="practice_cta_primary">Contacter le cabinet</Link>
                        <Link href="/honoraires" className="practice_cta_secondary">Consulter les honoraires</Link>
                    </div>
                    </div>
                </section>

                <Footer year={2026} />
            </div>
        </div>
    )
}

export default DroitFonctionPublique;
