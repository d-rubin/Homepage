import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/public/github.svg";
import linkedInIcon from "@/public/linkedIn.svg";
import emailIcon from "@/public/email.svg";
const SocialIcons = () => {
  return (
    <div className="flex gap-10">
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
    </div>
  );
};

export default SocialIcons;
