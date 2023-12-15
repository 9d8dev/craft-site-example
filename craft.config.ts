import { Manrope } from 'next/font/google';

const craft: craftTypes = {
	theme: {
		primary: 'blue',
		secondary: 'neutral'
		// change the font using `next/font` in `layout.tsx` in the app directory.
		// check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
	}
};
export default craft;

// craft type definition

type craftTypes = {
	theme: {
		primary: string;
		secondary: string;
	};
};
