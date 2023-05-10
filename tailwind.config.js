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
        'gray': '#A0A5A8',
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
        '75v': '75vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
        '110v': '110vh',
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.3125rem",
        "sm": "0.5rem",
        "default": "1rem",
        "lg": "1.8125rem",
        "xl": "2rem",
        "2xl": "2.5rem",
        "full": "9999px"
      },
      translate: {
        "n50": "-50%"
      }
    },
  },
  plugins: [],
};
