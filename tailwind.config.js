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
      },
    },
  },
  plugins: [],
};
