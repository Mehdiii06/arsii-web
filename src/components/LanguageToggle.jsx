import { useI18n } from "../lib/I18nProvider";

export default function LanguageToggle({ className = "" }) {
  const { locale, setLocale } = useI18n();

  return (
    <div className={`lang-toggle ${className}`}>
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      {/* <span className="sep">/</span> */}
      <button
        type="button"
        className={locale === "fr" ? "active" : ""}
        onClick={() => setLocale("fr")}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
    </div>
  );
}
