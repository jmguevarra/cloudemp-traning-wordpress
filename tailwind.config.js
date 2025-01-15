/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './**/*.php',
    './src/**/*.{js,jsx,ts,tsx}',
    './wp-content/themes/twentytwentyfive-child/**/*.{php,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3be4b4', 
        secondary: '#2d2d2d', 
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], 
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              color: 'theme("colors.primary")',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '700',
              color: 'theme("colors.primary")',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'theme("colors.primary")',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.5',
              color: 'var(--color-gray-700)',
            },
            a: {
              padding: '0.25rem 0.5rem',
              lineHeight: '1.4',    
              backgroundColor: 'theme("colors.primary")',
              color: 'var(--color-secondary)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            button: {
              display: 'inline-block',
              fontWeight: '600',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            },
          },
        },
      },
      backgroundImage: {
        'slick-overlay': 'linear-gradient(50deg, #0000005c 11%, #00000000 32%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography')
  ],
}

