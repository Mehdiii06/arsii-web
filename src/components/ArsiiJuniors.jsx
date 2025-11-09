import logoJuniors from "../assets/arsii-juniors.svg"; // update with your logo path
import { t } from "../lib/i18n";

export default function ArsiiJuniors() {
  return (
    <section className="juniors" id="juniors">
      <div className="container">
        <div className="j-card">
          <div className="j-logo">
            <img src={logoJuniors} alt="ARSII Juniors" />
          </div>
          <p className="j-text">
            {t(
              "juniors.text",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula erat nec augue fringilla elementum."
            )}
          </p>
          <div className="j-actions">
            <button className="btn-juniors">
              {t("juniors.cta", "Join Juniors")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
