import logo from "../assets/arsii-logo.svg";
import { t } from "../lib/i18n";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="brand">
          <img
            src={logo}
            alt="ARSII"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
        <nav className="links">
          <a href="#privacy">{t("footer.privacy")}</a>
          <a href="#terms">{t("footer.terms")}</a>
          <a href="#contact">{t("footer.contact")}</a>
        </nav>
        <div className="social">
          <div className="social__link">
            <Facebook className="social-icon" />
          </div>
          <div className="social__link">
            <Instagram className="social-icon" />
          </div>
          <div className="social__link">
            <Linkedin className="social-icon" />
          </div>
        </div>
      </div>
      <div className="legal">
        © {year} {t("brand")} — {t("footer.all_rights")}
      </div>
    </footer>
  );
}
