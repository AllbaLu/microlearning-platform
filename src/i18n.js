import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../src/locales/en/common.json';
import enTopics from '../src/locales/en/topics.json';

import esCommon from '../src/locales/es/common.json';
import esTopics from '../src/locales/es/topics.json';

import ptCommon from '../src/locales/pt/common.json';
import ptTopics from '../src/locales/pt/topics.json';

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
