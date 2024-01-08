import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";

const Footer = () => {
  return (
    <footer>
      <Craft.Section>
        <Craft.Container className="grid gap-6 md:grid-cols-2">
          <div>
            <Link href="/">
              <h3 className="sr-only">Craft UI</h3>
              <Image
                className="dark:invert mb-6"
                src={Logo}
                alt="Logo"
                width={100}
                height={50}
              ></Image>
            </Link>
            <p>
              <Balancer>
                Craft UI is a design system and component library for building
                NextJS Websites. Created by Bridger Tower and Cameron
                Youngblood.
              </Balancer>
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </Craft.Container>
      </Craft.Section>
    </footer>
  );
};

export default Footer;
