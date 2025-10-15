import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" end><img
            src="/react-portfolio/Media/images/Logo.svg"
            alt="Melvin Gieswein Logo"
            style={{ height: "50px" }}
          /></NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/software">Software</NavLink></li>
          <li><NavLink to="/websites">Websites</NavLink></li>
          <li><NavLink to="/videoediting">Video Editing</NavLink></li>
          <li><NavLink to="/animation">Animation</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
