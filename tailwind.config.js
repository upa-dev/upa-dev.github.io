module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    colors: {
      'primary': '#20324A',
      'secondary': '#616CEA',
      'accent': '#04E0BD',
      'background-primary': '#21272B',
      'background-secondary': '#263238',
    },
    extend: {
      extend: {
        backgroundImage: {
          'hero': "url('/img/hero-hero.webp')",
        }
      }
    }
  },
  plugins: [],
};
