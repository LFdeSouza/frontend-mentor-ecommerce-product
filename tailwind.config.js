/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif']
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      gridTemplateColumns: {
        custom: '1fr 2fr'
      },
      colors: {
        mainOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        darkBlue: 'hsl(220, 13%, 13%)',
        veryDarkGrayishBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        overlayBlack: 'rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}

