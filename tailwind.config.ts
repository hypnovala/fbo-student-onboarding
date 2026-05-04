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
      keyframes: {
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.94) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'backdrop-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-7px)' },
          '30%': { transform: 'translateX(7px)' },
          '45%': { transform: 'translateX(-5px)' },
          '60%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-3px)' },
          '90%': { transform: 'translateX(3px)' },
        },
        'success-pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'modal-in': 'modal-in 0.22s cubic-bezier(0.16,1,0.3,1) both',
        'backdrop-in': 'backdrop-in 0.18s ease both',
        shake: 'shake 0.45s ease both',
        'success-pop': 'success-pop 0.35s cubic-bezier(0.16,1,0.3,1) both',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
