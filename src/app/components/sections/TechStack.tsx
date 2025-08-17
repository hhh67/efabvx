"use client";
import { motion } from "framer-motion";

const stacks: { group: string; skills: string[] }[] = [
  {
    group: "Backend",
    skills: [
      "Node.js",
      "TypeScript",
      "Go",
      "PHP (Laravel)",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "OpenAPI",
    ],
  },
  {
    group: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Redux / Zustand / Jotai",
    ],
  },
  {
    group: "Infrastructure / DevOps",
    skills: [
      "AWS",
      "GCP",
      "Firebase",
      "Docker",
      "NGINX",
      "CI/CD (GitHub Actions)",
      "Monitoring / Logging",
    ],
  },
  {
    group: "Other",
    skills: [
      "Linux",
      "Figma",
      "Jira",
      "Postman",
      "Orval",
      "ESLint",
      "Prettier",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {stacks.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-5 flex flex-col"
          >
            <h3 className="font-semibold text-lg mb-3 text-blue-300 text-left">
              {s.group}
            </h3>
            <ul className="space-y-1 text-sm text-slate-300 text-left">
              {s.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {skill}
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
