import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// TYPOGRAPHY

// H1 Component
type H1Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H1 = ({ children, className, id }: H1Props) => {
  return (
    <h1
      className={clsx(
        "text-4xl md:text-6xl font-medium",
        "text-secondary-900 dark:text-secondary-100",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h1>
  );
};

// H2 Component
type H2Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H2 = ({ children, className, id }: H2Props) => {
  return (
    <h2
      className={clsx(
        "text-3xl md:text-4xl font-normal",
        "text-secondary-800 dark:text-secondary-200",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h2>
  );
};

// H3 Component
type H3Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H3 = ({ children, className, id }: H3Props) => {
  return (
    <h3
      className={clsx(
        "text-2xl md:text-3xl font-normal",
        "text-secondary-700 dark:text-secondary-200",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h3>
  );
};

// H4 Component
type H4Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H4 = ({ children, className, id }: H4Props) => {
  return (
    <h4
      className={clsx(
        "text-xl md:text-2xl font-normal",
        "text-secondary-800 dark:text-secondary-200",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h4>
  );
};

// H5 Component
type H5Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H5 = ({ children, className, id }: H5Props) => {
  return (
    <h5
      className={clsx(
        "text-lg md:text-xl font-normal",
        "text-secondary-800 dark:text-secondary-300",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h5>
  );
};

// H6 Component
type H6Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const H6 = ({ children, className, id }: H6Props) => {
  return (
    <h6
      className={clsx(
        "text-base font-normal md:text-lg ",
        "text-secondary-700 dark:text-secondary-300",
        "mb-8",
        className
      )}
      id={id}
    >
      {children}
    </h6>
  );
};

// Prose Component
type ProseProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Prose = ({ children, className, id }: ProseProps) => {
  return (
    <div
      className={clsx(
        "prose lg:prose-lg xl:prose-xl",
        " prose-headings:font-normal prose-primary dark:prose-invert",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
};

// BUTTONS AND LINKS

// Button Link Component
type ButtonLinkProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  className?: string;
  id?: string;
  href: string;
};

const ButtonLink = ({
  children,
  className,
  id,
  href,
  type = "primary",
}: ButtonLinkProps) => {
  let buttonStyle;
  switch (type) {
    case "primary":
      buttonStyle =
        "text-white bg-primary-600 hover:bg-primary-500 rounded-md shadow-sm";
      break;
    case "secondary":
      buttonStyle =
        "border border-primary-600 hover:border-primary-500 rounded-md shadow-sm";
      break;
    case "tertiary":
      buttonStyle = "underline text-primary-500 hover:text-primary-600";
      break;
  }
  return (
    <Link
      href={href}
      className={clsx(
        "w-fit px-4 py-2 inline-block font-medium transition-all",
        buttonStyle,
        className
      )}
      id={id}
    >
      {children}
    </Link>
  );
};

// Inline Link Component
type InlineLinkProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  href: string;
};

const InlineLink = ({ children, className, id, href }: InlineLinkProps) => {
  return (
    <Link id={id} className={clsx(className)} href={href}>
      {children}
    </Link>
  );
};

export { H1, H2, H3, H4, H5, H6, Prose, ButtonLink, InlineLink };
