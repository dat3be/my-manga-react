import React from 'react'
import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";

function Header() {
  return (
    <div>
      <header>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://my-manga-react.netlify.app/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="DatNgo Site"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Dat Ngo Truyen
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header
