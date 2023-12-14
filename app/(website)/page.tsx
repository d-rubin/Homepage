import Intro from "@/components/sections/Intro";
import AboutMe from "@/components/sections/AboutMe";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-8">
      <Intro />
      <AboutMe />
    </div>
  );
};

export default Homepage;
