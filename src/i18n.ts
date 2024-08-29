import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locals/en.json'
import fr from './locals/fr.json'
import ar from './locals/ar.json'
// all resource
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  ar: {
    translation: ar,
  },
}


i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
