"use client";
import { useEffect } from "react";

export function Starfield() {
  useEffect(() => {
    const canvasEl = document.getElementById(
      "starfield-canvas"
    ) as HTMLCanvasElement | null;
    if (!canvasEl) return;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    let width = (canvasEl.width = window.innerWidth);
    let height = (canvasEl.height = window.innerHeight);

    const stars: {
      x: number;
      y: number;
      z: number;
      size: number;
      s: number;
    }[] = [];
    const STAR_COUNT = 3500;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 500 + 200,
        size: Math.random() * 1.2 + 0.2,
        s: Math.random() * 0.2 + 0.1,
      });
    }

    function resize() {
      if (!canvasEl) return;
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function render(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      (ctx as CanvasRenderingContext2D).fillStyle = "#bd93e9ff";
      const cx = width / 2;
      const cy = height / 2;
      for (const star of stars) {
        star.z -= star.s * 2;
        if (star.z < 1) star.z = 1000;
        const k = 200 / star.z;
        const sx = star.x * k + cx;
        const sy = star.y * k + cy;
        if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue;
        const alpha = Math.min(1, (1000 - star.z) / 800 + 0.2);
        ctx.globalAlpha = alpha;
        ctx.fillRect(sx, sy, star.size, star.size);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return null;
}
