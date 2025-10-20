import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" end>
            <img
              src={`${import.meta.env.BASE_URL}Media/images/Logo.png`}
              alt="Melvin Gieswein Logo"
            />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/software" onClick={() => setIsOpen(false)}>
              Software
            </NavLink>
          </li>
          <li>
            <NavLink to="/websites" onClick={() => setIsOpen(false)}>
              Websites
            </NavLink>
          </li>
          <li>
            <NavLink to="/videoediting" onClick={() => setIsOpen(false)}>
              Video Editing
            </NavLink>
          </li>
          <li>
            <NavLink to="/animation" onClick={() => setIsOpen(false)}>
              Animations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
