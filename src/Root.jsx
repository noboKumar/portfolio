import React, { useState } from "react";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/section/Hero";
import About from "./Components/section/About";
import { cn } from "./lib/utils";
import ClickSpark from "./Components/UI/ClickSpark";
import Skills from "./Components/section/Skills";
import { SparklesCore } from "./Components/UI/sparkles";

const Root = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  return (
    <div className="font bg-base-100 relative min-h-screen w-full overflow-hidden">
      {/*Background Layer*/}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sparkles */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor={`${theme === "light" ? "#000000" : "#FFFFFF"}`}
        />
        {/* Grid */}
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#525252_1px,transparent_1px),linear-gradient(to_bottom,#525252_1px,transparent_1px)]",
            "[data-theme=dark]:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="bg-base-100 absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/*Foreground Content Layer*/}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <NavBar theme={theme} setTheme={setTheme} />
          <Hero />
          <About />
          <Skills />
        </ClickSpark>
      </div>
    </div>
  );
};

export default Root;
