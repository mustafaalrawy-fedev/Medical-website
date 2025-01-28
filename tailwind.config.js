/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#bae6fd',
        // 'main-color': '#e8d8c4',
        'button-color': '#001960',
        // 'text-color': '#044973',
        'text-color': '#333',
        'subTitle-color': '#71717a',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
