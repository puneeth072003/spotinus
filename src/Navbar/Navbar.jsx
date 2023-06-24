import React from "react";
import { Navlinks } from "./navlinks";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src=".\src\assets\Spotinus.png" alt="logo" className="nav-logo" />
        <h1 className="title">spotinus</h1>
        <Navlinks />
      </div>
    </nav>
  );
};

export { Navbar };
