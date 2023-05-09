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
        'hero-mobile': 'h-screen',
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh'
      }
    },
  },
  plugins: [],
};
