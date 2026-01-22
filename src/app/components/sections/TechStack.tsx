"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  SiAmazonwebservices,
  SiAndroidstudio,
  SiApple,
  SiBiome,
  SiBun,
  SiClaude,
  SiCocoapods,
  SiDatadog,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiJira,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiObsidian,
  SiOpenai,
  SiOpenapiinitiative,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiRedis,
  SiRender,
  SiRollupdotjs,
  SiSentry,
  SiSlack,
  SiStorybook,
  SiSwagger,
  SiSwift,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
  SiXcode,
  SiYarn,
} from "react-icons/si";

type SkillItem = { name: string; icon: ReactNode };
type StackGroup = { group: string; skills: SkillItem[] };

// Tooltip (Portal) コンポーネント: 親の overflow に影響されず表示
const IconTooltip: React.FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLSpanElement | null>(null);
  const id = useId();

  const updatePos = () => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.bottom + 8 });
  };

  useEffect(() => {
    if (!open) return;
    updatePos();
    const onScroll = () => updatePos();
    const onResize = () => updatePos();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <span
        ref={ref}
        aria-describedby={id}
        onMouseEnter={() => {
          setOpen(true);
          updatePos();
        }}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => {
          setOpen(true);
          updatePos();
        }}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center justify-center text-blue-300/90 hover:text-blue-300 focus-visible:outline-none transition-all duration-300 h-14 w-14 text-4xl cursor-default hover:scale-135 hover:rotate-15 group-hover/item:scale-105"
      >
        {children}
      </span>
      {open &&
        createPortal(
          <div
            id={id}
            style={{ top: pos.y, left: pos.x }}
            className="fixed z-[1000] -translate-x-1/2 select-none px-3 py-1.5 rounded-lg bg-gradient-to-br from-slate-800/95 to-slate-700/80 text-xs font-semibold tracking-wide text-slate-100 ring-1 ring-white/10 shadow-2xl shadow-slate-900/40 backdrop-blur-md animate-fade-in"
            role="tooltip"
          >
            {label}
          </div>,
          document.body
        )}
    </>
  );
};

// 軽量化：画像ベースのブランドアイコン
const BrandImg: React.FC<{ slug: string; name: string }> = ({ slug, name }) => (
  <span className="inline-flex h-14 w-14 items-center justify-center rounded-md">
    <Image
      src={`/brands/${slug}.png`}
      alt={name}
      width={40}
      height={40}
      className="h-10 w-10 object-contain select-none pointer-events-none"
      loading="lazy"
      draggable={false}
      priority={false}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli5FlVZrWcvN3Km8xkQnV1HFTGEL8vu9RJGm6r/i9uxKqzZXIHQBN2FXR2I5qyq1RQgLIw8/G4wfFJc6dn3lNPT6hJpQv2h0fFlGxrVIhR3RllDLdALG/K0vEovBgidFJGr1fBWJlKmPg="
    />
  </span>
);

