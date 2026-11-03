import React, { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    const onClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isMenuOpen]);

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
            ref={burgerRef}
            className={`header__burger ${isMenuOpen ? "header__burger--open" : ""}`}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "EXPLORE"}
          </button>
        </nav>
      </div>

      <div
        className={`header__mobile-overlay ${isMenuOpen ? "header__mobile-overlay--open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      ></div>

      <div
        ref={menuRef}
        className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
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
