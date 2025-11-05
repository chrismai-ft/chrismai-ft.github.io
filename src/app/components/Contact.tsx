"use client";

import { useLanguage } from "./LanguageProvider";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kouma-studio",
    handle: "kouma-studio",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/kouma",
    handle: "@kouma",
  },
  {
    label: "GitHub",
    href: "https://github.com/koumastudio",
    handle: "github.com/koumastudio",
  },
];

const CONTACT_COPY = {
  en: {
    chip: "Let's collaborate",
    titleLead: "Let's build something",
    titleAccent: "unforgettable",
    description:
      "Ready to jam on your next launch, campaign, or product initiative? I love partnering early to co-create concepts, shape product strategy, and ship refined experiences that convert.",
    primaryCta: "Schedule intro call",
    secondaryCta: "Email me",
    hqLabel: "HQ",
    hqText: "Remote — GMT+7 (Ho Chi Minh City)",
    mediumsLabel: "Preferred mediums",
    mediumsText:
      "Async video walkthroughs, Figma comments, Loom updates, Notion hubs, and weekly stand-ups.",
    socialsLabel: "Socials",
    footerLeft: "Built with React, Three.js, and GSAP.",
    footerRight: "Open for collaborations and speaking invites.",
  },
  vi: {
    chip: "Cùng hợp tác",
    titleLead: "Cùng tạo nên điều",
    titleAccent: "khó quên",
    description:
      "Sẵn sàng đồng hành trong chiến dịch, sản phẩm hay lần ra mắt tiếp theo? Tôi thích tham gia từ sớm để đồng thiết kế ý tưởng, định hình chiến lược và bàn giao trải nghiệm tinh gọn, hiệu quả.",
    primaryCta: "Đặt lịch trao đổi",
    secondaryCta: "Gửi email",
    hqLabel: "Trụ sở",
    hqText: "Làm việc từ xa — GMT+7 (TP. Hồ Chí Minh)",
    mediumsLabel: "Kênh làm việc ưa thích",
    mediumsText:
      "Walkthrough dạng video async, bình luận Figma, cập nhật Loom, workspace Notion và check-in mỗi tuần.",
    socialsLabel: "Kênh liên hệ",
    footerLeft: "Xây dựng bằng React, Three.js và GSAP.",
    footerRight: "Luôn sẵn sàng hợp tác và chia sẻ tại sự kiện.",
  },
} as const;

export default function Contact() {
  const { language } = useLanguage();
  const copy = CONTACT_COPY[language];
  const currentYear = new Date().getFullYear();
  const footerLeft = `© ${currentYear} — ${copy.footerLeft}`;

  return (
    <section id="contact" className="contact section">
      <div className="contact__panel glass-panel">
        <div className="contact__glow contact__glow--cyan" />
        <div className="contact__glow contact__glow--amber" />

        <div className="contact__content">
          <div className="contact__intro">
            <span className="chip">
              <span className="chip__dot" />
              {copy.chip}
            </span>
            <h2 className="contact__title">
              {copy.titleLead} <span>{copy.titleAccent}</span>.
            </h2>
            <p className="contact__description">{copy.description}</p>

            <div className="contact__actions">
              <a
                href="https://cal.com/hong-ngu-mai-8irvvf"
                className="button button--primary"
                target="_blank"
                rel="noreferrer"
              >
                {copy.primaryCta}
              </a>
              <a
                href="mailto:hello@koumastudio.com"
                className="button button--ghost"
              >
                {copy.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="contact__sidebar glass-panel glass-panel--tight">
            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">{copy.hqLabel}</p>
              <p className="contact__sidebar-text">{copy.hqText}</p>
            </div>

            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">{copy.mediumsLabel}</p>
              <p className="contact__sidebar-text">{copy.mediumsText}</p>
            </div>

            <div className="contact__sidebar-section">
              <p className="contact__sidebar-label">{copy.socialsLabel}</p>
              <ul className="contact__socials list">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="contact__social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
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
          <p>{footerLeft}</p>
          <p>{copy.footerRight}</p>
        </footer>
      </div>
    </section>
  );
}
