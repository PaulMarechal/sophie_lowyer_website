import { readConsent } from "./consent";

const ALLOWED_EVENTS = new Set([
  "calendly_embed_enabled",
  "calendly_external_click",
  "competences_cta_click",
  "contact_cta_click",
  "contact_form_error",
  "contact_form_success",
  "email_click",
  "honoraires_cta_click",
  "linkedin_click",
  "phone_click",
  "sms_click",
]);

export function trackEvent(eventName, params = {}) {
  if (
    typeof window === "undefined" ||
    !ALLOWED_EVENTS.has(eventName) ||
    !readConsent()?.analytics ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  const safeParams = {
    page_path: window.location.pathname,
  };

  if (typeof params.channel === "string") {
    safeParams.channel = params.channel.slice(0, 30);
  }

  if (typeof params.placement === "string") {
    safeParams.placement = params.placement.slice(0, 40);
  }

  window.gtag("event", eventName, safeParams);
}

export function trackPageView(pathname) {
  if (
    typeof window === "undefined" ||
    !readConsent()?.analytics ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: pathname,
    page_location: `${window.location.origin}${pathname}`,
  });
}
