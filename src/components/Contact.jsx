import logo from "../assets/arsii-logo.svg";
import bgLanding from "../assets/background-1.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading">
          <h2>Contact us</h2>
        </div>
        <div className="c-wrap">
          <div
            className="wrap__left"
            style={{ "--hero-bg": `url(${bgLanding})` }}
          >
            <h3>Let’s Get in touch</h3>
            <h5>ARSII Association</h5>
            <p>
              Bureau 502 - Imm. Louzir Avenue Palestine - Sahloul Sousse, 4054
            </p>
            <p>contact@arsii-association.org</p>
            <img
              src={logo}
              alt="ARSII"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          <form
            className="c-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent");
            }}
          >
            <input placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input placeholder="Phone" />
            <textarea rows="5" placeholder="Your message..." />
            <div className="actions">
              <button className="btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
