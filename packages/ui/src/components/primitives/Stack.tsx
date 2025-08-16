// [アクセシビリティチェック済]
// [ ] Story 追加案 TODO
import React from 'react';
import { tokens } from '../../tokens';

type StackProps = {
  as?: keyof JSX.IntrinsicElements;
  direction?: 'row' | 'column';
  gap?: number; // spacing index
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  wrap?: React.CSSProperties['flexWrap'];
  inline?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export const Stack: React.FC<StackProps> = ({
  as = 'div',
  direction = 'column',
  gap = 3,
  align,
  justify,
  wrap,
  inline = false,
  style,
  children,
}) => {
  const Comp: any = as;
  const gapValue = tokens.spacing[gap] ?? 16;
  return (
    <Comp
      style={{
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: direction,
        gap: `${gapValue}px`,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
};
