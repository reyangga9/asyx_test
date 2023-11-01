"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DefaultNavbar() {
  return (
    <Navbar className="bg-gray-200" fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3208/3208723.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Todolist
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" active>
          Home
        </Link>
        <Link to="/about" href="#">
          About
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
