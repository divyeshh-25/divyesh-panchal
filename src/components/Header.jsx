import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="main-container header__content">
        <a href="#home" className="header__logo">
          Divyesh<span>.</span>
        </a>

        <nav className="header__nav">
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary btn--sm header__cta">
            Let&rsquo;s Talk
          </a>
          <button
            className={`header__burger ${isMenuOpen ? "header__burger--open" : ""}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <div className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="header__mobile-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary header__mobile-cta" onClick={closeMenu}>
          Let&rsquo;s Talk
        </a>
      </div>
    </header>
  );
};

export default Header;
