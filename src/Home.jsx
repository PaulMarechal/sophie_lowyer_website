import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        const btnHoverMap = [
        {
            btnClass: 'competence_btn',
            bgClass: 'background_hover_competences',
            blockClass: 'intro-block'
        },
        {
            btnClass: 'transparence_btn',
            bgClass: 'background_hover_transparence',
            blockClass: 'intro-block'
        },
        {
            btnClass: 'accompagnement_btn',
            bgClass: 'background_hover_accompagnement',
            blockClass: 'intro-block'
        }
        ];

        btnHoverMap.forEach(({ btnClass, bgClass }) => {
        const btn = document.querySelector(`.${btnClass}`);
        const bg = document.querySelector(`.${bgClass}`);
        const block = btn?.closest('.intro-block');

        if (btn && bg && block) {
            const handleEnter = () => {
            bg.classList.add('expanded');
            block.classList.add('hover-active');
            };

            const handleLeave = () => {
            bg.classList.remove('expanded');
            block.classList.remove('hover-active');
            };

            btn.addEventListener('mouseenter', handleEnter);
            btn.addEventListener('mouseleave', handleLeave);
        }
        });
    }, []);


    return(
        <>
        <section className="homepage">
            <div className="home_text">
                <h1>Sophie Maréchal<br/><span id="title_header_h1"><b>Droit Public</b> &amp; <b>droit de l'urbanisme</b></span></h1>
                <h2>Avocate inscrit au barreau de Paris</h2>
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
            <div className="license-details">
                <p>
                    licence : <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"> CC BY-SA</a> <br/>
                    Créateur : <a href="https://delso.photo" target="_blank">Diego Delso</a>
                </p>
            </div>
        </section>

        {/* Section principale */}
        <section className="first_section" id="a_propos_section">
            <h2 className="first_section_h1">
                <span>Avocate en </span>
                <span>
                    <span className="first_blue_text">droit</span> <span className="animate-word">public </span> <br/> et droit de <span className="animate-word">l'urbanisme</span> 
                </span>
                <span> inscrite au barreau de Paris.</span><br/>
                <span id="expetise_text">Une expertise</span><br/>
                <span id="valeurs_text">des valeurs,</span><br/>
                <span id="ecoute_text">et une écoute.<br/></span>
                <span id="contactez_span">
                    <a href="mailto:sophie.marechal@avocat.fr" title="Contactez-moi par e-mail ✉️" id="contact_me_link">Contactez-moi </a>
                    ou retrouvez-moi dans mon bureau à Paris.<br/>
                </span>
            </h2>
            <div className="background_image_sophie" ></div>
            <div className="background_image_place_etoile"></div>
            <div className="background_image_place_etoile_second"></div>
        </section>

        <div className="parc_monceau_home"></div>

        <section className="short-intros domaines_intervention_texte">
            <h2>Ses domaines d’intervention</h2>
            <div className="domaine_intervention_div">
                <div id="first_div_intervention">
                    <p>
                        Forte de son expérience, Maître Sophie Maréchal intervient en <strong>droit de la fonction publique</strong>, accompagnant aussi bien agents que collectivités dans leurs procédures administratives et contentieuses.
                        Elle apporte également son expertise en <strong>droit de l’urbanisme</strong> pour sécuriser vos projets d’aménagement urbain et répondre aux enjeux réglementaires.
                    </p>
                    <p>
                        En tant qu'avocate du <strong>droit de la commande publique</strong>, elle conseille et assiste ses clients lors de la passation, l’exécution et le contentieux des marchés publics et des contrats administratifs.
                    </p>                
                </div>
                <div id="second_div_intervention">
                    <p>
                        Maître Maréchal intervient en <strong>droit des étrangers</strong> pour le dépôt de titres de séjour, demandes d’asile et recours devant le tribunal administratif, garantissant une défense personnalisée.
                    </p>
                    <p>
                        Passionnée par les <strong>droits et libertés publiques</strong>, elle défend vos droits fondamentaux et assure un accompagnement complet en <strong>droit public général</strong>, qu’il s’agisse de droit institutionnel, fiscal ou environnemental.
                    </p>
                    <p>
                        Grâce à une approche pragmatique et humaine, <strong>Maître Sophie Maréchal</strong> propose des solutions claires et adaptées à chaque situation.
                    </p>                
                </div>
            </div>
        </section>

        <section className="short-intros">
            <div className="intro-block">
                <div className="icon-wrapper">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#FFF"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-scale"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20l10 0" /><path d="M6 6l6 -1l6 1" /><path d="M12 3l0 17" /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>
                </div>
                <div className="background_hover_competences"></div>
                <h3>Des compétences<br/>diversifiées</h3>
                <p><strong>Droit de la santé</strong>, <strong>droit public</strong>, <strong>droit de l'urbanisme</strong>, <strong>droit de la fonction publique</strong>, et bien plus. Maître Sophie Maréchal met son expertise à votre service avec rigueur et détermination.</p>
                <a href="/competences/" className="btn competence_btn">En savoir plus</a>
            </div>
            <div className="intro-block">
                <div className="icon-wrapper">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#FFF"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-file-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" /><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M18.5 19.5l2.5 2.5" /></svg>
                </div>
                <div className="background_hover_transparence"></div>
                <h3>Une transparence<br/>totale</h3>
                <p>Chaque situation est unique : les honoraires sont définis avec précision et formalisés dans une convention claire dès le début de notre collaboration.</p>
                <a href="/honoraires/" className="btn transparence_btn">Voir les détails</a>
            </div>
            <div className="intro-block">
                <div className="icon-wrapper">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="#FFF"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
                </div>
                <div className="background_hover_accompagnement"></div>
                <h3>Un accompagnement<br/>humain</h3>
                <p>Prenez rendez-vous pour échanger sur votre situation. Que ce soit par téléphone, e-mail ou en personne, je suis là pour vous conseiller.</p>
                <a href="/contact/" className="btn accompagnement_btn">Contactez-moi</a>
            </div>
        </section>

        <div className="paris_monument_home"></div>

        <section>
            <p className="contact-intro">
            Un besoin ? Une question ? Je suis à votre écoute. Contactez-moi par le moyen qui vous convient le mieux.
            </p>
            

            <div className="contact_part_others_pages_index">
                <div>
                    <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" title="Aller sur mon LinkedIn">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                    </a>
                    <a href="mailto:sophie.marechal@avocat.fr">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    </a>
                    <a href="tel:+0625550882" title="Contactez moi par téléphone">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    </a>
                    <a href="http://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
                    </a>
                </div>
            </div>
        </section>

        <footer>
            <div id="contact_me">
                <div>
                    <p>© 2025 Sophie Maréchal</p>
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
        </>
    )
}

export default Home; 