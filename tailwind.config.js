module.exports = {
	darkMode: 'class',
	theme: {
		fontFamily: {
			display: ['NT Somic', 'sans-serif'],
		},
		container: {
			center: true,
		},
		screens: {
			xs: { max: '450px' },
			sm: { max: '640px' },
			md: { max: '768px' },
			lg: { max: '1024px' },
			xl: { max: '1220px' },
		},
		extend: {
			colors: {
				transperent: 'transperent',
				white: '#fff',
				black: '#0C0C0D',
				accent: '#F3223C',
				gray: '#858585',
				iconGray: '#B6BAC2',
			},
			fontSize: {
				15: ['15px', {}],
			},
		},
	},
};
