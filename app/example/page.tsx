import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Vercel from "@/public/vercel.svg";

export default function Home() {
  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
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
        </Craft.Container>
      </Craft.Section>

      <Craft.Section>
        <Craft.Container>
          <Craft.Article>
            <h2>This is an example of the {"<Craft.Article/>"} Component</h2>
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
          </Craft.Article>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
