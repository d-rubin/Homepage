import NavItem from "@/components/NavItem";

const Header = () => {
  return <header className="hidden sm:flex justify-between gap-4 items-center p-4 fixed left-0 right-0">
    <p className="font-extrabold text-3xl cursor-default">Daniel Rubin</p>
    <nav className="flex gap-4">
      <NavItem text="About me" />
      <NavItem text="Skills" />
      <NavItem text="Portfolio" />
    </nav>
  </header>;
};

export default Header;
