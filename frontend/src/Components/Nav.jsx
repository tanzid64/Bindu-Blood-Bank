"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Dark from "./Dark";
import logo from "/images/logo.png";

export default function Nav() {
  return (
    <Navbar fluid >
      <Navbar.Brand href="" >
        <img
          src={logo}
          className="mr-2 h-6"
          alt="Bindu Blood Bank Logo"
        />
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
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">User-Guide</Navbar.Link>
        <Navbar.Link href="#">Donors</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
