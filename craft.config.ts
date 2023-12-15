import { DefaultColors } from 'tailwindcss/types/generated/colors';

// craft type definition
type craftTypes = {
	theme: {
		primary: keyof DefaultColors;
		secondary: keyof DefaultColors;
	};
};

// craft configuration
const craft: craftTypes = {
	theme: {
		// color options can be found at https://tailwindcss.com/docs/customizing-colors
		primary: 'orange',
		secondary: 'neutral'
		// change the font using `next/font` in `layout.tsx` in the app directory.
		// check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
	}
};
export default craft;
