import Image from "next/image";
import Link from "next/link";
import PhotoCredit from "../../components/media/PhotoCredit";
import styles from "./Home.module.css";

const domainCards = [
  {
    label: "Autorisations & recours",
    title: "Droit de l’urbanisme",
    bg: "/Images/droit-urbanisme-plan.webp",
    href: "/droit-de-urbanisme",
    intro: "Elle accompagne les particuliers et les professionnels dans leurs projets de construction et d’aménagement, ainsi que dans les litiges liés aux autorisations d’urbanisme.",
    groups: [
      {
        label: "Autorisations d’urbanisme",
        lines: [
          "Permis de construire",
          "Permis d’aménager",
          "Déclarations préalables de travaux",
        ],
      },
      {
        label: "En cas de refus",
        text: "Le cabinet intervient dans la contestation des décisions défavorables devant l’administration et le tribunal administratif.",
      },
    ],
  },
  {
    label: "Séjour & recours",
    title: "Droit des étrangers",
    bg: "/Images/droit-des-etrangers-passeports.webp",
    photoCredit: true,
    href: "/droit-des-etrangers",
    intro: "Elle assiste les personnes étrangères dans leurs démarches liées au séjour en France et dans leurs recours contre les décisions préfectorales.",
    groups: [
      {
        label: "Démarches de séjour",
        lines: [
          "Demandes et renouvellements de titre de séjour",
          "Cartes talent et cartes de résident, selon le projet et la situation",
        ],
      },
      {
        label: "En cas de décision défavorable",
        text: "Le cabinet intervient dans la contestation des refus de titre et des OQTF.",
      },
    ],
  },
  {
    label: "Acquisition & recours",
    title: "Droit de la nationalité",
    bg: "/Images/paris_monument.jpg",
    href: "/droit-de-la-nationalite",
    intro: "Elle accompagne les démarches relatives à l’acquisition de la nationalité française, en particulier la naturalisation par décret.",
    groups: [
      {
        label: "Demande de naturalisation",
        lines: [
          "Analyse préalable de la procédure et de la situation",
          "Préparation d’un dossier de naturalisation cohérent",
        ],
      },
      {
        label: "En cas de décision défavorable",
        text: "Analyse d’un rejet, d’un ajournement ou d’une irrecevabilité.",
      },
    ],
  },
];

const resources = [
  {
    eyebrow: "Droit public",
    title: "Avocate en droit public à Paris",
    text: "Décisions administratives, recours, urbanisme, étrangers et nationalité : une présentation structurée des interventions du cabinet.",
    href: "/avocate-droit-public-paris",
    cta: "Découvrir",
  },
  {
    eyebrow: "Droit de l’urbanisme",
    title: "Avocate en droit de l’urbanisme à Paris",
    text: "Autorisations d’urbanisme, permis de construire, déclarations préalables et recours.",
    href: "/avocate-droit-urbanisme-paris",
    cta: "Découvrir",
  },
  {
    eyebrow: "Droit des étrangers",
    title: "Avocate en droit des étrangers à Paris",
    text: "Titres de séjour, décisions préfectorales, OQTF et recours administratifs.",
    href: "/avocate-droit-des-etrangers-paris",
    cta: "Découvrir",
  },
  {
    eyebrow: "Droit des étrangers",
    title: "Recours contre une OQTF",
    text: "Comprendre les délais, la stratégie de recours et les points de vigilance après une obligation de quitter le territoire français.",
    href: "/avocat-oqtf-paris",
    cta: "Lire l’analyse",
  },
  {
    eyebrow: "Droit de l’urbanisme",
    title: "Refus de permis de construire",
    text: "Analyser les motifs de refus, les recours possibles et l’intérêt d’un accompagnement avant le tribunal administratif.",
    href: "/avocat-refus-permis-construire-paris",
    cta: "Lire l’analyse",
  },
  {
    eyebrow: "Droit des étrangers",
    title: "Carte talent et carte de résident",
    text: "Distinguer les titres, vérifier le fondement d’une demande, préparer les pièces et anticiper un renouvellement.",
    href: "/avocat-carte-talent-carte-resident-paris",
    cta: "Découvrir",
  },
  {
    eyebrow: "Droit de la nationalité",
    title: "Nationalité française et naturalisation",
    text: "Comprendre la naturalisation française, l’instruction de la demande et les décisions défavorables.",
    href: "/droit-de-la-nationalite",
    cta: "Découvrir",
  },
  {
    eyebrow: "Droit de la nationalité",
    title: "Accompagnement en naturalisation à Paris",
    text: "Évaluer le dossier, répondre aux demandes de complément et envisager un recours contre une décision défavorable.",
    href: "/avocat-naturalisation-paris",
    cta: "Lire l’analyse",
  },
];

