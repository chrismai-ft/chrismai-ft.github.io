"use client";

type Project = {
  title: string;
  description: string;
  year: string;
  result: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Immersive Product Configurator",
    description:
      "A personalised 3D commerce experience for a lifestyle brand, complete with realtime material toggles and cinematic storytelling.",
    year: "2024",
    result: "+24% conversion uplift after launch",
    tags: ["Three.js", "React", "GSAP", "Headless CMS"],
    link: "#",
  },
  {
    title: "Fintech Growth Platform",
    description:
      "Built a modular design system and marketing engine enabling weekly campaign launches across 5 regions with zero engineering bottlenecks.",
    year: "2023",
    result: "Cut campaign build time from 3 days to 4 hours",
    tags: ["Next.js", "TypeScript", "Design System", "Storyblok"],
    link: "#",
  },
  {
    title: "Gaming Community Hub",
    description:
      "Launched an interactive storytelling site featuring motion-led narratives, live player stats, and streaming integrations.",
    year: "2023",
    result: "Featured on Awwwards & CSS Design Awards",
    tags: ["Nuxt 3", "GSAP", "Node.js", "Supabase"],
    link: "#",
  },
  {
    title: "SaaS Onboarding Playbook",
    description:
      "Redesigned onboarding flows with contextual video walkthroughs, resulting in stronger activation and retention KPIs.",
    year: "2022",
    result: "-35% time-to-value for new users",
    tags: ["React", "Framer Motion", "Segment", "Amplitude"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section__heading">
        <span className="section__eyebrow">/ Selected work</span>
        <h2 className="section__title">Partnerships that blend craft and conversion</h2>
        <p className="section__lead">
          A mix of launches that combine experimentation, measurable outcomes, and memorable storytelling.
          Tap into the case studies below or reach out for the private reel.
        </p>
      </div>

      <div className="projects__grid grid grid--two">
        {projects.map((project) => (
          <article key={project.title} className="projects__card glass-panel glass-panel--tight">
            <div className="projects__meta">
              <span>{project.year}</span>
              <span>Case study</span>
            </div>

            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__description">{project.description}</p>
            <p className="projects__result">{project.result}</p>

            <div className="projects__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link} className="projects__cta">
              View details →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
