import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F9F5EE',
        card: '#FFFFFF',
        ink: '#2C1A0E',
        stone: '#7A5C44',
        muted: '#A08878',
        primary: '#B8922A',
        sky: '#B8922A',
        mist: '#E8DDD0',
        warm: '#F2EAE0',
        secondary: '#D4B896',
        border: '#E8DDD0',
      },
      boxShadow: {
        calm: '0 16px 40px rgba(44, 26, 14, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
