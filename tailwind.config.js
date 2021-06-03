module.exports = {
  purge: [
    './www/**/*.html',
    './www/**/*.php'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
