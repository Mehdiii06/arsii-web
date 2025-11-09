import { createContext, useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocale } from "../store/slices/settingsSlice";
import store from "../store";

import en from "../content/en.json";
import fr from "../content/fr.json";

const RESOURCES = { en, fr };

function get(obj, path, fallback = "") {
  if (typeof path !== "string") return fallback;
  return (
    (path
      .split(".")
      .reduce(
        (acc, key) => (acc && acc[key] != null ? acc[key] : undefined),
        obj
      ) ??
      fallback) ||
    path
  );
}

const I18nContext = createContext({
  locale: "en",
  t: (key, fb) => fb || key,
  setLocale: () => {},
});

export function I18nProvider({ children }) {
  const locale = useSelector((state) => state.settings.locale);
  const dispatch = useDispatch();

  const value = useMemo(() => {
    const dict = RESOURCES[locale] || RESOURCES.en;
    return {
      locale,
      setLocale: (newLocale) => dispatch(setLocale(newLocale)),
      t: (key, fallback = "") => get(dict, key, fallback),
    };
  }, [locale, dispatch]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function getCurrentLocale() {
  return store.getState().settings.locale;
}
