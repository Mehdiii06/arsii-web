import { events } from "../data/events";

export default function Events() {
  return (
    <section className="events">
      <div className="container">
        <div className="heading">
          <h2>Events</h2>
          <p>Talks, seminars, meetups, and competitions.</p>
        </div>

        <div className="grid">
          {events.map((e, i) => (
            <div className="e-card" key={i}>
              <div className="info">
                <div className="title">{e.title}</div>
                {e.subtitle && <div className="subtitle">{e.subtitle}</div>}
              </div>
              <div className="badge">
                <div className="day">{e.day}</div>
                <div className="month">{e.month}</div>
                <div className="year">{e.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
