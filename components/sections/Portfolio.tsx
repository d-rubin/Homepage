import Image from "next/image";
import laptop1 from "@/public/laptop1.png";
import laptop2 from "@/public/laptop2.png";
import LinkButton from "@/components/LinkButton";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10 z-10 cursor-default">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full flex items-center justify-center relative">
          <div className="w-full flex items-center justify-end">
            <div className="rounded border-t-4 border-red w-full" />
          </div>
          <h2 className="text-5xl font-extrabold w-fit px-8">Portfolio</h2>
          <div className="rounded w-full border-t-4 border-red" />
        </div>
        <p className="text-lg text-center w-full lg:w-1/2 px-4">
          In this section I present some of my own projects - please feel free
          to try them out.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-4 items-center">
        <Image
          src={laptop1}
          alt="Laptop with Image of join"
          className="max-w-md w-full md:w-80"
        />
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl text-red font-extrabold text-center">Join</h3>
          <p className="text-2xl text-orange text-center">
            Next.js | TypeScript | Server-actions | Tailwind | Python | Django |
            Rest-Framework
          </p>
          <p className="text-lg text-center">
            Task manager inspired by the Kanban System. Create and organize
            tasks using drag and drop functions, assign users and categories.
          </p>
          <div className="flex gap-8 justify-center">
            <LinkButton
              label="Live test"
              href="https://join.daniel-rubin.de"
              target="_blank"
              color="red"
            />
            <LinkButton
              label="Github"
              href="https://github.com/d-rubin/Join-next"
              target="_blank"
              variant="outline"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-8 px-4 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl text-red font-extrabold text-center">
            Sharky
          </h3>
          <p className="text-2xl text-orange text-center">
            JavaScript | OOP | HTML | CSS
          </p>
          <p className="text-lg text-center">
            A simple Jump-and-Run game based on an object-oriented approach.
            Help sharky to find coins and poison bottles to fight against the
            killer whale
          </p>
          <div className="flex gap-8 justify-center">
            <LinkButton
              label="Live test"
              href="https://sharky.daniel-rubin.de/"
              target="_blank"
              color="red"
            />
            <LinkButton
              label="Github"
              href="https://github.com/d-rubin/Sharky"
              target="_blank"
              variant="outline"
            />
          </div>
        </div>
        <Image
          src={laptop2}
          alt="Laptop with Image of sharky"
          className="max-w-md w-full md:w-80"
        />
      </div>
    </div>
  );
};

export default Portfolio;
