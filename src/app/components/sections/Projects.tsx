"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "CtoC コンテンツ販売プラットフォーム",
    description:
      "スキーマ設計からインフラ、バックエンド/フロントエンド実装、決済・通知までを横断。スケーラブルなアーキテクチャと運用監視を整備。",
    tags: ["Next.js", "TypeScript", "Node.js", "AWS", "RDS", "S3"],
  },
  {
    title: "園向けDX推進プロジェクト",
    description:
      "メール配信基盤とアンケート機能を中心とした業務効率化。多 tenant 設計と権限モデル、監査ログを実装。",
    tags: ["Go", "Echo", "MySQL", "Redis", "Clean Architecture"],
  },
  {
    title: "LMS 開発",
    description:
      "学習コース管理・進捗トラッキング・認定発行。GraphQL / REST 併用と自動スキーマ生成パイプラインを構築。",
    tags: ["React", "Next.js", "GraphQL", "OpenAPI", "CI/CD"],
  },
  {
    title: "Web ブラウザアプリ構築",
    description:
      "ブラウザ内での軽量なデータ処理/可視化ツール。パフォーマンス最適化と WASM 実験。",
    tags: ["TypeScript", "WebAssembly", "Vite"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative h-screen flex flex-col snap-start"
    >
      <div className="flex-shrink-0 pt-24 pb-6 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-libre tracking-tight text-slate-100 text-left"
          >
            Projects
          </motion.h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 md:px-16 flex items-center justify-center">
        <div className="px-6 py-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="text-slate-300">準備中です...</span>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_30%,rgba(120,150,255,0.25),transparent_60%)]" />
              <div className="relative">
                <h3 className="font-semibold text-xl mb-3 text-blue-300 text-left">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 text-left">
                  {p.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] tracking-wide px-2 py-1 rounded bg-white/10 text-slate-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
