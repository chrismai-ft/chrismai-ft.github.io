"use client";

import { useLanguage } from "./LanguageProvider";

const ABOUT_CONTENT = {
  en: {
    eyebrow: "/ About me",
    title: "Shipping work that feels as good as it looks",
    lead: "I help founders turn ambitious ideas into elegant, high-impact web experiences—bridging design and engineering from discovery to launch.",
    pillars: [
      {
        title: "Design systems",
        description:
          "Building reusable, accessible components that reflect your brand.",
      },
      {
        title: "Motion craft",
        description:
          "Using GSAP and WebGL to create smooth, eye-catching website animations that tell your brand’s story in an engaging way.",
      },
      {
        title: "Performance",
        description:
          "Optimising bundle strategy, code quality, and runtime budgets for consistently fast experiences.",
      },
      {
        title: "Partnership",
        description:
          "Fostering purposeful rituals, async communication, and aligned roadmaps with close collaborators.",
      },
    ],
    currentlyLabel: "Currently",
    currentlyText:
      "Collaborating remotely with creators across the EU and APAC time zones.",
    highlightsLabel: "Highlights",
    highlights: [
      "Engineered a lightning-fast WebGL experience that boosted average session time by 2.5x.",
      "Developed a plug-and-play animation library reused across multiple client sites.",
      "Optimized motion performance to achieve 60fps across all devices.",
    ],
    availabilityLabel: "Next availability",
    availabilityText: "May 2025 — accepting short-term partnerships.",
  },
  vi: {
    eyebrow: "/ Giới thiệu",
    title: "Bàn giao sản phẩm vừa đẹp mắt vừa hiệu quả",
    lead: "Tôi giúp các nhà sáng lập biến ý tưởng táo bạo thành trải nghiệm web tinh tế và hiệu quả — kết nối giữa thiết kế và kỹ thuật từ giai đoạn khám phá đến khi ra mắt.",
    pillars: [
      {
        title: "Hệ thống thiết kế",
        description:
          "Xây dựng các thành phần có thể tái sử dụng, dễ truy cập và phản ánh đúng bản sắc thương hiệu của bạn.",
      },
      {
        title: "Nghệ thuật chuyển động",
        description:
          "Sử dụng GSAP và WebGL để tạo ra các hiệu ứng mượt mà, bắt mắt, kể câu chuyện thương hiệu một cách sinh động.",
      },
      {
        title: "Hiệu suất",
        description:
          "Tối ưu chiến lược gói, chất lượng mã và ngân sách runtime để mang lại trải nghiệm nhanh chóng, ổn định.",
      },
      {
        title: "Hợp tác",
        description:
          "Xây dựng quy trình làm việc hiệu quả, giao tiếp linh hoạt và lộ trình thống nhất cùng các cộng sự.",
      },
    ],
    currentlyLabel: "Hiện tại",
    currentlyText:
      "Hợp tác từ xa với nhà sáng lập và nhà sáng tạo tại EU và APAC.",
    highlightsLabel: "Điểm nhấn",
    highlights: [
      "Phát triển trải nghiệm WebGL tốc độ cao giúp tăng thời gian phiên trung bình lên gấp 2,5 lần.",
      "Xây dựng thư viện hoạt ảnh plug-and-play được tái sử dụng trên nhiều trang web của khách hàng.",
      "Tối ưu hiệu suất chuyển động để đạt 60 khung hình/giây trên mọi thiết bị.",
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
              <div
                key={pillar.title}
                className="about__pillar glass-panel glass-panel--tight"
              >
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
