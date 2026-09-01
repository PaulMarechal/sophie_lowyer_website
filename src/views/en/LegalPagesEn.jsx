import Link from "next/link";
import CookieSettingsButton from "../../components/privacy/CookieSettingsButton";
import privacyStyles from "../confidentialite/Confidentialite.module.css";
import legalStyles from "../mentions-legales/MentionsLegales.module.css";
import cookieStyles from "../cookies/CookiePolicy.module.css";

const privacySections = [
  {
    title: "The firm’s commitment",
    eyebrow: "Principle",
    content: <><p>Sophie Maréchal EI law firm is committed to protecting the confidentiality of its users’ personal data in accordance with the GDPR and other applicable legislation.</p><p>This policy sets out the principal rules governing the processing and retention of data, as well as the exercise of rights relating to data collected in connection with the firm’s activities.</p></>,
  },
  {
    title: "Purposes of processing",
    eyebrow: "Uses",
    featured: true,
    content: <><p>The processing activities carried out are based, in particular, on the legitimate interests pursued by the firm.</p><ul><li>Business development and management of relationships with clients and prospective clients</li><li>Organisation of, registration for and invitations to firm events</li><li>Taking steps prior to entering into a contract or performing a contract</li><li>Processing, monitoring and management of enquiries and matters</li><li>Drafting legal documents on behalf of clients</li><li>Compliance with legal and regulatory obligations</li><li>Prevention of money laundering and terrorist financing, and the fight against corruption</li><li>Billing and accounting</li></ul></>,
  },
  {
    title: "Retention periods",
    eyebrow: "Retention",
    content: <><p>Data is retained for as long as necessary for the purposes for which it was collected and in accordance with applicable regulations.</p><p>Client data is retained for the duration of the contractual relationship, extended by three years for relationship management and business development purposes, subject to statutory retention requirements and applicable limitation periods.</p><p>For the purposes of preventing money laundering and terrorist financing, data is retained for five years after the end of the relationship.</p><p>For accounting purposes, data is retained for ten years from the end of the relevant financial year.</p><p>Prospective client data is retained for three years where the person has not participated in or registered for an event.</p></>,
  },
  {
    title: "Data subjects’ rights",
    eyebrow: "Rights",
    content: <><p>Data subjects have, in particular, the right to object, access, rectification, restriction, data portability and erasure, subject to the conditions laid down by the GDPR.</p><p>These rights may be exercised at any time by contacting the firm directly.</p><p>Contact email: <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a></p></>,
  },
  {
    title: "Changes to this policy",
    eyebrow: "Updates",
    content: <p>If this privacy policy is amended, the firm undertakes to inform users by any appropriate means.</p>,
  },
];

const legalSections = [
  {
    title: "Business identity",
    eyebrow: "Firm",
    content: <><p>Sophie Maréchal EI</p><p>CDAAP, 11 boulevard de Sebastopol, 75001 Paris</p><p>SIRET number: 937 495 570 00023</p></>,
  },
  {
    title: "Contact",
    eyebrow: "Contact details",
    content: <><p>Email address: <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a></p><p>Telephone: <a href="tel:+33652609138">06 52 60 91 38</a></p></>,
  },
  {
    title: "Website",
    eyebrow: "Publication",
    featured: true,
    content: <><p>This website is published by Sophie Maréchal EI for information purposes and does not constitute a contractual offer.</p><p>Sophie Maréchal EI endeavours to provide reliable and up-to-date information but cannot guarantee that the website will be free from errors, omissions or temporary unavailability.</p><p>Publication director: Sophie Maréchal.</p><p>In accordance with Articles L.612-1 et seq. of the French Consumer Code, users may refer a matter free of charge to the consumer ombudsman of the Conseil national des barreaux: 180 boulevard Haussmann, 75008 Paris.</p></>,
  },
  {
    title: "Protection of personal data",
    eyebrow: "Data",
    content: <><p>Personal data may be processed for the management of clients, prospective clients, contact enquiries, accounting obligations and requests to exercise data protection rights.</p><p>The data is intended solely for the lawyer practising within Sophie Maréchal EI and is not accessible to unauthorised third parties.</p><p>In accordance with the French Data Protection Act, as amended, and the GDPR, each user has, in particular, the right of access, rectification, objection, erasure and restriction.</p><p>These rights may be exercised at the following address: <a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a></p></>,
  },
  {
    title: "Hosting and deployment",
    eyebrow: "Technical",
    content: <><p><strong>Hosting infrastructure:</strong> OVH SAS, eu-west-gra region (Gravelines, France).</p><p>OVH SAS, 424 761 419 RCS Lille Métropole</p><p>2 rue Kellermann, 59100 Roubaix, France</p><p>Telephone: +33 9 72 10 10 07</p><p><strong>Deployment and content delivery platform:</strong> Vercel Inc. The website is deployed through Vercel and distributed via its content delivery network.</p><p>440 N Barranca Avenue #4133, Covina, CA 91723, United States</p></>,
  },
  {
    title: "Credits",
    eyebrow: "Creation",
    content: <><p>Graphic design and development: <a href="https://devxr.fr" target="_blank" rel="noreferrer">DevXR</a></p><p>Sole trader</p><p>SIRET number: 931 264 592 00011</p><p>Registered office: 19 rue Bellier-Dedouvre, 75013 Paris</p></>,
  },
];

