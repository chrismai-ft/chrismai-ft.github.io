"use client";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trex",
    handle: "linkedin.com/in/trex",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/trex",
    handle: "@trex",
  },
  {
    label: "GitHub",
    href: "https://github.com/trex",
    handle: "github.com/trex",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact__panel glass-panel">
        <div className="contact__glow contact__glow--cyan" />
        <div className="contact__glow contact__glow--amber" />

        <div className="contact__content">
          <div className="contact__intro">
            <span className="chip">
              <span className="chip__dot" />
              Let&apos;s collaborate
            </span>
            <h2 className="contact__title">
              Let&apos;s build something <span>unforgettable</span>.
            </h2>
            <p className="contact__description">
              Ready to jam on your next launch, campaign, or product initiative? I love partnering early to co-create concepts,
              shape product strategy, and ship refined experiences that convert.
            </p>

            <div className="contact__actions">
              <a
                href="https://cal.com/hong-ngu-mai-8irvvf"
                className="button button--primary"
                target="_blank"
                rel="noreferrer"
              >
                Schedule intro call
              </a>
              <a href="mailto:chrismai.ft@gmail.com" className="button button--ghost">
                Email me
              </a>
            </div>
          </div>

          <aside className="contact__sidebar glass-panel glass-panel--tight">
            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">HQ</p>
              <p className="contact__sidebar-text">Remote — GMT+7 (Ho Chi Minh City)</p>
            </div>

            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">Preferred mediums</p>
              <p className="contact__sidebar-text">
                Async video walkthroughs, Figma comments, Loom updates, Notion hubs, and weekly stand-ups.
              </p>
            </div>

            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">Socials</p>
              <ul className="contact__socials list">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} className="contact__social-link" target="_blank" rel="noreferrer">
                      <span>{social.label}</span>
                      <span>{social.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <footer className="contact__footer">
          <p>&copy; {new Date().getFullYear()} — Built with React, Three.js, and GSAP.</p>
          <p>Open for collaborations and speaking invites.</p>
        </footer>
      </div>
    </section>
  );
}
