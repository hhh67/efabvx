import tokensTailwindPlugin from './plugins/tokens-tailwind-plugin.cjs';

// NOTE: 現状は tokens を手動マッピング。次フェーズで自動生成スクリプト化予定。
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          elevated: 'var(--color-bg-elevated)',
        },
        fg: {
          primary: 'var(--color-fg-primary)',
          secondary: 'var(--color-fg-secondary)',
        },
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
      },
      borderColor: {
        subtle: 'var(--color-border-subtle)',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,.08)',
        md: '0 3px 8px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [tokensTailwindPlugin],
};
