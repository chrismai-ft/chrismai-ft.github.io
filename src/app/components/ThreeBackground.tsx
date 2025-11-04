"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const TORUS_POSITION_DAMPING = 0.08;

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef(new THREE.Vector2());
  const targetRef = useRef(new THREE.Vector3());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const torusGeometry = new THREE.TorusKnotGeometry(1, 0.35, 200, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1a1a1a"),
      roughness: 0.1,
      metalness: 0.9,
      emissive: new THREE.Color("#0F9BD8"),
      emissiveIntensity: 0.25,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
    const keyLight = new THREE.PointLight("#0EA5E9", 1.4);
    keyLight.position.set(10, 10, 10);
    const fillLight = new THREE.PointLight("#ffffff", 1);
    fillLight.position.set(-10, -10, 5);

    scene.add(ambientLight, keyLight, fillLight);

    const clock = new THREE.Clock();
    let animationFrameId = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      if (!clientWidth || !clientHeight) return;

      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const handlePointerMove = (event: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerRef.current.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      const delta = clock.getDelta();

      torus.rotation.x += delta * 0.3;
      torus.rotation.y += delta * 0.2;

      targetRef.current.set(pointerRef.current.x * 1.5, pointerRef.current.y * 1, 0);
      torus.position.lerp(targetRef.current, TORUS_POSITION_DAMPING);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
