import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/public/github.svg";
import linkedInIcon from "@/public/linkedIn.svg";
import emailIcon from "@/public/email.svg";
import clsx from "clsx";

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex gap-10", className)}>
      <Link
        href="https://github.com/d-rubin"
        target="_blank"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={githubIcon} alt="Github Link" fill />
      </Link>
      <Link
        href="mailto:contact@daniel-rubin.de"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={emailIcon} alt="Github Link" fill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/profile-daniel-rubin/"
        target="_blank"
        className="group outline-none relative h-8 w-8 block transition-all hover:scale-125 focus:scale-125"
      >
        <Image src={linkedInIcon} alt="Github Link" fill />
      </Link>
    </div>
  );
};

export default SocialIcons;
