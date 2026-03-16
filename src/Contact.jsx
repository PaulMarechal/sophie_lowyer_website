
import React, { useState } from 'react';

const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/mjkryzyw', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setMessageSent(true);
                e.target.reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }
    };

    return (
        <>
            <div className="contact_page_wrapper">
                <section className="first_section" id="a_propos_section" style={{ background: '#007BEE' }}>
                    <div className="contact_header_content">
                        <h1 className="first_section_h1 contact_first_section_h1">
                            <span>
                                À chaque question, <br />
                                une réponse adaptée.
                            </span>
                            <br/>
                        </h1>
                    </div>
                </section>

                <section className="contact_content_section">
                    <div className="contact_intro_block">
                        {/* <p className="honoraires_intro_eyebrow">Contact</p> */}
                        <h2 className="title_others_pages contact_main_title">Prendre contact avec le cabinet</h2>
                        <p className="contact_intro_text">
                            Sophie Maréchal vous reçoit sur rendez-vous au cabinet et vous accompagne dans vos démarches avec une réponse claire et adaptée à votre situation.
                            Vous pouvez 
                        </p>
                    </div>

                    <div className="contact_cards_section">
                        <article className="contact_display_card contact_display_card_highlight">
                            {/* <div className="honoraires_card_badge">Coordonnées</div> */}
                            <h3>Informations pratiques</h3>
                            <div className="contact_info_columns">
                                <p>Sophie Maréchal vous reçoit sur rendez-vous au :</p>
                                <p>
                                    11, Boulevard de Sébastopol
                                    <br />
                                    75 001 PARIS
                                </p>
                                <p>
                                    Par téléphone :{' '}
                                    <a href="tel:+0652609138">+06 52 60 91 38</a>
                                </p>
                                <p>
                                    Par mail :{' '}
                                    <a href="mailto:sophie.marechal@avocat.fr">
                                        sophie.marechal@avocat.fr
                                    </a>
                                </p>
                            </div>
                        </article>

                        <div className="contact_form_panel">
                            <div className="contact_form_header">
                                {/* <div className="honoraires_card_badge">Formulaire</div> */}
                                {/* <h3>Envoyer un message</h3> */}
                            </div>

                            <div className="contact_form_second_div contact_form_second_div_page">
                                {messageSent ? (
                                    <p id="merci_text">
                                        Merci, <br />je vous recontacte très vite !
                                    </p>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="parent_contact_form contact_parent_contact_form">
                                            <div className="name_contact_div">
                                                <label>
                                                    <input
                                                        type="text"
                                                        name="nom"
                                                        placeholder="Nom Prénom"
                                                    />
                                                </label>
                                            </div>
                                            
                                            <div className="tel_contact_div">
                                                <label>
                                                    <input
                                                        type="tel"
                                                        name="telephone"
                                                        placeholder="Téléphone"
                                                    />
                                                </label>
                                            </div>
                                            <div className="email_contact_div">
                                                <label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                    />
                                                </label>
                                            </div>
                                            <div className="objet_contact_div">
                                                <label>
                                                    <input
                                                        type="text"
                                                        name="objet"
                                                        placeholder="Objet de la demande"
                                                    />
                                                </label>
                                            </div>
                                            <div className="message_contact_div">
                                                <label>
                                                    <textarea
                                                        name="message"
                                                        rows="4"
                                                        placeholder="Message ( facultatif )"
                                                    />
                                                </label>
                                            </div>
                                            <div className="contact_me_btn_div contact_checkbox_div">
                                                <label>
                                                    <input
                                                        className="ui-checkbox"
                                                        type="checkbox"
                                                        name="souhaite_etre_rappele"
                                                        value="Oui"
                                                    />
                                                    Je souhaite être rappelé(e)
                                                </label>
                                            </div>
                                            <div className="button_contact_div">
                                                <button type="submit">Envoyer</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                                {error && (
                                    <p className="contact_error_text">
                                        Une erreur est survenue. Veuillez réessayer plus tard.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
