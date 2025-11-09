import events from "../content/events.json";
import { t } from "../lib/i18n";

export default function Events() {
  return (
    <section className="events">
      <div className="container">
        <div className="heading">
          <h2>{t("events.heading")}</h2>
          <p>{t("events.sub")}</p>
        </div>

        <div className="grid">
          {events.map((e, i) => (
            <div className="e-card" key={i}>
              <div className="info">
                <div className="title">{e.title}</div>
              </div>
              <div className="badge">
                <div className="badge__top">
                  <div className="day">{e.day}</div>
                  <div className="month">{e.month}</div>
                </div>
                <div className="year">{e.year}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="actions">
          <a href="/projects">
            {t("events.all")}
            <span className="arrow">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
