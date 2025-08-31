import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="heading">
          <h2>Projects</h2>
          <p>Selected projects and research initiatives.</p>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <div className="p-card" key={i}>
              <div className="meta">{p.year}</div>
              <div className="title">{p.title}</div>
              <div className="grant">{p.grant}</div>
              <div className="glow" />
            </div>
          ))}
        </div>

        <div className="actions">
          <a href="#/projects">All projects →</a>
        </div>
      </div>
    </section>
  );
}
