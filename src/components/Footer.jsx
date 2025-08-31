export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="brand">ARSII</div>
        <div className="legal">© {year} ARSII — All rights reserved.</div>
        <nav className="links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
