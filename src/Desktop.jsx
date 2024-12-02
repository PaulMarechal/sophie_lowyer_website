import React from 'react';
import './style.css';

const Desktop = () => {
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <header>
                    <div><h2>Test</h2></div>
                    <div><h2>Test</h2></div>
                    <div id="sophie_marechal_home_header">
                        <a className="link_header" href="#">
                            <h2>Sophie Maréchal</h2>
                        </a>
                    </div>
                    <div><h2>Test</h2></div>
                    <div>
                        <a className="link_header" href="#contact_me">
                            <h2>Contact</h2>
                        </a>
                    </div>
                </header>

                <section className="homepage">
                    <div className="home_text">
                        <h1>Maitre <br /> Sophie Maréchal</h1>
                        <h2>Avocat inscrite au barreau de Paris</h2>
                    </div>

                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                        <p>scroll</p>
                    </div>

                    <div className="scroll-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 7l5 5l5 -5" />
                            <path d="M7 13l5 5l5 -5" />
                        </svg>
                    </div>
                </section>

                <section className="first_section">
                    <h1 className="first_section_h1">
                        <span>Avocate spécialisée en <br/></span>
                        <span>
                            <span id="first_blue_text">droit</span> de la <span className="animate-word">santé</span> <br/>et droit <span className="animate-word">public</span>
                        </span>
                        <span> inscrite au bareau de Paris.</span><br/>
                        <span id="expetise_text">Une expertise</span>
                        <span id="valeurs_text">des valeurs,</span>
                        <span id="ecoute_text">et une écoute.<br/></span>
                        <span id="contactez_span">
                            <a href="mailto:" title="Contactez-moi par e-mail ✉️" id="contact_me_link">Contactez-moi</a>
                            ou retrouvez-moi dans mon bureau à Paris.<br/>
                        </span>
                    </h1>
                    <div className="background_image_sophie"></div>
                    <div className="background_image_place_etoile"></div>
                    <div className="background_image_place_etoile_second"></div>
                </section>

                <section className="second_section">
                    <h2>une expertise engagée</h2>
                    <div className="main_div_second_section">
                        <div className="first_div_text_second_section">
                            <p>
                                Au cœur du 8e arrondissement de Paris, Maître Sophie Maréchal incarne une approche moderne et humaine de la profession d’avocat. Forte d’une expertise en droit de la santé et en droit public, elle accompagne ses clients avec rigueur et bienveillance dans les moments les plus décisifs de leur vie professionnelle et personnelle.
                                <br />
                                Plus qu’un simple service juridique, Maître Maréchal se distingue par sa capacité à écouter, à comprendre et à proposer des solutions sur mesure.
                            </p>
                        </div>
                        <div className="seconc_div_text_second_section">
                            <p>
                                Convaincue que chaque situation est unique, elle s’attache à établir un dialogue clair et transparent, permettant à ses clients de naviguer sereinement dans les méandres juridiques.
                                <br />
                                Implantée à deux pas de la place de l’Étoile, Maître Maréchal offre un accompagnement stratégique, alliant expertise technique et vision humaine, pour répondre aux enjeux d’aujourd’hui et bâtir les solutions de demain.
                            </p>
                        </div>
                        <div className="parc_monceau"></div>
                        <div className="background_image_place_etoile_second_bottom"></div>
                    </div>
                </section>

                <footer id="contact_me">
                    <div className="main_div_contact_me_bottom_icon">
                        <div className="icon_bottom_page">
                            <a href="http://maps.google.com/?q=Pl Charles de Gaulle, Paris" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#007BEE" className="icon icon-tabler icons-tabler-filled icon-tabler-location">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="icon_bottom_page">
                            <a href="mailto:" title="Contactez moi par mail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#007BEE" className="icon icon-tabler icons-tabler-filled icon-tabler-mail">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"/>
                                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Desktop;
