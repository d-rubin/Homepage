import introImage from "@/public/intro-image.png";
import introSeparator from "@/public/intro-separator.svg";
import introBackground from "@/public/intro-background.svg";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={introBackground}
          alt="Background Image"
          fill
          className="-z-10"
        />
        <Image
          src={introImage}
          alt="Introduction Image"
          className="object-contain"
        />
        <Image
          src={introSeparator}
          alt="Introduction Separator"
          className="object-contain absolute -bottom-20"
        />
      </div>
      {/*<h2 id="about-me" className="invisible" />*/}
      <div className="flex items-center justify-center">
        <p className="-rotate-90 h-fit text-4xl text-end justify-self-end">
          I am
        </p>
        <span className="flex flex-col gap-2">
          <p className="text-5xl font-extrabold">Daniel Rubin</p>
          <p className="text-3xl text-red">FRONTEND DEVELOPER</p>
        </span>
      </div>
    </div>
  );
};

export default Homepage;
