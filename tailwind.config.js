/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './**/*.php',
    './src/**/*.{js,jsx,ts,tsx}',
    './wp-content/themes/twentytwentyfive-child/**/*.{php,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

