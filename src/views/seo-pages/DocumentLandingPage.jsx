import styles from "./SeoLandingPage.module.css";

// This template only renders supplied copy, without generated FAQ or CTA text.
export default function DocumentLandingPage({ content, locale = "fr" }) {
  return (
    <div className={styles.page} lang={locale} data-document-page>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{content.title}</h1>
          {content.intro.map((paragraph) => (
            <p key={paragraph} className={styles.heroText}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionsGrid}>
          {content.sections.map((section) => (
            <article key={section.title} className={`${styles.sectionCard} ${styles.documentCard}`}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.copy}>
                {section.blocks.map((block, index) => (
                  block.type === "list" ? (
                    <ul key={index}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <p key={index}>{block.text}</p>
                  )
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
