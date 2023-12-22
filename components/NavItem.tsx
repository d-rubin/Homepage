import Link from "next/link";
import { generateHref } from "@/utils/helper";

const NavItem = ({ text }: { text: string }) => {
  return (
    <span className="group">
      <Link
        className="outline-none text-2xl group-hover:text-orange group-focus-within:text-orange transition-all"
        href={generateHref(text)}
      >
        {text}
      </Link>
      <div className="w-full border-2 rounded border-transparent group-hover:border-red group-focus-within:border-red transition-all" />
    </span>
  );
};

export default NavItem;
