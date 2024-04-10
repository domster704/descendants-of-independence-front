import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as ruHeaderTranslations from "./lang/header/ru.json";
import * as ruFooterTranslations from "./lang/footer/ru.json";
import * as ruMainTranslations from "./lang/main/ru.json";
import * as kzHeaderTranslations from "./lang/header/kz.json";
import * as kzFooterTranslations from "./lang/footer/kz.json";
import * as kzMainTranslations from "./lang/main/kz.json";
import * as ruAboutTranslations from "./lang/about/ru.json";
import * as ruArchiveTranslations from "./lang/archive/ru.json";
import * as ruStatementTranslations from "./lang/statement/ru.json";
import * as ruSuccessTranslations from "./lang/success/ru.json";
import * as kzAboutTranslations from "./lang/about/kz.json";
import * as kzArchiveTranslations from "./lang/archive/kz.json";
import * as kzStatementTranslations from "./lang/statement/kz.json";
import * as kzSuccessTranslations from "./lang/success/kz.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      header: ruHeaderTranslations,
      footer: ruFooterTranslations,
      main: ruMainTranslations,
      about: ruAboutTranslations,
      archive: ruArchiveTranslations,
      statement: ruStatementTranslations,
      success: ruSuccessTranslations,
    },
    kz: {
      header: kzHeaderTranslations,
      footer: kzFooterTranslations,
      main: kzMainTranslations,
      about: kzAboutTranslations,
      archive: kzArchiveTranslations,
      statement: kzStatementTranslations,
      success: kzSuccessTranslations,
    },
  },
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  returnObject: true,
});

export default i18n;
