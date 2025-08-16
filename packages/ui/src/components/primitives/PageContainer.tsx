// [アクセシビリティチェック済]
// [ ] Story 追加案 TODO
import React from 'react';
import { tokens } from '../../tokens';

type PageContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: number;
  paddingXScale?: number; // spacing scale index for horizontal padding
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const PageContainer: React.FC<PageContainerProps> = ({
  as = 'div',
  maxWidth = 1200,
  paddingXScale = 4,
  children,
  style,
}) => {
  const Comp: any = as;
  const px = tokens.spacing[paddingXScale] ?? 24;
  return (
    <Comp
      style={{
        width: '100%',
        maxWidth,
        margin: '0 auto',
        paddingLeft: `clamp(16px,4vw,${px}px)`,
        paddingRight: `clamp(16px,4vw,${px}px)`,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
};
