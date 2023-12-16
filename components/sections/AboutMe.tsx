import Icon from "@/components/Icon";
import Image from "next/image";
import aboutMeBackgroundImg from "@/public/about-me-background.svg";
import aboutMeImg from "@/public/about-me-img.jpg";

const AboutMe = () => {
  return (
    <div className="z-10 flex gap-8 items-center relative w-full overflow-visible">
      <Image
        src={aboutMeBackgroundImg}
        alt="About me background"
        className="absolute object-cover top-20 -right-40 opacity-40 sm:-right-60 sm:scale-75 sm:-top-32"
      />
      <div className="flex pl-4 pr-4 lg:pr-0 flex-col gap-8 lg:w-1/2 cursor-default">
        <h2 id="about-me" className="text-5xl font-extrabold">
          About me
        </h2>
        <p className="text-lg">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, I'm a German frontend developer with experience in developing and
          testing responsive web apps and components with Next.js, React &
          Storybook. Feel free to check out my portfolio with examples of
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          projects, that I've developed for myself.
        </p>
        <span className="flex gap-8 items-center">
          <Icon
            icon="lightBulb"
            className="fill-none w-20 h-20 aspect-1/1 flex-grow"
          />
          <p className="text-lg flex-shrink w-fit">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            As a part-time freelancer, I'm actively looking for exciting new
            projects where I can contribute my skills and achieve great results
            together with you.
          </p>
        </span>
        <span className="flex gap-6 items-center">
          <Icon icon="puzzle" className="fill-orange w-24 h-24 flex-grow" />
          <p className="text-lg flex-shrink w-fit">
            If you are looking for an experienced and motivated developer who
            has a knack for turning designs into code, then get in touch with me
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            and let's talk about your project.
          </p>
        </span>
      </div>
      <div className="w-1/2 hidden lg:flex items-center justify-end pr-20">
        <div className="relative rounded-full h-96 w-96 overflow-hidden border-4 border-orange">
          <Image src={aboutMeImg} fill alt="About me Image" />
        </div>
        <div className="absolute right-0 border-t-orange border-t-4 rounded-tr rounded-br w-20" />
      </div>
    </div>
  );
};

export default AboutMe;