const stacks: StackGroup[] = [
  {
    group: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Material-UI", icon: <SiMui color="#007FFF" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "React Router", icon: <SiReactrouter color="#CA4245" /> },
      { name: "React Hook Form", icon: <SiReacthookform color="#EC5990" /> },
      { name: "Zod", icon: <BrandImg slug="zod" name="Zod" /> },
      { name: "Jotai", icon: <BrandImg slug="jotai" name="Jotai" /> },
      { name: "Storybook", icon: <SiStorybook color="#FF4785" /> },
      { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
      { name: "ESLint", icon: <SiEslint color="#4B32C3" /> },
      { name: "Biome", icon: <SiBiome color="#00ddffff" /> },
      { name: "Prettier", icon: <SiPrettier color="#F7B93E" /> },
      { name: "Rollup.js", icon: <SiRollupdotjs color="#EC4A3F" /> },
      { name: "Bun", icon: <SiBun color="#ffffff" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> },
      { name: "npm", icon: <SiNpm color="#CB3837" /> },
      { name: "Yarn", icon: <SiYarn color="#2C8EBB" /> },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      { name: "Golang", icon: <SiGo color="#00ADD8" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
      { name: "Echo", icon: <BrandImg slug="echo" name="Echo" /> },
      { name: "GORM", icon: <BrandImg slug="gorm" name="GORM" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
    ],
  },
  {
    group: "Mobile",
    skills: [
      { name: "Swift / SwiftUI", icon: <SiSwift color="#FA7343" /> },
      { name: "CocoaPods", icon: <SiCocoapods color="#EE3322" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "React Native", icon: <SiReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Xcode", icon: <SiXcode color="#147EFB" /> },
      { name: "Android Studio", icon: <SiAndroidstudio color="#3DDC84" /> },
    ],
  },
  {
    group: "Infrastructure / DevOps",
    skills: [
      {
        name: "Amazon Web Services",
        icon: <SiAmazonwebservices color="#FF9900" />,
      },
      {
        name: "Google Cloud Platform",
        icon: <SiGooglecloud color="#4285F4" />,
      },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      {
        name: "Vercel",
        icon: <SiVercel color="#180535ff" />,
      },
      {
        name: "Render",
        icon: <SiRender color="#180331ff" />,
      },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Nginx", icon: <SiNginx color="#009639" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      {
        name: "Datadog",
        icon: <SiDatadog color="#FF6C37" />,
      },
      {
        name: "Sentry",
        icon: <SiSentry color="#7b66d0ff" />,
      },
      { name: "GitHub Actions", icon: <SiGithubactions color="#2088FF" /> },

      { name: "macOS", icon: <SiApple color="#FFFFFF" /> },
      { name: "Linux", icon: <SiLinux color="#FCC624" /> },
    ],
  },
  {
    group: "Other",
    skills: [
      { name: "GitHub", icon: <SiGithub color="#FFFFFF" /> },
      { name: "OpenAPI", icon: <SiOpenapiinitiative color="#6BA539" /> },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
      { name: "ChatGPT", icon: <SiOpenai color="#74AA9C" /> },
      { name: "Claude", icon: <SiClaude color="#eb8d1aff" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot color="#FFFFFF" /> },
      {
        name: "Visual Studio Code",
        icon: <BrandImg slug="vscode" name="Visual Studio Code" />,
      },
      { name: "Slack", icon: <SiSlack color="#8b40d1ff" /> },
      { name: "Notion", icon: <SiNotion color="#FFFFFF" /> },
      { name: "Obsidian", icon: <SiObsidian color="#893edfff" /> },
      { name: "Backlog", icon: <BrandImg slug="backlog" name="Backlog" /> },
      { name: "Trello", icon: <SiTrello color="#0052CC" /> },
      { name: "Jira", icon: <SiJira color="#2684FF" /> },
    ],
  },
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // セクション全体のスクロール進行度を取得
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // デバッグログ追加
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log('TechStack scroll progress:', value);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative snap-start"
      style={{ height: `${stacks.length * 80 + 120}vh` }} // より長いスクロール距離でゆっくりと
    >
      {/* タイトル - 最後のカードと一緒に上に移動 */}
      <motion.div 
        className="flex-shrink-0 pt-24 pb-6 px-6 md:px-16 sticky top-0 z-50"
        style={{
          y: useTransform(scrollYProgress, [0.9, 1], [0, -200])
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-libre tracking-tight text-slate-100 text-left"
          >
            Tech Stack
          </motion.h2>
        </div>
      </motion.div>

      {/* カードコンテナ - 単一stickyコンテナで統一管理 */}
      <div className="px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="sticky top-40 relative h-[400px]"
            style={{
              y: useTransform(scrollYProgress, [0.9, 1], [0, -300])
            }}
          >
            {stacks.map((s, i) => {              
              return (
                <motion.div
                  key={s.group}
                  className="group absolute inset-0 rounded-2xl border-2 border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 overflow-hidden shadow-2xl shadow-blue-900/20"
                  style={{ 
                    zIndex: i + 1,
                    opacity: 1,
                    display: 'block',
                    visibility: 'visible'
                  }}
                >
              {/* グラデーション装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-t-2xl" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

              {/* ホバー時の光る境界線 */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative h-full flex flex-col">
                <h3 className="font-semibold text-xl mb-6 text-blue-300 text-left font-libre">
                  {s.group}
                </h3>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {s.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-600/50 hover:bg-slate-700/90 hover:border-blue-400/50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center text-blue-300 group-hover/item:text-cyan-300 transition-colors duration-200 h-10 w-10 text-2xl">
                          {skill.icon}
                        </span>
                      </div>
                      <span className="text-slate-100 font-bold text-sm truncate font-dm-serif group-hover/item:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
