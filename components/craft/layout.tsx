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

export { Layout, Main, Section, Container };
