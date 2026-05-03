export const siteTheme = {
  name: 'FBO Student Onboarding',
  tagline: 'Begin here. Come home to your body.',
  description:
    'An interactive somatic education experience for new students exploring embodiment, body awareness, and the benefits of somatic bodywork — by Brock John · Somatic Sex Education.',
  colors: {
    canvas: '#F9F5EE',
    card: '#FFFFFF',
    ink: '#2C1A0E',
    stone: '#7A5C44',
    muted: '#A08878',
    primary: '#B8922A',
    secondary: '#D4B896',
    border: '#E8DDD0',
    warm: '#F2EAE0',
    sky: '#B8922A',
    mist: '#E8DDD0',
  },
} as const;

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/forms', label: 'Reflections' },
  { href: '/progress', label: 'Progress' },
  { href: '/about', label: 'About' },
] as const;
