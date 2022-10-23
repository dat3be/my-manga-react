import React from "react";
import { DarkThemeToggle, Dropdown, Avatar, Navbar} from "flowbite-react";
import useDarkMode from "./useDarkMode";

function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <header>
      <div>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Đạt Ngô Truyện's
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>

            <DarkThemeToggle onClick={() => toggleDarkMode(!isDarkMode)} />

            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Đạt Ngô</span>
                <span className="block truncate text-sm font-medium">
                  dat.ngo2994@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Tổng Quan</Dropdown.Item>
              <Dropdown.Item>Đã Xem</Dropdown.Item>
              <Dropdown.Item>Đã Lưu</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Đăng Xuất</Dropdown.Item>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
