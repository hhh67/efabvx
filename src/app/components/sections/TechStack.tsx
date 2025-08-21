"use client";
import { motion } from "framer-motion";
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

// 画像ベースのブランドアイコン (public/brands/<slug>.png を配置する想定)
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
  return (
    <section
      id="tech"
      className="relative scroll-mt-24 py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 font-libre tracking-tight text-slate-100 text-left"
        >
          Tech Stack
        </motion.h2>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-1 max-w-6xl w-full">
          {stacks.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_30%,rgba(120,150,255,0.25),transparent_60%)]" />
              <div className="relative">
                <h3 className="font-semibold text-lg mb-3 text-blue-300 text-left">
                  {s.group}
                </h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-4 text-slate-300 justify-items-center items-center">
                  {s.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-center"
                    >
                      <IconTooltip label={skill.name}>{skill.icon}</IconTooltip>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
