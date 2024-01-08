import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";

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
  return <Layout className={font.className}>{children}</Layout>;
}
