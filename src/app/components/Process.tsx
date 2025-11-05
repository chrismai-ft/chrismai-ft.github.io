"use client";

import { useLanguage } from "./LanguageProvider";

const PROCESS_CONTENT = {
  en: {
    eyebrow: "/ Process",
    title: "A partnership cadence built around momentum",
    lead:
      "Clear rhythms, thoughtful prototypes, and transparent collaboration keep teams aligned while we craft immersive experiences that feel effortless.",
    steps: [
      {
        title: "Discover & align",
        subtitle: "Unearth the signal",
        description:
          "We kick off with rapid discovery workshops to map objectives, audiences, and success metrics. Research insights are distilled into a shared creative brief.",
        highlights: ["Product & brand audit", "Experience mapping", "Success measures"],
      },
      {
        title: "Design the narrative",
        subtitle: "Prototype the feel",
        description:
          "Low-friction prototypes explore motion, pacing, and tone. Collaboratively we lock the story beats, art direction, and technical approach before production.",
        highlights: ["Moodboards & tone boards", "Interactive prototypes", "Motion language"],
      },
      {
        title: "Build & iterate",
        subtitle: "Ship with confidence",
        description:
          "High fidelity builds layer WebGL, responsive layout, and performance guardrails. We iterate with async reviews until the experience is production-ready.",
        highlights: ["Component-driven builds", "Performance dashboards", "Tested handoff"],
      },
    ],
  },
  vi: {
    eyebrow: "/ Quy trình",
    title: "Nhịp hợp tác được thiết kế để giữ đà tiến",
    lead:
      "Nhịp làm việc rõ ràng, prototype kỹ lưỡng và sự minh bạch giúp cả đội đồng điệu trong suốt quá trình tạo nên trải nghiệm sống động.",
    steps: [
      {
        title: "Khám phá & thống nhất",
        subtitle: "Tìm đúng tín hiệu",
        description:
          "Bắt đầu với workshop khám phá nhanh để xác định mục tiêu, đối tượng và chỉ số thành công. Insight nghiên cứu được chắt lọc thành bản brief chung.",
        highlights: ["Đánh giá sản phẩm & thương hiệu", "Lập bản đồ trải nghiệm", "Đo lường mục tiêu"],
      },
      {
        title: "Thiết kế câu chuyện",
        subtitle: "Prototype cảm xúc",
        description:
          "Prototype nhẹ thử nghiệm chuyển động, nhịp điệu và tông giọng. Cùng nhau chốt mạch chuyện, định hướng hình ảnh và hướng triển khai kỹ thuật trước khi sản xuất.",
        highlights: ["Moodboard & tone board", "Prototype tương tác", "Ngôn ngữ chuyển động"],
      },
      {
        title: "Xây dựng & tinh chỉnh",
        subtitle: "Tự tin bàn giao",
        description:
          "Bản build fidelity cao kết hợp WebGL, layout responsive và hàng rào hiệu năng. Vòng lặp review async tiếp tục cho đến khi trải nghiệm sẵn sàng ra mắt.",
        highlights: ["Xây dựng theo component", "Dashboard hiệu năng", "Quy trình bàn giao kiểm thử"],
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
          <article key={step.title} className="process__step glass-panel glass-panel--tight">
            <div className="process__marker">
              <span className="process__index">{String(index + 1).padStart(2, "0")}</span>
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
