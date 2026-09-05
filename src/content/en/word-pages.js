// Faithful translation of src/content/fr/word-pages.js.
// Keep the same sections, paragraph order and lists as the supplied French copy.
export const naturalisation = {
  title: "French naturalisation",
  intro: [
    "Becoming French through naturalisation is a demanding process, with requirements that were significantly tightened by the reform that came into force on 1 January 2026.",
    "The firm assists naturalisation applicants in preparing their applications, anticipating the new requirements and, where appropriate, challenging a refusal or postponement decision, or a refusal to register an application.",
  ],
  sections: [
    {
      title: "Two routes to French nationality",
      blocks: [
        {
          type: "list",
          items: [
            "Naturalisation by decree: this is a way of acquiring French nationality ‘by decision of the public authority’, through a decree granted at the naturalisation applicant’s request. To qualify, applicants must demonstrate lawful residence in France, professional and social integration, integration into French society and proficiency in French.",
            "Declaration of nationality: this involves making a declaration of nationality, received and registered by the competent prefecture, in circumstances specifically provided for by the Civil Code: in particular, marriage to a French national, or being the parent, brother or sister of a French national.",
          ],
        },
      ],
    },
    {
      title: "What has changed since 1 January 2026",
      blocks: [
        {
          type: "paragraph",
          text: "Law No. 2024-42 of 26 January 2024 and Decree No. 2025-648 amending Decree No. 93-1362 of 30 December 1993 introduced two new requirements, which took effect on 1 January 2026:",
        },
        {
          type: "list",
          items: [
            "Passing a civic examination covering the principles of the Republic, how its institutions work, and the rights and duties associated with life in France;",
            "A higher level of French: applicants must now demonstrate B2 proficiency in French to qualify for naturalisation;",
          ],
        },
        {
          type: "paragraph",
          text: "Exemptions exist for certain circumstances, including age, disability and qualifications obtained in France; their application must be checked on a case-by-case basis.",
        },
        {
          type: "paragraph",
          text: "This development is more than an additional formality: it changes how a naturalisation application is prepared. From the very first discussions, it is now necessary to anticipate the language level to be demonstrated and preparation for the civic examination, alongside the usual work of assembling the application.",
        },
      ],
    },
    {
      title: "How the firm supports you",
      blocks: [
        {
          type: "list",
          items: [
            "An assessment of your eligibility and the route best suited to your circumstances (decree or declaration).",
            "Preparing a coherent application: evidence of residence, stability, resources and integration.",
            "Anticipating the new requirements introduced by the reform (language proficiency, civic examination).",
            "Following the procedure through to the decision, and challenging a refusal or postponement where justified and appropriate in light of your application.",
          ],
        },
        {
          type: "paragraph",
          text: "As every situation is different, an initial discussion with the firm helps assess the most suitable route and the points requiring particular attention in your application.",
        },
      ],
    },
  ],
};

export const talents = {
  title: "Talent & international mobility",
  intro: [
    "This page is intended for two audiences: foreign professionals (qualified employees, project founders, researchers and healthcare professionals) who wish to settle and work in France, and businesses that recruit or host these professionals.",
    "The firm assists both groups with the ‘talent’ residence permit and the resident card, with an emphasis on planning ahead rather than managing emergencies.",
  ],
  sections: [
    {
      title: "The ‘talent’ residence permit (formerly ‘talent passport’)",
      blocks: [
        {
          type: "paragraph",
          text: "The talent passport scheme was reformed by Decree No. 2025-539 of 13 June 2025, which replaced it with the residence permit bearing the ‘talent’ designation, restructured into four main categories:",
        },
        {
          type: "list",
          items: [
            "‘Qualified employee’ talent permit: for employees recruited in France for a qualified position, subject to qualification or experience and remuneration requirements.",
            "‘Project founder’ talent permit for setting up a business or developing an innovative economic project in France.",
            "‘Medical and pharmacy professions’ talent permit for practitioners working within this specific framework.",
            "‘EU Blue Card’ talent permit for highly qualified employees recruited on a contract of at least one year, with remuneration at least equal to a threshold set by reference to the average salary.",
          ],
        },
        {
          type: "paragraph",
          text: "Each category has its own conditions and permit duration. A change of category, renewal or change in professional circumstances should be anticipated rather than dealt with when the permit is about to expire.",
        },
      ],
    },
    {
      title: "The resident card",
      blocks: [
        {
          type: "paragraph",
          text: "A ten-year residence permit, the resident card marks a key milestone for people who have built their lives in France, often before considering naturalisation.",
        },
        {
          type: "paragraph",
          text: "As with naturalisation, obtaining it is affected by the reform that came into force on 1 January 2026: a civic examination and a higher level of French than before are now required, in addition to the existing lawful residence and integration requirements.",
        },
        {
          type: "paragraph",
          text: "There are also resident cards that may be obtained under bilateral agreements between France and partner countries, on terms that depart from the general rules (for example, the Franco-Algerian, Franco-Moroccan and Franco-Tunisian agreements).",
        },
      ],
    },
    {
      title: "For businesses",
      blocks: [
        {
          type: "paragraph",
          text: "The firm advises businesses that recruit or host foreign employees: planning the necessary steps from the job offer stage, securing residence permit renewals, and providing support with intra-group mobility or changes of position.",
        },
        {
          type: "paragraph",
          text: "Planning professional immigration well in advance limits interruptions to the right to work and scheduling pressures for both the business and the employee.",
        },
      ],
    },
    {
      title: "For talent and project founders",
      blocks: [
        {
          type: "paragraph",
          text: "The firm assists applicants in choosing the category best suited to their profile, preparing the application and following it through to the decision and, where appropriate, through to a resident card or naturalisation.",
        },
        {
          type: "paragraph",
          text: "An initial discussion with the firm helps assess the category best suited to your circumstances, whether for a first application or a renewal.",
        },
      ],
    },
  ],
};

export const immigrationNotice = {
  title: "Are you preparing an application for nationality or a ‘talent’ permit?",
  paragraphs: [
    "Naturalisation and permits linked to the international mobility of talent (‘talent’ residence permit, resident card) follow a different approach: most often, the aim is to plan ahead and prepare an application, rather than challenge a decision.",
    "These procedures are covered on two dedicated pages: Naturalisation and Talent & international mobility.",
    "Have you received an OQTF in Paris? See the dedicated page: OQTF lawyer in Paris.",
  ],
};

export const legalAid = "Legal aid is accepted subject to eligibility and provided the client resides in the Île-de-France region.";

export const englishDocumentPages = {
  "french-nationality-law": {
    metadata: {
      title: naturalisation.title,
      description: naturalisation.intro[0],
      path: "/en/french-nationality-law",
      keywords: ["French nationality law", "French naturalisation", "naturalisation application", "naturalisation appeal"],
    },
    content: naturalisation,
  },
  "naturalisation-lawyer-paris": {
    metadata: {
      title: "Naturalisation lawyer in Paris",
      description: naturalisation.intro[1],
      path: "/en/naturalisation-lawyer-paris",
      keywords: ["naturalisation lawyer Paris", "French nationality application", "naturalisation appeal Paris"],
    },
    content: naturalisation,
  },
  "talent-passport-resident-card-lawyer-paris": {
    metadata: {
      title: talents.title,
      description: talents.intro[1],
      path: "/en/talent-passport-resident-card-lawyer-paris",
      keywords: ["talent residence permit lawyer Paris", "resident card lawyer Paris", "talent permit renewal France"],
    },
    content: talents,
  },
};
