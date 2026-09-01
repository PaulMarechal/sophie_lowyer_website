"use client";

import { openConsentSettings } from "../../lib/consent";

export default function CookieSettingsButton({ className, label = "Gérer mes préférences" }) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {label}
    </button>
  );
}
