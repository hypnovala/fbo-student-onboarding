import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Level2Gate } from '@/components/level-2/Level2Gate';

export const metadata: Metadata = {
  title: 'Level 2 — 35-Minute Deep Yoni & Full-Body Orgasmic Activation',
  description: 'The complete FBO somatic activation course for members. Seven guided practice modules.',
};

// This layout intentionally does NOT use SiteShell — the Level 2 app
// has its own full-screen sidebar navigation, wrapped in a password gate.
export default function Level2Layout({ children }: { children: ReactNode }) {
  return <Level2Gate>{children}</Level2Gate>;
}
