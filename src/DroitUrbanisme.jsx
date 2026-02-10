import React from 'react';
import { Link } from 'react-router-dom';

const DroitUrbanisme = () => {
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

                <section>
                    <h2><p>Avocat en droit de l'urbanisme</p></h2>
                    <p>
                        Avocat en <b>droit de l’urbanisme</b>, Me Sophie Maréchal accompagne les <b>particuliers</b>, <b>professionnels et collectivités</b> dans leurs démarches liées aux autorisations d’urbanisme et dans les litiges avec l’administration. <br /><br />
                        Le droit de l’urbanisme encadre les règles de construction et d’aménagement. <br /><br />
                        Les procédures peuvent être complexes et les décisions administratives lourdes de conséquences. <br /><br />
                        Le rôle de l’avocat est de vous aider à sécuriser vos projets et à défendre vos intérêts.<br /><br />
                    </p>
                </section>

                <section>
                    <h2><b>Autorisations d’urbanisme : accompagnement et conseil</b></h2>
                    <p>
                        Me Sophie Maréchal vous assiste dans vos démarches de demande d’<b>autorisation d’urbanisme</b>, notamment pour :
                    </p>
                    <ul>
                        <li>Le <b>permis de construire</b></li>
                        <li>le <b>permis d’aménager</b></li>
                        <li>La <b>déclaration préalable de travaux</b></li>
                    </ul>
                    <p>
                        Son intervention comprend l’analyse de la faisabilité juridique de votre projet, l’identification des règles applicables (PLU, servitudes, règles nationales d’urbanisme) et l’accompagnement dans la constitution et le dépôt du dossier auprès de l’administration.
                    </p>
                </section>

                <section>
                    <h2><b>Contestation des décisions en matière d'urbanisme</b></h2>
                    <p>
                        En cas de décision défavorable, il est possible de <b>la contester</b> :
                        <br /><br />
                        Me Sophie Maréchal intervient notamment pour contester :
                    </p>
                    <ul>
                        <li>Un <b>refus de permis de construire</b></li>
                        <li>Un <b>refus de permis d’aménager</b></li>
                        <li>Une <b>opposition à déclaration préalable</b></li>
                        <li>Ou toute décision imposant des prescriptions illégales</li>
                    </ul>
                    <p>
                        Elle vous conseille sur les recours possibles (recours gracieux, recours contentieux) et vous représente devant le <b>tribunal administratif</b>, afin de défendre votre projet et vos droits.
                    </p>
                </section>

                <section>
                    <h2><b>Défense et sécurisation des projets d’urbanisme</b></h2>
                    <p>
                        En tant qu'<b>avocat en droit de l'urbanisme</b>, elle vous propose un accompagnement personnalisé, que vous soyez porteur de projet ou confronté à une décision administrative défavorable, avec une information claire à chaque étape de la procédure. <br /><br />
                        Elle attache beaucoup d’importance à mon devoir de conseil. Si, à l'issue de l’entretien, Elle constate qu'une action en justice n'est pas nécessaire ou qu'elle n'est pas adaptée à votre situation, elle vous en informera en toute transparence.
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