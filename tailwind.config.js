/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	corePlugins: {
		container: false
	},
	theme: {
		// container: {
		// 	center: true,
		// 	padding: {
		// 		DEFAULT: '1.5rem',
		// 		sm: '2rem'
		// 	  }
		// },
		extend: {
			colors: {
				"dark": "var(--clr-dark)",
				"white": "var(--clr-white)",
				"primary-accent": "var(--clr-primary-accent)",
				"primary-accent-light": "var(--clr-primary-accent-light)",
				"secondary-accent": "var(--clr-secondary-accent)",
				"tertiary-accent": "var(--clr-tertiary-accent)",
				"borders": "var(--clr-borders)",
				"borders-gray": "var(--clr-borders-gray)",
				"gray": "var(--clr-gray)",
				"light-gray": "var(--clr-light-gray)",
				"dark-gray": "var(--clr-dark-gray)",
				"dark-blue": "var(--clr-dark-blue)",
			},
			fontSize: {
				"sm": "0.875rem",
				"base": "1rem",
				"lg": "1.125rem",
				"xl": "1.25rem",
				"1/2xl": "1.375rem",
				"2xl": "1.5rem",
				"3xl": "1.75rem",
				"4xl": "2rem",
				"5xl": "2.25rem",
				"6xl": "2.5rem",
				"7xl": "3.75rem"
			},
			fontFamily: {
				"body": "var(--font-body)",
				"heading": "var(--font-heading)",
			},
			borderRadius: {
				"none": "0",
				"xs": "0.025756416842341423rem",
				"sm": "0.03820805996656418rem",
				"default": "0.05207129195332527rem",
				"lg": "0.06437499821186066rem",
				"xl": "0.06460552662611008rem",
				"2xl": "0.07598039507865906rem",
				"3xl": "0.125rem",
				"4xl": "0.12687499821186066rem",
				"5xl": "0.25rem",
				"6xl": "0.3125rem",
				"full": "9999px"
			},
			boxShadow: {
				header: '-1px 1px 4px rgba(18, 18, 18, 0.15)',
				media: '10px 9px var(--clr-primary-accent)',
			},
			lineHeight: {
				"solid": "1.1",
				"snug": "1.4"
			},
			padding: {
				"19": "4.375rem",
			},
			gridAutoColumns: {
				'1fr': '1fr',
			},
			gridTemplateColumns: {
				'process': '1fr minmax(min-content,max-content) 1fr'
			},
			gridTemplateRows: {
				'process': 'auto auto auto auto auto auto auto auto'
			}
		},
		screens: {
			'xs': '340px',

			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '1188px',
					paddingLeft: '1.5rem',
					paddingRight: '1.5rem',
					marginLeft: 'auto',
					marginRight: 'auto',
					'@media (min-width: 1024px)': {
						maxWidth: '1240px',
						paddingLeft: '3.125rem',
						paddingRight: '3.125rem',
					}
				}
			})
		}
	],
}

