/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat'],
        plf: ['Playfair Display'],
      },
      colors: {
        'bgr': '#FFF9F6',
        'bgr-auth': '#f5f5f5',
        'primary-text': '#272727',
        '2nd-text': '#272727',
        '3rd-text': '#B78D71',
        'price-text': '#92715A',
        'btn': '#251C17',
        'discount': '#6a5646'
      },
      spacing: {
        8: '8px',
        16: '16px',
        24: '24px',
      },
      borderRadius: {
        8: '8px',
        16: '16px',
      },
      fontSize: {
        32: '32px',
      },
      dropShadow: {
        product: '0px 4px 52px rgba(15, 15, 15, 0.25)',
      },
      boxShadow: {
        product: '0px 0px 60px 10px rgba(15, 15, 15, 0.1)',
      },
      boxShadow: {
        'shadow-btn': '0 0 2px 3px #ffd1b9',
        'shadow-gray': '0 0 5px 3px rgba(0,0,0,0.2)'
      },
    },
  },
  plugins: [],
}

