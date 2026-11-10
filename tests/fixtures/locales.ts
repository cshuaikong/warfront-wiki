import { defaultLocale, locales, type Locale } from '~/i18n/routing';

// The official apply-template command changes the supported locale union.
// Exercise a real configured translation instead of importing demo-only ja.
const configuredTranslation = locales.find((locale) => locale !== defaultLocale);
if (!configuredTranslation) {
  throw new Error('These multilingual URL fixtures require a configured non-default locale.');
}
export const secondaryLocale: Locale = configuredTranslation;
