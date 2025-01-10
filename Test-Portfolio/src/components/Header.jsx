import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Vishnu Prasad P S</h1>
      <h2>(Front-End Developer)</h2>
      <nav className="header__nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
