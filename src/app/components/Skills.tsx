"use client";

const NuxtIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
  >
    <path
      fill="currentColor"
      d="M11.996 1.625l-9.37 16.232h18.74zM4.12 18.293L12 3.8l7.88 14.493H4.12zm13.13-1.493l-5.25-9.094l-5.25 9.094h10.5z"
    />
  </svg>
);

const ReactIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
  >
    <path
      fill="currentColor"
      d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999s4.477 9.999 9.999 9.999s9.999-4.477 9.999-9.999s-4.477-9.999-9.999-9.999zm0 18.24a8.241 8.241 0 1 1 0-16.482a8.241 8.241 0 0 1 0 16.482z"
    />
    <path fill="currentColor" d="M12.001 8.9a3.1 3.1 0 1 0 0 6.2a3.1 3.1 0 0 0 0-6.2z" />
    <path
      fill="currentColor"
      d="m16.035 17.513l-1.88-1.085a8.203 8.203 0 0 1-4.306 0l-1.88 1.085a10.005 10.005 0 0 0 8.066 0zM7.965 6.487l1.88 1.085a8.203 8.203 0 0 1 4.306 0l1.88-1.085a10.005 10.005 0 0 0-8.066 0z"
    />
    <path
      fill="currentColor"
      d="M19.394 13.917a10.04 10.04 0 0 0 0-3.834l1.63-1.026a11.95 11.95 0 0 1 0 5.886l-1.63-1.026zm-14.788 0l-1.63 1.026a11.95 11.95 0 0 1 0-5.886l1.63 1.026a10.04 10.04 0 0 0 0 3.834z"
    />
  </svg>
);

const NodeJSIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
  >
    <path
      fill="currentColor"
      d="M12.001 0 C9.37 0 5.925 1.025 5.925 5.056 l 0 11.031 C 5.925 19.975 9.37 21.088 12.001 21.088 c 2.63 0 6.075-1.113 6.075-5.001 V 5.056 C 18.076 1.025 14.63 0 12.001 0 Z M 12.001 1.088 c 2.063 0 4.988 0.7 4.988 3.969 V 16.03 c 0 3.269-2.925 4.056-4.988 4.056 c-2.063 0-4.988-0.788-4.988-4.056 V 5.056 c 0-3.269 2.925-3.969 4.988-3.969 Z m -2.25 10.7 l -0.262 1.481 c -0.163 0.9 -0.925 1.581-1.838 1.581 c -1.025 0-1.85-0.825-1.85-1.85 c 0-1.025 0.825-1.85 1.85-1.85 c 0.531 0 1.006 0.225 1.35 0.587 l 0.237-1.331 c -0.463-0.237-0.963-0.375-1.5-0.375 c -1.9 0-3.431 1.531-3.431 3.431 c 0 1.9 1.531 3.431 3.431 3.431 c 1.8 0 3.269-1.4 3.375-3.131 l 0.337-1.925 L 9.751 11.788 Z M 16.513 13.919 l -1.187 2.063 c -0.3 0.525-0.85 0.838-1.45 0.838 c -0.95 0-1.725-0.775-1.725-1.725 s 0.775-1.725 1.725-1.725 c 0.488 0 0.938 0.2 1.275 0.525 L 15.35 12.5 c -0.45-0.337-1.013-0.537-1.637-0.537 c -1.825 0-3.313 1.488-3.313 3.313 c 0 1.825 1.488 3.313 3.313 3.313 c 1.637 0 3.012-1.2 3.25-2.763 l 1.425-2.462 l -1.538-0.907 Z"
    />
  </svg>
);

const PHPIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
  >
    <path
      fill="currentColor"
      d="M12 1.86a10.12 10.12 0 0 0-9.84 10.14a10.12 10.12 0 0 0 10.14 9.84a10.12 10.12 0 0 0 9.84-10.14A10.12 10.12 0 0 0 12 1.86zm-.43 4.1h2.7v2.3h-2.7zm2.7 4.17h2.7v2.3h-2.7zm-4.31-2.03l2.58-.02h.02c.98 0 1.55.57 1.47 1.5l-.26 3.12c-.08.97-.69 1.5-1.67 1.5l-2.12.02zm-3.04 1.93l2.58-.02h.02c.98 0 1.55.57 1.47 1.5l-.26 3.12c-.08.97-.69 1.5-1.67 1.5l-2.12.02z"
    />
  </svg>
);

const skills = [
  {
    name: "Frontend engineering",
    description:
      "Component-driven builds with accessibility-first TypeScript and best-in-class performance budgets.",
    tools: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"],
    icon: <ReactIcon />,
  },
  {
    name: "Creative web & WebGL",
    description:
      "Story-driven landing pages and immersive product demos powered by Three.js, shaders, and motion design.",
    tools: ["Three.js", "GSAP", "Nuxt 3", "Lenis", "WebGL"],
    icon: <NuxtIcon />,
  },
  {
    name: "Backend & APIs",
    description:
      "Building resilient Node-based services, serverless functions, and GraphQL/REST integrations.",
    tools: ["Node.js", "Express", "Supabase", "GraphQL", "AWS"],
    icon: <NodeJSIcon />,
  },
  {
    name: "Platforms & CMS",
    description:
      "Empowering content teams with flexible headless workflows, automations, and legacy support.",
    tools: ["Contentful", "Sanity", "Shopify", "WordPress", "PHP"],
    icon: <PHPIcon />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section__heading">
        <span className="section__eyebrow">/ My toolkit</span>
        <h2 className="section__title">A hybrid of engineering and creative code</h2>
        <p className="section__lead">
          From design systems to realtime canvases, here is what I lean on to ship polished, performant work.
        </p>
      </div>

      <div className="skills__grid grid grid--two">
        {skills.map((skill) => (
          <article key={skill.name} className="skills__card glass-panel glass-panel--tight">
            <div className="skills__card-top">
              <div className="skills__icon-wrapper">{skill.icon}</div>
              <span className="skills__label">Core stack</span>
            </div>
            <h3 className="skills__title">{skill.name}</h3>
            <p className="skills__description">{skill.description}</p>

            <div className="skills__tools">
              {skill.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
