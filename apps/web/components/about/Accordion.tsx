'use client';
// シンプルなアコーディオン (About / SNS セクション用)
import { useState } from 'react';
import { tokens } from '@efabvx/ui';

export type AccordionProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export const Accordion = ({ title, defaultOpen = false, children }: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderRadius: tokens.radius.card, border: `1px solid var(--color-border-subtle)` }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
            textAlign: 'left',
            background: 'transparent',
            border: 'none',
            padding: '12px 16px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: tokens.typography.scale.body,
        }}
      >
        {title}
      </button>
      {open && (
        <div style={{ padding: '0 16px 16px', fontSize: tokens.typography.scale.small }}>{children}</div>
      )}
    </div>
  );
};
