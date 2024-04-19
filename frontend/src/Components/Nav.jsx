"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Dark from "./Dark";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState("home");
  return (
    <Navbar fluid>
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className="mr-2 h-6" alt="Bindu Blood Bank Logo" />
        <span className="self-center whitespace-nowrap text-m font-semibold dark:text-white">
          Bindu Blood Bank
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dark />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
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
          to="/"
          onClick={() => setIsActive("userGuide")}
          active={isActive === "userGuide"}
        >
          User-Guide
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/"
          onClick={() => setIsActive("donors")}
          active={isActive === "donors"}
        >
          Donors
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/"
          onClick={() => setIsActive("services")}
          active={isActive === "services"}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/"
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
      </Navbar.Collapse>
    </Navbar>
  );
}
