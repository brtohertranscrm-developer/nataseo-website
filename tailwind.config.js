/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfb',
          100: '#ccfbf4',
          200: '#99f6e8',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#0AB5A0',
          600: '#089485',
          700: '#06736a',
          800: '#065f52',
          900: '#064e43',
        },
        gold: {
          50:  '#fdf9ed',
          100: '#f9efcc',
          200: '#f2dd99',
          300: '#e8c55e',
          400: '#d4a82d',
          500: '#B8972A',
          600: '#967820',
          700: '#745c18',
          800: '#5c4812',
          900: '#493a0f',
        },
        dark: {
          900: '#0D1B2A',
          800: '#1C2B3A',
          700: '#253347',
          600: '#2E3D54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
