/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				desktop: 'url("/images/bg-desktop.svg")',
				mobile: 'url("/images/bg-mobile.svg")',
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
				sans: ['var(--font-open-sans)'],
			},
			colors: {
				violet: 'hsl(257, 40%, 49%)',
				softMagenta: 'hsl(300, 69%, 71%)',
			},
		},
	},
	plugins: [],
}
