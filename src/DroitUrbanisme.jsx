import React, { useState } from 'react';

const DroitUrbanisme = () => {
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
                            Avocat en droit de <br /> l’urbanisme
                        </span>
                    </h1>
                </section>

                <section className="text_section_droit_public">
                    <p>
                        Avocat en <b>droit de l’urbanisme</b>, Me Sophie Maréchal accompagne les <b>particuliers</b>, <b>professionnels</b> et <b>collectivités</b> dans leurs démarches liées aux autorisations d’urbanisme et dans les litiges avec l’administration.
                        <br /><br />
                        Le droit de l’urbanisme encadre les règles de construction et d’aménagement. Les procédures peuvent être complexes et les décisions administratives lourdes de conséquences.
                        <br /><br />
                        Son rôle est de vous aider à sécuriser vos projets et à défendre vos intérêts, avec une information claire à chaque étape.
                    </p>
                </section>

                <section className="fp-cards" aria-label="Accompagnement en droit de l’urbanisme">
                    <div
                        className={`fp-card ${activeCard === 0 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(../Images/droit-urbanisme-plan.webp)" }}
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

                        <div className="fp-badge">Autorisations</div>
                        <div className="fp-title">
                            <h2>Autorisations d’urbanisme</h2>
                            <p>Conseil, constitution du dossier et sécurisation du projet.</p>
                        </div>

                        <div className="fp-content">
                            <p>
                                Me Sophie Maréchal vous assiste dans vos démarches de demande d’<b>autorisation d’urbanisme</b>, notamment pour :
                            </p>
                            <ul>
                                <li>Le <b>permis de construire</b></li>
                                <li>Le <b>permis d’aménager</b></li>
                                <li>La <b>déclaration préalable de travaux</b></li>
                            </ul>
                            <p>
                                Son intervention comprend l’analyse de la faisabilité juridique de votre projet, l’identification des règles applicables (PLU, servitudes, règles nationales d’urbanisme) et l’accompagnement dans la constitution et le dépôt du dossier auprès de l’administration.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`fp-card ${activeCard === 1 ? 'active' : ''}`}
                        style={{ '--fpBg': "url(/Images/Contestation-des-décisions-permis-construire.webp)" }}
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
                            <h2>Contestation des décisions</h2>
                            <p>Recours gracieux / contentieux et défense devant le tribunal.</p>
                        </div>

                        <div className="fp-content">
                            <p>
                                En cas de décision défavorable, il est possible de <b>la contester</b>.
                            </p>
                            <p>Me Sophie Maréchal intervient notamment pour contester :</p>
                            <ul>
                                <li>Un <b>refus de permis de construire</b></li>
                                <li>Un <b>refus de permis d’aménager</b></li>
                                <li>Une <b>opposition à déclaration préalable</b></li>
                                <li>Ou toute décision imposant des prescriptions illégales</li>
                            </ul>
                            <p>
                                Elle vous conseille sur les recours possibles (recours gracieux, recours contentieux) et vous représente devant le <b>tribunal administratif</b>, afin de défendre votre projet et vos droits.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="last_text_fonction_publique">
                    <h2><b>Défense et sécurisation des projets d’urbanisme</b></h2>
                    <p>
                        En tant qu’<b>avocat en droit de l’urbanisme</b>, elle vous propose un accompagnement personnalisé, que vous soyez porteur de projet ou confronté à une décision administrative défavorable.
                        <br /><br />
                        Elle attache une importance particulière à son devoir de conseil. Si, à l’issue de l’entretien, elle constate qu’une action n’est pas nécessaire ou qu’elle n’est pas adaptée à votre situation, elle vous en informera en toute transparence.
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

export default DroitUrbanisme; 