/** @type {import('tailwindcss').Config} */
{
	/* <style>
	@import
	url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
</style>; */
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		// fontFamily: {
		// 	cinzel: ['Cinzel', serif],
		// },
	},
	plugins: [require('daisyui')],
};
