import Image from "next/image";
import introBackground from "@/public/intro-background.svg";
import introImage from "@/public/intro-image.png";
import introSeparator from "@/public/intro-separator.svg";
import LinkButton from "@/components/LinkButton";
import SocialIcons from "@/components/SocialIcons";
import Icon from "@/components/Icon";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-1 mb-8 md:flex-row items-center relative">
        <div className="relative flex items-center justify-center overflow-hidden sm:overflow-visible w-full md:w-2/5">
          <Image
            src={introBackground}
            alt="Background Image"
            fill
            className="-z-20 md:scale-150"
          />
          <Image
            src={introImage}
            alt="Introduction Image"
            className="object-cover -z-10"
          />
          <Image
            src={introSeparator}
            alt="Introduction Separator"
            className="md:hidden object-contain absolute -bottom-20 sm:-bottom-32 md:-bottom-80"
          />
        </div>
        <div className="flex flex-col items-center gap-4 md:w-3/5 z-10">
          <div className="flex items-center justify-center cursor-default">
            <p className="-rotate-90 h-fit text-3xl text-end md:text-4xl">
              I am
            </p>
            <span className="flex flex-col gap-2">
              <p className="text-4xl font-extrabold md:text-5xl">
                Daniel Rubin
              </p>
              <p className="text-2xl text-red md:text-3xl">
                FRONTEND DEVELOPER
              </p>
            </span>
          </div>
          <LinkButton
            label="Let's talk!"
            href="#contact"
            variant="default"
            color="orange"
          />
        </div>
        <Image
          src={introSeparator}
          alt="Introduction Separator"
          className="hidden md:block object-contain absolute md:-bottom-90"
        />
      </div>
      <div className="w-full flex items-center justify-center relative md:justify-start">
        <div
          id="about-me"
          className="absolute left-0 w-1/5 border-t-4 rounded border-red sm:w-48 md:w-40"
        />
        <SocialIcons className="md:ml-50" />
        <span className="group hidden md:block ml-10">
          <Link
            href="mailto:contact@daniel-rubin.de"
            className="outline-none group-hover:text-orange group-focus-within:text-orange transition-all"
          >
            contact@daniel-rubin.de
          </Link>
          <div className="w-14 border-2 rounded border-transparent group-hover:border-red group-focus-within:border-red transition-all" />
        </span>
        <span className="hidden absolute gap-4 items-center justify-center rotate-90 right-0 bottom-16 md:flex">
          <p className="cursor-default">Scroll down</p>
          <Icon
            icon="arrowDown"
            className="stroke-white -rotate-90 fill-white"
          />
        </span>
      </div>
    </>
  );
};

export default Intro;
