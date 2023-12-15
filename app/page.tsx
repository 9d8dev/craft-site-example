import {
	Main,
	Section,
	Container,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Prose,
	Flex,
	Grid,
	ButtonLink
} from '@/components/craft';
import Image from 'next/image';

export default function Home() {
	return (
		<Main>
			<Section>
				<Container>
					<H1>Welcome to Craft UI</H1>
					<H2>Craft UI is a design system for NextJS Websites.</H2>
					<H3>This is an example of an H3.</H3>
					<H4>This is an example of an H4.</H4>
					<H5>This is an example of an H5.</H5>
					<H6>This is an example of an H6.</H6>
					<Flex className="!gap-2">
						<ButtonLink href="/">Primary Button</ButtonLink>
						<ButtonLink type="secondary" href="/">
							Secondary Button
						</ButtonLink>
						<ButtonLink type="tertiary" href="/">
							Primary Button
						</ButtonLink>
					</Flex>
				</Container>
			</Section>

			<Section>
				<Container>
					<H3>This is an example of the {'<Flex />'} component.</H3>

					<H5>Flex Row Version:</H5>
					<Flex direction="row">
						<div className="w-96 h-96 bg-primary-400 opacity-25"></div>
						<div className="w-96 h-96 bg-primary-400 opacity-25"></div>
					</Flex>

					<H5 className="mt-8">Flex Col Version:</H5>
					<Flex direction="col">
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
					</Flex>

					<H3 className="mt-8">This is an example of the {'<Grid />'} component.</H3>

					<H5>2 Col Version:</H5>
					<Grid className="grid-cols-2">
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
					</Grid>

					<H5 className="mt-8">3 Col 2 row Version:</H5>
					<Grid className="grid-cols-3 grid-rows-2">
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
						<div className="w-full h-96 bg-primary-400 opacity-25"></div>
					</Grid>
				</Container>
			</Section>

			<Section>
				<Container>
					<Prose>
						<h2>This is an example of the {'<Prose/>'} Section</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo eget justo
							cursus ornare.
						</p>
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
						<ol>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ol>
						<blockquote>
							<p>
								Prose is a Tailwind CSS utility that styles your content to make it look beautiful
								and readable by default.
							</p>
						</blockquote>
						<p>
							Here&apos;s a link: <a href="#">Visit Tailwind CSS</a>
						</p>
					</Prose>
				</Container>
			</Section>
		</Main>
	);
}
