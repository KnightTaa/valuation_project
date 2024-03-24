/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },
    fontFamily: {
      rajdhani: 'var(--font-rajdhani)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#222222',
          hover: '#2f2f2f',
        },
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#d6001c', 
        }
      },
    },
  },
  plugins: [],
}