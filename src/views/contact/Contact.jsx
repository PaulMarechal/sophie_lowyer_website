"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';
import {
  CONSENT_CHANGE_EVENT,
  readConsent,
  updateConsent,
} from '../../lib/consent';
import styles from './Contact.module.css';

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim()
  || 'https://calendly.com/sophie-marechal-avocat/30min';
const calendlyEmbedUrl = calendlyUrl
  ? `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}primary_color=315987`
  : '';

const Contact = ({ locale = 'fr' }) => {
  const isEnglish = locale === 'en';
  const copy = isEnglish ? {
    eyebrow: 'Contact',
    heroTitleStart: 'For every question, a ',
    heroTitleAccent: 'tailored response',
    heroText: 'The firm sees clients by appointment at its Paris office and can also advise remotely, depending on the nature of your enquiry.',
    contactEyebrow: 'Get in touch',
    contactTitle: 'Speak to the firm',
    contactIntro: 'The form is the preferred way to outline your enquiry. You can also contact the firm by email or text message.',
    quickLabel: 'Preferred contact options',
    formAction: 'Complete the form',
    appointmentAction: 'View appointment options',
    emailAction: 'Send an email',
    smsAction: 'Send a text message',
    formEyebrow: 'Form',
    formTitle: 'Send a message',
    success: 'Thank you. Your message has been sent.',
    successNext: 'The firm will get back to you as soon as possible.',
    name: 'Full name *',
    email: 'Email *',
    phone: 'Telephone',
    phoneHelp: 'Required if you would like a reply by text message or telephone.',
    subject: 'Subject of your enquiry *',
    message: 'Message *',
    responseLegend: 'Preferred method of reply',
    responseEmail: 'Email',
    responseSms: 'Text message',
    responsePhone: 'Telephone',
    honeypot: 'Leave this field blank',
    privacyStart: 'The information you enter is sent to the firm through Formspree so that your enquiry can be handled. Please do not include highly sensitive information or confidential documents in this initial enquiry. Read the ',
    privacyLabel: 'Privacy Policy',
    submit: 'Send message',
    submitting: 'Sending…',
    errorStart: 'Something went wrong. Please try again or contact the firm by ',
    detailsEyebrow: 'Contact details',
    detailsTitle: 'Other ways to get in touch',
    office: 'Office visits by appointment',
    bookingEyebrow: 'Appointments',
    bookingTitle: 'Book an appointment with the firm',
    bookingText: 'You can select a time for a 30-minute telephone call. The firm will confirm the appointment arrangements based on the nature of your enquiry.',
    iframeTitle: 'Book an appointment with Sophie Maréchal',
    consentTitle: 'Show the Calendly calendar',
    consentText: 'Calendly is an external service. Its booking widget will load only with your consent. You can then choose a time for a 30-minute telephone call.',
    showCalendar: 'Show calendar',
    fallbackText: 'Online booking will be available soon. In the meantime, you can contact the firm through the form, by email or text message.',
    openCalendly: 'Open Calendly',
    openNewTab: 'Open Calendly in a new tab',
    privacyPath: '/en/privacy',
  } : {
    eyebrow: 'Contact', heroTitleStart: 'À chaque question, une réponse ', heroTitleAccent: 'adaptée',
    heroText: 'Le cabinet vous reçoit sur rendez-vous au cabinet ou vous répond à distance selon la nature de votre demande.',
    contactEyebrow: 'Prendre contact', contactTitle: 'Échanger avec le cabinet',
    contactIntro: 'Le formulaire est le moyen privilégié pour présenter votre demande. Vous pouvez également écrire au cabinet par e-mail ou par SMS.',
    quickLabel: 'Moyens de contact privilégiés', formAction: 'Remplir le formulaire', appointmentAction: 'Voir les rendez-vous', emailAction: 'Envoyer un e-mail', smsAction: 'Envoyer un SMS',
    formEyebrow: 'Formulaire', formTitle: 'Envoyer un message', success: 'Merci, votre message a bien été envoyé.', successNext: 'Le cabinet reviendra vers vous dans les meilleurs délais.',
    name: 'Nom et prénom *', email: 'E-mail *', phone: 'Téléphone', phoneHelp: 'Obligatoire si vous souhaitez une réponse par SMS ou téléphone.', subject: 'Objet de la demande *', message: 'Message *', responseLegend: 'Mode de réponse souhaité', responseEmail: 'E-mail', responseSms: 'SMS', responsePhone: 'Téléphone', honeypot: 'Ne pas remplir ce champ',
    privacyStart: 'Les informations saisies sont acheminées au cabinet par Formspree afin de traiter votre demande. Pour ce premier contact, évitez de transmettre des informations hautement sensibles ou des pièces confidentielles. Consultez la ', privacyLabel: 'politique de confidentialité', submit: 'Envoyer le message', submitting: 'Envoi en cours…', errorStart: 'Une erreur est survenue. Vous pouvez réessayer ou écrire au cabinet par ',
    detailsEyebrow: 'Coordonnées', detailsTitle: 'Autres moyens de contact', office: 'Cabinet sur rendez-vous', bookingEyebrow: 'Rendez-vous', bookingTitle: 'Réserver un créneau avec le cabinet', bookingText: 'Vous pouvez choisir directement un créneau pour un échange téléphonique de 30 minutes. Le cabinet confirmera les modalités du rendez-vous selon la nature de la demande.', iframeTitle: 'Réserver un rendez-vous avec Sophie Maréchal', consentTitle: 'Afficher le calendrier Calendly', consentText: 'Calendly est un service externe. Son module ne sera chargé qu’après votre accord. Vous pourrez ensuite choisir un créneau pour un échange téléphonique de 30 minutes.', showCalendar: 'Afficher le calendrier', fallbackText: 'La réservation en ligne sera disponible prochainement. En attendant, vous pouvez contacter le cabinet via le formulaire, par e-mail ou par SMS.', openCalendly: 'Ouvrir Calendly', openNewTab: 'Ouvrir Calendly dans un nouvel onglet', privacyPath: '/confidentialite',
  };
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferredResponse, setPreferredResponse] = useState('E-mail');
  const [calendlyAllowed, setCalendlyAllowed] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    const syncConsent = (event) => {
      const consent = event?.detail || readConsent();
      setCalendlyAllowed(Boolean(consent?.externalMedia));
    };

    syncConsent();
    window.addEventListener(CONSENT_CHANGE_EVENT, syncConsent);

    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (messageSent || error) {
      resultRef.current?.focus();
    }
  }, [messageSent, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setError(false);

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
        trackEvent('contact_form_success', { placement: 'contact_form' });
        form.reset();
        setPreferredResponse('E-mail');
      } else {
        setError(true);
        trackEvent('contact_form_error', { placement: 'contact_form' });
      }
    } catch {
      setError(true);
      trackEvent('contact_form_error', { placement: 'contact_form' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendlyActivation = () => {
    updateConsent({ externalMedia: true });
    setCalendlyAllowed(true);
    trackEvent('calendly_embed_enabled', { channel: 'calendly', placement: 'contact_booking' });
  };

  return (
    <div className={styles.page} lang={locale}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.heroTitle}>
            {copy.heroTitleStart}<span className={styles.highlight}>{copy.heroTitleAccent}</span>.
          </h1>
          <p className={styles.heroText}>
            {copy.heroText}
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>{copy.contactEyebrow}</p>
          <h2 className={styles.sectionTitle}>{copy.contactTitle}</h2>
          <p className={styles.introText}>{copy.contactIntro}</p>
          <div className={styles.quickActions} aria-label={copy.quickLabel}>
            <a href="#contact-form" className={styles.primaryAction}>{copy.formAction}</a>
            <a href="#rendez-vous" className={styles.secondaryAction}>{copy.appointmentAction}</a>
            <a href="mailto:sophie.marechal@avocat.fr" className={styles.secondaryAction}>{copy.emailAction}</a>
            <a href="sms:+33652609138" className={styles.secondaryAction}>{copy.smsAction}</a>
          </div>
        </div>

        <div className={styles.cardsSection}>
          <div
            className={styles.formPanel}
            id="contact-form"
            tabIndex={-1}
            aria-labelledby="contact-form-title"
          >
            <p className={styles.cardEyebrow}>{copy.formEyebrow}</p>
            <h3 id="contact-form-title" className={styles.formTitle}>{copy.formTitle}</h3>

            {messageSent ? (
              <p ref={resultRef} tabIndex={-1} className={styles.successText} role="status" aria-live="polite">
                {copy.success}
                <br />
                {copy.successNext}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} aria-busy={isSubmitting}>
                <div className={styles.formGrid}>
                  <label className={styles.field} htmlFor="contact-name">
                    <span className={styles.fieldLabel}>{copy.name}</span>
                    <input id="contact-name" type="text" name="nom" autoComplete="name" required />
                  </label>

                  <label className={styles.field} htmlFor="contact-email">
                    <span className={styles.fieldLabel}>{copy.email}</span>
                    <input id="contact-email" type="email" name="email" autoComplete="email" required />
                  </label>

                  <label className={styles.field} htmlFor="contact-phone">
                    <span className={styles.fieldLabel}>
                      {copy.phone} {preferredResponse !== 'E-mail' ? '*' : ''}
                    </span>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="telephone"
                      autoComplete="tel"
                      inputMode="tel"
                      required={preferredResponse !== 'E-mail'}
                      aria-describedby="contact-phone-help"
                    />
                    <span id="contact-phone-help" className={styles.fieldHelp}>
                      {copy.phoneHelp}
                    </span>
                  </label>

                  <label className={styles.field} htmlFor="contact-subject">
                    <span className={styles.fieldLabel}>{copy.subject}</span>
                    <input id="contact-subject" type="text" name="objet" required />
                  </label>

                  <label className={`${styles.field} ${styles.fieldLarge}`} htmlFor="contact-message">
                    <span className={styles.fieldLabel}>{copy.message}</span>
                    <textarea id="contact-message" name="message" rows="6" required />
                  </label>

                  <fieldset className={styles.responseFieldset}>
                    <legend>{copy.responseLegend}</legend>
                    <div className={styles.responseOptions}>
                      <label><input type="radio" name="preference_reponse" value="E-mail" checked={preferredResponse === 'E-mail'} onChange={(event) => setPreferredResponse(event.target.value)} /> {copy.responseEmail}</label>
                      <label><input type="radio" name="preference_reponse" value="SMS" checked={preferredResponse === 'SMS'} onChange={(event) => setPreferredResponse(event.target.value)} /> {copy.responseSms}</label>
                      <label><input type="radio" name="preference_reponse" value="Téléphone" checked={preferredResponse === 'Téléphone'} onChange={(event) => setPreferredResponse(event.target.value)} /> {copy.responsePhone}</label>
                    </div>
                  </fieldset>

                  <label className={styles.honeypot} aria-hidden="true">
                    {copy.honeypot}
                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                  </label>

                  <p className={styles.formNotice}>
                    {copy.privacyStart}<Link href={copy.privacyPath}>{copy.privacyLabel}</Link>.
                  </p>

                  <div className={styles.buttonRow}>
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? copy.submitting : copy.submit}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <p ref={resultRef} tabIndex={-1} className={styles.errorText} role="alert">
                {copy.errorStart}<a href="mailto:sophie.marechal@avocat.fr">email</a> {isEnglish ? 'or by ' : 'ou par '}<a href="sms:+33652609138">{isEnglish ? 'text message' : 'SMS'}</a>.
              </p>
            )}
          </div>

          <article className={styles.infoCard}>
            <p className={styles.cardEyebrowLight}>{copy.detailsEyebrow}</p>
            <h3>{copy.detailsTitle}</h3>
            <div className={styles.infoColumns}>
              <p><strong>{isEnglish ? 'Email' : 'E-mail'}</strong><br /><a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a></p>
              <p><strong>SMS</strong><br /><a href="sms:+33652609138">06 52 60 91 38</a></p>
              <p><strong>{copy.phone}</strong><br /><a href="tel:+33652609138">06 52 60 91 38</a></p>
              <p>
                <strong>{copy.office}</strong><br />
                11 boulevard de Sébastopol<br />
                75001 Paris
              </p>
            </div>
          </article>
        </div>

        <section id="rendez-vous" className={styles.bookingPanel} aria-labelledby="booking-title">
          <div className={styles.bookingHeader}>
            <p className={styles.cardEyebrow}>{copy.bookingEyebrow}</p>
            <h2 id="booking-title" className={styles.bookingTitle}>
              {copy.bookingTitle}
            </h2>
            <p className={styles.bookingText}>
              {copy.bookingText}
            </p>
          </div>

          {calendlyEmbedUrl && calendlyAllowed ? (
            <div className={styles.calendlyFrameWrap}>
              <iframe
                className={styles.calendlyFrame}
                src={calendlyEmbedUrl}
                title={copy.iframeTitle}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : calendlyEmbedUrl ? (
            <div className={styles.bookingConsent}>
              <div>
                <h3>{copy.consentTitle}</h3>
                <p>{copy.consentText}</p>
              </div>
              <button type="button" className={styles.bookingBtn} onClick={handleCalendlyActivation}>
                {copy.showCalendar}
              </button>
            </div>
          ) : (
            <div className={styles.bookingFallback}>
              <p>{copy.fallbackText}</p>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.bookingBtn}>
                {copy.openCalendly}
              </a>
            </div>
          )}

          <div className={styles.bookingLinkRow}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              {copy.openNewTab}
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
