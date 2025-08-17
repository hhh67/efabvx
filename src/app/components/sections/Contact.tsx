"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 font-libre tracking-tight text-slate-100 text-left"
        >
          Contact
        </motion.h2>
      </div>
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-slate-300 mb-8 leading-relaxed text-left"
          >
            お仕事やコラボレーションのご相談はお気軽にご連絡ください。要件がまだ固まっていない段階の壁打ちも歓迎です。
          </motion.p>
          <div className="flex flex-col gap-4 text-sm">
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600/80 hover:bg-blue-500 text-white font-medium w-fit transition-colors"
        >
          メールで連絡する
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-600 hover:border-slate-400 text-white font-medium w-fit transition-colors"
        >
          GitHub プロフィール
        </a>
          </div>
        </div>
      </div>
    </section>
  );
}
