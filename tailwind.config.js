module.exports = {
  content: ['./src/**/*.{html,js}', './public/**/*.{htm,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#12A633',
        orangeRed: '#FF7847',
        pink: '#F17575',
        lightBlue: '#C7CAD1',
        darkBlue: '#000335',
        yellow: '#FFCB3D',
        // ? PRIMARY COLOURS
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          100: '#6B6768',
          200: '#333333',
          300: '#2B2B2B',
          400: '#222222',
          500: '#111111',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roobert: ['Roobert', 'sans-serif'],
        grotesk: ['Space Grotesk', 'serif'],
      },
    },
  },
  plugins: [],
};
