"use client";

const pillars = [
  {
    title: "Design systems",
    description:
      "Translating brand DNA into scalable component libraries with accessibility baked in from the start.",
  },
  {
    title: "Motion craft",
    description:
      "Pairing GSAP and WebGL storytelling to choreograph purposeful, high-impact interactions.",
  },
  {
    title: "Performance",
    description:
      "Optimising bundle strategy, code quality, and runtime budgets for consistently fast experiences.",
  },
  {
    title: "Partnership",
    description:
      "Fostering product rituals, async communication, and aligned roadmaps with cross-functional teams.",
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about__layout grid grid--featured">
        <div className="about__content">
          <div className="section__heading">
            <span className="section__eyebrow">/ About me</span>
            <h2 className="section__title">
              Shipping work that feels as good as it looks
            </h2>
            <p className="section__lead">
              I help product teams transform ambitious ideas into elegant, measurable web experiences.
              From rapid discovery to polished production builds, I bridge design and engineering to deliver outcomes that last.
            </p>
          </div>

          <div className="about__pillars grid grid--two">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="about__pillar glass-panel glass-panel--tight">
                <p className="about__pillar-title">{pillar.title}</p>
                <p className="about__pillar-copy">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="about__aside glass-panel glass-panel--tight">
          <div className="about__aside-glow" />
          <div className="about__aside-block">
            <p className="about__aside-label">Currently</p>
            <p className="about__aside-text">
              Partnering with remote-first product squads across the EU and APAC time zones.
            </p>
          </div>

          <div className="about__aside-block">
            <p className="about__aside-label">Highlights</p>
            <ul className="list list--divider about__aside-list">
              <li>Led the rebuild of an e-commerce platform that improved conversion by 24%.</li>
              <li>Delivered an award-winning 3D experience featured on Awwwards & CSSDA.</li>
              <li>Coached design and engineering teams on design system adoption and motion storytelling.</li>
            </ul>
          </div>

          <div className="about__aside-availability">
            <p className="about__aside-label">Next availability</p>
            <p className="about__aside-text">May 2025 — accepting short-term partnerships.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
