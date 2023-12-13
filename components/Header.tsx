import NavItem from "@/components/NavItem";
import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-20 justify-between gap-4 items-center p-4 fixed w-full max-w-screen-lg mx-auto">
      <Link href="/" className="font-extrabold text-3xl outline-none">
        Daniel Rubin
      </Link>
      <nav className="hidden sm:flex gap-4">
        <NavItem text="About me" />
        <NavItem text="Skills" />
        <NavItem text="Portfolio" />
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
