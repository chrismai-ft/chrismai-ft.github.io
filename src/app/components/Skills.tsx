"use client";

import { useLanguage } from "./LanguageProvider";

const NuxtIcon = () => (
  <svg
    role="img"
    className="skills__icon"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z"
      fill="#00DC82"
    />
  </svg>
);

const ReactIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="-10.5 -9.45 21 18.9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
  >
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NodeJSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="skills__icon"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="a"
        x1="1.44541"
        x2="22.55459"
        y1="7.07831"
        y2="16.92169"
      >
        <stop offset="0" stopColor="#fff" stopOpacity="0.2" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <title />
    <path
      d="M12,24a.49971.49971,0,0,1-.25049-.06738l-3.0166-1.7461a.4999.4999,0,0,1,.501-.86523L12,22.92188l9-5.21V6.28809l-9-5.21-9,5.21V17.71191l.81006.46875A4.63054,4.63054,0,0,0,6.5,19c.4917,0,1,0,1-2V7.5a.5.5,0,0,1,1,0V17c0,1.55859-.24219,3-2,3a5.67958,5.67958,0,0,1-3.19971-.959l-1.05078-.6084A.49912.49912,0,0,1,2,18V6a.49912.49912,0,0,1,.24951-.43262l9.5-5.5a.4993.4993,0,0,1,.501,0l9.5,5.5A.49912.49912,0,0,1,22,6V18a.49912.49912,0,0,1-.24951.43262l-9.5,5.5A.49971.49971,0,0,1,12,24Z"
      fill="#388e3c"
    />
    <path
      d="M14,17c-2.20557,0-4-1.3457-4-3a.5.5,0,0,1,1,0c0,1.084,1.374,2,3,2s3-.916,3-2c0-.71-1.23193-1.5-3-1.5-2.24316,0-4-1.09766-4-2.5,0-1.6543,1.79443-3,4-3s4,1.3457,4,3a.5.5,0,0,1-1,0c0-1.084-1.374-2-3-2s-3,.916-3,2c0,.71,1.23193,1.5,3,1.5,2.24316,0,4,1.09766,4,2.5C18,15.6543,16.20557,17,14,17Z"
      fill="#388e3c"
    />
    <path
      d="M12,24a.49971.49971,0,0,1-.25049-.06738l-3.0166-1.7461a.4999.4999,0,0,1,.501-.86523L12,22.92188l9-5.21V6.28809l-9-5.21-9,5.21V17.71191l.81006.46875A4.63054,4.63054,0,0,0,6.5,19c.4917,0,1,0,1-2V7.5a.5.5,0,0,1,1,0V17c0,1.55859-.24219,3-2,3a5.67958,5.67958,0,0,1-3.19971-.959l-1.05078-.6084A.49912.49912,0,0,1,2,18V6a.49912.49912,0,0,1,.24951-.43262l9.5-5.5a.4993.4993,0,0,1,.501,0l9.5,5.5A.49912.49912,0,0,1,22,6V18a.49912.49912,0,0,1-.24951.43262l-9.5,5.5A.49971.49971,0,0,1,12,24Z"
      fill="url(#a)"
    />
    <path
      d="M14,17c-2.20557,0-4-1.3457-4-3a.5.5,0,0,1,1,0c0,1.084,1.374,2,3,2s3-.916,3-2c0-.71-1.23193-1.5-3-1.5-2.24316,0-4-1.09766-4-2.5,0-1.6543,1.79443-3,4-3s4,1.3457,4,3a.5.5,0,0,1-1,0c0-1.084-1.374-2-3-2s-3,.916-3,2c0,.71,1.23193,1.5,3,1.5,2.24316,0,4,1.09766,4,2.5C18,15.6543,16.20557,17,14,17Z"
      fill="url(#a)"
    />
  </svg>
);

const PHPIcon = () => (
  <svg
    className="skills__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -1 100 50"
    fill="#ffffff"
  >
    <path d="m7.579 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053" />
    <path d="m41.093 0 7.314 0-2.067 10.123 6.572 0c3.604 0.071 6.289 0.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649-7.42 0 3.392-16.854c0.353-1.767 0.247-3.021-0.318-3.763-0.565-0.742-1.784-1.113-3.657-1.113l-5.883-0.053-4.346 21.783-7.314 0 7.632-38.054 0 0" />
    <path d="m70.412 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053" />
  </svg>
);

