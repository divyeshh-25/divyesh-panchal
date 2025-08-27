import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={() => (window.location.href = "/")}>
          <div className="header__logo-img-cont">
            <img
              src="assets/png/divyesh-panchal-logo.png"
              alt="Divyesh Panchal Logo"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Divyesh Panchal</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="/" className="header__link">
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">
                About
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src="assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${isMenuOpen ? "d-none" : ""}`}
            />
            <img
              src="assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${isMenuOpen ? "" : "d-none"}`}
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${isMenuOpen ? "header__sm-menu--active" : ""}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="/">Home</a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="#about">About</a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="#projects">Projects</a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
