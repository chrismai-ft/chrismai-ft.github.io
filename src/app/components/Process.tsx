"use client";

import { useLanguage } from "./LanguageProvider";

const PROCESS_CONTENT = {
  en: {
    eyebrow: "/ Process",
    title: "A solo process built around momentum",
    lead: "Clear rhythms, thoughtful prototypes, and transparent communication keep collaborators aligned while I craft immersive experiences that feel effortless.",
    steps: [
      {
        title: "Discover & Align",
        subtitle: "Find the clarity",
        description:
          "Every project starts with focused discovery sessions to define goals, audiences, and measurable outcomes. Insights turn into a shared creative direction everyone aligns on.",
        highlights: [
          "Product & brand audit",
          "Experience mapping",
          "Success metrics",
        ],
      },
      {
        title: "Design the Narrative",
        subtitle: "Shape the experience",
        description:
          "Through rapid prototyping, we explore motion, flow, and tone to bring ideas to life. Together, we refine the story beats, art direction, and technical plan before production.",
        highlights: [
          "Moodboards & style frames",
          "Interactive prototypes",
          "Motion systems",
        ],
      },
      {
        title: "Build & Iterate",
        subtitle: "Launch with confidence",
        description:
          "I craft high-fidelity builds combining WebGL, responsive layouts, and performance best practices. Feedback loops and async reviews ensure the final experience is polished and production-ready.",
        highlights: [
          "Component-driven builds",
          "Performance tracking",
          "Seamless handoff",
        ],
      },
    ],
  },
  vi: {
    eyebrow: "/ Quy trình",
    title: "Nhịp làm việc cá nhân được thiết kế để giữ đà tiến",
    lead: "Nhịp làm việc rõ ràng, prototype kỹ lưỡng và sự minh bạch giúp từng cộng tác đồng điệu trong suốt quá trình tạo nên trải nghiệm sống động.",
    steps: [
      {
        title: "Khám phá & Đồng bộ",
        subtitle: "Tìm ra hướng đi rõ ràng",
        description:
          "Mỗi dự án bắt đầu bằng các buổi khám phá tập trung để xác định mục tiêu, đối tượng và kết quả có thể đo lường. Những insight này được chuyển hóa thành định hướng sáng tạo chung mà tất cả cùng thống nhất.",
        highlights: [
          "Đánh giá sản phẩm & thương hiệu",
          "Lập bản đồ trải nghiệm",
          "Chỉ số thành công",
        ],
      },
      {
        title: "Thiết kế Câu chuyện",
        subtitle: "Định hình trải nghiệm",
        description:
          "Thông qua các nguyên mẫu nhanh, tôi khám phá chuyển động, nhịp điệu và cảm xúc để đưa ý tưởng thành hiện thực. Cùng nhau, chúng ta tinh chỉnh nhịp kể chuyện, hướng nghệ thuật và kế hoạch kỹ thuật trước khi sản xuất.",
        highlights: [
          "Moodboard & phong cách trực quan",
          "Nguyên mẫu tương tác",
          "Hệ thống chuyển động",
        ],
      },
      {
        title: "Xây dựng & Hoàn thiện",
        subtitle: "Ra mắt với sự tự tin",
        description:
          "Tôi phát triển các bản dựng chi tiết kết hợp WebGL, bố cục responsive và chuẩn hiệu năng cao. Các vòng phản hồi và đánh giá không đồng bộ giúp đảm bảo trải nghiệm cuối cùng mượt mà và sẵn sàng ra mắt.",
        highlights: [
          "Phát triển dựa trên component",
          "Theo dõi hiệu năng",
          "Bàn giao liền mạch",
        ],
      },
    ],
  },
} as const;

export default function Process() {
  const { language } = useLanguage();
  const copy = PROCESS_CONTENT[language];

  return (
    <section id="process" className="process section">
      <div className="section__heading">
        <span className="section__eyebrow">{copy.eyebrow}</span>
        <h2 className="section__title">{copy.title}</h2>
        <p className="section__lead">{copy.lead}</p>
      </div>

      <div className="process__timeline">
        {copy.steps.map((step, index) => (
          <article
            key={step.title}
            className="process__step glass-panel glass-panel--tight"
          >
            <div className="process__marker">
              <span className="process__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="process__pulse" />
            </div>

            <div className="process__body">
              <div className="process__heading">
                <span className="process__subtitle">{step.subtitle}</span>
                <h3 className="process__title">{step.title}</h3>
              </div>

              <p className="process__description">{step.description}</p>

              <ul className="process__highlights">
                {step.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
