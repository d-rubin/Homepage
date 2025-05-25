import Intro from "@/components/sections/Intro";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Homepage = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Skills />
      {/*<Portfolio />*/}
      <Contact />
    </>
  );
};

export default Homepage;
