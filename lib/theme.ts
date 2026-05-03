export const siteTheme = {
  name: 'FBO Student Onboarding',
  tagline: 'Brock John · Somatic Sex Education',
  description:
    'A warm, mobile-first journey of embodied reflections with local progress tracking and printable summaries.',
} as const;

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/#explore', label: 'Explore' },
  { href: '/forms', label: 'Reflections' },
  { href: '/progress', label: 'Progress' },
  { href: '/about', label: 'About' },
] as const;
