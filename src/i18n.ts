import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      apps: {
        about: "About",
        experience: "Experience",
        projects: "Personal Projects",
        contact: "Contact"
      },
      ui: {
        close: "Close",
        contentOf: "Content of {{label}}"
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  es: {
    translation: {
      apps: {
        about: "Acerca de",
        experience: "Experiencia",
        projects: "Proyectos personales",
        contact: "Contacto"
      },
      ui: {
        close: "Cerrar",
        contentOf: "Contenido de {{label}}"
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  ca: {
    translation: {
      apps: {
        about: "Sobre mi",
        experience: "Experiència",
        projects: "Projectes personals",
        contact: "Contacte"
      },
      ui: {
        close: "Tancar",
        contentOf: "Contingut de {{label}}"
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  },
  ko: {
    translation: {
      apps: {
        about: "소개",
        experience: "경력",
        projects: "개인 프로젝트",
        contact: "연락처"
      },
      ui: {
        close: "닫기",
        contentOf: "{{label}} 내용"
      },
      language: {
        en: "English",
        es: "Español",
        ca: "Català",
        ko: "한국어"
      }
    }
  }
} as const;

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const detected =
  saved ||
  (navigator.language.startsWith("es")
    ? "es"
    : navigator.language.startsWith("ca")
    ? "ca"
    : navigator.language.startsWith("ko")
    ? "ko"
    : "en");

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detected,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;