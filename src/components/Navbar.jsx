import React from "react";
import "./Navbar.css";
import iii from "../assets/iiii.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <span className="nav-item">English</span>
        <span className="nav-item">GK</span>
      </div>
      <div className="nav-profile">
        <Link to="/">
          {" "}
          <img src={iii} alt="Profile" className="profile-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
