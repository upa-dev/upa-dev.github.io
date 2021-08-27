const themes = ['white', 'green', 'light-blue', 'dark-blue'];

const selectedTheme = themes[Math.floor(Math.random() * themes.length)];

document.body.classList.add('theme-' + selectedTheme)