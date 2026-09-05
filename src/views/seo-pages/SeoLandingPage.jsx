import Link from "next/link";
import styles from "./SeoLandingPage.module.css";

export default function SeoLandingPage({
  children,
  locale = "fr",
  breadcrumbs = [],
  eyebrow,
  title,
  intro,
  notice,
  sections,
  proofTitle,
  proofItems = [],
  relatedTitle,
  relatedItems = [],
  faqTitle,
  faqItems,
  updatedAt,
  sourceItems = [],
  ctaTitle,
  ctaText,
}) {
  const isEnglish = locale === "en";
  const ui = isEnglish
    ? {
        breadcrumb: "Breadcrumb",
        noticeLabel: "Important information",
        noticeTitle: "Please note",
        expertise: "Expertise",
        faq: "Frequently asked questions",
        sourcesLabel: "Last review and official sources",
        reliability: "Reliability of the information",
        verified: "Verified legal information",
        reviewed: "Last reviewed:",
        consultation: "Initial consultation",
        contact: "Contact the firm",
        fees: "View fees",
        proofTitle: "Why contact the firm?",
        relatedTitle: "Useful pages",
        ctaTitle: "Discuss your case with the firm",
        ctaText: "An initial consultation helps us understand your situation, check the applicable deadlines and identify the most appropriate strategy.",
        contactPath: "/en/contact",
        feesPath: "/en/fees",
      }
    : {
        breadcrumb: "Fil d’Ariane",
        noticeLabel: "Information importante",
        noticeTitle: "À savoir",
        expertise: "Expertise",
        faq: "Questions fréquentes",
        sourcesLabel: "Mise à jour et sources officielles",
        reliability: "Fiabilité des informations",
        verified: "Informations juridiques vérifiées",
        reviewed: "Dernière vérification :",
        consultation: "Premier échange",
        contact: "Contacter le cabinet",
        fees: "Consulter les honoraires",
        proofTitle: "Pourquoi contacter le cabinet ?",
        relatedTitle: "Pages utiles",
        ctaTitle: "Parler de votre dossier avec le cabinet",
        ctaText: "Un premier échange permet de comprendre la situation, de vérifier les délais applicables et d'identifier la stratégie la plus adaptée.",
        contactPath: "/contact",
        feesPath: "/honoraires",
      };

  const resolvedProofTitle = proofTitle ?? ui.proofTitle;
  const resolvedRelatedTitle = relatedTitle ?? ui.relatedTitle;
  const resolvedCtaTitle = ctaTitle ?? ui.ctaTitle;
  const resolvedCtaText = ctaText ?? ui.ctaText;

  return (
    <div className={styles.page} lang={locale}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {breadcrumbs.length > 0 ? (
            <nav className={styles.breadcrumbs} aria-label={ui.breadcrumb}>
              <ol>
                {breadcrumbs.map((item, index) => {
                  const isCurrent = index === breadcrumbs.length - 1;

                  return (
                    <li key={`${item.label}-${item.href ?? "current"}`}>
                      {item.href && !isCurrent ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        <span aria-current={isCurrent ? "page" : undefined}>{item.label}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroText}>{intro}</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        {notice ? (
          <aside className={styles.noticeCard} aria-label={ui.noticeLabel}>
            <strong>{ui.noticeTitle}</strong>
            <p>{notice}</p>
          </aside>
        ) : null}

        <div className={styles.sectionsGrid}>
          {children}
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
            <p className={styles.cardEyebrow}>{ui.expertise}</p>
            <h2 className={styles.sectionTitle}>{resolvedProofTitle}</h2>
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
          <p className={styles.cardEyebrow}>{ui.faq}</p>
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

        {updatedAt || sourceItems.length > 0 ? (
          <aside className={styles.sourcesCard} aria-label={ui.sourcesLabel}>
            <div className={styles.sourcesIntro}>
              <p className={styles.cardEyebrow}>{ui.reliability}</p>
              <h2 className={styles.sourcesTitle}>{ui.verified}</h2>
              {updatedAt ? (
                <p className={styles.updatedAt}>{ui.reviewed} {updatedAt}</p>
              ) : null}
            </div>
            {sourceItems.length > 0 ? (
              <ul className={styles.sourceList}>
                {sourceItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>
        ) : null}

        {relatedItems.length > 0 ? (
          <div className={styles.relatedCard}>
            <h2 className={styles.relatedTitle}>{resolvedRelatedTitle}</h2>
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
          <p className={styles.cardEyebrow}>{ui.consultation}</p>
          <h2 className={styles.sectionTitle}>{resolvedCtaTitle}</h2>
          <p className={styles.ctaText}>{resolvedCtaText}</p>
          <div className={styles.actions}>
            <Link href={ui.contactPath} className={styles.primaryBtn}>
              {ui.contact}
            </Link>
            <Link href={ui.feesPath} className={styles.secondaryBtn}>
              {ui.fees}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
