import { translations, type Locale } from "./translations";

export function getLocale(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  return "es";
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type { Locale } from "./translations";
