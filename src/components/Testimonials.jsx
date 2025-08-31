const DATA = [
  {
    quote:
      "The neon look is stunning and performance is excellent. Our landing page bounce rate dropped immediately.",
    name: "Amira K.",
    role: "Product Lead, NovaTech",
  },
  {
    quote:
      "Setup was quick. The SCSS tokens and mixins made it easy to match our brand.",
    name: "Youssef M.",
    role: "Frontend Engineer",
  },
  {
    quote:
      "Glass cards + subtle glow animations gave our site a premium feel without heavy libraries.",
    name: "Sara B.",
    role: "Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="heading">
          <h2>What people say</h2>
          <p>Real feedback from teams using this neon SCSS starter.</p>
        </div>

        <div className="grid">
          {DATA.map((t, i) => (
            <div className="t-card" key={i}>
              <p className="quote">“{t.quote}”</p>
              <div className="person">
                <div className="avatar" />
                <div className="meta">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
