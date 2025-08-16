import type { Metadata } from 'next';
import React from 'react';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
