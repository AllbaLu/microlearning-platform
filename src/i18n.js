import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enTopics from './locales/en/topics.json';

import esCommon from './locales/es/common.json';
import esTopics from './locales/es/topics.json';

import ptCommon from './locales/pt/common.json';
import ptTopics from './locales/pt/topics.json';

const resources = {
  en: {
    common: enCommon,
    topics: enTopics,
  },
  es: {
    common: esCommon,
    topics: esTopics,
  },
  pt: {
    common: ptCommon,
    topics: ptTopics,
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['common', 'topics'],   
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });


export default i18n;
