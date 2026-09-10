import styles from "./SeoLandingPage.module.css";
import { buildFaqSchema } from "../../../app/seo";

function ContentBlocks({ blocks }) {
  return blocks.map((block, index) => (
    block.type === "list" ? (
      <ul key={index}>
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    ) : (
      <p key={index}>{block.text}</p>
    )
  ));
}

function SectionTitle({ title }) {
  const parts = title.match(/^(.*?)\s+(\(.*\))$/);

  return (
    <h2 className={styles.sectionTitle}>
      {parts ? (
        <>
          {parts[1]}{" "}
          <span className={styles.titleDetail}>{parts[2]}</span>
        </>
      ) : title}
    </h2>
  );
}

// This template only renders supplied copy, without generated FAQ or CTA text.
export default function DocumentLandingPage({ content, locale = "fr" }) {
  const faqSchema = content.faqItems?.length ? buildFaqSchema(content.faqItems.map((item) => ({
    question: item.question,
    answer: item.blocks.map((block) => block.type === "list" ? block.items.join("\n") : block.text).join("\n\n"),
  }))) : null;

  return (
    <div className={styles.page} lang={locale} data-document-page>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {content.eyebrow ? <p className={styles.eyebrow}>{content.eyebrow}</p> : null}
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
              <SectionTitle title={section.title} />
              <div className={styles.copy}>
                <ContentBlocks blocks={section.blocks} />
              </div>
            </article>
          ))}
        </div>
        {faqSchema ? (
          <div className={styles.faqCard}>
            <h2 className={styles.sectionTitle}>{content.faqTitle}</h2>
            <div className={styles.faqGrid}>
              {content.faqItems.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <div className={styles.copy}>
                    <ContentBlocks blocks={item.blocks} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
    </div>
  );
}
