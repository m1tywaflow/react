import React from "react";
import logo from "../assets/netflix.png";
import line from "../assets/vector.png";
import date from "../assets/friday.png";
import searchIcon from "../assets/search.png";
import avatar from "../assets/avatar.png"
import "../App.css"

const Header = () => {
  return( 
    
    <header>
    <div className="container1">
    <div className="netflix">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="line">
        <img src={line} alt="line" />
      </div>

      <div className="date">
        <img src={date} alt="date" />
      </div>
    </div>
    <div className="right-side">
      <button className="search-butt">
        <img src={searchIcon} alt="search" />
      </button>
      <div className="ava">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  </div>
  </header>
 
)
};

export default Header;
