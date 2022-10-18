import React from "react";
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";

import {
  FaHome,
  FaHistory,
  FaBookReader,
  FaBookmark,
  FaBorderAll,
} from "react-icons/fa";

function Header() {
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
            <Navbar.Link href="/navbars" active={true}>
              <FaHome size={20} />
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <FaHistory size={20} />
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <FaBookReader size={20} />
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <FaBookmark size={20} />
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              <FaBorderAll size={20} />
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
