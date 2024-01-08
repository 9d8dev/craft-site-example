import * as Craft from "@/components/craft/layout";

type NavProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav className={className} id={id}>
      <Craft.Container>
        <h2>Craft UI</h2>
        {children}
      </Craft.Container>
    </nav>
  );
};

export default Nav;
