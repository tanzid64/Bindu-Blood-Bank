"use client";
import ModeToggle from "./ui/mode-toggle";
import logo from "/logo.png";
import { Dropdown, Navbar } from "flowbite-react";
import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [isActive, setIsActive] = useState("home");
  return (
    <Navbar fluid className="fixed top-0 z-50 w-full">
      <Navbar.Brand as={Link} to="/" onClick={() => setIsActive("home")}>
        <img src={logo} className="mr-2 h-6 sm:h-7" alt="Bindu Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BINDU
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3">
        <ModeToggle />
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Admin User</span>
            <span className="block truncate text-sm font-medium">
              admin@bindu.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          onClick={() => setIsActive("home")}
          active={isActive === "home"}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/donors"
          onClick={() => setIsActive("donors")}
          active={isActive === "donors"}
        >
          Donors
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setIsActive("services")}
          active={isActive === "services"}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          onClick={() => setIsActive("contact")}
          active={isActive === "contact"}
        >
          Contact
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          onClick={() => setIsActive("about")}
          active={isActive === "about"}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/documentation"
          onClick={() => setIsActive("documentation")}
          active={isActive === "documentation"}
        >
          Documentation
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
