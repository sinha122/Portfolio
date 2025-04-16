import React from "react";
import "./Navbar.css";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#">
          <img src="images/logo.png" alt="Logo" className="logo" />
        </a>
        <span className="logo-text">Sumit Sinha</span>
      </div>
      <ul className="nav-links">
        <li><a href="#" onClick={() => onNavigate("home")}>Home</a></li>
        <li><a href="#" onClick={() => onNavigate("about")}>About</a></li>
        <li><a href="#" onClick={() => onNavigate("projects")}>Projects</a></li>
        <li><a href="#" onClick={() => onNavigate("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
