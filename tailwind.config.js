module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'blue_primary': '#181D31',
      'blue_secondary': '#091353',
      'caffe_secondary': '#444941',
      'purple_secondary': '#261C2C',
      'white_neon': '#3F6F6F6',
      'danger': '#e3342f',
     }),
     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'blue_primary': '#181D31',
      'blue_secondary': '#091353',
      'caffe_secondary': '#444941',
      'purple_secondary': '#261C2C',
      'white_neon': '#F6F6F6',
      'danger': '#e3342f',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
