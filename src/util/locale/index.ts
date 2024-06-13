import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        hello: "hello",
      },
    },
    ko: {
      translation: {
        hello: "안녕하세요",
      },
    },
  },
});

export default i18n;
