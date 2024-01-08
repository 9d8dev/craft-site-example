import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/nav";
import "./globals.css";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craft UI",
  description:
    "Craft UI is a design system and component library for building NextJS Websites. Created by Bridger Tower.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={font.className}>
      <Nav></Nav>
      {children}
    </Craft.Layout>
  );
}
