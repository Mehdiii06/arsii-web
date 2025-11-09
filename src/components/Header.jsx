import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/arsii-logo.svg";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from "../lib/I18nProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const linkProps = ({ isActive }) => ({
    className: isActive ? "active" : undefined,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* LEFT: Logo */}
        <div className="brand">
          <img
            src={logo}
            alt="ARSII"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* CENTER: Desktop Nav */}
        <nav aria-label="Primary">
          <ul>
            <li>
              <NavLink to="/" {...linkProps}>
                {t("nav.home", "Home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" {...linkProps}>
                {t("nav.about", "About us")}
              </NavLink>
            </li>
            <li>
              <a href="/#juniors">{t("nav.juniors", "ARSII Juniors")}</a>
            </li>
            <li>
              <NavLink to="/projects" {...linkProps}>
                {t("nav.projects", "Projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" {...linkProps}>
                {t("nav.events", "Events")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/opportunities" {...linkProps}>
                {t("nav.opportunities", "Opportunities")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" {...linkProps}>
                {t("nav.blog", "Blog")}
              </NavLink>
            </li>
            <li>
              <a href="/#contact">{t("nav.contact", "Contact us")}</a>
            </li>
          </ul>
        </nav>

        <div className="actions">
          {/* language + theme toggles */}
          {/* <LanguageToggle className="lang-toggle" />
          <ThemeToggle className="theme-btn" /> */}

          <Link to="/login" className="login">
            {t("auth.login", "Login")}
          </Link>
          <Link to="/signup" className="btn-signin">
            {t("auth.signin", "Sign up")}
          </Link>

          {/* Mobile burger */}
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <ul onClick={() => setOpen(false)}>
          <li>
            <NavLink to="/" {...linkProps}>
              {t("nav.home", "Home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" {...linkProps}>
              {t("nav.about", "About us")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/arsii-juniors" {...linkProps}>
              {t("nav.juniors", "ARSII Juniors")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" {...linkProps}>
              {t("nav.projects", "Projects")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" {...linkProps}>
              {t("nav.events", "Events")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/opportunities" {...linkProps}>
              {t("nav.opportunities", "Opportunities")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" {...linkProps}>
              {t("nav.blog", "Blog")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" {...linkProps}>
              {t("nav.contact", "Contact us")}
            </NavLink>
          </li>

          {/* add toggles to mobile list too (added) */}
          <li>
            <LanguageToggle className="theme-btn" />
          </li>
          <li>
            <ThemeToggle className="theme-btn" />
          </li>

          <li>
            <Link to="/login" className="login">
              {t("auth.login", "Login")}
            </Link>
          </li>
          <li>
            <Link to="/signup" className="btn-signin">
              {t("auth.signin", "Sign up")}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
