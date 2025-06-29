import React from "react";
import LogoPng from "../../assets/NK-logo.png";
import { Link } from "react-scroll";

const Logo = ({ theme }) => {
  return (
    <div
      className={`w-20 px-5 py-5 md:w-25 ${theme === "light" ? "invert" : ""}`}
    >
      <Link to="hero" smooth={true} duration={500} offset={-200} spy={true} activeClass="active">
        <img src={LogoPng} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
