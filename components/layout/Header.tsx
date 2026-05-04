'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#explore', label: 'Explore' },
  { href: '/forms', label: 'Reflections' },
  { href: '/progress', label: 'Progress' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-mist bg-canvas/90 backdrop-blur">
      <Container className="flex h-[60px] items-center justify-between px-4 md:px-10">
        <Link href="/" className="serif text-sm text-ink md:text-[15px]">Brock John · Somatic Sex Education</Link>
        <nav className="hidden gap-7 md:flex">
          {links.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.replace('/#explore', '/'));
            return (
              <Link key={link.href} href={link.href} className={cn('text-[13px] tracking-[0.03em] text-stone transition hover:text-ink', active && 'text-ink')}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
