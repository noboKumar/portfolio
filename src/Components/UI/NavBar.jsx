import React from "react";
import Logo from "./Logo";
import Container from "./Container";
import { MdOutlineFileDownload } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const NavBar = ({ theme, setTheme }) => {
  const NavLinks = (
    <>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          isDynamic={true}
          activeClass="active"
          className="rounded-md px-3 py-2 transition-colors duration-300"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          isDynamic={true}
          activeClass="active"
          className="rounded-md px-3 py-2 transition-colors duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          isDynamic={true}
          activeClass="active"
          className="rounded-md px-3 py-2 transition-colors duration-300"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          isDynamic={true}
          activeClass="active"
          className="rounded-md px-3 py-2 transition-colors duration-300"
        >
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <Container className="navbar bg-base-200 sticky rounded-xl top-0 z-50 w-full px-5 shadow-sm md:w-11/12 md:rounded-full md:px-10 md:top-10">
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
        <span className="cursor-pointer">
          <Logo theme={theme}></Logo>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1 text-lg">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <ToggleTheme theme={theme} setTheme={setTheme}></ToggleTheme>
        <a className="btn btn-primary inline-flex items-center px-2 text-sm md:px-4">
          <MdOutlineFileDownload size={20} />
          Resume
        </a>
      </div>
    </Container>
  );
};

export default NavBar;
