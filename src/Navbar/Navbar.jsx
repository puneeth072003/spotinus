import React from "react";
import { Navlinks } from "./navlinks";
import "./navbar.css";
import { Navbtn } from "./Navbtn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src=".\src\assets\Spotinus.svg" alt="logo" className="nav-logo" />
        <h1 className="title">spotinus</h1>
        <Navlinks />
        <Navbtn />
      </div>
    </nav>
  );
};

export { Navbar };
