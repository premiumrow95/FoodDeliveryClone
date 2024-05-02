/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '260px', 'max': '450px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '451px', 'max': '700px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '701px', 'max': '1000px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1001px', 'max': '1300px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}