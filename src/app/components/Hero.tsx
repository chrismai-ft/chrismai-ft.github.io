"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const metrics = [
  { label: "Years crafting interfaces", value: "5+" },
  { label: "Launches led end-to-end", value: "28" },
  { label: "Client satisfaction", value: "97%" },
];

export default function Hero() {
  const component = useRef<HTMLDivElement>(null);

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
          Available for freelance collaborations
        </span>

        <h1 className="hero__title">
          <span className="line">Crafting 3D-powered</span>
          <span className="line hero__title-gradient">
            digital product stories
          </span>
        </h1>

        <p className="hero__description sub-line">
          I blend performant frontend engineering with cinematic motion to help
          modern brands stand out, tell better stories, and convert curious
          visitors into loyal fans.
        </p>

        <div className="hero__actions sub-line">
          <a href="#projects" className="button button--primary">
            View projects
          </a>
          <a
            href="mailto:hello@example.com"
            className="button button--ghost"
          >
            Start a project
          </a>
        </div>

        <div className="hero__metrics sub-line metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="metrics__item">
              <p className="metrics__value">{metric.value}</p>
              <p className="metrics__label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
