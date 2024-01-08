import * as Layout from "@/components/layout";
import Image from "next/image";
import Vercel from "@/public/vercel.svg";

export default function Home() {
  return (
    <Layout.Main>
      <Layout.Section>
        <Layout.Container>
          <h1>Welcome to Craft UI</h1>
          <h2>
            Craft UI is a design system for NextJS Websites. It is built using
            shadcn/ui, radix ui, and tailwindcss.
          </h2>
          <h3>This is an example of an H3</h3>
          <h4>This is an example of an H4</h4>
          <h5>This is an example of an H5</h5>
          <h6>This is an example of an H6</h6>
          <p>
            This is a paragraph with an <a href="/">inline link</a>. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla nec justo eget
            justo cursus ornare. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla nec justo eget justo cursus ornare. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo
            eget justo cursus ornare.
          </p>
        </Layout.Container>
      </Layout.Section>

      <Layout.Section>
        <Layout.Container>
          <Layout.Article>
            <h2>This is an example of the {"<Layout.Article/>"} Component</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              justo eget justo cursus ornare.
            </p>
            <h4>This is an Unordered List</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <h4>This is an Ordered List</h4>
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
            <Image
              src={Vercel}
              alt="The Vercel Logo"
              className="dark:invert"
              width={200}
              height={200}
            />
          </Layout.Article>
        </Layout.Container>
      </Layout.Section>
    </Layout.Main>
  );
}
