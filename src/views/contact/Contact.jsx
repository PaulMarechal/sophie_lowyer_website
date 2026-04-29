"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || '';
const calendlyEmbedUrl = calendlyUrl
  ? `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}hide_gdpr_banner=1&primary_color=315987`
  : '';

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
        setError(false);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.heroTitle}>
            À chaque question, une réponse <span className={styles.highlight}>adaptée</span>.
          </h1>
          <p className={styles.heroText}>
            Le cabinet vous reçoit sur rendez-vous au cabinet ou vous répond à distance selon la nature de votre demande.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Prendre contact</p>
          <h2 className={styles.sectionTitle}>Échanger avec le cabinet</h2>
          <p className={styles.introText}>
            Sophie Maréchal vous accompagne dans vos démarches avec une réponse claire, accessible et adaptée à votre situation. Vous pouvez joindre le cabinet par téléphone, e-mail ou via le formulaire ci-dessous.
          </p>
        </div>

        <div className={styles.cardsSection}>
          <article className={styles.infoCard}>
            <p className={styles.cardEyebrowLight}>Coordonnées</p>
            <h3>Informations pratiques</h3>
            <div className={styles.infoColumns}>
              <p>Sophie Maréchal vous reçoit sur rendez-vous au :</p>
              <p>
                11, boulevard de Sébastopol
                <br />
                75001 Paris
              </p>
              <p>
                Téléphone :
                {' '}
                <a href="tel:+0652609138">06 52 60 91 38</a>
              </p>
              <p>
                E-mail :
                {' '}
                <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>
              </p>
            </div>
          </article>

          <div className={styles.formPanel}>
            <p className={styles.cardEyebrow}>Formulaire</p>
            <h3 className={styles.formTitle}>Envoyer un message</h3>

            {messageSent ? (
              <p className={styles.successText}>
                Merci, votre message a bien été envoyé.
                <br />
                Le cabinet vous recontactera très vite.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    <input type="text" name="nom" placeholder="Nom Prénom" />
                  </label>

                  <label className={styles.field}>
                    <input type="tel" name="telephone" placeholder="Téléphone" />
                  </label>

                  <label className={styles.field}>
                    <input type="email" name="email" placeholder="Email" />
                  </label>

                  <label className={styles.field}>
                    <input type="text" name="objet" placeholder="Objet de la demande" />
                  </label>

                  <label className={`${styles.field} ${styles.fieldLarge}`}>
                    <textarea name="message" rows="6" placeholder="Message (facultatif)" />
                  </label>

                  <label className={styles.checkboxRow}>
                    <input type="checkbox" name="souhaite_etre_rappele" value="Oui" />
                    Je souhaite être rappelé(e)
                  </label>

                  <div className={styles.buttonRow}>
                    <button type="submit" className={styles.submitBtn}>Envoyer</button>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <p className={styles.errorText}>
                Une erreur est survenue. Veuillez réessayer plus tard.
              </p>
            )}
          </div>
        </div>

        <section className={styles.bookingPanel} aria-labelledby="booking-title">
          <div className={styles.bookingHeader}>
            <p className={styles.cardEyebrow}>Rendez-vous</p>
            <h2 id="booking-title" className={styles.bookingTitle}>
              Réserver un créneau avec le cabinet
            </h2>
            <p className={styles.bookingText}>
              Vous pouvez choisir directement un créneau disponible pour un premier échange.
              Le cabinet confirmera ensuite les modalités du rendez-vous selon la nature de la demande.
            </p>
          </div>

          {calendlyEmbedUrl ? (
            <div className={styles.calendlyFrameWrap}>
              <iframe
                className={styles.calendlyFrame}
                src={calendlyEmbedUrl}
                title="Réserver un rendez-vous avec Sophie Maréchal"
              />
            </div>
          ) : (
            <div className={styles.bookingFallback}>
              <p>
                La réservation en ligne sera disponible prochainement. En attendant, vous pouvez
                contacter le cabinet par téléphone, e-mail ou via le formulaire.
              </p>
              <a href="mailto:sophie.marechal@avocat.fr" className={styles.bookingBtn}>
                Demander un rendez-vous
              </a>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Contact;
