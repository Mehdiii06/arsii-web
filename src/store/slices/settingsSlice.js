import { createSlice } from "@reduxjs/toolkit";

const THEME_KEY = "arsii.theme";
const LOCALE_KEY = "arsii.locale";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const initialState = {
  theme: localStorage.getItem(THEME_KEY) || "system", // default system
  locale: localStorage.getItem(LOCALE_KEY) || "en",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem(THEME_KEY, action.payload);
    },
    setLocale(state, action) {
      state.locale = action.payload;
      localStorage.setItem(LOCALE_KEY, action.payload);
    },
  },
});

export const { setTheme, setLocale } = settingsSlice.actions;
export default settingsSlice.reducer;
