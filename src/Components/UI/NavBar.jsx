import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import { MdOutlineFileDownload } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const NavLinks = (
    <>
      <li>
        <a>About Me</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <Container className="navbar bg-base-200 sticky top-5 lg:top-10 z-50 rounded-full px-5 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="cursor-pointer">
          <Logo theme={theme}></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{NavLinks}</ul>
      </div>
      <div className="navbar-end gap-5">
        <ToggleTheme theme={theme} setTheme={setTheme}></ToggleTheme>
        <a className="btn btn-primary inline-flex items-center px-2 md:px-4">
          <MdOutlineFileDownload size={20} />
          Resume
        </a>
      </div>
    </Container>
  );
};

export default NavBar;