const SKILL_ICONS = {
  frontend: <ReactIcon />,
  creative: <NuxtIcon />,
  backend: <NodeJSIcon />,
  platforms: <PHPIcon />,
};

const SKILL_CONTENT = {
  en: {
    eyebrow: "/ My toolkit",
    title: "A hybrid of engineering and creative code",
    lead: "From design systems to realtime canvases, here is what I lean on to ship polished, performant work.",
    label: "Core stack",
    items: [
      {
        key: "frontend",
        name: "Frontend Engineering",
        description:
          "Crafting component-driven interfaces with accessibility-first TypeScript and meticulous performance budgets.",
        tools: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"],
      },
      {
        key: "creative",
        name: "Creative Web & WebGL",
        description:
          "Designing story-driven landing pages and immersive product demos with Three.js, shaders, and expressive motion design.",
        tools: ["Three.js", "GSAP", "Nuxt 3", "Lenis", "WebGL"],
      },
      {
        key: "backend",
        name: "Backend & APIs",
        description:
          "Developing resilient Go, Laravel, and Node services with serverless architecture, observability, and secure data pipelines.",
        tools: ["Go", "Laravel", "Node.js", "PostgreSQL", "MySQL", "Supabase"],
      },
      {
        key: "platforms",
        name: "Platforms & CMS",
        description:
          "Building custom headless platforms that automate content workflows, integrate legacy systems, and scale effortlessly.",
        tools: ["Laravel", "Nuxt 3", "MySQL", "Redis", "REST API"],
      },
    ],
  },
  vi: {
    eyebrow: "/ Công cụ",
    title: "Sự kết hợp giữa kỹ thuật và sáng tạo",
    lead: "Từ hệ thống thiết kế đến trải nghiệm realtime, đây là bộ công cụ tôi sử dụng để xây dựng sản phẩm tinh gọn và hiệu năng.",
    label: "Ngăn xếp chính",
    items: [
      {
        key: "frontend",
        name: "Kỹ sư Frontend",
        description:
          "Phát triển dựa trên component với TypeScript ưu tiên truy cập và ngân sách hiệu năng chặt chẽ.",
        tools: ["React", "Next.js", "TypeScript", "Vite", "Tailwind"],
      },
      {
        key: "creative",
        name: "Web sáng tạo & WebGL",
        description:
          "Landing page kể chuyện và demo sản phẩm sống động nhờ Three.js, shader và motion tinh tế.",
        tools: ["Three.js", "GSAP", "Nuxt 3", "Lenis", "WebGL"],
      },
      {
        key: "backend",
        name: "Backend & API",
        description:
          "Xây dựng dịch vụ Go, Laravel, Node vững chắc với serverless, giám sát và luồng dữ liệu an toàn.",
        tools: ["Go", "Laravel", "Node.js", "PostgreSQL", "MySQL", "Supabase"],
      },
      {
        key: "platforms",
        name: "Nền tảng & CMS",
        description:
          "Trao quyền cho quy trình nội dung bằng workflow headless linh hoạt, tự động và hỗ trợ legacy.",
        tools: ["Laravel", "Nuxt 3", "MySQL", "Redis", "REST API"],
      },
    ],
  },
} as const;

export default function Skills() {
  const { language } = useLanguage();
  const copy = SKILL_CONTENT[language];

  return (
    <section id="skills" className="skills section">
      <div className="section__heading">
        <span className="section__eyebrow">{copy.eyebrow}</span>
        <h2 className="section__title">{copy.title}</h2>
        <p className="section__lead">{copy.lead}</p>
      </div>

      <div className="skills__grid grid grid--two">
        {copy.items.map((skill) => (
          <article
            key={skill.name}
            className="skills__card glass-panel glass-panel--tight"
          >
            <div className="skills__card-top">
              <div className="skills__icon-wrapper">
                {SKILL_ICONS[skill.key as keyof typeof SKILL_ICONS]}
              </div>
              <span className="skills__label">{copy.label}</span>
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
