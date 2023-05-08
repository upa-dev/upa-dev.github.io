module.exports = {
  content: ['./src/**/*.{html,js,pug,svg}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'primary': '#20324A',
        'secondary': '#616CEA',
        'accent': '#04E0BD',
        'background-primary': '#21272B',
        'background-secondary': '#263238',
      },
      backgroundImage: {
        'hero': "url('/src/img/hero.webp')",
      },
      fontFamily: {
        'hero': ['Akira', 'Helvetica', 'Arial']
      },
      height: {
        'hero': '48rem',
      }
    },
  },
  plugins: [],
};
