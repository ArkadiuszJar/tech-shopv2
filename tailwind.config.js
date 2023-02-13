/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 1.5s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"20%": { opacity: 1 },
					"80%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
};
