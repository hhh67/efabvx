"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per char
  startDelay?: number;
  onDone?: () => void;
  className?: string;
  showCaretWhileTyping?: boolean; // 入力中 caret 表示 (非点滅)
  blinkOnDone?: boolean; // 完了後点滅 caret 表示
  hideCaretOnDone?: boolean; // 完了後非表示( blinkOnDone より優先 )
}

export function Typewriter({
  text,
  speed = 55,
  startDelay = 200,
  onDone,
  className = "",
  showCaretWhileTyping = true,
  blinkOnDone = false,
  hideCaretOnDone = false,
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timer: any;
    let i = 0;
    const run = () => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        timer = setTimeout(run, speed);
      } else {
        setDone(true);
        if (onDone) onDone();
      }
    };
    const start = setTimeout(run, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={`inline-block relative ${className}`} aria-label={text}>
      {display}
      {(() => {
        const baseClass =
          "pointer-events-none select-none absolute left-full top-1/2 -translate-y-1/2 h-[1em] border-r-[3px] border-current ml-1";
        const hasText = display.length > 0;
        if (!done) {
          if (!showCaretWhileTyping) return null;
          // 先頭文字表示前は caret を出さない (行移動瞬間のズレ防止)
          if (!hasText) return null;
          return <span className={`${baseClass} caret-solid`} />;
        }
        if (hideCaretOnDone) return null;
        if (blinkOnDone) {
          return <span className={`${baseClass} typewriter-caret`} />;
        }
        return <span className={`${baseClass} caret-solid`} />;
      })()}
    </span>
  );
}
