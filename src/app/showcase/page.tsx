"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function ShowcasePage() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (!ctx) return;
    if (canvas.current) {
      canvas.current.width = width;
      canvas.current.height = height;
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
      const position = { x: width / 2, y: height / 2 };
    };

    draw();
  }, []);

  return (
    <section className="showcase " style={{ background: "white" }}>
      <canvas ref={canvas}></canvas>
    </section>
  );
}
