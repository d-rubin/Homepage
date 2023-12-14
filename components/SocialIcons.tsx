import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/public/github.svg";
import linkedInIcon from "@/public/linkedIn.svg";
import emailIcon from "@/public/email.svg";
import clsx from "clsx";
import Icon from "@/components/Icon";
const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex gap-10", className)}>
      <Link
        href="#"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={githubIcon} alt="Github Link" fill />
      </Link>
      <Link
        href="#"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={emailIcon} alt="Github Link" fill />
      </Link>
      <Link
        href="#"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={linkedInIcon} alt="Github Link" fill />
      </Link>
      <span className="group hidden md:block">
        <Link
          href="mailto:contact@daniel-rubin.de"
          className="outline-none group-hover:text-orange group-focus-within:text-orange transition-all"
        >
          contact@daniel-rubin.de
        </Link>
        <div className="w-14 border-2 rounded border-transparent group-hover:border-red group-focus-within:border-red transition-all" />
      </span>
    </div>
  );
};

export default SocialIcons;
