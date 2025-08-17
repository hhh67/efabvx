"use client";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa6";
import {
  SiAmazon,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiJira,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiReact,
  SiReacthookform,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
        className="inline-flex items-center justify-center text-blue-300/90 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded transition-colors h-14 w-14 text-4xl cursor-default"
      >
        {children}
      </span>
      {open &&
        typeof window !== "undefined" &&
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

const stacks: StackGroup[] = [
  {
    group: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Go", icon: <SiGo color="#00ADD8" /> },
      { name: "PHP (Laravel)", icon: <SiPhp color="#FF2D20" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      { name: "OpenAPI", icon: <SiOpenapiinitiative color="#6BA539" /> },
    ],
  },
  {
    group: "Frontend",
    skills: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "React Hook Form", icon: <SiReacthookform color="#EC5990" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      // Zustand / Jotai アイコンなしのためテキストのみ
    ],
  },
  {
    group: "Infrastructure / DevOps",
    skills: [
      { name: "AWS", icon: <SiAmazon color="#FF9900" /> },
      { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "NGINX", icon: <SiNginx color="#009639" /> },
      { name: "GitHub Actions", icon: <SiGithubactions color="#2088FF" /> },
      { name: "Monitoring / Logging", icon: <SiGrafana color="#F46800" /> }, // Grafana 代表
    ],
  },
  {
    group: "Other",
    skills: [
      { name: "Linux", icon: <SiLinux color="#FCC624" /> },
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
      { name: "Jira", icon: <SiJira color="#2684FF" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Orval", icon: <FaDatabase color="#A78BFA" /> }, // 代替色
      { name: "ESLint", icon: <SiEslint color="#4B32C3" /> },
      { name: "Prettier", icon: <SiPrettier color="#F7B93E" /> },
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
              <h3 className="font-semibold text-lg mb-3 text-blue-300 text-left">
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-4 text-slate-300">
                {s.skills.map((skill) => (
                  <li key={skill.name} className="group/item">
                    <IconTooltip label={skill.name}>{skill.icon}</IconTooltip>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
