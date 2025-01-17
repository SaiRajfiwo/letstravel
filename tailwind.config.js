import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [
    daisyui,
    flowbite,
    aspectRatio,
  ],
};
