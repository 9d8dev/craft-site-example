// Layout

type LayoutProps = {
	children: React.ReactNode;
	className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
	return (
		<html lang="en" className="p-6 bg-secondary-100 dark:bg-secondary-900">
			<body className={className}>{children}</body>
		</html>
	);
};

// Section

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
};

const Section = ({ children, className, style, id }: SectionProps) => {
	return (
		<section className={className} style={style} id={id}>
			{children}
		</section>
	);
};

// Container

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
};

const Container = ({ children, className, style, id }: ContainerProps) => {
	return (
		<div className={className} style={style} id={id}>
			{children}
		</div>
	);
};

export { Layout, Section, Container };
