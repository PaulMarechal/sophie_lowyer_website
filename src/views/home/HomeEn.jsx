import Image from "next/image";
import Link from "next/link";
import PhotoCredit from "../../components/media/PhotoCredit";
import styles from "./Home.module.css";

const domainCards = [
  {
    label: "Planning permissions & appeals",
    title: "Planning law",
    bg: "/Images/droit-urbanisme-plan.webp",
    href: "/en/planning-law",
    intro: "She advises private individuals and professionals on construction and development projects, as well as disputes relating to planning permission.",
    groups: [
      {
        label: "Planning permissions",
        lines: [
          "Building permits (permis de construire)",
          "Development permits (permis d’aménager)",
          "Prior declarations of works (déclarations préalables de travaux)",
        ],
      },
      {
        label: "If permission is refused",
        text: "The firm challenges refusals and adverse decisions before the relevant authority and the administrative court.",
      },
    ],
  },
  {
    label: "Residence permits & appeals",
    title: "Immigration law",
    bg: "/Images/droit-des-etrangers-passeports.webp",
    photoCredit: true,
    href: "/en/immigration-law",
    intro: "She assists foreign nationals with matters relating to their right to reside in France and with appeals against decisions issued by the prefecture.",
    groups: [
      {
        label: "Residence applications",
        lines: [
          "Applications for and renewals of residence permits",
          "Talent residence permits and resident cards, depending on the applicant’s plans and circumstances",
        ],
      },
      {
        label: "If an adverse decision is issued",
        text: "The firm challenges residence permit refusals and obligations to leave French territory (OQTFs).",
      },
    ],
  },
  {
    label: "Nationality applications & appeals",
    title: "French nationality law",
    bg: "/Images/paris_monument.jpg",
    href: "/en/french-nationality-law",
    intro: "She advises on applications to acquire French nationality, particularly naturalisation by decree.",
    groups: [
      {
        label: "Naturalisation applications",
        lines: [
          "An initial assessment of the procedure and the applicant’s circumstances",
          "Preparing a coherent naturalisation application",
        ],
      },
      {
        label: "If an adverse decision is issued",
        text: "Reviewing a refusal, deferral or inadmissibility decision.",
      },
    ],
  },
];

const resources = [
  {
    eyebrow: "Public law",
    title: "Public law lawyer in Paris",
    text: "Administrative decisions, appeals, planning, immigration and nationality: a structured overview of the firm’s work.",
    href: "/en/public-law-lawyer-paris",
    cta: "Explore",
  },
  {
    eyebrow: "Planning law",
    title: "Planning law lawyer in Paris",
    text: "Planning permissions, building permits, prior declarations of works and appeals.",
    href: "/en/planning-law-lawyer-paris",
    cta: "Explore",
  },
  {
    eyebrow: "Immigration law",
    title: "Immigration lawyer in Paris",
    text: "Residence permit applications, decisions by prefectures, OQTFs and administrative appeals.",
    href: "/en/immigration-lawyer-paris",
    cta: "Explore",
  },
  {
    eyebrow: "Immigration law",
    title: "Appealing an OQTF",
    text: "Understand the deadlines, appeal strategy and key points after receiving an order to leave French territory.",
    href: "/en/oqtf-lawyer-paris",
    cta: "Read the analysis",
  },
  {
    eyebrow: "Planning law",
    title: "Building permit refusals",
    text: "Review the grounds for refusal, possible appeals and the value of legal advice before administrative court proceedings.",
    href: "/en/building-permit-refusal-lawyer-paris",
    cta: "Read the analysis",
  },
  {
    eyebrow: "Immigration law",
    title: "Talent residence permits and resident cards",
    text: "Identify the appropriate permit, prepare the supporting documents and plan for renewal.",
    href: "/en/talent-passport-resident-card-lawyer-paris",
    cta: "Explore",
  },
  {
    eyebrow: "French nationality law",
    title: "French nationality and naturalisation",
    text: "Understand French naturalisation, assessment of the application and adverse decisions.",
    href: "/en/french-nationality-law",
    cta: "Explore",
  },
  {
    eyebrow: "French nationality law",
    title: "Naturalisation support in Paris",
    text: "Assess the application, respond to requests for additional documents and consider an appeal against an adverse decision.",
    href: "/en/naturalisation-lawyer-paris",
    cta: "Read the analysis",
  },
];

const featuredResourceHrefs = new Set([
  "/en/oqtf-lawyer-paris",
  "/en/building-permit-refusal-lawyer-paris",
  "/en/naturalisation-lawyer-paris",
]);

const featuredResources = resources.filter(({ href }) => featuredResourceHrefs.has(href));
const additionalResources = resources.filter(({ href }) => !featuredResourceHrefs.has(href));

