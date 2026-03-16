/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    colors: {
      salmon: {
        100: '#FFE1DB',
        400: '#F7876E',
        500: '#F86653',
        700: '#D61D04',
      },

      yellow: {
        500: '#F5BA25',
        800: '#473811',
      },

      gray: {
        200: '#f0f0f0',
        300: '#C5C3BE',
      },

      white: '#FFFFFF',
      black: '#35312F',
      transparent: 'transparent',
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },

    boxShadow: {
      'dp-01': '0px 2px 2px 0px #00000024, -1px -1px 1px 0px #00000012',
    },

    extend: {
      maxWidth: {
        'content-container': '1020px',
      },

      fontSize: {
        xxs: '0.625rem',
        '4.5xl': '2.5rem',
      },
    },
  },

  plugins: [require('@tailwindcss/container-queries')],
}
