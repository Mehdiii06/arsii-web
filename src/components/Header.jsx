import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navCls = ({ isActive }) =>
    isActive ? { color: "#00f7ff" } : undefined;

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">ARSII</Link>
        </div>

        <nav className={open ? "nav open" : "nav"}>
          <ul onClick={() => setOpen(false)}>
            <li>
              <NavLink to="/" style={navCls}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" style={navCls}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" style={navCls}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" style={navCls}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </div>
    </header>
  );
}
