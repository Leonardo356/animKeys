/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#E2EEF3',
        lightPink: '#FBDEDA',
        ligtPurple: '#EAD7EA',
        txtColor1: '#7C809B',
        txtColor2: '#474747',
        shapesColor: '#B1B6DB',
        white: '#ffffff',
        black: '#000000',
      },

      boxShadow: {
        insetShadow: 'inset 0px 8px 16px 1px rgba(0,0,0,0.18)',
        sh1: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        sh2: 'rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 30px -30px',
      },
    },
  },
  plugins: [],
}
