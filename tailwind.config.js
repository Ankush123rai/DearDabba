/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green: {
          400: '#5BB834',
          500: '#5BB834',
        },
      },
    },
  },
  plugins:[require('tailwind-scrollbar-hide')],
};