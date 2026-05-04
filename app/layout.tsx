import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { siteTheme } from '@/lib/theme';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: siteTheme.name,
    template: `%s | ${siteTheme.name}`,
  },
  description: siteTheme.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
