import React from "react";
import LogoPng from "../../assets/NK-logo.png";
import { Link } from "react-scroll";

const Logo = ({ theme }) => {
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      offset={-200}
      spy={true}
      activeClass="active"
    >
      <div
        className={`w-20 px-5 py-5 md:w-25 ${theme === "light" ? "invert" : ""}`}
      >
        <img src={LogoPng} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
