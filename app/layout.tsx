import type { Metadata } from 'next';
import { Manrope, Instrument_Serif } from 'next/font/google';
import * as Craft from '@/components/craft/layout';
import Nav from '@/components/craft/sections/nav';
import Footer from '@/components/craft/sections/footer';
import './globals.css';

const manrope = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans'
});

const instrument_serif = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-serif'
});

export const metadata: Metadata = {
	title: 'Craft UI | Design System for NextJS Websites',
	description:
		'Craft UI is a design system and component library for building NextJS Websites rapidly uising Tailwind, Shadcn/ui, and Typescript. Created by Bridger Tower and Cameron Youngblood.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Craft.Layout className={`${manrope.variable} ${instrument_serif.variable}`}>
			<Nav />
			{children}
			<Footer />
		</Craft.Layout>
	);
}
