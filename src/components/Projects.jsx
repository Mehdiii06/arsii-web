import projects from "../content/projects.json";
import { t } from "../lib/i18n";

export default function Projects() {
  // only last 4 projects
  const lastFour = projects.slice(-4);

  return (
    <section className="projects">
      <div className="container">
        <div className="heading">
          <h2>{t("projects.heading")}</h2>
          <p>{t("projects.sub")}</p>
        </div>

        <div className="grid">
          {lastFour.map((p, i) => (
            <div
              className="p-card"
              key={i}
              style={{
                backgroundImage: p.image
                  ? `url(${p.image})`
                  : "linear-gradient(to bottom left, #270349, #256360)",
              }}
            >
              <div className="info">
                <div className="meta">{p.year}</div>
                <div className="title">{p.title}</div>
                <div className="grant">{p.grant}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="actions">
          <a href="/projects">
            {t("projects.all")}
            <span className="arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
