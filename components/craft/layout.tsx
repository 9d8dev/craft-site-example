import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// LAYOUT

// Layout Component
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={clsx(
        "bg-secondary-100 dark:bg-secondary-900",
        "text-secondary-900 dark:text-secondary-100 antialiased font-light"
      )}
    >
      <body className={className}>{children}</body>
    </html>
  );
};

// Main Component
type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
};

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={clsx("py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={clsx("max-w-7xl mx-auto", "p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Flex Component
type FlexProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  direction?: "row" | "col";
};

const Flex = ({ children, className, id, direction }: FlexProps) => {
  return (
    <div
      className={clsx(
        "flex flex-wrap gap-8 flex-col md:flex-row",
        direction === "row"
          ? "md:flex-row"
          : direction === "col"
          ? "md:flex-col"
          : "",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

// Grid Component
type GridProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Grid = ({ children, className, id }: GridProps) => {
  return (
    <div className={clsx("grid gap-8", className)} id={id}>
      {children}
    </div>
  );
};

export { Layout, Main, Section, Container, Flex, Grid };
