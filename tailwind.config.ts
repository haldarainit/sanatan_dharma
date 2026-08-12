import type { Config } from 'tailwindcss'

/* Rebuilt from the compiled bundle the scraped site shipped
   (_next/static/css/441af1d1000b02be.css). Tailwind 3 so every utility
   class already in the markup keeps its exact meaning. */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        deva: ['var(--font-deva)', 'sans-serif'],
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        /* recovered shade-for-shade from the compiled bundle */
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#FF9933',
          deep: '#E65100',
          dark: '#C94700',
        },
        /* the bundle only ever emitted maroon-500; maroon-600 appears in the
           markup but was never generated, so it silently did nothing. */
        maroon: {
          500: '#9f1239',
          600: '#881337',
        },
        ink: '#0D1B2A',
        cream: '#FFFDF8',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeScrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-left': 'marqueeScrollLeft 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
