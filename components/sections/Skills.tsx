import skillsBackgroundImg from "@/public/skills-background.svg";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="px-4 flex flex-col gap-8 relative overflow-visible cursor-default">
      <Image
        src={skillsBackgroundImg}
        alt="Skills Background"
        className="absolute -left-50 rotate-180 opacity-50 scale-75"
      />
      <h2 id="skills" className="text-5xl font-extrabold w-full text-end">
        My skills
      </h2>
      <p className="text-end text-lg">
        My main skills include Next.js, React, TypeScript & Storybook, which I
        was able to prove in the development and testing of a web portal and an
        in-house UI library.
      </p>
      <p className="text-end text-lg">
        I also have experience with Tailwind, Git, SCSS, SQL, Python, Django &
        Scrum.
      </p>
      <p className="text-end text-lg">
        Of course, the basics with JavaScript, HTML & CSS should not be missing.
      </p>
      <div className="grid grid-cols-12"></div>
    </div>
  );
};

export default Skills;
