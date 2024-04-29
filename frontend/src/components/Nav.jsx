"use client";
import ModeToggle from "./ui/mode-toggle";
import logo from "/logo.png";
import { Dropdown, Navbar } from "flowbite-react";
import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../redux/slices/authSlice";
import { selectCurrentMessage, setToast } from "../redux/slices/toastSlice";
import MainToast from "./MainToast";

export default function Nav() {
  const message = useSelector(selectCurrentMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [isActive, setIsActive] = useState("home");
  const handleLogout = async () => {
    localStorage.removeItem("refreshToken");
    dispatch(logOut());
    dispatch(setToast({ message: "Logged out", type: "warning" }));

    navigate("/login");
  };
  return (
    <>
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
            label={<Avatar src={user ? user.image : ""} alt="User settings" />}
          >
            {user ? (
              <>
                <Dropdown.Header>
                  <span className="block text-sm">{user.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  onClick={() => setIsActive("profile")}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item
                  as={Link}
                  to="/login"
                  onClick={() => setIsActive("login")}
                >
                  Login
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/register"
                  onClick={() => setIsActive("register")}
                >
                  Register
                </Dropdown.Item>
              </>
            )}
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
      {message && (
        <div className="container mt-20">
          <MainToast />
        </div>
      )}
    </>
  );
}
