/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stwui/**/*.{svelte,js,ts,html}'
	],
	plugins: [
		require('stwui/plugin')
	],
  theme: {
    extend: {
		fontFamily: {
			'inter': ['Inter', 'sans-serif']
		},
	},
  },
  stwui: {
	themes: ['light', 'dark']
}
};

module.exports = config;
