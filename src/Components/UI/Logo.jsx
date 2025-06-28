import React from "react";
import LogoPng from "../../assets/NK-logo.png";

const Logo = ({ theme }) => {
  return (
    <div
      className={`btn btn-ghost w-20 md:w-25 py-8 ${theme === "light" ? "invert" : ""}`}
    >
      <img src={LogoPng} alt="Logo" />
    </div>
  );
};

export default Logo;
