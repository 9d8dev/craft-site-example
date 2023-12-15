import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

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
				'bg-secondary-100 dark:bg-secondary-900',
				'text-secondary-900 dark:text-secondary-100 antialiased'
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
		<section className={clsx('py-12', className)} id={id}>
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
		<div className={clsx('max-w-7xl mx-auto', 'p-8', className)} id={id}>
			{children}
		</div>
	);
};

// Flex Component
type FlexProps = {
	children: React.ReactNode;
	className?: string;
	id?: string;
	direction?: 'row' | 'col';
};

const Flex = ({ children, className, id, direction }: FlexProps) => {
	return (
		<div
			className={clsx(
				'flex flex-wrap gap-8',
				direction === 'row' ? 'flex-row' : direction === 'col' ? 'flex-col' : '',
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
	cols?: number;
	rows?: number;
};

const Grid = ({ children, className, id, cols, rows }: GridProps) => {
	return (
		<div
			className={clsx(
				'grid gap-8',
				cols ? `grid-cols-${cols}` : '',
				rows ? `grid-rows-${rows}` : '',
				className
			)}
			id={id}
		>
			{children}
		</div>
	);
};

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
				'text-4xl font-bold',
				'text-secondary-900 dark:text-secondary-100',
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
				'text-3xl font-bold',
				'text-secondary-900 dark:text-secondary-100',
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
				'text-2xl font-bold',
				'text-secondary-900 dark:text-secondary-100',
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
			className={clsx('text-xl font-bold', 'text-secondary-900 dark:text-secondary-100', className)}
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
			className={clsx('text-lg font-bold', 'text-secondary-900 dark:text-secondary-100', className)}
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
				'text-base font-bold',
				'text-secondary-900 dark:text-secondary-100',
				className
			)}
			id={id}
		>
			{children}
		</h6>
	);
};

export { Layout, Main, Section, Container, Flex, Grid, H1, H2, H3, H4, H5, H6 };
