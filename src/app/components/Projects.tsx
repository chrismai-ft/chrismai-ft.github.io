"use client";

import { useLanguage } from "./LanguageProvider";

const PROJECT_ITEMS = [
  {
    title: "Immersive Product Configurator",
    year: "2024",
    descriptions: {
      en: "A personalised 3D commerce experience for a lifestyle brand, complete with realtime material toggles and cinematic storytelling.",
      vi: "Trải nghiệm thương mại 3D cá nhân hóa cho thương hiệu lifestyle, hỗ trợ đổi chất liệu realtime và storyline điện ảnh.",
    },
    results: {
      en: "+24% conversion uplift after launch",
      vi: "+24% chuyển đổi sau khi ra mắt",
    },
    tags: ["Three.js", "React", "GSAP", "Headless CMS"],
    link: "#",
  },
  {
    title: "Fintech Growth Platform",
    year: "2023",
    descriptions: {
      en: "Built a modular design system and marketing engine enabling weekly campaign launches across 5 regions with zero engineering bottlenecks.",
      vi: "Xây dựng design system module và bộ máy marketing cho phép ra mắt chiến dịch hàng tuần tại 5 khu vực mà không gặp nút thắt kỹ thuật.",
    },
    results: {
      en: "Cut campaign build time from 3 days to 4 hours",
      vi: "Giảm thời gian triển khai chiến dịch từ 3 ngày xuống 4 giờ",
    },
    tags: ["Next.js", "TypeScript", "Design System", "Storyblok"],
    link: "#",
  },
  {
    title: "Gaming Community Hub",
    year: "2023",
    descriptions: {
      en: "Launched an interactive storytelling site featuring motion-led narratives, live player stats, and streaming integrations.",
      vi: "Ra mắt hub cộng đồng game với câu chuyện tương tác, số liệu người chơi realtime và tích hợp streaming.",
    },
    results: {
      en: "Featured on Awwwards & CSS Design Awards",
      vi: "Được vinh danh trên Awwwards & CSS Design Awards",
    },
    tags: ["Nuxt 3", "GSAP", "Node.js", "Supabase"],
    link: "#",
  },
  {
    title: "SaaS Onboarding Playbook",
    year: "2022",
    descriptions: {
      en: "Redesigned onboarding flows with contextual video walkthroughs, resulting in stronger activation and retention KPIs.",
      vi: "Tái thiết kế luồng onboarding cùng video hướng dẫn theo ngữ cảnh, cải thiện mạnh mẽ KPI kích hoạt và giữ chân.",
    },
    results: {
      en: "-35% time-to-value for new users",
      vi: "-35% thời gian đạt giá trị cho người dùng mới",
    },
    tags: ["React", "Framer Motion", "Segment", "Amplitude"],
    link: "#",
  },
] as const;

const PROJECTS_COPY = {
  en: {
    eyebrow: "/ Selected work",
    title: "Partnerships that blend craft and conversion",
    lead:
      "A mix of launches that combine experimentation, measurable outcomes, and memorable storytelling. Tap into the case studies below or reach out for the private reel.",
    caseLabel: "Case study",
    cta: "View details →",
  },
  vi: {
    eyebrow: "/ Dự án tiêu biểu",
    title: "Những hợp tác kết hợp giữa trải nghiệm và hiệu quả",
    lead:
      "Chuỗi sản phẩm cân bằng thử nghiệm, số liệu rõ ràng và storytelling đáng nhớ. Xem các case study bên dưới hoặc liên hệ để nhận reel riêng tư.",
    caseLabel: "Case study",
    cta: "Xem chi tiết →",
  },
} as const;

export default function Projects() {
  const { language } = useLanguage();
  const copy = PROJECTS_COPY[language];

  return (
    <section id="projects" className="projects section">
      <div className="section__heading">
        <span className="section__eyebrow">{copy.eyebrow}</span>
        <h2 className="section__title">{copy.title}</h2>
        <p className="section__lead">{copy.lead}</p>
      </div>

      <div className="projects__grid grid grid--two">
        {PROJECT_ITEMS.map((project) => (
          <article key={project.title} className="projects__card glass-panel glass-panel--tight">
            <div className="projects__meta">
              <span>{project.year}</span>
              <span>{copy.caseLabel}</span>
            </div>

            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__description">{project.descriptions[language]}</p>
            <p className="projects__result">{project.results[language]}</p>

            <div className="projects__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link} className="projects__cta">
              {copy.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
