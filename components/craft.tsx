import Link from 'next/link';
import Image from 'next/image';

// Layout Component
type LayoutProps = {
	children: React.ReactNode;
	className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
	return (
		<html
			lang="en"
			className="bg-secondary-100 dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100"
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
		<section className={`${className} px-6 py-12`} id={id}>
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
		<div className={`container ${className} max-w-screen-lg m-auto`} id={id}>
			{children}
		</div>
	);
};

// Flex Component
type FlexProps = {
	children: React.ReactNode;
	className?: string;
	id?: string;
	direction?: 'row' | 'column';
};

const Flex = ({ children, className, id, direction = 'row' }: FlexProps) => {
	return (
		<div className={className} id={id}>
			{children}
		</div>
	);
};

export { Layout, Main, Section, Container };
