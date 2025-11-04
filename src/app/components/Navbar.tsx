"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner glass-panel glass-panel--tight">
        <a href="#hero" className="navbar__brand">
          Trex Studio
        </a>

        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="mailto:hello@example.com" className="button button--primary">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
