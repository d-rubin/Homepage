import NavItem from "@/components/NavItem";
import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 bg-[#141D2F] z-10 fixed left-0 right-0">
      <div className="flex justify-between gap-4 items-center p-4 w-full max-w-screen-lg mx-auto">
        <Link href="/" className="font-extrabold text-3xl outline-none">
          Daniel Rubin
        </Link>
        <nav className="hidden md:flex gap-4">
          <NavItem text="About me" />
          <NavItem text="Skills" />
          <NavItem text="Portfolio" />
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
