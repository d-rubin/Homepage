import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#141D2F] border-t-2 border-t-orange flex flex-col md:flex-row md:h-20 justify-between gap-6 items-center p-4">
      <p className="cursor-default text-2xl">© Daniel Rubin 2023</p>
      <SocialIcons />
      <div className="group">
        <Link
          href="imprint"
          className="outline-none group-hover:text-orange group-focus:text-orange transition-all"
        >
          Imprint
        </Link>
        <div className="w-full border-[1px] rounded border-transparent group-hover:border-red group-focus-within:border-red transition-all" />
      </div>
    </footer>
  );
};

export default Footer;
