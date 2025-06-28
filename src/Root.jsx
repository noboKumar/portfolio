import React from "react";
import NavBar from "./Components/UI/NavBar";
import Hero from "./Components/section/Hero";
import { cn } from "../lib/utils";

const Root = () => {
  return (
    <div className="font">
      <NavBar />
      <div className="bg-base-100 relative flex min-h-screen w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "[data-theme=dark]:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="bg-base-100 pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Root;
