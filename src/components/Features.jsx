import { Sparkles, Cpu, Rocket } from "lucide-react";

export default function Features() {
  return (
    <section className="features">
      <h2>Awesome Features</h2>
      <div className="grid">
        <div className="card">
          <div className="icon">
            <Sparkles />
          </div>
          <h3>Neon Design</h3>
          <p>
            Futuristic glassmorphism and neon glow for an immersive experience.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <Cpu />
          </div>
          <h3>High Performance</h3>
          <p>
            Optimized build with React + Vite for blazing fast loading times.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <Rocket />
          </div>
          <h3>Modern Animations</h3>
          <p>Smooth transitions powered by Framer Motion and SCSS.</p>
        </div>
      </div>
    </section>
  );
}
