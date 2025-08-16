// 初期デザイントークン (Apple HIG 要約適用)
export const tokens = {
  color: {
    bg: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      elevated: 'var(--color-bg-elevated)',
    },
    fg: {
      primary: 'var(--color-fg-primary)',
      secondary: 'var(--color-fg-secondary)',
    },
    border: {
      subtle: 'var(--color-border-subtle)',
    },
    accent: 'var(--color-accent)',
    accentHover: 'var(--color-accent-hover)',
    danger: 'var(--color-danger)',
    warning: 'var(--color-warning)',
    success: 'var(--color-success)',
  },
  spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64] as const,
  radius: {
    base: 4,
    card: 8,
    pill: 9999,
  },
  elevation: {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,.08)',
    md: '0 3px 8px rgba(0,0,0,.12)',
  },
  typography: {
    scale: {
      h1: '2.25rem',
      h2: '1.75rem',
      h3: '1.375rem',
      body: '1rem',
      small: '.875rem',
    },
  },
  motion: {
    duration: {
      fast: '120ms',
      base: '180ms',
      slow: '240ms',
    },
    easing: 'cubic-bezier(0.4,0.25,0.3,1)',
  },
};

export type Tokens = typeof tokens;
