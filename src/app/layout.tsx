import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, DM_Serif_Text, Lobster } from "next/font/google";
import { Starfield } from "./components/visuals/Starfield";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "@efabvx",
  description: "Hideya Hoshino's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${dmSerifText.variable} ${lobster.variable} antialiased relative text-white animated-bg overflow-y-auto min-h-screen scroll-smooth`}
      >
        {/* Starfield background for entire LP */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <Starfield />
          <canvas
            id="starfield-canvas"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(40,70,160,0.15),transparent_60%)] mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(150,50,200,0.08),transparent_65%)] mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.55)_70%)]" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
