/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/assets/bg.png')",
      },
      backgroundPosition: {
        'top-center': 'top center',
      },
      fontSize: {
        '80px': '80px',
        '40px': '40px'
      },
    },
  },
  plugins: [],
}