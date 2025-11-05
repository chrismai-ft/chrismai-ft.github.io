"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "./LanguageProvider";

const metrics = [
  { label: "Years crafting interfaces", value: "5+" },
  { label: "Launches led end-to-end", value: "28" },
  { label: "Client satisfaction", value: "97%" },
];

const trustedBy = ["Linear", "Webflow", "Shopify", "Airtable", "Dropbox"];

const HERO_CONTENT = {
  en: {
    availability: "Available for freelance collaborations",
    headline: ["Crafting 3D-powered", "digital product stories"],
    description:
      "I blend performant frontend engineering with cinematic motion to help modern brands stand out, tell better stories, and convert curious visitors into loyal fans.",
    primaryCta: "View projects",
    secondaryCta: "Start a project",
    metrics,
    trustedLabel: "Trusted by teams at",
    scroll: "Scroll to explore",
  },
  vi: {
    availability: "Sẵn sàng cho các dự án hợp tác tự do",
    headline: ["Kiến tạo trải nghiệm 3D", "kể câu chuyện sản phẩm số"],
    description:
      "Tôi kết hợp kỹ sư frontend hiệu năng với chuyển động điện ảnh để giúp thương hiệu nổi bật, kể chuyện hấp dẫn và biến người ghé thăm thành người ủng hộ trung thành.",
    primaryCta: "Xem dự án",
    secondaryCta: "Bắt đầu dự án",
    metrics: [
      { label: "Năm xây dựng giao diện", value: "5+" },
      { label: "Dự án dẫn dắt trọn vẹn", value: "28" },
      { label: "Mức hài lòng khách hàng", value: "97%" },
    ],
    trustedLabel: "Được tin tưởng bởi",
    scroll: "Cuộn để khám phá",
  },
} as const;

export default function Hero() {
  const component = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const copy = HERO_CONTENT[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from(".line", {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".sub-line",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.5"
        );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={component} className="hero section">
      <div className="hero__glow hero__glow--cyan" />
      <div className="hero__glow hero__glow--amber" />

      <div className="hero__content glass-panel">
        <span className="chip sub-line">
          <span className="chip__dot" />
          {copy.availability}
        </span>

        <h1 className="hero__title">
          <span className="line">{copy.headline[0]}</span>
          <span className="line hero__title-gradient">{copy.headline[1]}</span>
        </h1>

        <p className="hero__description sub-line">
          {copy.description}
        </p>

        <div className="hero__actions sub-line">
          <a href="#projects" className="button button--primary">
            {copy.primaryCta}
          </a>
          <a
            href="mailto:hello@koumastudio.com"
            className="button button--ghost"
          >
            {copy.secondaryCta}
          </a>
        </div>

        <div className="hero__metrics sub-line metrics">
          {copy.metrics.map((metric) => (
            <div key={metric.label} className="metrics__item">
              <p className="metrics__value">{metric.value}</p>
              <p className="metrics__label">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="hero__footer">
          <div className="hero__trusted">
            <span className="hero__trusted-label">{copy.trustedLabel}</span>
            <ul className="hero__trusted-list" aria-label="Clients and partners">
              {trustedBy.map((brand) => (
                <li key={brand} className="hero__trusted-item">
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__scroll">
            <span className="hero__scroll-dot" />
            {copy.scroll}
          </div>
        </div>
      </div>
    </section>
  );
}
