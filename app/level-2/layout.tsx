import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Level 2 — Deep Yoni & Full-Body Orgasmic Activation',
  description: 'The complete FBO somatic activation course for members. Seven guided practice modules.',
};

export default function Level2Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
