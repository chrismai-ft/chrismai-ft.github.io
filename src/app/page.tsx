"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Smooth scrolling setup
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger animations for sections
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="portfolio">
      <div className="portfolio__background">
        <ThreeBackground />
        <div className="portfolio__overlay portfolio__overlay--gradient" />
        <div className="portfolio__overlay portfolio__overlay--noise" />
      </div>

      <Navbar />

      <main className="portfolio__main">
        <Hero />
        <div className="portfolio__sections">
          <About />
          <Skills />
          <Process />
          {/* <Projects /> */}
          <Contact />
        </div>
      </main>
    </div>
  );
}
