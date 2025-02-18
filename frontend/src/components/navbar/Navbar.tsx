import { useState } from "react";
import "../../assets/css/main.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Prime Picks<span>.</span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#categories" className="dropdown-link">
            Categories ▾
          </a>
          {dropdownOpen && (
            <div className="dropdown-menu">
               <a href="#electronics">Electronics</a>
               <a href="#sports">Sports</a>
               <a href="#home-kitchen">Home & Kitchen</a>
            </div>
          )}
        </div>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="login-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default NavBar;
