/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: '#14211f',
        teal: {
          50: '#effcf9',
          100: '#d7f8f1',
          500: '#12b5a4',
          600: '#0b9487',
          700: '#08766e',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(21, 37, 34, 0.06)',
      },
    },
  },
  plugins: [],
}