const methodSteps = [
  {
    title: "Assess",
    text: "Identify the decision, deadlines, relevant documents and the key points in the matter.",
  },
  {
    title: "Define a strategy",
    text: "Explain the available options, risks, timetable and fees before taking action.",
  },
  {
    title: "Act and follow through",
    text: "Implement the agreed approach, protect your interests and provide direct case follow-up.",
  },
];

export default function HomeEn() {
  return (
    <div className={styles.page} lang="en">
      <section className={styles.homepage} aria-labelledby="home-title-en">
        <Image
          className={styles.heroImage}
          src="/Images/Palais-de-justice-de-Paris.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroVeil} />
        <div className={styles.heroFrame}>
          <div className={styles.homeText}>
            <p className={styles.heroEyebrow}>French public law lawyer in Paris</p>
            <h1 id="home-title-en">
              Sophie Maréchal
              <span className={styles.titleBand}>Public law & planning law</span>
            </h1>
            <p className={styles.heroScope}>Lawyer admitted to the Paris Bar · Planning, immigration and French civil service law</p>
            <p className={styles.heroSummary}>
              Strategic advice and representation in dealings with French public authorities.
            </p>
            <div className={styles.heroActions}>
              <Link href="/en/contact#contact-form" className={styles.primaryBtn}>Describe your matter</Link>
              <Link href="/en/contact#rendez-vous" className={styles.secondaryBtn}>Book an appointment</Link>
            </div>
          </div>
        </div>

        <a className={styles.heroScroll} href="#cabinet">
          <span>Discover the firm</span>
          <span aria-hidden="true">↓</span>
        </a>

        <p className={styles.licenseDetails}>
          Photo: <a href="https://delso.photo" target="_blank" rel="noreferrer">Diego Delso</a>
          <span aria-hidden="true"> · </span>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA</a>
        </p>
      </section>

      <section className={styles.proofStrip} aria-label="Professional background">
        <div className={styles.proofNarrative}>
          <p className={styles.proofStatement}>
            Admitted to the <span>Paris Bar</span>, Sophie Maréchal studied at Sciences Po Paris and Paris 1 Panthéon-Sorbonne.
          </p>
          <p className={styles.proofMeta}>
            Seven years as a hospital director <span aria-hidden="true">·</span> French, English and German.
          </p>
        </div>
      </section>

      <section className={styles.profileSection} id="cabinet">
        <div className={styles.profileGrid}>
          <div className={styles.profileContent}>
            <p className={styles.sectionMarker}>The firm</p>
            <h2 className={styles.profileTitle}>
              A <span>public law</span> and planning lawyer admitted to the Paris Bar.
            </h2>
            <p className={styles.profileLead}>
              A rigorous, accessible and committed approach to protecting your interests in dealings with French public authorities, across public law, planning law, immigration law and nationality law.
            </p>
            <p className={styles.profileText}>
              Every matter receives a structured assessment, a clearly explained strategy and direct follow-up, both in advisory work and before the French administrative courts.
            </p>
            <div className={styles.profileLinks}>
              <Link href="/en/about" className={styles.textLink}>View Sophie Maréchal’s profile <span aria-hidden="true">↗</span></Link>
              <a href="mailto:sophie.marechal@avocat.fr" className={styles.quietLink}>Email the firm</a>
            </div>
          </div>

          <figure className={styles.portraitFigure}>
            <div className={styles.portraitFrame}>
              <Image
                className={styles.portraitImage}
                src="/Images/Sophie_Marechal.webp"
                alt="Portrait of Sophie Maréchal, lawyer admitted to the Paris Bar"
                fill
                sizes="(max-width: 900px) calc(100vw - 3rem), 440px"
              />
            </div>
            <figcaption>Sophie Maréchal · Lawyer admitted to the Paris Bar</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.practiceSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionMarker}>Areas of practice</p>
          <div>
            <h2 className={styles.sectionTitle}>Three areas, with the same commitment to <span className={styles.sectionHighlight}>clarity and strategy.</span></h2>
            <p className={styles.sectionLead}>
              The firm works primarily in planning, immigration and French nationality law. Each of these areas involves administrative decisions that are often technical and far-reaching.
            </p>
          </div>
        </div>

        <div className={styles.domainOptions}>
          {domainCards.map((card) => (
            <article key={card.href} className={styles.domainOption}>
              <div className={styles.domainMedia}>
                <Image
                  className={styles.domainImage}
                  src={card.bg}
                  alt=""
                  fill
                  sizes="(max-width: 900px) calc(100vw - 3rem), 50vw"
                />
                {card.photoCredit && <PhotoCredit language="en" />}
              </div>
              <div className={styles.domainBody}>
                <p className={styles.domainBadge}>{card.label}</p>
                <h3 className={styles.domainTitle}>{card.title}</h3>
                <p className={styles.domainIntro}>{card.intro}</p>
                <dl className={styles.domainScope}>
                  {card.groups.map((group) => (
                    <div className={styles.scopeGroup} key={group.label}>
                      <dt>{group.label}</dt>
                      <dd className={styles.scopeText}>
                        {group.lines ? (
                          <ul className={styles.scopeLines} role="list">
                            {group.lines.map((line) => <li key={line}>{line}</li>)}
                          </ul>
                        ) : group.text}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link href={card.href} className={styles.domainLink}>
                  Explore this area <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.approachInner}>
          <div className={styles.approachIntro}>
            <p className={styles.sectionMarker}>Approach</p>
            <h2 className={styles.sectionTitle}><span className={styles.sectionHighlight}>Clear, personalised</span> support.</h2>
            <p className={styles.approachLead}>
              If legal proceedings are unnecessary or unsuitable for your circumstances, the firm will tell you openly. The aim is always to protect your rights with sound judgement and efficiency.
            </p>
          </div>
          <ol className={styles.methodGrid}>
            {methodSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.approachLinks}>
            <Link href="/en/practice-areas">View all practice areas <span aria-hidden="true">↗</span></Link>
            <Link href="/en/fees">Understand the fee structure <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.resourceSection}>
        <div className={styles.resourceWrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionMarker}>Insights</p>
            <div>
              <h2 className={styles.sectionTitle}><span className={styles.sectionHighlight}>Practical guidance</span> to understand procedures and appeals.</h2>
              <p className={styles.sectionLead}>
                A selection of resources devoted to recurring issues in planning, immigration and French nationality law.
              </p>
            </div>
          </div>

          <div className={styles.resourceGrid}>
            {featuredResources.map((resource) => (
              <Link key={resource.href} href={resource.href} className={styles.resourceCard}>
                <p className={styles.resourceMeta}>{resource.eyebrow}</p>
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceText}>{resource.text}</p>
                <span className={styles.resourceLink}>{resource.cta} <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>

          <div className={styles.additionalResources}>
            <h3 className={styles.additionalLabel}>Further reading</h3>
            <ul className={styles.resourceIndex}>
              {additionalResources.map((resource) => (
                <li key={resource.href}>
                  <Link href={resource.href}>
                    <span className={styles.resourceIndexMeta}>{resource.eyebrow}</span>
                    <div className={styles.resourceIndexCopy}>
                      <h4 className={styles.resourceIndexTitle}>{resource.title}</h4>
                      <p className={styles.resourceIndexExcerpt}>{resource.text}</p>
                    </div>
                    <span className={styles.resourceIndexArrow} aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactShell}>
          <p className={styles.sectionMarker}>Contact</p>
          <div className={styles.contactGrid}>
            <div>
              <h2>Your situation deserves a <span className={styles.contactHighlight}>precise assessment.</span></h2>
              <p>Briefly describe your matter using the form or choose an appointment time directly.</p>
            </div>
            <div className={styles.contactActions} role="group" aria-label="Ways to contact the firm">
              <Link href="/en/contact#contact-form" className={styles.contactPrimary}>
                <span className={styles.contactActionText}>
                  <small>Contact form</small>
                  <strong>Describe your matter</strong>
                </span>
                <span className={styles.contactActionArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/en/contact#rendez-vous" className={styles.contactSecondary}>
                <span className={styles.contactActionText}>
                  <small>30-minute telephone appointment</small>
                  <strong>Book an appointment</strong>
                </span>
                <span className={styles.contactActionArrow} aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className={styles.contactMethods} role="group" aria-label="Firm contact details">
            <a href="mailto:sophie.marechal@avocat.fr">
              <span className={styles.contactMethodLabel}>Email</span>
              <span className={styles.contactMethodValue}>sophie.marechal@avocat.fr</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="sms:+33652609138">
              <span className={styles.contactMethodLabel}>Text message</span>
              <span className={styles.contactMethodValue}>+33 6 52 60 91 38</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" aria-label="View Sophie Maréchal’s LinkedIn profile in a new tab">
              <span className={styles.contactMethodLabel}>LinkedIn</span>
              <span className={styles.contactMethodValue}>Sophie Maréchal</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="https://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" aria-label="Open the firm’s address in Google Maps in a new tab">
              <span className={styles.contactMethodLabel}>Office</span>
              <span className={styles.contactMethodValue}>11 boulevard de Sébastopol, 75001 Paris</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
