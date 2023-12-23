/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          'linear-gradient(330deg, #29B6D1 0%, #00C7C7 100%, #00C7C7 100%)',
        'gradient-blue': 'linear-gradient(150deg, #E6F7FB 8.13%, #FFF 92.67%)',
        'gradient-green': 'linear-gradient(154deg, #EDFFF6 7.85%, #FFF 91.03%)',
        landing: "url('./src/assets/landing.svg')",
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
