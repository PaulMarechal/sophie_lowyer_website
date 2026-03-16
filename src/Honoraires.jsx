import React from 'react';

const Honoraires = () => {
    return(
        <>
            <div className="honoraires_page_wrapper">
                <section className="first_section" id="a_propos_section" style={{background: '#007BEE'}}>
                    <div className="honoraires_header_content">
                        <h1 className="first_section_h1 honoraires_first_section_h1">
                            <span>Les honoraires sont fixés dans un souci de </span>
                            <span className="first_blue_text_small">transparence </span> 
                            <span>et toujours expliqués avant toute intervention.</span>
                        </h1>
                    </div>
                </section>

                <section className="fourth_section honoraires_content_section" id="honoraires_section">
                    <div className="honoraires_intro_block">
                        {/* <p className="honoraires_intro_eyebrow">Transparence</p> */}
                        <h2 className="title_others_pages honoraires_main_title">Comment un avocat facture-t-il ses honoraires ?</h2>
                        <p className="honoraires_intro_text">
                            Les honoraires de l’avocat sont fixés conformément aux règles déontologiques de la profession.
                            Ils sont déterminés notamment en fonction de la nature et de la complexité du dossier,
                            du temps consacré, de l’urgence, ainsi que de l’expérience de l’avocat.
                        </p>

                        <div className="honoraires_points_grid">
                            <div className="honoraires_point_card">
                                <p><strong>Nature et complexité du dossier</strong></p>
                            </div>
                            <div className="honoraires_point_card">
                                <p><strong>Temps consacré à l’affaire</strong></p>
                            </div>
                            <div className="honoraires_point_card">
                                <p><strong>Urgence de la situation</strong></p>
                            </div>
                            <div className="honoraires_point_card">
                                <p><strong>Expérience de l’avocat</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="honoraires_cards_section">
                        <article className="honoraires_display_card">
                            {/* <div className="honoraires_card_badge">Forfait</div> */}
                            <h3>Une facturation au forfait</h3>
                            <p>
                                Une facturation au forfait est plus sécurisante pour le client car elle permet de connaître dès le début de la procédure le montant des honoraires qui seront facturés.
                            </p>
                        </article>

                        <article className="honoraires_display_card">
                            {/* <div className="honoraires_card_badge">Temps passé</div> */}
                            <h3>Une facturation au temps passé</h3>
                            <p>
                                Plus l’avocat passe de temps sur un dossier, plus le montant des honoraires demandés sera élevé. Cette facturation est adaptée aux contentieux les plus complexes.
                            </p>
                            <p>
                                Les modalités de facturation font l’objet d’une convention d’honoraires préalable, garantissant une information claire et loyale du client.
                            </p>
                        </article>

                        <article className="honoraires_display_card honoraires_display_card_highlight">
                            {/* <div className="honoraires_card_badge">Cabinet</div> */}
                            <h3>Et si vous voulez recourir aux services de Sophie Maréchal</h3>
                            <p>Son taux horaire est de <strong>180 euros TTC</strong>.</p>
                            <p>Ses modalités de facturation tiennent compte de la complexité de votre affaire.</p>
                            <p>Le plus souvent, elle vous propose un honoraire au forfait.</p>
                            <p>Elle accepte l’aide juridictionnelle sous réserve d’éligibilité.</p>
                            <p>
                                Une convention d’honoraires sera signée dès le début de la procédure conformément aux règles déontologiques de la profession d’avocat.
                            </p>
                        </article>
                    </div>

                    <div className="honoraires_bottom_cta">
                        <div className="honoraires_bottom_cta_text">
                            <p className="honoraires_intro_eyebrow">Premier échange</p>
                            <h2 className="title_others_pages honoraires_cta_title">Vous souhaitez une estimation d’honoraires ?</h2>
                            <p>
                                Chaque situation est différente. Un premier échange permet d’évaluer votre dossier et de vous orienter vers la modalité de facturation la plus adaptée.
                            </p>
                        </div>

                        <div className="contact_part_others_pages_hono honoraires_contact_links">
                            <div>
                                <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                                </a>
                                <a href="mailto:sophie.marechal@avocat.fr" aria-label="Envoyer un email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                </a>
                                <a href="tel:+0652609138" aria-label="Téléphoner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                </a>
                                <a href="http://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Pour me rencontrer au bureau" aria-label="Adresse du cabinet">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Honoraires