import en from "../content/en.json";

const locales = { en /*, fr */ };

let current = "en";
export const setLocale = (code = "en") => {
  if (locales[code]) current = code;
};

export const t = (path, fallback = "") => {
  const parts = path.split(".");
  let node = locales[current];
  for (const p of parts) {
    if (node && Object.prototype.hasOwnProperty.call(node, p)) node = node[p];
    else return fallback || path;
  }
  return typeof node === "string" ? node : fallback || path;
};
