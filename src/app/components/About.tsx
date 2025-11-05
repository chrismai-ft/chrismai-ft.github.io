"use client";

import { useLanguage } from "./LanguageProvider";

const ABOUT_CONTENT = {
  en: {
    eyebrow: "/ About me",
    title: "Shipping work that feels as good as it looks",
    lead:
      "I help product teams transform ambitious ideas into elegant, measurable web experiences. From rapid discovery to polished production builds, I bridge design and engineering to deliver outcomes that last.",
    pillars: [
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
    ],
    currentlyLabel: "Currently",
    currentlyText:
      "Partnering with remote-first product squads across the EU and APAC time zones.",
    highlightsLabel: "Highlights",
    highlights: [
      "Led the rebuild of an e-commerce platform that improved conversion by 24%.",
      "Delivered an award-winning 3D experience featured on Awwwards & CSSDA.",
      "Coached design and engineering teams on design system adoption and motion storytelling.",
    ],
    availabilityLabel: "Next availability",
    availabilityText: "May 2025 — accepting short-term partnerships.",
  },
  vi: {
    eyebrow: "/ Giới thiệu",
    title: "Bàn giao sản phẩm vừa đẹp mắt vừa hiệu quả",
    lead:
      "Tôi giúp các đội sản phẩm biến ý tưởng táo bạo thành trải nghiệm web tinh gọn, đo lường được. Từ giai đoạn khám phá nhanh đến triển khai hoàn thiện, tôi kết nối thiết kế và kỹ thuật để tạo ra giá trị bền vững.",
    pillars: [
      {
        title: "Hệ thống thiết kế",
        description:
          "Chuyển ADN thương hiệu thành thư viện thành phần mở rộng, tích hợp khả năng truy cập ngay từ đầu.",
      },
      {
        title: "Chuyển động & kể chuyện",
        description:
          "Kết hợp GSAP và WebGL để dàn dựng chuyển động có chủ đích, tạo nên trải nghiệm giàu cảm xúc.",
      },
      {
        title: "Hiệu năng",
        description:
          "Tối ưu chiến lược bundle, chất lượng mã và ngân sách runtime để sản phẩm luôn mượt mà.",
      },
      {
        title: "Đối tác",
        description:
          "Xây dựng nhịp làm việc chung, giao tiếp async và lộ trình thống nhất với các nhóm đa chức năng.",
      },
    ],
    currentlyLabel: "Hiện tại",
    currentlyText:
      "Hợp tác với các đội sản phẩm remote-first tại EU và APAC.",
    highlightsLabel: "Điểm nhấn",
    highlights: [
      "Dẫn dắt tái xây dựng nền tảng e-commerce, tăng chuyển đổi 24%.",
      "Triển khai trải nghiệm 3D đoạt giải, được vinh danh trên Awwwards & CSSDA.",
      "Huấn luyện đội ngũ về hệ thống thiết kế và storytelling bằng chuyển động.",
    ],
    availabilityLabel: "Thời gian trống tiếp theo",
    availabilityText: "Tháng 5/2025 — nhận hợp tác ngắn hạn.",
  },
} as const;

export default function About() {
  const { language } = useLanguage();
  const copy = ABOUT_CONTENT[language];

  return (
    <section id="about" className="about section">
      <div className="about__layout grid grid--featured">
        <div className="about__content">
          <div className="section__heading">
            <span className="section__eyebrow">{copy.eyebrow}</span>
            <h2 className="section__title">{copy.title}</h2>
            <p className="section__lead">{copy.lead}</p>
          </div>

          <div className="about__pillars grid grid--two">
            {copy.pillars.map((pillar) => (
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
            <p className="about__aside-label">{copy.currentlyLabel}</p>
            <p className="about__aside-text">{copy.currentlyText}</p>
          </div>

          <div className="about__aside-block">
            <p className="about__aside-label">{copy.highlightsLabel}</p>
            <ul className="list list--divider about__aside-list">
              {copy.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="about__aside-availability">
            <p className="about__aside-label">{copy.availabilityLabel}</p>
            <p className="about__aside-text">{copy.availabilityText}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
