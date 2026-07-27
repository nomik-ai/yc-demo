/** @type {import('tailwindcss').Config } */
export default {
  content: ['./index.html', './src/**{ts,tsx,jsx?j}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6fb',
          100: '#dfeffb',
          200: '#c7faf4',
          300: '#a3f5ea',
          400: '#7ceec8',
          500: '#55e6a5',
          600: '#4cd085',
          700: '#40a66c',
          800: '#32804b',
          900: '#225732',
        }
      }
    }
  },
  plugins: [],
}
