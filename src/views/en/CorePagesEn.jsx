import Image from "next/image";
import Link from "next/link";
import PhotoCredit from "../../components/media/PhotoCredit";
import { legalAid } from "../../content/en/word-pages";
import aboutStyles from "../a-propos/APropos.module.css";
import practiceStyles from "../competences/Competences.module.css";
import feeStyles from "../honoraires/Honoraires.module.css";

export function AboutEn() {
  const styles = aboutStyles;

  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero} id="a_propos_section">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About the firm</p>
            <h1 className={styles.heroQuote}>A practice built on legal advice that is <span className={styles.highlight}>tailored</span>, <span className={styles.highlight}>clear</span> and <span className={styles.highlight}>pragmatic</span>.</h1>
            <h2 className={styles.heroSubquote}>Protecting your interests with empathy, rigour and determination.</h2>
            <div className={styles.actions}>
              <Link href="/en/contact" className={styles.primaryBtn}>Get in touch</Link>
              <Link href="/en/practice-areas" className={styles.secondaryBtn}>View areas of practice</Link>
            </div>
          </div>
          <div className={styles.portraitCard}>
            <Image className={styles.portraitImage} src="/Images/Sophie_Marechal.webp" alt="Portrait of Sophie Maréchal, lawyer admitted to the Paris Bar" fill priority sizes="(max-width: 900px) calc(100vw - 3rem), 40vw" />
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.articleCard}>
          <p className={styles.cardEyebrow}>Background</p>
          <h2 className={styles.sectionTitle}>Committed expertise</h2>
          <div className={styles.textColumns}>
            <div>
              <p>Sophie Maréchal holds a Master’s degree in Public Affairs from Sciences Po Paris and a Master’s degree in General Public Law from Paris 1 Panthéon-Sorbonne University.</p>
              <p>After passing the competitive entrance examination for the EHESP School of Public Health, she spent seven years as a hospital director at several institutions in Nouvelle-Aquitaine and Hauts-de-France.</p>
            </div>
            <div>
              <p>In 2022, she passed the CRFPA entrance examination for admission to a French regional bar school. From January 2023 to June 2024, she trained at the Paris Bar School (EFB), specialising in public law and immigration law.</p>
              <p>This background now informs a demanding practice centred on strategic advice, administrative litigation and personalised client support.</p>
              <p>Sophie Maréchal’s firm, sometimes searched for without the accent as Sophie Marechal, advises clients in Paris on public law, planning law, immigration law and nationality law.</p>
            </div>
          </div>
        </div>
        <section className={styles.sideCard}>
          <p className={styles.cardEyebrow}>Areas of practice</p>
          <h3 className={styles.sideCardTitle}>The firm’s areas of practice</h3>
          <div className={styles.expertiseList}>
            <Link href="/en/planning-law" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/droit_urbanisme.webp" alt="" fill sizes="(max-width: 900px) 50vw, 33vw" /></div><span>Planning law</span></Link>
            <Link href="/en/immigration-law" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/droit-des-etrangers-passeports.webp" alt="" fill sizes="(max-width: 900px) 50vw, 33vw" /><PhotoCredit language="en" /></div><span>Immigration law</span></Link>
            <Link href="/en/french-nationality-law" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/paris_monument.jpg" alt="" fill sizes="(max-width: 900px) 50vw, 33vw" /></div><span>French nationality law</span></Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export function PracticeAreasEn() {
  const styles = practiceStyles;

  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero}><div className={styles.heroInner}>
        <p className={styles.eyebrow}>Areas of practice</p>
        <h1 className={styles.heroTitle}>A <span className={styles.highlight}>public law</span> practice designed for complex, sensitive and practical matters.</h1>
        <p className={styles.heroText}>The firm supports clients through a clear working method, a straightforward legal strategy and advice tailored to the realities of each situation.</p>
      </div></section>
      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Background</p><h2 className={styles.sectionTitle}>Committed expertise</h2>
          <div className={styles.introColumns}>
            <div className={styles.introColumn}>
              <p>Sophie Maréchal holds a Master’s degree in Public Affairs from Sciences Po Paris and a Master’s degree in General Public Law from Paris 1 Panthéon-Sorbonne University.</p>
              <p>After passing the competitive entrance examination for the EHESP School of Public Health, she spent seven years as a hospital director at several institutions in Nouvelle-Aquitaine and Hauts-de-France.</p>
              <p>Following this particularly rewarding professional experience, she decided to pursue a career as a lawyer.</p>
            </div>
            <div className={styles.introColumn}>
              <p>In 2022, she passed the CRFPA entrance examination. From January 2023 to June 2024, she trained at the Paris Bar School (EFB), specialising in public law and immigration law.</p>
              <p>Alongside this, she studied at the Institut de droit public des affaires (IDPA). Having obtained the French professional qualification for lawyers (CAPA), she was sworn in as a lawyer in 2024.</p>
              <p>She works in French, English and German, and represents clients throughout France.</p>
            </div>
          </div>
        </div>
        <article className={styles.displayCard}>
          <p className={styles.cardEyebrow}>Areas of practice</p><h3 className={styles.displayTitle}>The firm’s core areas of practice</h3>
          <p className={styles.displayText}>The firm works primarily in <strong>public law</strong>, with a rigorous, clear approach tailored to the practical realities of each case.</p>
          <p className={styles.displayText}>For specific information, also see the pages on <Link href="/en/public-law-lawyer-paris">public law services in Paris</Link>, <Link href="/en/oqtf-lawyer-paris">appeals against OQTFs in Paris</Link>, <Link href="/en/talent-passport-resident-card-lawyer-paris">talent residence permits and resident cards</Link> and <Link href="/en/naturalisation-lawyer-paris">naturalisation in Paris</Link>.</p>
          <div className={styles.expertiseGrid}>
            <Link href="/en/planning-law" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/droit_urbanisme.webp" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" /></div><span>Planning law</span></Link>
            <Link href="/en/talent-passport-resident-card-lawyer-paris" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/droit-des-etrangers-passeports.webp" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" /><PhotoCredit language="en" /></div><span>Immigration law</span></Link>
            <Link href="/en/french-nationality-law" className={styles.expertiseItem}><div className={styles.expertiseImage}><Image src="/Images/paris_monument.jpg" alt="" fill sizes="(max-width: 900px) calc(100vw - 4rem), 33vw" /></div><span>French nationality law</span></Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export function FeesEn() {
  const styles = feeStyles;

  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero}><div className={styles.heroInner}><p className={styles.eyebrow}>Fees</p><h1 className={styles.heroTitle}>Fees set with <span className={styles.highlight}>transparency</span> in mind and always explained before any work begins.</h1></div></section>
      <section className={styles.contentSection}>
        <div className={styles.introBlock}>
          <p className={styles.cardEyebrow}>Approach</p><h2 className={styles.sectionTitle}>How does a lawyer charge fees?</h2>
          <p className={styles.introText}>Fees are set in accordance with the profession’s ethical rules. They depend in particular on the nature and complexity of the matter, the time involved, urgency and the lawyer’s experience.</p>
          <div className={styles.pointsGrid}>
            <div className={styles.pointCard}><p><strong>Nature and complexity of the matter</strong></p></div><div className={styles.pointCard}><p><strong>Time spent on the matter</strong></p></div><div className={styles.pointCard}><p><strong>Urgency</strong></p></div><div className={styles.pointCard}><p><strong>The lawyer’s experience</strong></p></div>
          </div>
        </div>
        <div className={styles.cardsSection}>
          <article className={styles.displayCard}><p className={styles.cardEyebrow}>Fixed fee</p><h3>Fixed-fee billing</h3><p>A fixed fee gives clients greater certainty because the total legal fee is known from the outset of the matter.</p><p>Billing arrangements are set out in a written fee agreement in advance, ensuring that the client receives clear and transparent information.</p></article>
          <article className={styles.displayCard}><p className={styles.cardEyebrow}>Time spent</p><h3>Billing based on time spent</h3><p>The more time the lawyer spends on a matter, the higher the fee. This method is suited to the most complex disputes.</p><p>Billing arrangements are set out in a written fee agreement in advance, ensuring that the client receives clear and transparent information.</p></article>
          <article className={`${styles.displayCard} ${styles.highlightCard}`}><p className={styles.cardEyebrowAlt}>The firm</p><h3>The firm’s fee arrangements</h3><p>The hourly rate is <strong>€180 including VAT (TTC)</strong>.</p><p>Fees reflect the complexity of your matter.</p><p>In most cases, a fixed fee is proposed.</p><p data-document-legal-aid>{legalAid}</p></article>
        </div>
        <div className={styles.bottomCta}><div className={styles.bottomCtaText}><p className={styles.cardEyebrow}>Initial discussion</p><h2 className={styles.sectionTitle}>Would you like a fee estimate?</h2><p>Every situation is different. An initial discussion allows the firm to assess your matter and recommend the most suitable fee arrangement.</p><Link href="/en/contact#contact-form" className={styles.estimateBtn}>Request an estimate</Link></div>
          <div className={styles.contactLinks}><a href="mailto:sophie.marechal@avocat.fr" aria-label="Send an email">Email</a><a href="tel:+33652609138" aria-label="Call the firm">Phone</a><a href="https://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Directions to the office" aria-label="Office address">Map</a></div>
        </div>
      </section>
    </div>
  );
}
