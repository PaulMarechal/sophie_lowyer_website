"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  CONSENT_CHANGE_EVENT,
  OPEN_CONSENT_SETTINGS_EVENT,
  readConsent,
  saveConsent,
} from "../../lib/consent";
import { trackPageView } from "../../lib/analytics";
import styles from "./ConsentManager.module.css";

const measurementId = "G-DG7E5MZQ8M";

const copyByLocale = {
  fr: {
    label: "Préférences de confidentialité",
    eyebrow: "Vos préférences",
    title: "Mesure d’audience et calendrier externe",
    intro: "Le site ne charge Google Analytics et le calendrier Calendly qu’avec votre accord. Les fonctions strictement nécessaires restent actives. Vous pouvez modifier votre choix à tout moment.",
    more: "En savoir plus sur les services utilisés",
    necessaryTitle: "Fonctionnement nécessaire",
    necessaryText: "Mémorisation locale de votre choix pendant six mois.",
    analyticsTitle: "Mesure d’audience",
    analyticsText: "Pages vues et interactions génériques, sans contenu du formulaire.",
    calendlyTitle: "Calendrier Calendly",
    calendlyText: "Chargement du module de réservation externe sur la page Contact.",
    refuse: "Tout refuser",
    save: "Enregistrer mes choix",
    customise: "Personnaliser",
    accept: "Tout accepter",
    detailsPath: "/gestion-des-cookies",
  },
  en: {
    label: "Privacy preferences",
    eyebrow: "Your preferences",
    title: "Audience measurement and external calendar",
    intro: "This website only loads Google Analytics and the Calendly calendar with your consent. Strictly necessary functions remain active. You can change your choice at any time.",
    more: "Learn more about the services used",
    necessaryTitle: "Strictly necessary functions",
    necessaryText: "Your choice is stored locally for six months.",
    analyticsTitle: "Audience measurement",
    analyticsText: "Page views and generic interactions, without any contact-form content.",
    calendlyTitle: "Calendly calendar",
    calendlyText: "Loads the external booking module on the Contact page.",
    refuse: "Reject all",
    save: "Save my choices",
    customise: "Customise",
    accept: "Accept all",
    detailsPath: "/en/cookie-settings",
  },
};

function setGoogleConsent(granted) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function ConsentManager() {
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "fr";
  const copy = copyByLocale[locale];
  const [choice, setChoice] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);
  const bannerRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const savedChoice = readConsent();
    if (savedChoice) {
      setChoice(savedChoice);
      setAnalytics(savedChoice.analytics);
      setExternalMedia(savedChoice.externalMedia);
      setGoogleConsent(savedChoice.analytics);
    } else {
      setIsOpen(true);
    }

    const handleConsentChange = (event) => {
      const nextChoice = event.detail || readConsent();
      if (!nextChoice) {
        return;
      }

      setChoice(nextChoice);
      setAnalytics(nextChoice.analytics);
      setExternalMedia(nextChoice.externalMedia);
      setGoogleConsent(nextChoice.analytics);
      setIsOpen(false);
    };

    const handleOpenSettings = () => {
      previousFocusRef.current = document.activeElement;
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setExternalMedia(current?.externalMedia ?? false);
      setShowDetails(true);
      setIsOpen(true);
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, handleOpenSettings);

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, handleOpenSettings);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const banner = bannerRef.current;
    const focusFrame = window.requestAnimationFrame(() => banner?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && choice) {
        setIsOpen(false);
        window.requestAnimationFrame(() => previousFocusRef.current?.focus?.());
        return;
      }

      if (event.key !== "Tab" || !banner) {
        return;
      }

      const focusable = [...banner.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )];
      if (focusable.length === 0) {
        event.preventDefault();
        banner.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!banner.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }
      if (event.shiftKey && (document.activeElement === first || document.activeElement === banner)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [choice, isOpen]);

  useEffect(() => {
    if (!choice?.analytics) {
      setGoogleConsent(false);
      return;
    }

    setGoogleConsent(true);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      cookie_expires: 33696000,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }, [choice?.analytics]);

  useEffect(() => {
    if (choice?.analytics && pathname) {
      trackPageView(pathname);
    }
  }, [choice?.analytics, pathname]);

  const persistChoice = (nextChoice) => {
    const savedChoice = saveConsent(nextChoice);
    setChoice(savedChoice);
    setShowDetails(false);
    setIsOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus?.());
  };

  return (
    <>
      {choice?.analytics && (
        <Script
          id="google-analytics-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      )}

      {isOpen && (
        <section
          ref={bannerRef}
          className={styles.banner}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-preferences-title"
          aria-label={copy.label}
          lang={locale}
          tabIndex={-1}
        >
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="privacy-preferences-title">{copy.title}</h2>
            <p>{copy.intro}</p>
            <Link href={copy.detailsPath}>{copy.more}</Link>
          </div>

          {showDetails && (
            <div className={styles.preferences}>
              <label className={styles.preferenceDisabled}>
                <input type="checkbox" checked disabled />
                <span>
                  <strong>{copy.necessaryTitle}</strong>
                  <small>{copy.necessaryText}</small>
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span>
                  <strong>{copy.analyticsTitle}</strong>
                  <small>{copy.analyticsText}</small>
                </span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={externalMedia}
                  onChange={(event) => setExternalMedia(event.target.checked)}
                />
                <span>
                  <strong>{copy.calendlyTitle}</strong>
                  <small>{copy.calendlyText}</small>
                </span>
              </label>
            </div>
          )}

          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={() => persistChoice({ analytics: false, externalMedia: false })}>
              {copy.refuse}
            </button>
            {showDetails ? (
              <button type="button" className={styles.primary} onClick={() => persistChoice({ analytics, externalMedia })}>
                {copy.save}
              </button>
            ) : (
              <button type="button" className={styles.secondary} onClick={() => setShowDetails(true)}>
                {copy.customise}
              </button>
            )}
            <button type="button" className={styles.primary} onClick={() => persistChoice({ analytics: true, externalMedia: true })}>
              {copy.accept}
            </button>
          </div>
        </section>
      )}
    </>
  );
}
