/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans all files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert Sans', 'sans-serif'], // Add the custom font here
        'albert-sans': ['Albert Sans'], // Add the custom font here
      },
      backgroundImage: {
        'header-gradient':
          'linear-gradient(90.4deg, #1E1E1E -1.14%, #4C4B4B 13.38%, #85642D 60.77%, rgba(250, 156, 1, 0.6) 99.67%)',
      },
    },
  },
  plugins: [],
};
