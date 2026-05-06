/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'ui-sans-serif', 'system-ui'],
        display: ['Rajdhani', 'Inter', 'Noto Sans TC', 'ui-sans-serif'],
      },
      colors: {
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        field: {
          900: '#10120f',
          800: '#181b17',
          700: '#242820',
          600: '#343a30',
        },
      },
      boxShadow: {
        glow: '0 18px 70px rgba(249, 115, 22, 0.22)',
      },
    },
  },
  plugins: [],
};
