export const i18n = {
  defaultLocale: 'en',
  locales: {
    en: 'English',
    de: 'Deutsche',
    tr: 'Türkçe'
  }
} as const;

export type Locale = keyof typeof i18n.locales;
