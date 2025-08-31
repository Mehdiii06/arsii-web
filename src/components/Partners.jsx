const LOGOS = [
  // Replace with your real paths in /public/logos
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <h3>Our Partners</h3>
        <div className="logo-grid">
          {LOGOS.map((src, i) => (
            <div className="logo" key={i}>
              {/* fallback if image not found */}
              {src ? <img src={src} alt={`Partner ${i + 1}`} /> : "Logo"}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
