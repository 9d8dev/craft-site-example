import * as Typography from "@/components/craft/typography";
import * as Layout from "@/components/craft/layout";

export default function Home() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Layout.Container>
          <Typography.H1>Welcome to Craft UI</Typography.H1>
          <Typography.H2>
            Craft UI is a design system for NextJS Websites.
          </Typography.H2>
          <Typography.H3>This is an example of an Typography.H3.</Typography.H3>
          <Typography.H4>This is an example of an Typography.H4.</Typography.H4>
          <Typography.H5>This is an example of an Typography.H5.</Typography.H5>
          <Typography.H6>This is an example of an Typography.H6.</Typography.H6>
          <p>
            This is a paragraph with an{" "}
            <Typography.InlineLink href="/">inline link</Typography.InlineLink>
          </p>
          <Layout.Flex className="!gap-2">
            <Typography.ButtonLink href="/">
              Primary Button
            </Typography.ButtonLink>
            <Typography.ButtonLink type="secondary" href="/">
              Secondary Button
            </Typography.ButtonLink>
            <Typography.ButtonLink type="tertiary" href="/">
              Primary Button
            </Typography.ButtonLink>
          </Layout.Flex>
        </Layout.Container>
      </Layout.Section>

      <Layout.Section>
        <Layout.Container>
          <Typography.H3>
            This is an example of the {"<Layout.Flex />"} component.
          </Typography.H3>

          <Typography.H5>Layout.Flex Row Version:</Typography.H5>
          <Layout.Flex direction="row">
            <div className="w-96 h-96 bg-primary-400 opacity-25"></div>
            <div className="w-96 h-96 bg-primary-400 opacity-25"></div>
          </Layout.Flex>

          <Typography.H5 className="mt-8">
            Layout.Flex Col Version:
          </Typography.H5>
          <Layout.Flex direction="col">
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
          </Layout.Flex>

          <Typography.H3 className="mt-8">
            This is an example of the {"<Layout.Grid />"} component.
          </Typography.H3>

          <Typography.H5>2 Col Version:</Typography.H5>
          <Layout.Grid className="Layout.Grid-cols-2">
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
          </Layout.Grid>

          <Typography.H5 className="mt-8">3 Col 2 row Version:</Typography.H5>
          <Layout.Grid className="Layout.Grid-cols-3 Layout.Grid-rows-2">
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
            <div className="w-full h-96 bg-primary-400 opacity-25"></div>
          </Layout.Grid>
        </Layout.Container>
      </Layout.Section>

      <Layout.Section>
        <Layout.Container>
          <Typography.Prose>
            <Typography.H2>
              This is an example of the {"<Prose/>"} Layout.Section
            </Typography.H2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              justo eget justo cursus ornare.
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
                Prose is a Tailwind CSS utility that styles your content to make
                it look beautiful and readable by default.
              </p>
            </blockquote>
            <p>
              Here&apos;s a link:{" "}
              <Typography.InlineLink href="#">
                Visit Tailwind CSS
              </Typography.InlineLink>
            </p>
          </Typography.Prose>
        </Layout.Container>
      </Layout.Section>
    </Layout.Main>
  );
}
