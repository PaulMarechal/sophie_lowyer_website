import React from 'react';
import { Link } from 'react-router-dom';

const Competences = () => {
    return(
        <>
            <div className="competences_page_wrapper">
                <section className="first_section competences_first_section" id="a_propos_section" style={{background: '#007BEE'}}>
                    <div className="competences_header_content">
                        <h1 className="first_section_h1 competences_first_section_h1">
                            <span>
                                Ma <span className="first_blue_text">priorité</span> est de vous proposer une réponse juridique <span className="first_blue_text">adaptée</span>, <span className="first_blue_text">claire</span> et <span className="first_blue_text">pragmatique </span>
                            </span>
                            <span>pour vous accompagner et vous aider dans les difficultés que vous pouvez rencontrer.</span><br/><br/>
                            <span>
                                Je m’engage à défendre vos intérêts avec <span className="first_blue_text">humanité</span>, <span className="first_blue_text">rigueur</span> et <span className="first_blue_text">détermination</span>.
                            </span>
                        </h1>
                    </div>
                </section>

                <section className="competences_content_section" id="competences_section">
                    <div className="competences_intro_block">
                        {/* <p className="honoraires_intro_eyebrow">Compétences</p> */}
                        <h2 className="title_others_pages competences_main_title">Une expertise engagée</h2>
                        <div className="competences_intro_columns">

                            <div className="competences_intro_column">
                                <p>
                                    Sophie Maréchal est titulaire d’un master affaires publiques obtenu à Sciences Po Paris et d’un master en droit public général obtenu à l’Université Paris-I Panthéon Sorbonne.
                                </p>
                                <p>
                                    Après avoir été reçue au concours d’entrée de l’École des Hautes Études en Santé publique (EHESP), Sophie Maréchal est devenue directrice d’hôpital. Elle a exercé cette fonction pendant 7 ans dans plusieurs hôpitaux situés en Nouvelle-Aquitaine et dans les Hauts-de-France.
                                </p>
                                <p>
                                    Après cette expérience professionnelle particulièrement riche, Sophie Maréchal a souhaité devenir avocat.
                                </p>
                            </div>

                            <div className="competences_intro_column">
                                <p>
                                    En 2022, Sophie Maréchal a passé avec succès l’examen d’entrée dans un centre régional de formation à la profession d’avocat (CRFPA).
                                </p>
                                <p>
                                    De janvier 2023 à juin 2024, elle a suivi la formation dispensée à l’EFB en droit public et droit des étrangers.
                                </p>
                                <p>
                                    Parallèlement, elle a étudié à l’Institut de droit public des affaires (IDPA).
                                </p>
                                <p>
                                    Lauréate du certificat d’aptitude à la profession d’avocat, elle a prêté serment en 2024.
                                </p>
                                <p>
                                    Elle travaille en français, anglais et allemand.
                                </p>
                                <p>
                                    Elle défend les intérêts de ses clients sur l’ensemble du territoire national.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="competences_cards_section">
                        <article className="competences_display_card competences_display_card_highlight">
                            {/* <div className="honoraires_card_badge">Domaines d’intervention</div> */}
                            <h3>Les principales compétences du cabinet</h3>
                            <p>
                                Le cabinet intervient principalement en <strong>droit public</strong>, avec une approche rigoureuse, claire et adaptée aux réalités concrètes de chaque dossier.
                            </p>
                            <div className="expertise-grid competences_expertise_grid">
                                <div className="expertise-item competences_expertise_item">
                                    <Link to="/droit-de-la-fonction-publique">
                                        <img src="https://sophiemarechal-avocat.fr/Images/droit_public.webp" loading="lazy" alt="Sophie Maréchal avocate en droit de la fonction publique à Paris" />
                                        <span>Droit de la fonction publique</span>
                                    </Link>
                                </div>
                                <div className="expertise-item competences_expertise_item">
                                    <Link to="/droit-de-urbanisme">
                                        <img src="https://sophiemarechal-avocat.fr/Images/droit_urbanisme.webp" loading="lazy" alt="Sophie Maréchal, avocate en droit de l’urbanisme à Paris" />
                                        <span>Droit de l’urbanisme</span>
                                    </Link>
                                </div>
                                <div className="expertise-item competences_expertise_item">
                                    <Link to="/droit-des-etrangers">
                                        <img src="https://sophiemarechal-avocat.fr/Images/droit_etrangers.webp" loading="lazy" alt="Sophie Maréchal, avocate en droit des étrangers à Paris" />
                                        <span>Droit des étrangers</span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>
            </div>
        </>
    )
};

export default Competences;
