// src/components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", labelKey: "language.en" },
  { code: "es", labelKey: "language.es" },
  { code: "ca", labelKey: "language.ca" },
  { code: "ko", labelKey: "language.ko" }
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div style={{ position: "absolute", top: 8, right: 8, display: "flex", gap: 8 }}>
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          style={{
            padding: "4px 8px",
            borderRadius: 6,
            border: "1px solid #4f46e5",
            background: i18n.resolvedLanguage === l.code ? "#4f46e5" : "transparent",
            color: i18n.resolvedLanguage === l.code ? "white" : "#4f46e5"
          }}
        >
          {t(l.labelKey)}
        </button>
      ))}
    </div>
  );
}