/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: '#1da1f2'
      },
      spacing: {
        '15': '3.75rem'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [
    
  ],
}