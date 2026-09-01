import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

const domainCards = [
  {
    label: "Planning permissions & appeals",
    title: "Planning law",
    bg: "/Images/droit-urbanisme-plan.webp",
    href: "/en/planning-law",
    intro: "She advises private individuals and professionals on construction and development projects, as well as disputes relating to planning permission.",
    items: [
      "Building permits (permis de construire)",
      "Development permits (permis d’aménager)",
      "Prior declarations of works (déclarations préalables de travaux)",
      "Challenges to refusals or adverse decisions before the relevant authority and the administrative court",
    ],
  },
  {
    label: "Residence permits & appeals",
    title: "Immigration law",
    bg: "/Images/droit-des-etrangers-passeports.webp",
    href: "/en/immigration-law",
    intro: "She assists foreign nationals with matters relating to their right to reside in France and with appeals against decisions issued by the prefecture.",
    items: [
      "Applications for and renewals of residence permits",
      "Talent residence permits and resident cards, depending on the applicant’s plans and circumstances",
      "Challenges to residence permit refusals and obligations to leave French territory (OQTFs)",
    ],
  },
  {
    label: "Nationality applications & appeals",
    title: "French nationality law",
    bg: "/Images/paris_monument.jpg",
    href: "/en/french-nationality-law",
    intro: "She advises on applications to acquire French nationality, particularly naturalisation by decree.",
    items: [
      "An initial assessment of the procedure and the applicant’s circumstances",
      "Preparing a coherent naturalisation application",
      "Reviewing a refusal, deferral or inadmissibility decision",
    ],
  },
];

const resources = [
  {
    eyebrow: "Public law",
    title: "Public law lawyer in Paris",
    text: "A dedicated overview of public law matters: administrative decisions, appeals, planning law, immigration law and nationality law.",
    href: "/en/public-law-lawyer-paris",
    cta: "Explore public law services",
  },
  {
    eyebrow: "Planning law",
    title: "Planning law lawyer in Paris",
    text: "A focused starting point for planning permissions, building permits, prior declarations of works and appeals.",
    href: "/en/planning-law-lawyer-paris",
    cta: "Explore planning law services",
  },
  {
    eyebrow: "Immigration law",
    title: "Immigration lawyer in Paris",
    text: "Residence permit applications, naturalisation, decisions issued by prefectures and administrative appeals.",
    href: "/en/immigration-lawyer-paris",
    cta: "Explore immigration law services",
  },
  {
    eyebrow: "Immigration law",
    title: "OQTF lawyer in Paris",
    text: "Deadlines, appeal strategy and key points after receiving an order to leave French territory (OQTF).",
    href: "/en/oqtf-lawyer-paris",
    cta: "Read the OQTF guide",
  },
  {
    eyebrow: "Planning law",
    title: "Building permit refusals in Paris",
    text: "Review the grounds for refusal, possible appeals and the value of legal advice before court proceedings.",
    href: "/en/building-permit-refusal-lawyer-paris",
    cta: "Read the building permit guide",
  },
  {
    eyebrow: "Immigration law",
    title: "Talent residence permits and resident cards",
    text: "Identify the appropriate permit, prepare the supporting documents and plan for renewal.",
    href: "/en/talent-passport-resident-card-lawyer-paris",
    cta: "View the residence permit guide",
  },
  {
    eyebrow: "French nationality law",
    title: "French nationality law and naturalisation",
    text: "An up-to-date guide to naturalisation, the 2026 rules, assessment and adverse decisions.",
    href: "/en/french-nationality-law",
    cta: "Understand naturalisation",
  },
  {
    eyebrow: "French nationality law",
    title: "Naturalisation lawyer in Paris",
    text: "A Paris-focused page covering case assessment, requests for additional documents and appeals.",
    href: "/en/naturalisation-lawyer-paris",
    cta: "Explore legal support",
  },
];

const ScaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 20h10M6 6l6-1 6 1M12 3v17M9 12 6 6l-3 6a3 3 0 0 0 6 0M21 12l-3-6-3 6a3 3 0 0 0 6 0" /></svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3v4a1 1 0 0 0 1 1h4M12 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v4.5M16.5 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M18.5 19.5 21 22" /></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m19.5 12.572-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566M12 6 8.707 9.293a1 1 0 0 0 0 1.414l.543.543a1.768 1.768 0 0 0 2.5 0l1-1a3.182 3.182 0 0 1 4.5 0l2.25 2.25M12.5 15.5l2 2M15 13l2 2" /></svg>
);

export default function HomeEn() {
  return (
    <div className={styles.page} lang="en">
      <section className={styles.homepage}>
        <Image className={styles.heroImage} src="/Images/Palais-de-justice-de-Paris.webp" alt="" fill priority sizes="100vw" />
        <div className={styles.heroVeil} />
        <div className={styles.heroFrame}>
          <p className={styles.heroEyebrow}>Public law lawyer in Paris</p>
          <div className={styles.homeText}>
            <h1>Sophie Maréchal<span className={styles.titleBand}>Public law & planning law</span></h1>
            <h2>Lawyer admitted to the Paris Bar · planning, immigration and nationality law</h2>
            <div className={styles.heroActions}>
              <Link href="/en/contact#rendez-vous" className={styles.primaryBtn}>Book an appointment</Link>
              <Link href="/en/practice-areas" className={styles.secondaryBtn}>Explore the firm</Link>
            </div>
          </div>
        </div>
        <div className={styles.scrollDowns}><div className={styles.mousey}><div className={styles.scroller} /></div><p>scroll</p></div>
        <div className={styles.licenseDetails}><p>Licence: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA</a><br />Photographer: <a href="https://delso.photo" target="_blank" rel="noreferrer">Diego Delso</a></p></div>
      </section>

      <section className={styles.introSection} id="a_propos_section">
        <div className={styles.introBackdrop} />
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}><span>A </span><span className={styles.accentMark}>public law</span><span> and planning lawyer admitted to the Paris Bar.</span></h2>
          <p className={styles.introLead}>A rigorous, accessible and committed approach to protecting your interests in dealings with French public authorities, across public law, planning law, immigration law and nationality law.</p>
          <div className={styles.introTags}><span className={styles.accentChip}>Expertise</span><span className={styles.accentChipMuted}>strong values</span><span className={styles.accentChipMuted}>and attentive support</span></div>
          <p className={styles.introContact}><a href="mailto:sophie.marechal@avocat.fr">Contact me</a> or meet me at my Paris office for an initial discussion.</p>
        </div>
        <div className={styles.introVisual}>
          <div className={styles.portraitGlow}><Image className={styles.portraitImage} src="/Images/Sophie_Marechal.webp" alt="Portrait of Sophie Maréchal, lawyer admitted to the Paris Bar" fill sizes="(max-width: 980px) calc(100vw - 4rem), 360px" /></div>
          <div className={styles.cityGlow}><Image className={styles.cityImage} src="/Images/arc_de_triomphe_fourth.jpg" alt="" fill sizes="220px" /></div>
          <div className={styles.cityGlowSoft}><Image className={styles.cityImage} src="/Images/place_etoile_second.jpg" alt="" fill sizes="160px" /></div>
        </div>
      </section>

      <section className={styles.editorialSection}><div className={styles.textCard}>
        <p className={styles.cardEyebrow}>Areas of practice</p><h2><b>A practice focused on public law</b></h2>
        <p>Sophie Maréchal practises primarily in <b>immigration law</b>, <b>planning law</b> and <b>nationality law</b>. She advises private individuals and professionals on administrative procedures and disputes before the administrative courts.</p>
        <p>These areas concern decisions made by public authorities, which are often technical and far-reaching. Her role is to help you understand your rights, safeguard your applications and challenge unjustified decisions.</p>
        <p>The firm assists clients seeking a <b>public law lawyer in Paris</b>, particularly in planning, immigration and nationality law. Sophie Maréchal may also be searched for without the accent as <b>Sophie Marechal</b>.</p>
      </div></section>

      <section className={styles.resourceSection}><div className={styles.resourceWrap}>
        <div className={styles.resourceIntro}><p className={styles.cardEyebrow}>Practical guides</p><h2 className={styles.resourceHeading}>Helpful guides to the most common appeals</h2><p className={styles.resourceLead}>These resources provide further guidance on procedures and appeals in planning, immigration and nationality law.</p></div>
        <div className={styles.resourceGrid}>{resources.map((resource) => <Link key={resource.href} href={resource.href} className={styles.resourceCard}><p className={styles.resourceMeta}>{resource.eyebrow}</p><h3 className={styles.resourceTitle}>{resource.title}</h3><p className={styles.resourceText}>{resource.text}</p><span className={styles.resourceLink}>{resource.cta}</span></Link>)}</div>
      </div></section>

      <section className={styles.domainSection}><div className={styles.domainWrap}>
        <div className={styles.domainIntro}><p className={styles.cardEyebrow}>Core areas of practice</p><h2 className={styles.domainHeading}>Complementary expertise, with the same commitment to clarity and strategy</h2><p className={styles.domainLead}>Every matter receives tailored support, with a practical assessment of the case, its risks and the available avenues of appeal.</p></div>
        <div className={styles.domainOptions} role="list">{domainCards.map((card) => <div key={card.title} role="listitem" className={styles.domainOption}>
          <Image className={styles.domainImage} src={card.bg} alt="" fill sizes="(max-width: 980px) calc(100vw - 2rem), 33vw" /><div className={styles.domainShadow} />
          <div className={styles.domainLabel}><span className={styles.domainBadge}>{card.label}</span><div className={styles.domainTitle}><b>{card.title}</b></div></div>
          <div className={styles.domainReveal}><div className={styles.domainContent}><p>{card.intro}</p><p>Her work includes:</p><ul>{card.items.map((item) => <li key={item}>{item}.</li>)}</ul></div><div className={styles.domainFooter}><Link href={card.href} className={styles.domainLink}>Explore this area</Link></div></div>
        </div>)}</div>
      </div></section>

      <section className={styles.editorialSection}><div className={styles.textCard}><p className={styles.cardEyebrow}>Approach</p><h2><b>Clear, personalised support</b></h2><p>Whatever your circumstances, she offers <b>personalised support</b>, with clear, accessible information and careful management of your case.</p><p>If legal proceedings are unnecessary or unsuitable for your circumstances, she will tell you openly. The aim is always to protect your rights with sound judgement and efficiency.</p></div></section>

      <section className={styles.ctaSection}><div className={styles.ctaGrid}>
        <div className={styles.introBlock}><div className={styles.iconWrapper}><ScaleIcon /></div><div className={styles.hoverBg} /><h3>Wide-ranging expertise</h3><p>Public law, planning, immigration and nationality: expertise grounded in administrative disputes and strategic advice.</p><Link href="/en/practice-areas" className={styles.btn}>Learn more</Link></div>
        <div className={styles.introBlock}><div className={styles.iconWrapper}><DocumentIcon /></div><div className={styles.hoverBg} /><h3>Complete transparency</h3><p>Every situation is assessed carefully, and fees are explained from the outset in a clear written fee agreement.</p><Link href="/en/fees" className={styles.btn}>View fee information</Link></div>
        <div className={styles.introBlock}><div className={styles.iconWrapper}><HeartIcon /></div><div className={styles.hoverBg} /><h3>Personal support</h3><p>A small, approachable practice, available through the contact form, by email or text message, with appointments in person or remotely.</p><Link href="/en/contact" className={styles.btn}>Contact me</Link></div>
      </div></section>

      <section className={styles.contactSection}>
        <p className={styles.contactIntro}>Need advice? Have a question? I am here to listen. Contact me in whichever way suits you best.</p>
        <div className={styles.contactLinks}><div>
          <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
          <a href="mailto:sophie.marechal@avocat.fr" aria-label="Send an email"><span aria-hidden="true">@</span></a>
          <a href="sms:+33652609138" title="Send a text message" aria-label="Send a text message"><span aria-hidden="true">SMS</span></a>
          <a href="https://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" title="Directions to the office" aria-label="Office address"><span aria-hidden="true">⌖</span></a>
        </div></div>
      </section>
    </div>
  );
}

