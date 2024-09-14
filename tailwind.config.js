/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        'mutate-border': 'mutate-border 18s ease-in-out infinite',
        'mutate-border-tl': 'mutate-border-tl 18s ease-in-out infinite',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)'],
      //   mono: ['var(--font-geist-mono)'],
      //   cormorant: ['Cormorant'],
      // },
      keyframes: {
        'mutate-border': {
          '0%': { borderRadius: 0 },
          '40%': { borderRadius: '50px' },
          '60%': { borderRadius: '50px' },
          '100%': { borderRadius: 0 },
        },
        'mutate-border-tl': {
          '0%': { borderTopLeftRadius: 0 },
          '40%': { borderTopLeftRadius: '50px' },
          '60%': { borderTopLeftRadius: '50px' },
          '100%': { borderTopLeftRadius: 0 },
        },
      },
    },
  },
  plugins: [],
}
