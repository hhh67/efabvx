"use client";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-32 px-6 md:px-16 max-w-6xl mx-auto text-slate-200"
    >
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 font-libre tracking-tight text-left"
        >
          About
        </motion.h2>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="space-y-5 leading-relaxed text-base md:text-lg max-w-5xl text-left"
        >
        <p>
          1999年生まれ。バックエンドからフロントエンド、インフラまで横断するフルスタックエンジニアです。予約エンジン、EC、児童福祉領域の業務システム、学習管理システム、CMS連携サービスなど多領域で開発・運用を経験してきました。
        </p>
        <p>
          ビジネス要件の抽出からアーキテクチャ設計、実装、パフォーマンス改善、CI/CD・監視の整備まで一気通貫で推進。高速なプロトタイピングと品質担保の両立、そして継続運用に耐えるシンプルさを重視しています。
        </p>
        <p>
          現在はフリーランスとして複数プロダクトを並行支援しつつ、DX・内製化の加速と開発体験の向上にフォーカスしています。
        </p>
        </motion.div>
      </div>
    </section>
  );
}
