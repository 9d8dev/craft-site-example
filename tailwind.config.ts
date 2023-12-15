import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';
import craft from './craft.config';

const getColorScheme = (colorName: keyof typeof colors) =>
	colors[colorName as keyof typeof colors] || colors.slate;

const config: Config = {
	darkMode: 'media',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: getColorScheme(craft.theme.primary),
				secondary: getColorScheme(craft.theme.secondary)
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	corePlugins: {
		transform: true
	}
};

export default config;
