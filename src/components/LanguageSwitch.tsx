import { useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", labelKey: "language.en" },
  { code: "es", labelKey: "language.es" },
  { code: "ca", labelKey: "language.ca" },
  { code: "ko", labelKey: "language.ko" }
];

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setOpen(false);
  };

  const current = LANGS.find(l => l.code === i18n.resolvedLanguage) ?? LANGS[0];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center px-3 py-1 text-sm font-medium text-slate-800 focus:outline-none ${open ? "bg-slate-100" : "bg-transparent hover:bg-slate-100"}`}
      >
        <span className="mr-2">{t(current.labelKey)}</span>
        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full -translate-y-px z-50 origin-top-left bg-white shadow-lg ring-1 ring-black/10 min-w-full w-max">
          <div className="py-1">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => change(l.code)}
                className={
                  "w-full text-left px-3 py-2 text-sm flex items-center gap-2 " +
                  (i18n.resolvedLanguage === l.code ? "bg-slate-100 font-semibold" : "hover:bg-slate-50")
                }
              >
                <span className="flex-1">{t(l.labelKey)}</span>
                {i18n.resolvedLanguage === l.code && (
                  <svg className="w-4 h-4 text-slate-700" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.414 0L3.293 9.85a1 1 0 111.414-1.414L8 11.73l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}