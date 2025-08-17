"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactNode, useMemo, useState } from "react";
import { Typewriter } from "../ui/Typewriter";

function TypewriterHeading() {
  const [firstDone, setFirstDone] = useState(false);
  // レイアウトシフト防止: 最終テキスト全体の不可視プレースホルダで幅確保
  return (
    <div className="relative inline-block">
      <span
        className="invisible pointer-events-none select-none block leading-tight"
        aria-hidden="true"
      >
        {"Hello, I'm"}
        <br />
        {"Hideya Hoshino"}
      </span>
      <div className="absolute inset-0 leading-tight">
        {!firstDone ? (
          <>
            <Typewriter
              text="Hello, I'm"
              speed={50}
              startDelay={150}
              showCaretWhileTyping
              blinkOnDone={false}
              hideCaretOnDone
              onDone={() => setFirstDone(true)}
            />
            <br />
          </>
        ) : (
          <>
            <span className="inline-block">Hello, I'm</span>
            <br />
          </>
        )}
        {firstDone && (
          <Typewriter
            text="Hideya Hoshino"
            speed={55}
            startDelay={50}
            showCaretWhileTyping
            blinkOnDone
            onDone={() => {
              try {
                window.dispatchEvent(new CustomEvent("hero-typing-complete"));
              } catch {}
            }}
          />
        )}
      </div>
    </div>
  );
}

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
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Globe Background - PC: Right side, Mobile: Center */}
      <div className="absolute inset-0 lg:left-1/2 flex justify-center items-center">
        <div className="w-[min(90vw,90vh)] h-[min(90vw,90vh)] lg:w-[min(100vh,60vw)] lg:h-[min(100vh,60vw)]">
          <World globeConfig={config} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Text content - PC: Left side, Mobile: Center with offset */}
        <div
          className="w-full lg:w-1/2 flex flex-col gap-8 max-w-[640px] lg:max-w-none 
                        lg:items-start items-center text-left
                        lg:translate-y-0 translate-y-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight font-libre w-full text-left"
          >
            {/* タイピング: "Hello, I'm" + 改行 + 名前 */}
            <TypewriterHeading />
          </motion.h1>
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-300 font-libre w-full text-left"
            >
              {subheading}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-4 w-full justify-start"
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
      </div>
    </section>
  );
}
