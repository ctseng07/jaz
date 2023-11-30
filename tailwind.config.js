/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
        transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      colors: {
        'light-gray': "#ECE7DE",
        'white': "#FFFFFF",
        'black': "#222222",
        'gray': "#7F7165",
      },
      backgroundImage: {
        'hero': "url('assets/images/hero-bg.jpg')",
        'hero1': "url('assets/images/hero1.jpg')",
        'hero2': "url('assets/images/hero2.jpg')",
        'hero3': "url('assets/images/hero3.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}