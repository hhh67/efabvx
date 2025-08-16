// 暫定型定義: motion (Motion One) が型解決できない問題の回避用
// TODO: 実際にインストール後、自動生成型 or 正式型に置き換え
declare module 'motion' {
  export interface MotionAnimateOptions {
    duration?: number;
    easing?: string | ((t: number) => number);
    delay?: number;
    repeat?: number;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    fill?: 'none' | 'forwards' | 'backwards' | 'both' | 'auto';
  }
  export function animate(
    target: Element | HTMLElement | SVGElement | ArrayLike<Element>,
    keyframes: any,
    options?: MotionAnimateOptions
  ): { cancel: () => void };
}
