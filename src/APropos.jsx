import React from 'react';

const APropos = () => {
    return(
        <>
            <div style={{width: '100%', height: '90vh',}}>

                <section className="first_section" id="a_propos_section" style={{background: '#007BEE'}}>
                    <h1 className="first_section_h1_comptetences">
                        <span className="quote_style">,,</span>
                        <span>Ma <span className="first_blue_text_small">priorité</span> est de vous proposer une réponse juridique <span className="first_blue_text_small">adaptée</span>, <span className="first_blue_text_small">claire</span> et <span className="first_blue_text_small">pragmatique</span> pour vous accompagner et vous aider dans les difficultés que vous pouvez rencontrer. </span>
                    </h1>
                    <h1 className="first_section_h1_comptetences">
                        <span>Je m’engage à défendre vos intérêts <br/> avec <span className="first_blue_text_small">humanité</span>, <span className="first_blue_text_small">rigueur</span> et <br/> <span className="first_blue_text_small">détermination</span>.</span>
                        <span className="quote_style">,,</span>
                    </h1>

                    <div className="background_image_sophie_competences"></div>
                </section>

                <section id="honoraires_section">

                    <div className="display_text_elem_others_pages_div">
                        <div className="text_part_others_pages">
                            <div className="main_div_fourth_section">
                                <h2 className="title_others_pages">Une expertise engagée</h2>
                                <p>
                                    Sophie Maréchal est titulaire d’un master affaires publiques obtenu à Sciences Po Paris et d’un master en droit public général obtenu à l’Université Paris-I Panthéon Sorbonne.
                                    <br />
                                    Après avoir été reçue au concours d’entrée de l’École des Hautes Études en Santé publique (EHESP), Sophie Maréchal est devenue directrice d’hôpital. Elle a exercé cette fonction pendant 7 ans dans plusieurs hôpitaux situés en Nouvelle-Aquitaine et dans les Hauts-de-France.
                                </p>
                                <p>
                                    En 2022, Sophie Maréchal a passé avec succès l’examen d’entrée dans un centre régional d’étude à la profession d’avocat (CRFPA).
                                    <br />
                                    De janvier 2023 à juin 2024, elle a suivi la formation dispensée à l’EFB en droit public et droit des étrangers.
                                </p>
                            </div>
                        </div>

                        <div className="competences_part_others_pages">
                        
                            <div className="expertise-grid">
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/droit_public.jpg" alt="Droit de la fonction publique" />
                                    <span>Droit de la fonction publique</span>
                                </div>
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/droit_urbanisme.jpg" alt="Droit de l’urbanisme" />
                                    <span>Droit de l’urbanisme</span>
                                </div>
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/commande_public.jpg" alt="Droit de la commande publique" />
                                    <span>Droit de la commande publique</span>
                                </div>
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/passeport.jpg" alt="Droit des étrangers" />
                                    <span>Droit des étrangers</span>
                                </div>
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/tribunal.jpg" alt="Droit public" />
                                    <span>Droit public</span>
                                </div>
                                <div className="expertise-item">
                                    <img src="https://devxr.fr/sophie_test/Images/consommation.jpg" alt="Droit de la consommation" />
                                    <span>Droit de la consommation</span>
                                </div>
                            </div>
                        </div>
                    
                    </div>

                </section>
            </div>

        </>
    ) 
}; 

export default APropos;