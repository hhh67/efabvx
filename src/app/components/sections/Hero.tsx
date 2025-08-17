"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactNode, useMemo } from "react";
import { Starfield } from "../visuals/Starfield";

// Lazy load globe (no SSR)
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

interface HeroProps {
  heading: ReactNode;
  subheading?: ReactNode;
  globeConfig: any;
}

export function Hero({ heading, subheading, globeConfig }: HeroProps) {
  // Provide stable config reference
  const config = useMemo(() => globeConfig, [globeConfig]);
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden text-white">
      {/* Star / space background layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Starfield />
        <canvas
          id="starfield-canvas"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(40,70,160,0.15),transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(150,50,200,0.08),transparent_65%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.55)_70%)]" />
      </div>

      {/* Left text content */}
      <div className="relative z-10 max-w-2xl px-6 py-16 flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-300 max-w-xl"
          >
            {subheading}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-md border border-slate-600 hover:border-slate-400 text-sm font-semibold transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Right Globe */}
      <div className="relative flex-1 min-h-[520px] h-full w-full lg:w-[55%] xl:w-[50%] z-10">
        <div className="absolute inset-0">
          <World globeConfig={config} />
        </div>
      </div>
    </section>
  );
}
