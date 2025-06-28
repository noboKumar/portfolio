import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import { MdOutlineFileDownload } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";

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
    <Container className="navbar bg-base-200 sticky top-0 z-10 rounded-full px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
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
        <a className="btn btn-primary inline-flex items-center">
          <MdOutlineFileDownload size={20} />
          Resume
        </a>
      </div>
    </Container>
  );
};

export default NavBar;
