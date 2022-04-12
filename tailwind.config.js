
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    ],
  theme: {
    extend: {},
    fontFamily: {
      'title': 'Raleway, Open Sans, ui-sans-serif, system-ui ',
      'p': 'Quicksand, ui-serif, Georgia, Open Sans',
      'code': 'Courier',
      'fun': 'Quicksand'
    },
    colors: {
      'sun': "#FDD962",
      'iron': "#e1e1e1",
      'evening-blue': '#3261fa',
      'tint-blue': "#fefaf7",
      'midnight-blue': "#07003e",
      'gold': "#F3AC70",
      'dirt': "#090604",
      'dark-blue': "#00273D",
      'shade-blue': "#050025",
      'bottom-blue': "#040020",
      'ivory': "#fffff0"

    },
    backgroundImage: {
      'dark-Landing': "url('https://samutumba.github.io/resources/bg-img/landingDark.png')"

    }
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
