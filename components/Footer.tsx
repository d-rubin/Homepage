import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 bg-[#141D2F] border-t-2 border-t-orange flex flex-col md:flex-row md:h-32 justify-between gap-4 items-center px-4 py-6">
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
