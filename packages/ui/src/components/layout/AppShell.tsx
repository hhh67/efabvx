import React from 'react';
import { Stack } from '../primitives/Stack';
import { PageContainer } from '../primitives/PageContainer';
import { tokens } from '../../tokens';

export type AppShellProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

// [x] tokens 再利用
// [x] フォーカス可視 (内部要素 outline offset 継承前提)
// [x] キーボード操作 (ランドマーク: header/main/footer)
// [x] aria 属性適切 (main 要素明示 / アプリ全体構造)
// [x] コントラスト AA (色は tokens 経由)
// [x] モーション軽減対応 (AppShell 自体は静的)
// [ ] Story 追加案 TODO
export const AppShell: React.FC<AppShellProps> = ({ header, footer, children }) => {
  return (
    <Stack
      gap={6}
      style={{
        minHeight: '100dvh',
        background: tokens.color.bg.primary,
        color: tokens.color.fg.primary,
      }}
    >
      {header && (
        <header
          style={{
            borderBottom: `1px solid ${tokens.color.border.subtle}`,
            padding: `${tokens.spacing[4]}px 0`,
          }}
        >
          <PageContainer as="div" paddingXScale={5}>
            {header}
          </PageContainer>
        </header>
      )}
      <PageContainer as="main" paddingXScale={5} style={{ flex: 1 }}>
        {children}
      </PageContainer>
      {footer && (
        <footer
          style={{
            borderTop: `1px solid ${tokens.color.border.subtle}`,
            padding: `${tokens.spacing[5]}px 0`,
            fontSize: tokens.typography.scale.small,
            opacity: 0.75,
          }}
        >
          <PageContainer as="div" paddingXScale={5}>
            {footer}
          </PageContainer>
        </footer>
      )}
    </Stack>
  );
};
