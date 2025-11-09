import logo from "../assets/arsii-logo.svg";

const LOGOS = [logo, logo, logo, logo, logo, logo, logo, logo];

export default function Partners() {
  const logosLoop = [...LOGOS, ...LOGOS];

  return (
    <section className="partners">
      <div className="container">
        <div className="heading">
          <h2>Our Partners</h2>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>

        {/* slider wrapper */}
        <div className="logo-slider">
          <div className="logo-track">
            {logosLoop.map((src, i) => (
              <div className="logo" key={i}>
                <img src={src} alt={`Partner ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