const featuredResourceHrefs = new Set([
  "/avocat-oqtf-paris",
  "/avocat-refus-permis-construire-paris",
  "/avocat-naturalisation-paris",
]);

const featuredResources = resources.filter(({ href }) => featuredResourceHrefs.has(href));
const additionalResources = resources.filter(({ href }) => !featuredResourceHrefs.has(href));

const methodSteps = [
  {
    title: "Analyser",
    text: "Identifier la décision, les délais, les pièces utiles et les points déterminants du dossier.",
  },
  {
    title: "Définir une stratégie",
    text: "Présenter les options possibles, leurs risques, leur calendrier et les honoraires avant d’agir.",
  },
  {
    title: "Agir et suivre",
    text: "Mettre en œuvre la voie retenue, défendre vos intérêts et assurer un suivi direct du dossier.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.homepage} aria-labelledby="home-title">
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
            <p className={styles.heroEyebrow}>Avocate en droit public à Paris</p>
            <h1 id="home-title">
              Sophie Maréchal
              <span className={styles.titleBand}>Droit public & droit de l’urbanisme</span>
            </h1>
            <p className={styles.heroScope}>Avocate inscrite au Barreau de Paris · Urbanisme, Étrangers et fonction publique</p>
            <p className={styles.heroSummary}>
              Conseil stratégique et contentieux face aux décisions de l’administration.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact#contact-form" className={styles.primaryBtn}>Présenter votre situation</Link>
              <Link href="/contact#rendez-vous" className={styles.secondaryBtn}>Prendre rendez-vous</Link>
            </div>
          </div>
        </div>

        <a className={styles.heroScroll} href="#cabinet">
          <span>Découvrir le cabinet</span>
          <span aria-hidden="true">↓</span>
        </a>

        <p className={styles.licenseDetails}>
          Photo : <a href="https://delso.photo" target="_blank" rel="noreferrer">Diego Delso</a>
          <span aria-hidden="true"> · </span>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA</a>
        </p>
      </section>

      <section className={styles.proofStrip} aria-label="Parcours professionnel">
        <div className={styles.proofNarrative}>
          <p className={styles.proofStatement}>
            Inscrite au <span>Barreau de Paris</span>, Sophie Maréchal a suivi sa formation à Sciences Po Paris et à Paris 1 Panthéon-Sorbonne.
          </p>
          <p className={styles.proofMeta}>
            Sept ans de direction hospitalière <span aria-hidden="true">·</span> Français, anglais et allemand.
          </p>
        </div>
      </section>

      <section className={styles.profileSection} id="cabinet">
        <div className={styles.profileGrid}>
          <div className={styles.profileContent}>
            <p className={styles.sectionMarker}>Le cabinet</p>
            <h2 className={styles.profileTitle}>
              Avocate en <span>droit public</span> et en droit de l’urbanisme, inscrite au Barreau de Paris.
            </h2>
            <p className={styles.profileLead}>
              Une approche rigoureuse, accessible et engagée pour défendre vos intérêts face à l’administration, en droit public, droit de l’urbanisme, droit des étrangers et droit de la nationalité.
            </p>
            <p className={styles.profileText}>
              Chaque situation fait l’objet d’une analyse structurée, d’une stratégie expliquée et d’un suivi direct, en conseil comme devant les juridictions administratives.
            </p>
            <div className={styles.profileLinks}>
              <Link href="/a-propos" className={styles.textLink}>Découvrir le parcours <span aria-hidden="true">↗</span></Link>
              <a href="mailto:sophie.marechal@avocat.fr" className={styles.quietLink}>Écrire au cabinet</a>
            </div>
          </div>

          <figure className={styles.portraitFigure}>
            <div className={styles.portraitFrame}>
              <Image
                className={styles.portraitImage}
                src="/Images/Sophie_Marechal.webp"
                alt="Portrait de Sophie Maréchal, avocate au Barreau de Paris"
                fill
                sizes="(max-width: 900px) calc(100vw - 3rem), 440px"
              />
            </div>
            <figcaption>Sophie Maréchal · Avocate au Barreau de Paris</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.practiceSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionMarker}>Domaines d’intervention</p>
          <div>
            <h2 className={styles.sectionTitle}>Trois domaines, une même exigence de <span className={styles.sectionHighlight}>clarté et de stratégie.</span></h2>
            <p className={styles.sectionLead}>
              Le cabinet intervient principalement en droit de l’urbanisme, droit des étrangers et droit de la nationalité. Ces matières ont en commun des décisions administratives souvent techniques et lourdes de conséquences.
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
                {card.photoCredit && <PhotoCredit />}
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
                  Découvrir l’accompagnement <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.approachInner}>
          <div className={styles.approachIntro}>
            <p className={styles.sectionMarker}>Méthode</p>
            <h2 className={styles.sectionTitle}>Un accompagnement <span className={styles.sectionHighlight}>clair et personnalisé.</span></h2>
            <p className={styles.approachLead}>
              Si une action en justice n’est pas nécessaire ou n’est pas adaptée à votre situation, le cabinet vous en informe en toute transparence. L’objectif reste de défendre vos droits avec discernement et efficacité.
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
            <Link href="/competences">Voir toutes les compétences <span aria-hidden="true">↗</span></Link>
            <Link href="/honoraires">Comprendre les honoraires <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.resourceSection}>
        <div className={styles.resourceWrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionMarker}>Analyses</p>
            <div>
              <h2 className={styles.sectionTitle}>Des <span className={styles.sectionHighlight}>repères utiles</span> pour comprendre vos démarches et vos recours.</h2>
              <p className={styles.sectionLead}>
                Une sélection de contenus consacrés aux situations les plus fréquentes en urbanisme, droit des étrangers et nationalité française.
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
            <h3 className={styles.additionalLabel}>Voir également</h3>
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
              <h2>Votre situation appelle une <span className={styles.contactHighlight}>analyse précise.</span></h2>
              <p>Décrivez brièvement votre demande via le formulaire ou choisissez directement un créneau de rendez-vous.</p>
            </div>
            <div className={styles.contactActions} role="group" aria-label="Options pour contacter le cabinet">
              <Link href="/contact#contact-form" className={styles.contactPrimary}>
                <span className={styles.contactActionText}>
                  <small>Formulaire de contact</small>
                  <strong>Présenter votre situation</strong>
                </span>
                <span className={styles.contactActionArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/contact#rendez-vous" className={styles.contactSecondary}>
                <span className={styles.contactActionText}>
                  <small>Rendez-vous téléphonique · 30 min</small>
                  <strong>Prendre rendez-vous</strong>
                </span>
                <span className={styles.contactActionArrow} aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className={styles.contactMethods} role="group" aria-label="Coordonnées du cabinet">
            <a href="mailto:sophie.marechal@avocat.fr">
              <span className={styles.contactMethodLabel}>E-mail</span>
              <span className={styles.contactMethodValue}>sophie.marechal@avocat.fr</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="sms:+33652609138">
              <span className={styles.contactMethodLabel}>SMS</span>
              <span className={styles.contactMethodValue}>06 52 60 91 38</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/sophie-marechal-57517037/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn de Sophie Maréchal dans un nouvel onglet">
              <span className={styles.contactMethodLabel}>LinkedIn</span>
              <span className={styles.contactMethodValue}>Sophie Maréchal</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
            <a href="https://maps.google.com/?q=11 Boulevard de Sébastopol 75001 PARIS" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir l’adresse du cabinet dans Google Maps dans un nouvel onglet">
              <span className={styles.contactMethodLabel}>Cabinet</span>
              <span className={styles.contactMethodValue}>11 boulevard de Sébastopol, Paris 1er</span>
              <span className={styles.contactMethodArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
