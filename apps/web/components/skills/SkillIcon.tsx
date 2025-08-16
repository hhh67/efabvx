'use client';
import Image from 'next/image';
import { tokens } from '@efabvx/ui';

export const SkillIcon = ({ src, title }: { src: string; title: string }) => (
  <div
    style={{
      width: 72,
      height: 72,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      fontSize: tokens.typography.scale.small,
    }}
  >
    <Image src={src} alt={title} width={40} height={40} />
    <span style={{ textAlign: 'center' }}>{title}</span>
  </div>
);
