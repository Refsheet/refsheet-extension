import i18n from 'i18next'
import Backend from 'i18next-locize-backend'
import LngDetector from 'i18next-browser-languagedetector'

const detectionOptions = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'navigator',
    'htmlTag'
  ],
  lookupQuerystring: 'lang',
  lookupCookie: '_rst_lang'
};

i18n
  .use(LngDetector)
  .use(Backend)
  .init({
    saveMissing: true,
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    backend: {
      projectId: '6ed4fe38-276a-4796-a6d4-59da84aaeaf9',
      apiKey: '1484d673-099c-4192-8fe6-8b54c4c3165c',
      referenceLng: 'en'
    },
    detection: detectionOptions
  });

window.__I18N = i18n;

export default i18n;