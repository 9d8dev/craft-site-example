import * as Typography from "@/components/craft/typography";
import * as Layout from "@/components/craft/layout";

export default function Home() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Layout.Container>
          <Typography.H1>Welcome to Craft UI</Typography.H1>
          <Typography.H2>
            Craft UI is a design system for NextJS Websites. It is built using
            shadcn/ui, radix ui, and tailwindcss.
          </Typography.H2>
          <Typography.H3>This is an example of an H3</Typography.H3>
          <Typography.H4>This is an example of an H4</Typography.H4>
          <Typography.H5>This is an example of an H5</Typography.H5>
          <Typography.H6>This is an example of an H6</Typography.H6>
          <p>
            This is a paragraph with an{" "}
            <Typography.InlineLink href="/" outbound={true}>
              inline link
            </Typography.InlineLink>
            . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            justo eget justo cursus ornare. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla nec justo eget justo cursus
            ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec justo eget justo cursus ornare.
          </p>
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
              Here&apos;s a link: <a href="#">Visit Tailwind CSS</a>
            </p>
          </Typography.Prose>
        </Layout.Container>
      </Layout.Section>
    </Layout.Main>
  );
}
