import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/settingsSlice";

const THEME_OPTIONS = [
  { value: "light", label: "☀️" },
  { value: "dark", label: "🌙" },
  { value: "system", label: "💻" },
];

export default function ThemeToggle({ className = "" }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    const applyTheme = () => {
      const effectiveTheme =
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme;

      document.documentElement.setAttribute("data-theme", effectiveTheme);
    };

    applyTheme();

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", applyTheme);
      return () => mq.removeEventListener("change", applyTheme);
    }
  }, [theme]);

  return (
    <div className={`theme-toggle ${className}`}>
      <select
        value={theme}
        onChange={(e) => dispatch(setTheme(e.target.value))}
        aria-label="Select color theme"
      >
        {THEME_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
