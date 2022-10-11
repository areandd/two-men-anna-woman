import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="header">
      <div>filler for now!</div>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search popular stocks"
        />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option ">
          <span className="header__optionLineOne">Welcome</span>
          <span className="header__optionLineTwo">Sign up</span>
        </div>

        <div className="header__option ">
          <span className="header__optionLineOne">My</span>
          <span className="header__optionLineTwo">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
