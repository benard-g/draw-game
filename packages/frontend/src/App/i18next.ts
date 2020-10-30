import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export async function initI18n(): Promise<void> {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      whitelist: ['en', 'fr'],
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',
      react: { wait: true },
      returnObjects: true,
      returnEmptyString: false,
    });
}
