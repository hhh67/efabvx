import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '@efabvx',
  description: '@efabvx の名刺的サイト (Next.js 移行中)',
  openGraph: {
    title: '@efabvx',
    description: '名刺みたいなもんです',
    siteName: 'efabvx',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@efabvx',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-bg-primary text-fg-primary">{children}</body>
    </html>
  );
}
