import React from 'react';

const DroitEtrangers = () => {
    
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
                    <p>
                        Le droit des étrangers regroupe l’ensemble des règles qui concernent le séjour, le travail et l’installation des personnes étrangères en France. <br /><br />
                        Ces démarches peuvent être complexes, longues et source de stress. Le rôle d’un avocat intervenant en droit des étrangers est de vous <b>accompagner à chaque étape</b>, de sécuriser votre dossier et de défendre vos droits.<br /><br />
                        Vous pouvez notamment consulter un avocat si vous souhaitez déposer un dossier de demande de titre de séjour, ou bien si vous souhaitez contester une décision d’éloignement. 
                    </p>
                </section>
                <section>
                    <h2>Le rôle de conseil de l'avocat :</h2>
                    <p>
                        Dans tous les cas, le rôle de l’avocat est de vous conseiller au mieux de vos intérêts. <br /><br />
                        Si vous souhaitez recourir aux services de Sophie Maréchal, elle procédera toujours à une analyse juridique détaillée et personnalisée de votre situation au cours d’un entretien. <br /><br />                        
                        A l’issue de l’entretien, si elle considère que les conditions d’obtention d’une demande de titre de séjour ou de naturalisation ne sont pas réunies, elle vous informera en toute transparence.
                    </p>
                </section>
                <section>
                    <div>
                        <h2><b>1. Demande de titre de séjour</b></h2>
                        <p>
                            Sophie Maréchal vous aide à préparer et déposer votre <b>demande de titre de séjour</b>, en fonction de votre situation personnelle et professionnelle. <br /><br />
                            Elle vous accompagne notamment pour les titres suivants :<br /><br />
                        </p>
                        <ul>
                            <li><b>Titre de séjour " salarié " ou " métiers en tension "</b></li>
                            <li>Titre de séjour <b>" vie privée et familiale "</b> (conjoint, enfants, liens personnels en France)</li>
                            <li><b>Passeport talent</b></li>
                            <li><b>Titre de séjour " étudiant "</b></li>
                        </ul>
                        <p>
                            Son accompagnement comprend l’analyse de votre situation, la constitution du dossier, la vérification des pièces et le suivi de la demande auprès de l’administration.
                        </p>
                    </div>
                    <div>
                        <h2><b>2. Démarches de naturalisation française</b></h2>
                        <p>Sophie Maréchal vous accompagne dans vos démarches pour <b>obtenir la nationalité française</b>, que ce soit :</p>
                        <ul>
                            <li>La <b>naturalisation par décret</b></li>
                            <li>La naturalisation par <b>déclaration</b>(notamment par mariage ou filiation)</li>
                        </ul>
                        <p>
                            Elle vous aide à vérifier que vous remplissez les conditions, à constituer un dossier complet et à anticiper les difficultés éventuelles afin d’augmenter vos chances de succès.
                        </p>
                    </div>
                    <div>
                        <h2><b>3. Recours et contestation des décisions de l’administration</b></h2>
                        <p>
                            Lorsque l’administration refuse une demande, il est souvent possible de <b>contester la décision</b>. <br /><br />
                            Sophie Maréchal vous assister et vous représenter notamment en cas de :
                        </p>
                        <ul>
                            <li><b>Refus de titre de séjour</b></li>
                            <li><b>Refus de regroupement familial</b></li>
                            <li><b>Obligation de Quitter le Territoire Français (OQTF), avec ou sans délai</b></li>
                        </ul>
                        <p>
                            Elle vous conseille sur les recours possibles (recours gracieux, recours devant le tribunal administratif) et elle défend vos droits devant les juridictions compétentes.
                        </p>
                    </div>
                    <div>
                        <h2><b>4.  Aide au dépôt d’une demande d’asile ou contestation d’une décision de refus opposée à une demande d’asile</b></h2>
                        <p>
                            Sophie Maréchal intervient aux côtés des demandeurs d’asile pour les assister et les représenter dans le cadre des recours contre les décisions de refus de protection rendues par l’OFPRA devant la Cour nationale du droit d’asile (CNDA). <br /><br />
                            Son accompagnement couvre l’analyse du dossier, la préparation du recours, la constitution des éléments de preuve et la représentation devant la juridiction compétente, avec une attention particulière portée à la situation personnelle et au parcours du demandeur.
                        </p>
                    </div>
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