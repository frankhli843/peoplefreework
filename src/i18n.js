import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zh from './locales/zh.json';
import zhTW from './locales/zh-TW.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

// Check for ?lang= query param
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      'zh-TW': { translation: zhTW },
      ja: { translation: ja },
      ko: { translation: ko },
      fr: { translation: fr },
      es: { translation: es },
      pt: { translation: pt },
    },
    lng: langParam || undefined,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;
