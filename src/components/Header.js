import React from "react";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import {
  FaHome,
  FaHistory,
  FaBookReader,
  FaBookmark,
  FaBorderAll,
} from "react-icons/fa";
import useDarkMode from "./useDarkMode";

function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <header>
      <div>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://my-manga-react.netlify.app/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="DatNgo Site"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Đạt Ngô Truyện's
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active={true}>
              <FaHome size={20} />
            </Navbar.Link>
            <Navbar.Link href="#">
              <FaHistory size={20} />
            </Navbar.Link>
            <Navbar.Link href="#">
              <FaBookReader size={20} />
            </Navbar.Link>
            <Navbar.Link href="#">
              <FaBookmark size={20} />
            </Navbar.Link>
            <Navbar.Link href="#">
              <FaBorderAll size={20} />
            </Navbar.Link>
            {isDarkMode ? (
              <FaSun size="20" onClick={() => toggleDarkMode(!isDarkMode)} />
            ) : (
              <FaMoon size="20" onClick={() => toggleDarkMode(!isDarkMode)} />
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
