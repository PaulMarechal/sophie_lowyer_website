import { getRoutePair, getLocaleFromPath } from './i18n';

export const socialImageSizes = {
  og: { width: 1200, height: 630 },
  twitter: { width: 1200, height: 600 },
  square: { width: 1200, height: 1200 },
};

// Short copy remains readable when messaging apps display a small preview.
export const socialCards = {
  home: {
    fr: { eyebrow: 'Cabinet d’avocat · Paris', title: 'Avocate en droit public', accent: 'Urbanisme · Étrangers · Nationalité' },
    en: { eyebrow: 'Law firm · Paris', title: 'French public law', accent: 'Planning · Immigration · Nationality' },
  },
  'a-propos': {
    fr: { eyebrow: 'À propos du cabinet', title: 'Une approche claire et humaine', accent: 'Conseil et défense de vos intérêts' },
    en: { eyebrow: 'About the firm', title: 'Clear advice. A personal approach.', accent: 'Advice and representation in Paris' },
  },
  competences: {
    fr: { eyebrow: 'Compétences · Paris', title: 'Le droit public à vos côtés', accent: 'Urbanisme · Étrangers · Nationalité' },
    en: { eyebrow: 'Areas of practice · Paris', title: 'Public law advice and representation', accent: 'Planning · Immigration · Nationality' },
  },
  honoraires: {
    fr: { eyebrow: 'Honoraires', title: 'Des honoraires transparents', accent: 'Des modalités définies ensemble' },
    en: { eyebrow: 'Fees', title: 'Clear, transparent fees', accent: 'Terms agreed before work begins' },
  },
  contact: {
    fr: { eyebrow: 'Contact & rendez-vous', title: 'Échanger avec le cabinet', accent: 'Au cabinet à Paris ou à distance' },
    en: { eyebrow: 'Contact & appointments', title: 'Speak to the firm', accent: 'Appointments in Paris or remotely' },
  },
  urbanisme: {
    fr: { eyebrow: 'Droit de l’urbanisme · Paris', title: 'Permis de construire et recours', accent: 'Conseil · Autorisations · Contentieux' },
    en: { eyebrow: 'Planning law · Paris', title: 'Building permits and appeals', accent: 'Advice · Permissions · Litigation' },
  },
  etrangers: {
    fr: { eyebrow: 'Droit des étrangers · Paris', title: 'Séjour et recours contre les OQTF', accent: 'Un accompagnement à chaque étape' },
    en: { eyebrow: 'Immigration law · Paris', title: 'Residence permits and OQTF appeals', accent: 'Guidance at every stage' },
  },
  nationalite: {
    fr: { eyebrow: 'Droit de la nationalité · Paris', title: 'Nationalité et naturalisation', accent: 'Demande · Instruction · Recours' },
    en: { eyebrow: 'French nationality law · Paris', title: 'Nationality and naturalisation', accent: 'Applications · Procedure · Appeals' },
  },
  confidentialite: {
    fr: { eyebrow: 'Confidentialité', title: 'Vos données personnelles', accent: 'La politique de confidentialité du cabinet' },
    en: { eyebrow: 'Privacy', title: 'Your personal information', accent: 'The firm’s privacy policy' },
  },
  'mentions-legales': {
    fr: { eyebrow: 'Mentions légales', title: 'Les informations du cabinet', accent: 'Identité · Contact · Hébergement' },
    en: { eyebrow: 'Legal notice', title: 'Information about the firm', accent: 'Identity · Contact · Hosting' },
  },
  cookies: {
    fr: { eyebrow: 'Cookies & services externes', title: 'Vos préférences de confidentialité', accent: 'Comprendre et gérer vos choix' },
    en: { eyebrow: 'Cookies & external services', title: 'Your privacy preferences', accent: 'Understand and manage your choices' },
  },
};

const routeCards = {
  '/': 'home', '/a-propos': 'a-propos', '/competences': 'competences',
  '/honoraires': 'honoraires', '/contact': 'contact',
  '/droit-de-urbanisme': 'urbanisme', '/avocate-droit-urbanisme-paris': 'urbanisme',
  '/avocat-refus-permis-construire-paris': 'urbanisme',
  '/droit-des-etrangers': 'etrangers', '/avocate-droit-des-etrangers-paris': 'etrangers',
  '/avocat-oqtf-paris': 'etrangers', '/avocat-carte-talent-carte-resident-paris': 'etrangers',
  '/droit-de-la-nationalite': 'nationalite', '/avocat-naturalisation-paris': 'nationalite',
  '/avocate-droit-public-paris': 'home', '/confidentialite': 'confidentialite',
  '/mentions-legales': 'mentions-legales', '/gestion-des-cookies': 'cookies',
};

export function socialImagePath(key, locale = 'fr', format = 'og') {
  return `/social/${locale}/${key}-${format}.png`;
}

export function getSocialImages(path = '/', locale = getLocaleFromPath(path)) {
  const key = routeCards[getRoutePair(path).fr] || 'home';
  const card = socialCards[key][locale];
  const alt = `Sophie Maréchal — ${card.title}`;
  const descriptor = (format) => ({
    url: socialImagePath(key, locale, format),
    ...socialImageSizes[format],
    type: 'image/png',
    alt,
  });
  return { openGraph: [descriptor('og'), descriptor('square')], twitter: [descriptor('twitter')] };
}
