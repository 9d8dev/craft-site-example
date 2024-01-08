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
        "text-secondary-900 dark:text-secondary-100 antialiased",
        "bg-primary-50 dark:bg-primary-900",
        className
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
    <main
      className={clsx(
        // General Prose
        "prose dark:prose-invert md:prose-lg lg:prose-xl max-w-none",
        // Prose Headings
        "prose-headings:font-normal",
        // Inline Links
        "prose-a:border-b prose-a:border-b-primary-400 dark:prose-a:border-b-primary-100 prose-a:font-normal prose-a:text-primary-600 dark:prose-a:text-primary-200 hover:prose-a:border-b-primary-600 hover:prose-a:opacity-75 dark:hover:prose-a:border-b-primary-200 prose-a:no-underline prose-a:transition-all",
        // Blockquotes
        "prose-blockquote:not-italic",
        className
      )}
      id={id}
    >
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
    <div className={clsx("max-w-5xl mx-auto", "p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Article Component
type ArticleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article
      className={clsx(
        "prose dark:prose-invert md:prose-lg lg:prose-xl",
        "prose-headings:font-normal prose-primary dark:prose-invert",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
