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
            1999年生まれ。
            <br />
            2025年1月よりフリーランスで活動している、フルスタックエンジニアです。
          </p>
          <p>
            学生時代からこれまで旅行、教育、アパレル、福祉といった多様な業界で開発経験を積み重ねてきました。
            <br />
            ECサイト、学習管理システム、CMS連携サービス、コンテンツ販売プラットフォームなど、多岐にわたるプロジェクトの開発・運用に携わっています。
          </p>
          <p>
            ビジネス要件の整理から設計、実装、パフォーマンス改善、CI/CDや監視の整備まで一気通貫で推進。
            <br />
            高速なプロトタイピングと品質担保の両立を得意とし、継続的な運用に耐えるシンプルな仕組みづくりを重視しています。
          </p>
          <p>
            現在は複数のプロダクトを並行して支援し、開発プロセスの改善やエンジニアリング体験の向上に注力しております。
            <br />
            さらに、iOSアプリをはじめとした個人開発にも取り組み、技術領域を広げています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
