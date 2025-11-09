import { Link } from "react-router-dom";
import bgLanding from "../assets/background-1.png";
import logo from "../assets/arsii-logo2.svg";

export default function Hero() {
  return (
    <section
      className="hero hero--with-bg"
      style={{ "--hero-bg": `url(${bgLanding})` }}
    >
      <div className="hero__inner">
        <div className="hero_text">
          <hgroup className="hero__head">
            <p className="hero__kicker">
              <span className="txt-grad-1">
                Association of Scientific Research
              </span>
              <br />
              <span className="txt-grad-1">
                and Innovation in Computer Science
              </span>
            </p>
          </hgroup>
          <hgroup className="hero__head">
            <p className="hero__title">
              <span className="word-innovate">Innovate</span>
              <span className="word-lead">to Lead</span>
            </p>
          </hgroup>

          <div className="hero__cta">
            <Link to="/join" className="btn-cta">
              Join ARSII
            </Link>
          </div>
        </div>

        {/* 🔹 Glass info banner */}
        <div className="hero__about">
          <div className="hero__about-copy">
            <p>
              ARSII is a scientific and apolitical organization, founded in May
              2016 by young computer science teachers and researchers in
              Tunisia. Registered as a non-profit association, ARSII is
              dedicated to promoting scientific research and innovation in the
              field of computer science.
            </p>
          </div>

          <div className="hero__about-brand">
            <div className="hero__about-brand__img">
              <img
                src={logo}
                alt="ARSII"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="hero__about-brand__link">
              <Link className="learn" to="/about">
                Learn More <span className="arrow">›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* optional decorative glows */}
      <div className="hero__glow hero__glow--lt" />
      <div className="hero__glow hero__glow--rt" />
    </section>
  );
}
