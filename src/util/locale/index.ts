import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { supabase } from "../supabase/supabase";

// Supabase에서 번역 데이터를 가져오는 함수
async function fetchTranslations() {
  const { data, error } = await supabase.from("translations").select("*");

  if (error) {
    console.error("Error fetching translations:", error.message);
    return null;
  }

  return data;
}

// i18n에 번역 데이터를 추가하는 함수
async function addTranslationsToI18n() {
  const translations = await fetchTranslations();
  if (!translations) return;

  const resources = {
    en: {
      translation: {},
    },
    ko: {
      translation: {},
    },
  };

  translations.forEach(({ id, en, ko }) => {
    // @ts-ignore
    resources.en.translation[id] = en;
    // @ts-ignore
    resources.ko.translation[id] = ko;
  });

  i18n.init({
    debug: true,
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });
}

// i18n 초기화 및 번역 데이터 추가
i18n.use(initReactI18next).init(
  {
    debug: true,
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
    parseMissingKeyHandler: () => {
        return;
    }
  },
  addTranslationsToI18n,
);

export default i18n;
