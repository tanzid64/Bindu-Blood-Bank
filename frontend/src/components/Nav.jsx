"use client";
import ModeToggle from "./ui/mode-toggle";
import logo from "/logo.png";
import { Dropdown, Navbar } from "flowbite-react";
import { Avatar } from "@nextui-org/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../redux/slices/authSlice";
import { setToast } from "../redux/slices/toastSlice";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const handleLogout = async () => {
    localStorage.removeItem("refreshToken");
    dispatch(logOut());
    dispatch(setToast({ message: "Logged out", type: "warning" }));

    navigate("/login");
  };
  return (
    <>
      <Navbar fluid className="fixed top-0 z-50 w-full">
        <Navbar.Brand as={Link} to="/">
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
                <Dropdown.Item as={Link} to="/dashboard">
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin">
                  Admin Dashboard
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={`/profile/${user.username}`}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={`/profile/setting/${user.username}`}>
                  Setting
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/register">
                  Register
                </Dropdown.Item>
              </>
            )}
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" active={location.pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/donors"
            active={location.pathname === "/donors"}
          >
            Donors
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/about"
            active={location.pathname === "/about"}
          >
            About
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/documentation"
            active={location.pathname === "/documentation"}
          >
            Documentation
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