function ContactFooter({ styles, title, text }) {
  return (
    <div className={styles.bottomCta}>
      <div className={styles.bottomCtaText}>
        <p className={styles.cardEyebrow}>Contact</p><h2 className={styles.sectionTitle}>{title}</h2><p>{text}</p><p>11 boulevard de Sebastopol, 75001 Paris</p><p><a href="mailto:sophie.marechal@avocat.fr">sophie.marechal@avocat.fr</a>{" · "}<a href="tel:+33652609138">06 52 60 91 38</a></p>
      </div>
      <div className={styles.contactLinks}><a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="mailto:sophie.marechal@avocat.fr" aria-label="Send an email">@</a><a href="tel:+33652609138" aria-label="Call the firm">☎</a><a href="https://maps.google.com/?q=11 Boulevard de Sebastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" aria-label="Firm address">⌖</a></div>
    </div>
  );
}

function InformationPage({ styles, heroEyebrow, heroTitle, heroText, introEyebrow, introTitle, introText, sections, ctaTitle, ctaText }) {
  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero}><div className={styles.heroInner}><p className={styles.eyebrow}>{heroEyebrow}</p><h1 className={styles.heroTitle}>{heroTitle}</h1><p className={styles.heroText}>{heroText}</p></div></section>
      <section className={styles.contentSection}>
        <div className={styles.introBlock}><p className={styles.cardEyebrow}>{introEyebrow}</p><h2 className={styles.sectionTitle}>{introTitle}</h2><p className={styles.introText}>{introText}</p></div>
        <div className={styles.cardsSection}>{sections.map((section) => <article key={section.title} className={`${styles.displayCard} ${section.featured ? styles.highlightCard : ""}`}><p className={section.featured ? styles.cardEyebrowAlt : styles.cardEyebrow}>{section.eyebrow}</p><h3>{section.title}</h3><div className={styles.cardContent}>{section.content}</div></article>)}</div>
        <ContactFooter styles={styles} title={ctaTitle} text={ctaText} />
      </section>
    </div>
  );
}

export function PrivacyEn() {
  return <InformationPage styles={privacyStyles} heroEyebrow="Privacy" heroTitle="A privacy policy presented in the same visual style as the rest of the website." heroText="Personal data protection, purposes of processing, retention periods and the exercise of data protection rights." introEyebrow="Privacy policy" introTitle="Processing of personal data" introText="The firm sets out here the principles governing the collection, use and retention of personal data in connection with its activities." sections={privacySections} ctaTitle="Do you have a question about your data?" ctaText="For any enquiry concerning the processing of your personal data, you may contact the firm directly." />;
}

export function LegalNoticeEn() {
  return <InformationPage styles={legalStyles} heroEyebrow="Legal notice" heroTitle="The firm’s legal information, presented in the same visual style as the rest of the website." heroText="Identity, contact details, website publishing, hosting and personal data." introEyebrow="General information" introTitle="Website legal notice" introText="This page brings together the mandatory information concerning the firm’s identity, the publication of the website and the processing of personal data." sections={legalSections} ctaTitle="Clear information and useful contact details" ctaText="For any question concerning the website, the firm or the processing of personal data, the relevant direct contact details are provided here." />;
}

const services = [
  { title: "Necessary preferences", status: "Always active", text: "Your browser stores your choices locally for six months. This information is not used to track you and remains on your device." },
  { title: "Google Analytics", status: "With your consent", text: "Google Analytics measures page views and certain generic interactions. Form content, names, email addresses and telephone numbers are never sent through Analytics events. Advertising signals and personalisation are disabled on this website." },
  { title: "Calendly", status: "With your consent", text: "The Calendly module is not loaded on the Contact page until you provide your consent or expressly request that the calendar be displayed. Calendly then applies its own privacy rules." },
  { title: "Contact form", status: "When submitted", text: "When you submit the form, the information entered is sent to the firm through Formspree. This service is contacted only when the form is submitted, and the contents of the message are not used for audience measurement." },
];

export function CookieSettingsEn() {
  const styles = cookieStyles;
  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero}><div className={styles.heroInner}><p className={styles.eyebrow}>Privacy</p><h1 className={styles.heroTitle}>Cookie and external service settings</h1><p className={styles.heroText}>The website limits its use of external services and allows you to choose which services may be loaded in your browser.</p></div></section>
      <section className={styles.contentSection}>
        <div className={styles.introBlock}><p className={styles.cardEyebrow}>Your choices</p><h2>Change your preferences at any time</h2><p>Accepting or refusing audience measurement does not prevent you from browsing the website or using the contact form. The calendar may also be opened directly in a new tab.</p><CookieSettingsButton className={styles.settingsButton} label="Manage my preferences" /></div>
        <div className={styles.cards}>{services.map((service) => <article key={service.title} className={styles.card}><p className={styles.status}>{service.status}</p><h2>{service.title}</h2><p>{service.text}</p></article>)}</div>
        <div className={styles.linksBlock}><h2>Find out more</h2><p>You may read the <Link href="/en/privacy">privacy policy</Link>, the <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>, the <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Calendly Privacy Policy</a> and the <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree Privacy Policy</a>.</p><p className={styles.update}>Last updated: 1 September 2026.</p></div>
      </section>
    </div>
  );
}
