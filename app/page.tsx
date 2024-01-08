import * as Craft from "@/components/layout";
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
    </Craft.Main>
  );
}
