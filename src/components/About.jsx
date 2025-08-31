export default function About() {
  return (
    <section className="about">
      <div className="container">
        {/* Left Side - Image */}
        <div className="image-wrapper">
          <img
            src="https://via.placeholder.com/600x400/0ff/000?text=App+Screenshot"
            alt="App Showcase"
          />
        </div>

        {/* Right Side - Content */}
        <div className="content">
          <h2>About Our Platform</h2>
          <p>
            Our futuristic app combines speed, innovation, and design. Built
            with React, SCSS, and Framer Motion, it delivers a stunning neon
            experience optimized for modern users.
          </p>
          <a href="#get-started" className="btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
