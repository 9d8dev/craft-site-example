import * as Craft from "@/components/craft/layout";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import clsx from "clsx";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme/theme-toggle";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "GitHub",
    href: "https://github.com/9d8dev/craft",
  },
];

type NavProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={clsx(
        "sticky top-0",
        "bg-opacity-20 backdrop-blur-md",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link className="hover:opacity-75 transition-all" href="/">
          <h2 className="sr-only">Craft UI</h2>
          <Image
            className="dark:invert"
            src={Logo}
            alt="Logo"
            width={72}
            height={48}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-6">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="hover:opacity-75 transition-all"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button>Button</Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
