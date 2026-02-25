import React, { useState } from 'react';

const DroitEtrangers = () => {
    const [activeCard, setActiveCard] = useState(null);
    
    return(
        <>
            <div style={{ width: '100%', minHeight: '100vh' }}>
                <section
                    className="first_section"
                    id="a_propos_section"
                    style={{ background: '#007BEE' }}
                >
                    <h1 className="first_section_h1">
                        <span>
                            Droit des étrangers :<br />
                            Comment Me Sophie Maréchal peut vous accompagner
                        </span>
                    </h1>
                </section>

                <section className="text_section_droit_public">
                    <p>
                        Le <b>droit des étrangers</b> regroupe l’ensemble des règles qui concernent le <b>séjour</b>, le <b>travail</b> et l’installation des personnes étrangères en France.
                        <br /><br />
                        Ces démarches peuvent être complexes, longues et source de stress. Le rôle d’un avocat intervenant en droit des étrangers est de vous <b>accompagner à chaque étape</b>, de sécuriser votre dossier et de défendre vos droits.
                        <br /><br />
                        Vous pouvez notamment consulter un avocat si vous souhaitez déposer une demande de titre de séjour, engager une démarche de naturalisation, ou contester une décision défavorable (refus, OQTF, asile).
                    </p>
                </section>

                <section className="fp-cards" aria-label="Accompagnement en droit des étrangers">
                    <div
                        className={`fp-card ${activeCard === 0 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(/Images/etrangers-titre-sejour.webp)" }}
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

                        <div className="fp-badge">Démarches</div>
                        <div className="fp-title">
                            <h2>Titre de séjour & naturalisation</h2>
                            <p>Constitution du dossier, stratégie et suivi auprès de l’administration.</p>
                        </div>

                        <div className="fp-content">
                            <p>
                                Sophie Maréchal vous aide à préparer et déposer votre <b>demande de titre de séjour</b>, en fonction de votre situation personnelle et professionnelle.
                            </p>
                            <p>Elle vous accompagne notamment pour :</p>
                            <ul>
                                <li><b>Titre de séjour “salarié”</b> ou <b>“métiers en tension”</b></li>
                                <li>Titre de séjour <b>“vie privée et familiale”</b> (conjoint, enfants, liens personnels en France)</li>
                                <li><b>Passeport talent</b></li>
                                <li><b>Titre de séjour “étudiant”</b></li>
                            </ul>
                            <p>
                                Elle intervient également pour vos démarches de <b>naturalisation française</b> (par décret) ou par <b>déclaration</b> (mariage, filiation), afin de constituer un dossier complet et d’anticiper les difficultés.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`fp-card ${activeCard === 1 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(/Images/etrangers-recours.webp)" }}
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
                            <h2>Contestations & procédures</h2>
                            <p>Recours gracieux / contentieux et représentation.</p>
                        </div>

                        <div className="fp-content">
                            <p>
                                Lorsque l’administration refuse une demande, il est souvent possible de <b>contester la décision</b>.
                            </p>
                            <p>Elle vous assiste et vous représente notamment en cas de :</p>
                            <ul>
                                <li><b>Refus de titre de séjour</b></li>
                                <li><b>Refus de regroupement familial</b></li>
                                <li><b>Obligation de Quitter le Territoire Français (OQTF)</b>, avec ou sans délai</li>
                            </ul>
                            <p>
                                Elle intervient également au soutien des demandeurs d’asile dans le cadre des recours contre les décisions de refus de protection (OFPRA) devant la <b>CNDA</b> : analyse du dossier, préparation du recours, constitution des preuves et représentation.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="last_text_fonction_publique">
                    <h2><b>Le rôle de conseil de l’avocat</b></h2>
                    <p>
                        Dans tous les cas, le rôle de l’avocat est de vous conseiller au mieux de vos intérêts.
                        <br /><br />
                        Si vous souhaitez recourir aux services de Sophie Maréchal, elle procède toujours à une analyse juridique détaillée et personnalisée de votre situation au cours d’un entretien.
                        <br /><br />
                        À l’issue de l’entretien, si elle considère que les conditions d’obtention d’un titre de séjour ou d’une naturalisation ne sont pas réunies, elle vous en informera en toute transparence.
                    </p>
                </section>

                <footer>
                    <div id="contact_me">
                        <div>
                            <p>© 2026 Sophie Maréchal</p>
                        </div>
                        <div>
                            <p> - </p>
                        </div>
                        <div>
                            <a href="/mentions-legales">
                                Mentions légales
                            </a>
                        </div>
                        <div>
                            <p> - </p>
                        </div>
                        <div>
                            <a href="/confidentialite">
                                Politique de confidentialité
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default DroitEtrangers;