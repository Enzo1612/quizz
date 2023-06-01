import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to="/">
        <AiFillHome className="homeIcon" />
      </Link>
    </div>
  );
}

export default Navbar;
