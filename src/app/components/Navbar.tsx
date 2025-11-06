"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const NAV_ITEMS = [
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "process", href: "#process" },
  { id: "contact", href: "#contact" },
] as const;

const SECONDARY_LINKS = [
  { id: "playground", href: "/playground" },
  { id: "showcase", href: "/showcase" },
  { id: "crypto", href: "/crypto" },
] as const;

const NAV_CONTENT = {
  en: {
    links: {
      about: "About",
      skills: "Skills",
      process: "Process",
      contact: "Contact",
    },
    secondary: {
      playground: "Playground",
      showcase: "Showcase",
      crypto: "Crypto Stream",
    },
    resume: "View résumé",
    cta: "Let's talk",
    langButtonLabel: "VI",
    langButtonAria: "Switch to Vietnamese",
  },
  vi: {
    links: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      process: "Quy trình",
      contact: "Liên hệ",
    },
    secondary: {
      playground: "Playground",
      showcase: "Showcase",
      crypto: "Crypto Stream",
    },
    resume: "Xem CV",
    cta: "Kết nối",
    langButtonLabel: "EN",
    langButtonAria: "Chuyển sang tiếng Anh",
  },
} as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const handleLanguageToggle = () => {
    toggleLanguage();
    setIsMenuOpen(false);
  };

  const navContent = NAV_CONTENT[language];

  const headerClass = ["navbar"];
  if (isScrolled) {
    headerClass.push("navbar--scrolled");
  }

  return (
    <header className={headerClass.join(" ")}>
      <nav className="navbar__inner glass-panel glass-panel--tight">
        <a href="#hero" className="navbar__brand">
          Kouma Studio
        </a>

        <div className="navbar__links">
          {NAV_ITEMS.map((link) => (
            <a key={link.id} href={link.href} className="navbar__link">
              {navContent.links[link.id]}
            </a>
          ))}
          {SECONDARY_LINKS.map((link) => (
            <a key={link.id} href={link.href} className="navbar__link navbar__link--secondary">
              {navContent.secondary[link.id]}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__lang"
            onClick={handleLanguageToggle}
            aria-label={navContent.langButtonAria}
          >
            {navContent.langButtonLabel}
          </button>
          <a
            href="https://drive.google.com"
            className="button button--ghost navbar__resume"
            target="_blank"
            rel="noreferrer"
          >
            {navContent.resume}
          </a>
          <a
            href="mailto:hello@koumastudio.com"
            className="button button--primary navbar__cta"
          >
            {navContent.cta}
          </a>
        </div>

        <button
          type="button"
          className="navbar__lang navbar__lang--mobile"
          onClick={handleLanguageToggle}
          aria-label={navContent.langButtonAria}
        >
          {navContent.langButtonLabel}
        </button>

        <button
          type="button"
          className={`navbar__toggle ${
            isMenuOpen ? "navbar__toggle--open" : ""
          }`}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-drawer"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="navbar-drawer"
        className={`navbar__drawer ${isMenuOpen ? "navbar__drawer--open" : ""}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="navbar__drawer-content glass-panel glass-panel--tight"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="navbar__drawer-links">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="navbar__drawer-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {navContent.links[link.id]}
              </a>
            ))}
            {SECONDARY_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="navbar__drawer-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {navContent.secondary[link.id]}
              </a>
            ))}
          </div>

          <div className="navbar__drawer-actions">
            <button
              type="button"
              className="navbar__drawer-lang"
              onClick={handleLanguageToggle}
              aria-label={navContent.langButtonAria}
            >
              {navContent.langButtonLabel}
            </button>

            <a
              href="https://drive.google.com"
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              {navContent.resume}
            </a>
            <a
              href="mailto:hello@koumastudio.com"
              className="button button--primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {navContent.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
