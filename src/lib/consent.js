export const CONSENT_STORAGE_KEY = "sophie-marechal-consent-v1";
export const CONSENT_CHANGE_EVENT = "site-consent-change";
export const OPEN_CONSENT_SETTINGS_EVENT = "site-consent-settings-open";

const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

function normalizeConsent(value) {
  if (
    !value ||
    value.version !== CONSENT_VERSION ||
    typeof value.analytics !== "boolean" ||
    typeof value.externalMedia !== "boolean" ||
    typeof value.savedAt !== "number" ||
    Date.now() - value.savedAt > CONSENT_MAX_AGE_MS
  ) {
    return null;
  }

  return value;
}

export function readConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return normalizeConsent(JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY)));
  } catch {
    return null;
  }
}

export function saveConsent(preferences) {
  if (typeof window === "undefined") {
    return null;
  }

  const consent = {
    version: CONSENT_VERSION,
    analytics: Boolean(preferences.analytics),
    externalMedia: Boolean(preferences.externalMedia),
    savedAt: Date.now(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Le choix reste valable pour la session même si le stockage local est indisponible.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));

  return consent;
}

export function updateConsent(preferences) {
  const current = readConsent();

  return saveConsent({
    analytics: current?.analytics ?? false,
    externalMedia: current?.externalMedia ?? false,
    ...preferences,
  });
}

export function openConsentSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT));
  }
}
