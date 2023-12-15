import { Main, Section, Container, H1, H2, H3, H4, H5, H6 } from '@/components/craft';

export default function Home() {
	return (
		<Main>
			<Section>
				<Container>
					<H1>Welcome to Craft UI!</H1>
					<H2>Craft UI is a design system for NextJS Websites.</H2>
					<H3>This is an example of an H3.</H3>
					<H4>This is an example of an H4.</H4>
					<H5>This is an example of an H5.</H5>
					<H6>This is an example of an H6.</H6>
				</Container>
			</Section>
		</Main>
	);
}
