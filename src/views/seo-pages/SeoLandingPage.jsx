import Link from "next/link";
import Footer from "../../components/layout/Footer";
import styles from "./SeoLandingPage.module.css";

export default function SeoLandingPage({
  eyebrow,
  title,
  intro,
  sections,
  proofTitle = "Pourquoi contacter le cabinet ?",
  proofItems = [],
  relatedTitle = "Pages utiles",
  relatedItems = [],
  faqTitle,
  faqItems,
}) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroText}>{intro}</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionsGrid}>
          {sections.map((section) => (
            <article key={section.title} className={styles.sectionCard}>
              <p className={styles.cardEyebrow}>{section.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.copy}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {proofItems.length > 0 ? (
          <div className={styles.proofCard}>
            <p className={styles.cardEyebrow}>Expertise</p>
            <h2 className={styles.sectionTitle}>{proofTitle}</h2>
            <div className={styles.proofGrid}>
              {proofItems.map((item) => (
                <article key={item.title} className={styles.proofItem}>
                  <h3 className={styles.faqQuestion}>{item.title}</h3>
                  <p className={styles.faqAnswer}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className={styles.faqCard}>
          <p className={styles.cardEyebrow}>Questions fréquentes</p>
          <h2 className={styles.sectionTitle}>{faqTitle}</h2>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>

        {relatedItems.length > 0 ? (
          <div className={styles.relatedCard}>
            <h2 className={styles.relatedTitle}>À lire aussi</h2>
            <div className={styles.relatedGrid}>
              {relatedItems.map((item) => (
                <Link key={item.href} href={item.href} className={styles.relatedLink}>
                  <span className={styles.relatedLabel}>{item.label}</span>
                  <small className={styles.relatedText}>{item.text}</small>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className={styles.ctaCard}>
          <p className={styles.cardEyebrow}>Premier échange</p>
          <h2 className={styles.sectionTitle}>Parler de votre dossier avec le cabinet</h2>
          <p className={styles.ctaText}>
            Un premier échange permet de comprendre la situation, de vérifier les délais
            applicables et d&apos;identifier la stratégie la plus adaptée.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contacter le cabinet
            </Link>
            <Link href="/honoraires" className={styles.secondaryBtn}>
              Consulter les honoraires
            </Link>
          </div>
        </div>
      </section>

      <Footer year={2026} />
    </div>
  );
}
