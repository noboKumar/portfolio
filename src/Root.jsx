import React, { useState } from "react";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/section/Hero";
import About from "./Components/section/About";
import { cn } from "./lib/utils";
import ClickSpark from "./Components/UI/ClickSpark";
import Skills from "./Components/section/Skills";
import { SparklesCore } from "./Components/UI/Sparkles";
import Education from "./Components/section/Education";
import Projects from "./Components/section/Projects";
import Contact from "./Components/section/Contact";
import Footer from "./Components/section/Footer";

const Root = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  return (
    <div className="font bg-base-100 relative min-h-screen w-full">
      {/*Background Layer*/}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sparkles */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="hidden h-full w-full lg:block"
          particleColor={`${theme === "light" ? "#000000" : "#FFFFFF"}`}
        />
        {/* Grid */}
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#525252_1px,transparent_1px),linear-gradient(to_bottom,#525252_1px,transparent_1px)]",
            "hidden lg:block [data-theme=dark]:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="bg-base-100 absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/*Foreground Content Layer*/}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <ClickSpark
          sparkColor={`${theme === "light" ? "#000000" : "#FFFFFF"}`}
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <NavBar theme={theme} setTheme={setTheme} />
          <div className="fixed top-0 left-0 z-40 h-[50px] w-full">
            <div className="h-full w-full bg-base-100"></div>
          </div>
          <Hero />
          <About />
          <Skills />
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </ClickSpark>
      </div>
    </div>
  );
};

export default Root;
