/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', {
          lineHeight: '18px',
        }],
        sm: ['14px', {
          lineHeight: '22px',
        }],
        base: ['16px', {
          lineHeight: '22px',
        }],
        lg: ['18px', {
          lineHeight: '24px',
        }],
        xl: ['28px', {
          lineHeight: '40px',
        }],
      },
      colors: {
        // transparent: 'transparent',
        'primary': '#f4f4f5',
        'secondary': '#3C3C3D',
        'focus': '#e4e4e7',
        'hover': '#d4d4d8',
        'active': '#A1A1AA',
        'danger': '#E1CBD5',
        'success': '#D5E1CB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};