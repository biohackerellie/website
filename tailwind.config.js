/** @type {import('tailwindcss').Config} */
export default {
	safelist: [
		'!duration-0',
		'!delay-0',
		'html.js "where([class*="taos:"]:not(.taos-init))'
	],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      }
    },
  },
  plugins: [
		require('taos/plugin')
	],
}

